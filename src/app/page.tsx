import { Navbar } from "@/components/Navbar";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { AboutSection, CertificationSection, ContactIntro, Footer, GrowthSection, HeroSection, MarketAreaSection, ProductSection, WhyChooseUs } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <ProductSection />
        <GrowthSection />
        <CertificationSection />
        <MarketAreaSection />
        <section id="inquiry" className="bg-cream py-20 md:py-28">
          <Reveal className="section-wrap grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <ContactIntro />
            <InquiryForm />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
