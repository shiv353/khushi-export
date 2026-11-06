import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
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
import WorldMap from "@/components/ui/world-map";
import { exportDestinations, exportOrigin } from "@/data/export-destinations";

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
        <Reveal className="relative mx-auto w-full max-w-[510px]">
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
        </Reveal>
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
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">A considered way to work together</p>
          <h2 className="section-title mt-3">Why choose Khushi Exim?</h2>
          <p className="section-copy mx-auto">
            Built around the qualities that matter in a dependable spice
            sourcing relationship.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map(({ icon: Icon, title, copy }, i) => (
            <article
              key={title}
              className="group min-h-[235px] border border-gold/25 bg-ivory p-6 shadow-[0_12px_32px_-4px_rgba(37,40,32,0.06)] transition-all duration-200 hover:border-gold focus-within:border-gold"
            >
              <span className="grid size-11 place-items-center rounded-lg bg-cream text-forest transition-colors duration-200 group-hover:bg-forest group-hover:text-ivory group-focus-within:bg-forest group-focus-within:text-ivory">
                <Icon size={20} strokeWidth={1.5} />
              </span>
              {/* <p className="mt-6 text-[9px] font-bold uppercase tracking-label text-terracotta">
                0{i + 1} / Partnership
              </p> */}
              <h3 className="mt-2 font-display text-xl text-forest">{title}</h3>
              <p className="mt-3 text-xs leading-6 text-charcoal/65">{copy}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function ProductSection() {
  return (
    <section id="products" className="bg-ivory py-20 md:py-28">
      <div className="section-wrap">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
        </Reveal>
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
        <div
          className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-reveal-sequence="row"
          data-reveal-columns="3"
        >
          {products.map((product) => (
            <Reveal
              key={product.name}
              className="h-full"
              direction="left"
            >
              <article className="group h-full overflow-hidden border border-charcoal/10 bg-[#FBF9F3] transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <Link
                  href="/products"
                  aria-label={`Explore ${product.name}`}
                  className="block h-full"
                >
                  <div className="relative aspect-[1.42/1] overflow-hidden bg-cream">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[.13em] text-forest">
                      {product.category}
                    </span>
                    <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-ivory text-forest transition group-hover:bg-forest group-hover:text-ivory">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div className="p-5">
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
            </Reveal>
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
      <Reveal className="section-wrap relative">
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
      </Reveal>
    </section>
  );
}

export function CertificationSection() {
  return (
    <section id="certifications" className="bg-cream py-20 md:py-24">
      <div className="section-wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Documents & business credentials</p>
          <h2 className="section-title mt-3">
            Certifications & business credentials
          </h2>
          <p className="section-copy mx-auto">
            We believe in sharing clear, accurate information as our business
            credentials are prepared.
          </p>
        </Reveal>
        <Reveal className="mx-auto mt-10 grid max-w-5xl grid-cols-3 items-start gap-x-5 gap-y-8 sm:grid-cols-6 sm:gap-x-8">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="relative h-16 w-full max-w-[140px]">
                <Image
                  src="/images/fssi-logo.png"
                  alt="FSSAI logo used as a placeholder"
                  fill
                  sizes="(max-width: 640px) 25vw, 140px"
                  className="object-contain"
                />
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[.12em] text-charcoal/55">
                Placeholder
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function MarketAreaSection() {
  const dots = exportDestinations.map((destination) => ({
    start: {
      lat: exportOrigin.lat,
      lng: exportOrigin.lng,
      label: exportOrigin.country,
      detail: exportOrigin.city,
    },
    end: {
      lat: destination.lat,
      lng: destination.lng,
      label: destination.country,
      detail: destination.city,
    },
  }));

  return (
    <section id="markets" className="bg-ivory py-20 md:py-28">
      <div className="section-wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">
            From India, with care
          </p>
          <h2 className="section-title mt-3">
            Our Global Reach
          </h2>
          <p className="section-copy mx-auto max-w-2xl">
            From the heart of India to markets around the world, we deliver quality spices with consistency, trust, and care.
          </p>
        </Reveal>
        <Reveal className="mt-9 border-y border-charcoal/10 py-5 sm:mt-12 sm:py-8">
          <WorldMap dots={dots} lineColor="#B66B45" backgroundColor="#F8F5ED" />
        </Reveal>
        {/* <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-semibold text-charcoal/65">
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-forest" />
            Origin · India
          </span>
          <span>Hover, focus or tap a map marker to explore locations.</span>
        </div> */}
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
      <div className="section-wrap grid grid-cols-2 gap-10 py-14 lg:grid-cols-[1.5fr_.8fr_.9fr_1fr] lg:gap-12">
        <div className="col-span-2 lg:col-span-1">
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
        <div className="col-span-2 lg:col-span-1">
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
