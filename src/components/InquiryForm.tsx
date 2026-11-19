"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full border border-charcoal/15 bg-sage px-3.5 py-3 text-xs text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-forest focus:ring-2 focus:ring-gold/20";

export function InquiryForm({
  initialProduct = "",
  onClose,
}: {
  initialProduct?: string;
  onClose?: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (submitting || !form.reportValidity()) return;

    setError("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });

      if (!response.ok) {
        setError("We couldn't submit your inquiry. Please try again.");
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError("We couldn't reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted)
    return (
      <div
        role="status"
        className="flex min-h-[440px] flex-col items-center justify-center border border-forest/15 bg-sage px-8 py-12 text-center"
      >
        <span className="grid size-14 place-items-center rounded-full bg-forest/10 text-forest">
          <CheckCircle2 size={26} />
        </span>
        <p className="eyebrow mt-6">Inquiry received</p>
        <h3 className="mt-2 font-display text-2xl text-forest">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 max-w-sm text-xs leading-6 text-charcoal/65">
          Your inquiry has been saved. Our team will be in touch.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => (onClose ? onClose() : setSubmitted(false))}
        >
          {onClose ? "Close" : "Send another inquiry"} <ArrowRight size={14} />
        </Button>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border border-charcoal/10 bg-sage p-4 shadow-soft sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[.13em] text-charcoal/70">
            Name{" "}
            <span aria-hidden="true" className="text-terracotta">
              *
            </span>
          </span>
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[.13em] text-charcoal/70">
            Company name{" "}
            <span aria-hidden="true" className="text-terracotta">
              *
            </span>
          </span>
          <input
            className={fieldClass}
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[.13em] text-charcoal/70">
            Email{" "}
            <span aria-hidden="true" className="text-terracotta">
              *
            </span>
          </span>
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[.13em] text-charcoal/70">
            Contact number
          </span>
          <input
            className={fieldClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Include country code"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[.13em] text-charcoal/70">
            Country{" "}
            <span aria-hidden="true" className="text-terracotta">
              *
            </span>
          </span>
          <input
            className={fieldClass}
            name="country"
            autoComplete="country-name"
            placeholder="Your country"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[.13em] text-charcoal/70">
            Product requirements
          </span>
          <input
            className={fieldClass}
            name="products"
            placeholder="e.g. turmeric, cumin"
            defaultValue={initialProduct}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[.13em] text-charcoal/70">
          Message
        </span>
        <textarea
          className={`${fieldClass} min-h-28 resize-y`}
          name="message"
          placeholder="Tell us what you are looking for…"
        />
      </label>
      <div className="flex flex-col items-start justify-between gap-3 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" variant="terracotta" disabled={submitting}>
          {submitting ? "Sending..." : "Submit inquiry"} <ArrowRight size={15} />
        </Button>
        <p className="text-[9px] leading-5 text-charcoal/45">
          Required fields are marked with{" "}
          <span className="text-terracotta">*</span>. Your inquiry will be
          saved for our team to review.
        </p>
      </div>
      {error && (
        <p role="alert" className="text-xs leading-5 text-terracotta">
          {error}
        </p>
      )}
    </form>
  );
}
