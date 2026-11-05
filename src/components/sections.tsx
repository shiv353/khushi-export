import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  ChevronRight,
  CircleCheck,
  Globe2,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  MoveRight,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Sprout,
  Wheat,
} from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";

const advantages = [
  {
    icon: Leaf,
    title: "Quality-Focused Sourcing",
    copy: "A thoughtful approach to selecting spices and working with sourcing partners.",
  },
  {
    icon: Boxes,
    title: "A Diverse Product Range",
    copy: "Whole and ground spices across familiar staples and aromatic specialties.",
  },
  {
    icon: PackageCheck,
    title: "Flexible Supply Solutions",
    copy: "Conversations shaped around your product, packaging and business requirements.",
  },
  {
    icon: Handshake,
    title: "Partnerships That Last",
    copy: "Clear communication and a long-term outlook at every step of the relationship.",
  },
];

const priorities = [
  {
    icon: Sprout,
    number: "01",
    title: "Strengthening Sourcing Partnerships",
    copy: "Build meaningful relationships with spice-growing communities and sourcing partners across India.",
  },
  {
    icon: Boxes,
    number: "02",
    title: "Expanding Our Product Portfolio",
    copy: "Continue exploring the breadth of whole, ground and specialty Indian spices buyers need.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Enhancing Quality Processes",
    copy: "Develop clear, consistent ways to review product requirements and quality expectations.",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Growing Global Relationships",
    copy: "Connect with importers, distributors and manufacturers in markets around the world.",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-forest-deep text-ivory md:min-h-[690px]"
    >
      <Image
        src="/images/hero.jpg"
        alt="An arrangement of richly colored Indian spices"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/85 to-forest-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-forest-deep/15" />
      <div className="section-wrap relative z-10 w-full py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#D2BB83]">
            <span className="h-px w-9 bg-gold" /> {company.name} · India
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.06] tracking-tight text-ivory sm:text-6xl md:text-7xl">
            The richness of Indian spices.
            <br />
            <em className="font-normal text-[#D9C89E]">
              Delivered to the world.
            </em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-ivory/75 md:text-base">
            Discover authentic Indian spices, thoughtfully sourced for
            businesses across the globe. Your trusted partner for quality spices
            and lasting business relationships.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="light">
              <Link href="#products">
                Explore Our Products <ArrowRight size={15} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-ivory/50 text-ivory hover:bg-ivory/10"
            >
              <Link href="#inquiry">
                Join With Us <ArrowUpRight size={15} />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-5 border-t border-ivory/20 pt-5 sm:grid-cols-4">
          {[
            "Thoughtful sourcing",
            "Whole & ground spices",
            "Flexible conversations",
            "Global outlook",
          ].map((label, i) => (
            <div
              key={label}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[.12em] text-ivory/70"
            >
              <span className="font-display text-sm italic text-gold">
                0{i + 1}
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
      <span className="absolute bottom-7 right-8 hidden text-[9px] uppercase tracking-[.2em] text-ivory/50 md:block">
        Indian Spices · Global Partnerships
      </span>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-ivory py-20 md:py-28">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[510px] reveal-up">
          <div className="relative overflow-hidden rounded-xl border border-gold/40 bg-cream p-2 shadow-soft">
            <div className="relative aspect-[4/4.7] overflow-hidden rounded-lg">
            <Image
              src="/images/about.jpg"
              alt="Hands sorting spices at a woven work surface"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover"
            />
              <div className="absolute inset-x-4 bottom-4 border border-gold/40 bg-forest-deep/95 px-4 py-3 text-ivory shadow-soft backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <span className="block font-display text-lg italic">
                  Rooted in India
                </span>
                <span className="mt-1 block text-[8px] uppercase tracking-[.18em] text-ivory/65">
                  Inspired by a rich spice heritage
                </span>
              </div>
            </div>
          </div>
        </div>
        <Reveal className="pt-3 lg:pl-3">
          <p className="eyebrow">A new chapter in a storied tradition</p>
          <h2 className="section-title mt-4 max-w-2xl">
            Khushi Exim — bringing India’s finest spices, grains & pulses to the world.
          </h2>
          <p className="section-copy">
            Khushi Exim is an Indian export business inspired by the country’s
            rich agricultural and culinary heritage. We connect international
            businesses with spices, grains and pulses through quality-focused
            sourcing and meaningful partnerships.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/65">
            We welcome conversations with importers, distributors, wholesalers,
            food manufacturers and private-label buyers looking for an Indian
            partner for spices, grains and pulses.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Spices, grains and pulses",
              "An international business outlook",
              "Flexible buyer conversations",
              "Partnership-led approach",
            ].map((x) => (
              <div
                key={x}
                className="flex items-start gap-2 text-xs text-charcoal/75"
              >
                <CircleCheck
                  size={15}
                  className="mt-0.5 shrink-0 text-terracotta"
                />
                {x}
              </div>
            ))}
          </div>
          <Button asChild variant="link" className="mt-6">
            <Link href="#inquiry">
              Read More <ArrowRight size={15} />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="border-y border-charcoal/5 bg-cream py-20 md:py-24">
      <div className="section-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">A considered way to work together</p>
          <h2 className="section-title mt-3">Why choose Khushi Exim?</h2>
          <p className="section-copy mx-auto">
            Built around the qualities that matter in a dependable spice
            sourcing relationship.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map(({ icon: Icon, title, copy }, i) => (
            <article
              key={title}
              className="group min-h-[235px] border border-gold/25 bg-ivory p-6 shadow-[0_12px_32px_-4px_rgba(37,40,32,0.06)] transition-all duration-200 hover:border-gold focus-within:border-gold"
            >
              <span className="grid size-11 place-items-center rounded-lg bg-cream text-forest transition-colors duration-200 group-hover:bg-forest group-hover:text-ivory group-focus-within:bg-forest group-focus-within:text-ivory">
                <Icon size={20} strokeWidth={1.5} />
              </span>
              <p className="mt-6 text-[9px] font-bold uppercase tracking-label text-terracotta">
                0{i + 1} / Partnership
              </p>
              <h3 className="mt-2 font-display text-xl text-forest">{title}</h3>
              <p className="mt-3 text-xs leading-6 text-charcoal/65">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductSection() {
  return (
    <section id="products" className="bg-ivory py-20 md:py-28">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">
              From everyday essentials to fragrant specialties
            </p>
            <h2 className="section-title mt-3">Explore our products</h2>
            <p className="section-copy max-w-xl">
              Explore our Indian spice selection, and contact us for current
              product details on grains and pulses.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="#inquiry">
              Ask About Our Range <ArrowUpRight size={15} />
            </Link>
          </Button>
        </div>
        {/* <div className="mt-9 flex flex-wrap gap-2">
          {[
            "Whole spices",
            "Ground spices",
            "Seeds & aromatic spices",
            "Specialty spices",
            "Grains & pulses",
          ].map((x) => (
            <span
              key={x}
              className="border border-gold/45 bg-cream/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[.1em] text-forest"
            >
              {x}
            </span>
          ))}
        </div> */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden border border-charcoal/10 bg-[#FBF9F3] transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <Link
                href="/products"
                aria-label={`Explore ${product.name}`}
                className="block"
              >
                <div className="relative aspect-[1.42/1] overflow-hidden bg-cream">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[.13em] text-forest">
                    {product.category}
                  </span>
                  <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-ivory text-forest transition group-hover:bg-forest group-hover:text-ivory">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="p-5">
                  {/* <p className="text-[9px] font-bold uppercase tracking-label text-terracotta">
                    Product {String(i + 1).padStart(2, "0")}
                  </p> */}
                  <h3 className="mt-2 font-display text-2xl text-forest">
                    {product.name}
                  </h3>
                  <p className="mt-2 min-h-12 text-xs leading-6 text-charcoal/65">
                    {product.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.13em] text-forest">
                    Explore products{" "}
                    <MoveRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        {/* <p className="mt-6 text-[10px] leading-5 text-charcoal/50">
          Product forms, grades, specifications and availability can be
          discussed to suit your requirements.
        </p> */}
      </div>
    </section>
  );
}

export function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 text-ivory md:py-24">
      <div className="absolute -right-20 -top-28 size-96 rounded-full border border-gold/10" />
      <div className="absolute -right-10 -top-16 size-72 rounded-full border border-gold/10" />
      <div className="section-wrap relative">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-label text-[#D2BB83]">
            Our aim
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            A thoughtful vision for growth.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ivory/65">
            As a new brand, we are building toward a future grounded in stronger
            partnerships, thoughtful processes and meaningful global
            connections.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {priorities.map(({ icon: Icon, number, title, copy }) => (
            <article
              key={number}
              className="flex min-h-[260px] flex-col justify-between rounded-lg border border-gold/25 bg-forest/40 p-6 transition-colors duration-200 hover:border-gold/60 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-semibold italic text-gold/55">
                  {number}
                </span>
                <Icon size={18} className="text-gold/80" strokeWidth={1.4} />
              </div>
              <div className="mt-7">
                <h3 className="font-display text-xl leading-snug">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-ivory/65">{copy}</p>
              </div>
              <span className="mt-6 block h-px w-9 bg-gold/70" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationSection() {
  return (
    <section id="certifications" className="bg-cream py-20 md:py-24">
      <div className="section-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Documents & business credentials</p>
          <h2 className="section-title mt-3">
            Certifications & business credentials
          </h2>
          <p className="section-copy mx-auto">
            We believe in sharing clear, accurate information as our business
            credentials are prepared.
          </p>
        </div>
        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-5 border border-charcoal/10 bg-ivory px-6 py-9 text-center sm:flex-row sm:px-10 sm:text-left">
          <span className="grid size-14 shrink-0 place-items-center rounded-full border border-gold/60 text-forest">
            <BadgeCheck size={23} strokeWidth={1.4} />
          </span>
          <div>
            <h3 className="font-display text-xl text-forest">
              Company documents will appear here
            </h3>
            <p className="mt-2 max-w-2xl text-xs leading-6 text-charcoal/65">
              No certificates or registration documents have been provided for
              display yet. This section is ready to be updated when verified
              documents are available.
            </p>
          </div>
          <span className="sm:ml-auto sm:whitespace-nowrap">
            <span className="inline-flex items-center gap-2 border border-gold/50 px-3 py-2 text-[8px] font-bold uppercase tracking-[.14em] text-charcoal/60">
              <span className="size-1.5 rounded-full bg-terracotta" /> Documents
              pending
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

const regions = [
  "Europe",
  "North America",
  "Middle East",
  "Asia-Pacific",
  "Africa",
];

export function MarketAreaSection() {
  return (
    <section id="markets" className="bg-ivory py-20 md:py-28">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">From India, with a global outlook</p>
            <h2 className="section-title mt-3">
              Connecting Indian spices with global markets.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-charcoal/65">
            India is our sourcing origin. Europe, North America, the Middle
            East, Asia-Pacific and Africa are intended markets for future
            business conversations.
          </p>
        </div>
        <div className="mt-10 overflow-hidden border border-gold/20 bg-forest-deep p-5 text-ivory shadow-soft sm:p-9">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-label text-[#D9C89E]">
              <Globe2 size={14} /> Intended markets · illustrative
            </span>
            <span className="text-[9px] uppercase tracking-[.14em] text-ivory/45">
              Sourcing origin · India
            </span>
          </div>
          <div className="relative mx-auto aspect-[1.8/1] max-w-5xl">
            <svg
              viewBox="0 0 1000 500"
              role="img"
              aria-label="Illustrative world map showing India as sourcing origin and intended regions"
              className="h-full w-full"
            >
              <defs>
                <pattern
                  id="dots"
                  width="7"
                  height="7"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="1.2"
                    cy="1.2"
                    r="1"
                    fill="#B69A61"
                    opacity=".62"
                  />
                </pattern>
              </defs>
              <g
                fill="url(#dots)"
                stroke="#B69A61"
                strokeOpacity=".26"
                strokeWidth="1"
              >
                <path d="M92 118 127 82 176 76 196 91 225 89 249 110 242 132 260 145 244 163 216 161 207 181 183 181 169 198 143 192 128 176 102 169 87 147Z" />
                <path d="m249 205 29 13 19 33-7 40 16 33-13 45-16 42-18 28-14-27 1-38-16-37 4-40-14-30 9-38Z" />
                <path d="m424 111 31-27 56 2 25 15 47-4 24 19 39-8 44 17 49-1 28 23-21 19-44-8-21 18-38-5-28 19-31-6-22 20-28-8-13-22-38-5-23-21-33 4-22-19-34-2-20-21Z" />
                <path d="m471 210 38-9 40 12 25 28 8 42-18 35-18 38-25 39-18-12-10-38-24-22-13-41-20-26 8-28Z" />
                <path d="m649 290 33-21 55 4 36 18 25 32-11 30-31 13-33-10-20 18-31-17-13-28-28-10Z" />
                <path d="m770 392 47-17 54 5 40 19-17 20-64 6-49-11Z" />
                <path d="m826 183 36-13 40 14 13 28-30 20-40-9-23-18Z" />
                <path d="m544 181 19 1 12 18-15 11-18-10Z" />
              </g>
              <g
                fill="none"
                stroke="#D9C89E"
                strokeWidth="1.4"
                strokeDasharray="5 7"
                opacity=".72"
              >
                <path d="M562 226Q405 121 184 133" />
                <path d="M562 226Q411 185 293 282" />
                <path d="M562 226Q626 141 729 172" />
                <path d="M562 226Q687 237 727 313" />
                <path d="M562 226Q531 300 527 347" />
              </g>
              <g fill="#D9C89E">
                <circle cx="562" cy="226" r="5" />
                <circle cx="184" cy="133" r="4" />
                <circle cx="293" cy="282" r="4" />
                <circle cx="729" cy="172" r="4" />
                <circle cx="727" cy="313" r="4" />
                <circle cx="527" cy="347" r="4" />
              </g>
              <g
                fill="#F8F5ED"
                fontFamily="Arial,sans-serif"
                fontSize="14"
                letterSpacing="1"
              >
                <text x="577" y="220">
                  INDIA
                </text>
                <text x="121" y="121">
                  N. AMERICA
                </text>
                <text x="241" y="306">
                  S. AMERICA
                </text>
                <text x="691" y="151">
                  EUROPE
                </text>
                <text x="687" y="342">
                  ASIA-PACIFIC
                </text>
                <text x="493" y="375">
                  AFRICA
                </text>
                <text x="546" y="202" fontSize="10" fill="#D9C89E">
                  ORIGIN
                </text>
              </g>
            </svg>
          </div>
          <div className="flex flex-wrap justify-center gap-2 border-t border-ivory/15 pt-5">
            {regions.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-2 border border-gold/25 px-3 py-2 text-[9px] uppercase tracking-[.1em] text-ivory/70"
              >
                <span className="size-1.5 rounded-full bg-gold" />
                {region}
              </span>
            ))}
          </div>
          <p className="mt-4 text-center text-[9px] leading-5 text-ivory/45">
            Illustrative target markets only. The map does not represent current
            export destinations, customers or offices.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactIntro() {
  return (
    <div className="mb-7">
      <p className="eyebrow">Start a conversation</p>
      <h2 className="section-title mt-3">
        Looking for a reliable Indian export partner?
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-7 text-charcoal/65">
        Tell us a little about your business and product requirements. We’ll use
        this preview form to confirm your details on screen.
      </p>
      <div className="mt-7 space-y-3">
        {[
          {
            icon: BriefcaseBusiness,
            text: "For importers, wholesalers & distributors",
          },
          { icon: Wheat, text: "Spices, grains & pulses" },
          { icon: Route, text: "Flexible conversations for global buyers" },
        ].map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 border-b border-charcoal/10 py-3 text-xs text-charcoal/70"
          >
            <Icon size={16} className="text-terracotta" />
            {text}
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2 border-l-2 border-gold pl-4 text-[10px] leading-5 text-charcoal/65">
        <a href={company.phones[0].href} className="flex items-start gap-2 hover:text-forest">
          <Phone size={13} className="mt-0.5 shrink-0 text-forest" />
          {company.phones.map((phone) => phone.label).join(" · ")}
        </a>
        <a href={company.emailHref} className="flex items-start gap-2 break-all hover:text-forest">
          <Mail size={13} className="mt-0.5 shrink-0 text-forest" /> {company.email}
        </a>
        <p className="flex items-start gap-2">
          <MapPin size={13} className="mt-0.5 shrink-0 text-forest" />
          <span>{company.address.join(" ")}</span>
        </p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-forest-deep text-ivory">
      <div className="section-wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_.8fr_.9fr_1fr] lg:gap-12">
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <span className="relative size-11 shrink-0">
              <Image src="/images/khushi-exim-mark.png" alt="" fill sizes="44px" className="object-contain" />
            </span>
            <span className="leading-tight"><span className="block font-display text-xl">{company.name}</span><span className="mt-1 block text-[8px] font-bold uppercase tracking-[.16em] text-gold">{company.tagline}</span></span>
          </Link>
          <p className="mt-4 max-w-xs text-xs leading-6 text-ivory/60">
            An Indian export business connecting buyers with spices, grains and
            pulses from India.
          </p>
          <p className="mt-5 text-[9px] font-bold uppercase tracking-[.18em] text-gold">
            Spices, grains &amp; pulses.
          </p>
        </div>
        <div>
          <h3 className="text-[9px] font-bold uppercase tracking-label text-gold">
            Quick links
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              ["Home", "/#home"],
              ["About us", "/#about"],
              ["Products", "/products"],
              ["Certifications", "/#certifications"],
              ["Contact", "/#inquiry"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-xs text-ivory/65 transition hover:text-ivory"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[9px] font-bold uppercase tracking-label text-gold">
            Product range
          </h3>
          <ul className="mt-4 space-y-3">
            {products.slice(0, 5).map((p) => (
              <li key={p.name}>
                <Link
                  href="/products"
                  className="text-xs text-ivory/65 transition hover:text-ivory"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[9px] font-bold uppercase tracking-label text-gold">
            Get in touch
          </h3>
          <div className="mt-4 space-y-3 text-xs leading-5 text-ivory/70">
            {company.phones.map((phone) => (
              <a key={phone.label} href={phone.href} className="flex items-center gap-2 transition hover:text-ivory">
                <Phone size={13} className="shrink-0 text-gold" /> {phone.label}
              </a>
            ))}
            <a href={company.emailHref} className="flex items-start gap-2 break-all transition hover:text-ivory">
              <Mail size={13} className="mt-0.5 shrink-0 text-gold" /> {company.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={13} className="mt-0.5 shrink-0 text-gold" />
              <span>{company.address.map((line) => <span key={line} className="block">{line}</span>)}</span>
            </p>
          </div>
          <Link
            href="#inquiry"
            className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.13em] text-ivory"
          >
            Send an inquiry <ChevronRight size={14} />
          </Link>
        </div>
      </div>
      <div className="border-t border-ivory/15">
        <div className="section-wrap flex flex-col justify-between gap-3 py-5 text-[9px] text-ivory/45 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <Link
            href="#home"
            className="uppercase tracking-[.13em] transition hover:text-ivory"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
