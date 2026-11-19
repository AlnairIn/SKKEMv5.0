import { NextResponse } from "next/server";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const labels: Record<string, string> = {
  rfp: "RFP / tender",
  demo: "Demo request",
  proposal: "Engineering proposal request",
  quote: "Quote request",
  technical: "Technical enquiry",
};

// ---- Email delivery -------------------------------------------------------------------------
// Microsoft 365 (Microsoft Graph, recommended): MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET
// Resend (alternative):                          RESEND_API_KEY
// Both:                                          INQUIRY_TO_EMAIL (inbox), INQUIRY_FROM_EMAIL (sender mailbox/address)
// If the Microsoft 365 variables are set they are used; otherwise Resend is used.

let cachedToken: { value: string; expires: number } | null = null;

async function graphToken(tenant: string, id: string, secret: string): Promise<string> {
  if (cachedToken && cachedToken.expires > Date.now() + 60_000) return cachedToken.value;
  const res = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: id,
      client_secret: secret,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });
  if (!res.ok) throw new Error(`Microsoft token request failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { value: data.access_token, expires: Date.now() + data.expires_in * 1000 };
  return data.access_token;
}

interface Mail {
  from: string;
  to: string;
  replyTo: string;
  replyToName: string;
  subject: string;
  html: string;
}

async function sendViaGraph(m: Mail, tenant: string, id: string, secret: string) {
  const token = await graphToken(tenant, id, secret);
  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(m.from)}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject: m.subject,
        body: { contentType: "HTML", content: m.html },
        toRecipients: [{ emailAddress: { address: m.to } }],
        replyTo: [{ emailAddress: { address: m.replyTo, name: m.replyToName } }],
      },
      saveToSentItems: false,
    }),
  });
  if (!res.ok) throw new Error(`Microsoft Graph sendMail failed: ${res.status} ${await res.text()}`);
}

async function sendViaResend(m: Mail, apiKey: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: m.from, to: [m.to], reply_to: m.replyTo, subject: m.subject, html: m.html }),
  });
  if (!res.ok) throw new Error(`Resend failed: ${res.status} ${await res.text()}`);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const get = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim().slice(0, 4000) : "");
  const name = get("name");
  const company = get("company");
  const email = get("email");
  const message = get("message");

  if (!name || !company || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please complete all required fields with a valid email." }, { status: 400 });
  }

  const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, RESEND_API_KEY } = process.env;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const useGraph = Boolean(MS_TENANT_ID && MS_CLIENT_ID && MS_CLIENT_SECRET);
  if (!to || !from || !(useGraph || RESEND_API_KEY)) {
    console.error(
      "Inquiry email is not configured: set INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL and either MS_TENANT_ID / MS_CLIENT_ID / MS_CLIENT_SECRET or RESEND_API_KEY.",
    );
    return NextResponse.json({ error: "Inquiry service is not configured yet. Please email us directly." }, { status: 503 });
  }

  const type = labels[get("type")] ?? "Inquiry";
  const rows: [string, string][] = [
    ["Type", type],
    ["Name", name],
    ["Company", company],
    ["Email", email],
    ["Phone", get("phone")],
    ["Service", get("service")],
    ["Site / timeline", get("site")],
    ["Message", message],
  ];
  const html = `<table cellpadding="6">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  const mail: Mail = {
    from,
    to,
    replyTo: email,
    replyToName: name,
    subject: `[Website] ${type} from ${company}`,
    html,
  };

  try {
    if (useGraph) await sendViaGraph(mail, MS_TENANT_ID!, MS_CLIENT_ID!, MS_CLIENT_SECRET!);
    else await sendViaResend(mail, RESEND_API_KEY!);
  } catch (err) {
    console.error("Inquiry email failed:", err);
    return NextResponse.json({ error: "Could not send your inquiry. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
