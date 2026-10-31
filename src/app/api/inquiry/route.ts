import { NextResponse } from "next/server";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const labels: Record<string, string> = {
  rfp: "RFP / tender",
  proposal: "Engineering proposal request",
  quote: "Quote request",
  technical: "Technical enquiry",
};

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Inquiry email is not configured (RESEND_API_KEY / INQUIRY_TO_EMAIL / INQUIRY_FROM_EMAIL).");
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

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Website] ${type} from ${company}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Could not send your inquiry. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
