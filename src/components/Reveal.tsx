"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "up" | "left";
};

export function Reveal({
  children,
  direction = "up",
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    element.dataset.revealHidden = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealHidden = "false";
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal-direction={direction} {...props}>
      {children}
    </div>
  );
}
