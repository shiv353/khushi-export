"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-md">
      <div className="section-wrap flex h-[76px] items-center justify-between gap-5">
        <Link href="#home" className="flex items-center gap-3" aria-label="Khushi Export home">
          <span className="grid size-10 place-items-center rounded-full border border-gold/70 text-forest"><span className="font-display text-xl">K</span></span>
          <span className="leading-none"><span className="block font-display text-[19px] font-semibold tracking-tight text-forest">Khushi Export</span><span className="mt-1 block text-[8px] font-bold uppercase tracking-[.23em] text-charcoal/55">Indian spices · global trade</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => item.label === "Products" ? <div key={item.label} className="group relative"><Link href={item.href} className="inline-flex items-center gap-1 py-7 text-[11px] font-semibold text-charcoal/75 transition hover:text-forest">Products <ArrowDown size={12}/></Link><div className="invisible absolute left-0 top-full w-56 translate-y-2 border border-charcoal/10 bg-ivory p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">{["Whole spices", "Ground spices", "Seeds & aromatics", "Specialty spices"].map((label) => <Link key={label} href="#products" className="block px-3 py-2.5 text-xs text-charcoal/70 hover:bg-cream hover:text-forest">{label}</Link>)}</div></div> : <Link key={item.label} href={item.href} className="text-[11px] font-semibold text-charcoal/75 transition hover:text-forest">{item.label}</Link>)}
        </nav>
        <div className="hidden lg:block"><Button asChild variant="primary" size="sm"><Link href="#inquiry">Get a Quote <ArrowUpRight size={14}/></Link></Button></div>
        <button type="button" className="grid size-10 place-items-center text-forest lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav aria-label="Mobile navigation" className="border-t border-charcoal/10 bg-ivory px-5 py-3 shadow-soft lg:hidden">{navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="block border-b border-charcoal/5 py-3 text-sm font-medium text-charcoal/80 last:border-0">{item.label}</Link>)}<Button asChild variant="primary" className="mt-3 w-full"><Link href="#inquiry" onClick={() => setOpen(false)}>Get a Quote <ArrowUpRight size={14}/></Link></Button></nav>}
    </header>
  );
}
