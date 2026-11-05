"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useHydratedReducedMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated && prefersReducedMotion;
}
