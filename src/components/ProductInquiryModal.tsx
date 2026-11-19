"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import type { Product } from "@/data/products";

export function ProductInquiryModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal();
    }

    function closeModal() {
      setOpen(false);
      onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-forest-deep/70 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-inquiry-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl overflow-y-auto overscroll-contain bg-white shadow-[0_24px_80px_rgba(13,40,29,0.28)] sm:max-h-[calc(100vh-3rem)]">
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-charcoal/10 bg-white px-4 py-4 sm:px-7 sm:py-5">
          <div>
            <p className="eyebrow">Product inquiry</p>
            <h2 id="product-inquiry-title" className="mt-2 pr-3 font-display text-xl text-forest sm:text-2xl">
              Ask about {product.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 shrink-0 place-items-center border border-charcoal/10 text-charcoal/60 transition hover:border-forest/30 hover:text-forest"
            aria-label="Close inquiry"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-4 sm:p-7">
          <InquiryForm
            key={product.name}
            initialProduct={product.name}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
