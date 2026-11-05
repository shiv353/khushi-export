"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full border border-charcoal/15 bg-[#FBF9F3] px-3.5 py-3 text-xs text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-forest focus:ring-2 focus:ring-gold/20";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted)
    return (
      <div
        role="status"
        className="flex min-h-[440px] flex-col items-center justify-center border border-forest/15 bg-[#FBF9F3] px-8 py-12 text-center"
      >
        <span className="grid size-14 place-items-center rounded-full bg-forest/10 text-forest">
          <CheckCircle2 size={26} />
        </span>
        <p className="eyebrow mt-6">Details received in this preview</p>
        <h3 className="mt-2 font-display text-2xl text-forest">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 max-w-sm text-xs leading-6 text-charcoal/65">
          Your form was validated successfully. This demo does not send email or
          store your inquiry.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Send another inquiry <ArrowRight size={14} />
        </Button>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border border-charcoal/10 bg-[#FBF9F3] p-5 shadow-soft sm:p-7"
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
        <Button type="submit" variant="terracotta">
          Submit inquiry <ArrowRight size={15} />
        </Button>
        <p className="text-[9px] leading-5 text-charcoal/45">
          Required fields are marked with{" "}
          <span className="text-terracotta">*</span>. This preview does not send
          your details.
        </p>
      </div>
    </form>
  );
}
