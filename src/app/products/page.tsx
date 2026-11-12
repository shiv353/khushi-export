import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/sections";
import { catalogProducts } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-ivory py-14 md:py-20">
          <Reveal className="section-wrap">
            <p className="eyebrow">Our product range</p>
            <h1 className="section-title mt-3">Products from India</h1>
            <p className="section-copy max-w-2xl">
              Explore our range of spices, grains and pulses. Contact us to
              discuss product specifications, grades and availability.
            </p>
          </Reveal>
        </section>
        <section className="bg-ivory py-14 md:py-20">
          <div
            className="section-wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            data-reveal-sequence="row"
            data-reveal-columns="4"
          >
            {catalogProducts.map((product) => (
              <Reveal
                key={product.name}
                className="h-full"
                direction="left"
              >
                <article className="group h-full overflow-hidden border border-charcoal/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <Link
                    href="/#inquiry"
                    aria-label={`Ask about ${product.name}`}
                    className="block h-full"
                  >
                    <div className="relative aspect-[1.42/1] overflow-hidden bg-cream">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 640 450%22%3E%3Crect width=%22640%22 height=%22450%22 fill=%22%23fff%22/%3E%3C/svg%3E"
                      />
                      <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[.13em] text-forest">
                        {product.category}
                      </span>
                      <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-ivory text-forest transition group-hover:bg-forest group-hover:text-ivory">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <div className="p-5">
                      <h2 className="mt-1 font-display text-2xl text-forest">
                        {product.name}
                      </h2>
                      <p className="mt-2 min-h-12 text-xs leading-6 text-charcoal/65">
                        {product.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.13em] text-forest">
                        Ask about this product
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
        </section>
      </main>
      <Footer />
    </>
  );
}
