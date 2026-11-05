"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";

type RevealProps = ComponentProps<typeof motion.div>;

export function Reveal({ children, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();
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
