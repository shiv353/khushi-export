"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-md">
      <div className="section-wrap flex h-[76px] items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${company.name} home`}
        >
          <span className="relative size-11 shrink-0">
            <Image
              src="/images/khushi-exim-logo.png"
              alt=""
              fill
              sizes="44px"
              className="object-contain"
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[19px] font-semibold tracking-tight text-forest">
              {company.name}
            </span>
            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[.18em] text-charcoal/65">
              {company.tagline}
            </span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) =>
              item.label !== "Contact" ? (
              <Link
                key={item.label}
                href={item.href.startsWith("/") ? item.href : `/${item.href}`}
                aria-current={(pathname === "/products" && item.label === "Products") || (pathname === "/about" && item.label === "About Us") || (pathname === "/certificate" && item.label === "Certification") || (pathname === "/" && item.label === "Home") ? "page" : undefined}
                className={`nav-underline text-[11px] font-semibold transition-colors hover:text-forest ${(pathname === "/products" && item.label === "Products") || (pathname === "/about" && item.label === "About Us") || (pathname === "/certificate" && item.label === "Certification") || (pathname === "/" && item.label === "Home") ? "is-active text-forest" : "text-charcoal/75"}`}
              >
                {item.label}
              </Link>
              ) : (
              <Link
                key={item.label}
                href={item.href.startsWith("/") ? item.href : `/${item.href}`}
                className="text-[11px] font-semibold text-charcoal/75 transition-colors hover:text-forest"
              >
                {item.label}
              </Link>
              )
          )}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="primary" size="sm">
            <Link href={pathname === "/" ? "#inquiry" : "/#inquiry"}>
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </Button>
        </div>
        <button
          type="button"
          className="grid size-10 place-items-center text-forest lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-charcoal/10 bg-ivory px-5 py-3 shadow-soft lg:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href.startsWith("/") ? item.href : `/${item.href}`}
              onClick={() => setOpen(false)}
              className="block border-b border-charcoal/5 py-3 text-sm font-medium text-charcoal/80 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="primary" className="mt-3 w-full">
            <Link href={pathname === "/" ? "#inquiry" : "/#inquiry"} onClick={() => setOpen(false)}>
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
