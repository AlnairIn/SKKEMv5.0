"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

const types = [
  { value: "rfp", label: "Submit an RFP / tender" },
  { value: "proposal", label: "Request an engineering proposal" },
  { value: "quote", label: "Request a quote" },
  { value: "technical", label: "Technical enquiry" },
];

export default function InquiryForm({
  defaultService = "",
  defaultType = "rfp",
  defaultMessage = "",
}: {
  defaultService?: string;
  defaultType?: string;
  defaultMessage?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-brand-100 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto text-brand-600" size={36} aria-hidden />
        <h3 className="mt-3 text-lg font-semibold text-navy-800">Request received</h3>
        <p className="mt-1 text-sm text-slate-700">Our team will reply to your email shortly.</p>
      </div>
    );
  }

  const typeValue = types.some((t) => t.value === defaultType) ? defaultType : "rfp";
  const serviceValue = services.some((s) => s.name === defaultService) ? defaultService : "";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {/* honeypot field for basic bot filtering */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <label className="text-sm font-medium text-slate-700">
        Full name
        <input name="name" required className="input mt-1" autoComplete="name" />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Company
        <input name="company" required className="input mt-1" autoComplete="organization" />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Work email
        <input name="email" type="email" required className="input mt-1" autoComplete="email" />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Phone / WhatsApp
        <input name="phone" type="tel" className="input mt-1" autoComplete="tel" />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Request type
        <select name="type" className="input mt-1" defaultValue={typeValue}>
          {types.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-700">
        Service
        <select name="service" className="input mt-1" defaultValue={serviceValue}>
          <option value="">Not sure / multiple services</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-700 sm:col-span-2">
        Site location &amp; timeline
        <input name="site" className="input mt-1" placeholder="e.g. Jubail Industrial City, shutdown in Q1" />
      </label>
      <label className="text-sm font-medium text-slate-700 sm:col-span-2">
        Scope of work
        <textarea name="message" rows={4} required defaultValue={defaultMessage} className="input mt-1" />
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 sm:col-span-2">
          {error}
        </p>
      )}
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" && <Loader2 className="animate-spin" size={16} aria-hidden />}
          Send request
        </button>
      </div>
    </form>
  );
}
