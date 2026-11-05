"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";

type RevealProps = ComponentProps<typeof motion.div>;

export function Reveal({ children, ...props }: RevealProps) {
  const reducedMotion = useHydratedReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
