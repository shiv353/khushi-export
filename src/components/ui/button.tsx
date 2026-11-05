import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-[11px] font-bold uppercase tracking-[.13em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      primary: "bg-forest px-6 py-4 text-ivory hover:bg-forest-deep",
      terracotta: "bg-terracotta px-6 py-4 text-white hover:bg-[#985233]",
      outline: "border border-gold/60 px-6 py-4 text-forest hover:bg-gold/10",
      light: "bg-ivory px-6 py-4 text-forest hover:bg-white",
      link: "px-0 py-1 text-forest underline-offset-4 hover:underline",
    },
    size: { default: "", sm: "px-4 py-3 text-[10px]", icon: "size-10 p-0" },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
