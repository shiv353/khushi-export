import { AboutSection, Footer } from "@/components/sections";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Compass, Handshake, Leaf, MessageCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-forest-deep py-14 text-center text-ivory md:py-20">
          <div className="section-wrap">
            <p className="eyebrow">About Khushi Exim</p>
            <h1 className="mx-auto mt-3 max-w-4xl font-display text-4xl leading-tight tracking-tight text-ivory md:text-6xl">Rooted in India. <span className="italic text-gold">Connected to the world.</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ivory/70 md:text-base">A Gujarat-based export partner bringing care, clarity and a sense of place to every conversation.</p>
          </div>
        </section>
        <section className="bg-ivory py-16 md:py-24">
          <div className="section-wrap">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">What guides us</p>
              <h2 className="section-title mt-3">Good trade grows from good values</h2>
            </Reveal>
            <div className="mt-10 grid border-y border-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Compass, "Quality with care", "Thoughtful attention to product details and buyer requirements, from the first conversation."],
                [Handshake, "Trust built together", "Clear communication and dependable follow-through are at the heart of lasting partnerships."],
                [MessageCircle, "Relationships first", "We listen, stay open to questions and work to understand what matters in your market."],
                [Leaf, "Respect for our roots", "Proudly based in Gujarat, we value the agricultural heritage and people behind Indian produce."],
              ].map(([Icon, title, copy], index) => {
                const ValueIcon = Icon as typeof Compass;
                return (
                  <Reveal key={title as string} className="group">
                    <article className={`relative h-full px-6 py-8 lg:px-7 ${index > 0 ? "border-t border-charcoal/10 sm:border-t-0 sm:border-l" : ""}`}>
                      <span className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 lg:inset-x-7" />
                      <ValueIcon size={23} strokeWidth={1.7} className="text-terracotta transition-transform duration-300 group-hover:-translate-y-1" />
                      <h3 className="mt-5 font-display text-lg font-semibold uppercase leading-snug text-forest">{title as string}</h3>
                      <p className="mt-3 text-sm leading-6 text-charcoal/65">{copy as string}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        <AboutSection standalone />
        <section className="bg-cream py-16 md:py-24">
          <div className="section-wrap">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">From enquiry to export</p>
              <h2 className="section-title mt-3">A considered journey, from first conversation onward</h2>
              <p className="section-copy mx-auto">A simple, collaborative process shaped around your requirements.</p>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["01", "Share your needs", "Tell us which products, quantities and destination market you have in mind."],
                ["02", "Find the right fit", "Discuss product availability and specifications for your requirements."],
                ["03", "Agree the details", "Review packaging, timing and other order requirements together."],
                ["04", "Move forward", "Coordinate next steps with clear, responsive communication."],
              ].map(([number, title, copy]) => (
                <Reveal key={number} className="h-full">
                  <article className="group h-full min-h-40 border border-gold/35 bg-ivory p-6 transition-colors duration-200 hover:border-gold sm:p-7">
                    <span className="text-[10px] font-bold uppercase tracking-label text-terracotta">{number}</span>
                    <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-forest">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-charcoal/65">{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-ivory py-16 md:py-24">
          <div className="section-wrap">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">How we work</p>
              <h2 className="section-title mt-3">A thoughtful partner for every shipment</h2>
              <p className="section-copy mx-auto">Good export relationships begin with listening. We take time to understand each buyer’s market, product needs and expectations, then work through the details together.</p>
            </Reveal>
            <div className="mt-12 divide-y divide-charcoal/10 border-y border-charcoal/10 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
              {[
                ["01", "Start with your needs", "Share the products, grades, volumes and destination market you have in mind. We welcome clear questions and practical conversations."],
                ["02", "Align on the details", "Discuss specifications, availability, packaging preferences and timelines before moving ahead, so expectations are understood on both sides."],
                ["03", "Build a lasting relationship", "We value responsive communication and dependable coordination, with the goal of creating partnerships that can grow over time."],
              ].map(([number, title, copy]) => (
                <Reveal key={number} className="h-full">
                  <article className="group h-full py-7 md:px-7 md:py-8">
                    <span className="font-display text-3xl text-terracotta/75 transition-colors group-hover:text-terracotta">{number}</span>
                    <h3 className="mt-4 font-display text-2xl text-forest">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-charcoal/65">{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-cream py-16 md:py-24">
          <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Our perspective</p>
              <h2 className="section-title mt-3">Local knowledge, open to the world</h2>
            </Reveal>
            <Reveal>
              <p className="section-copy">Based in Unjha, Gujarat, Khushi Exim is connected to a region known for its agricultural trade and spice heritage. We bring that Indian perspective to conversations with buyers across markets, with care for the origins of our products and the needs of the people who source them.</p>
              <p className="mt-4 text-sm leading-7 text-charcoal/65">Whether you are exploring a first enquiry or looking to expand an existing range, we aim to make the conversation straightforward, attentive and focused on a practical fit.</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
