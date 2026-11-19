import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections";
import { Reveal } from "@/components/Reveal";

const credentials = [
  {
    category: "Food safety",
    title: "FSSAI Central License",
    note: "Central food license • 10726997001092",
    src: "/images/fssi-logo.png",
  },
  {
    category: "Tax registration",
    title: "GST Registration",
    note: "GSTIN • 24GNEPP7690L1Z8",
    src: "/images/GST.png",
  },
  {
    category: "Export documentation",
    title: "DGFT — Importer-Exporter Code",
    note: "IEC • GNEPP7690L",
    src: "/images/DGFT.png",
  },
  {
    category: "Trade registration",
    title: "APEDA RCMC",
    note: "RCMC • RCMC/APEDA/35185/2026-2027",
    src: "/images/apeda-seeklogo.svg",
  },
  {
    category: "Spice export registration",
    title: "Spices Board India",
    note: "Registration • CRES/SBCB/29796/2026-2027",
    src: "/images/sboi.png",
  },
];

const buyerBenefits = [
  ["Clear documentation", "Know which documents are available and relevant to your enquiry."],
  ["Confident conversations", "Discuss product and destination requirements with clarity."],
  ["Support when you need it", "Ask us about the information required for your market and order."],
  ["Transparent details", "We share accurate business and compliance information as it is confirmed."],
];

export default function CertificatePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-forest-deep py-14 text-center text-ivory md:py-20">
          <div className="section-wrap">
            <p className="eyebrow !text-white/80">Documents &amp; credentials</p>
            <h1 className="mx-auto mt-3 max-w-4xl font-display text-4xl leading-tight tracking-tight text-ivory md:text-6xl">Compliance, made <span className="italic text-white/80">clear.</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ivory/70 md:text-base">We believe in clear conversations and accurate information for every buyer and market.</p>
          </div>
        </section>
        <section className="bg-ivory py-16 md:py-24">
          <div className="section-wrap">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Our credentials</p>
              <h2 className="section-title mt-3">Documents for informed partnerships</h2>
              <p className="section-copy mx-auto">We’re committed to clear, reliable trade documentation. Contact our team to discuss the business and product documents relevant to your requirements and destination market.</p>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {credentials.map(({ category, title, note, src }) => (
                <Reveal key={title} className="h-full">
                  <article className="group relative flex h-full min-h-[210px] flex-col overflow-hidden border border-gold/30 bg-white p-4 shadow-[0_8px_28px_rgba(13,40,29,0.04)] transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:bg-ivory hover:shadow-soft before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gold/60 sm:p-6 md:p-7">
                    <span className="inline-flex w-fit rounded-full border border-gold/35 bg-ivory/80 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[.13em] text-forest/70">{category}</span>
                    <div className="relative mt-7 h-20 w-full">
                      <Image src={src} alt={`${title} official logo`} fill sizes="(max-width: 640px) 70vw, 280px" className="object-contain" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-forest">{title}</h3>
                    <p className="mt-2 text-sm leading-5 text-charcoal/65">{note}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-cream py-16 md:py-24">
          <div className="section-wrap">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">For our buyers</p>
              <h2 className="section-title mt-3">What Our Certifications Mean for You</h2>
              <p className="section-copy mx-auto">Clear, relevant documentation helps buyers understand requirements and plan with confidence.</p>
            </Reveal>
            <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">
              {buyerBenefits.map(([title, copy]) => (
                <Reveal key={title} className="h-full">
                  <article className="h-full border-t border-gold/60 py-6">
                    <span className="grid size-10 place-items-center rounded-full bg-forest/5 text-forest">
                      <CheckCircle2 size={19} strokeWidth={1.6} />
                    </span>
                    <p className="mt-5 font-display text-lg font-semibold leading-snug text-forest">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-charcoal/65">{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
