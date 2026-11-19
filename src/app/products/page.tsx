"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MoveRight, Search, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/sections";
import { ProductInquiryModal } from "@/components/ProductInquiryModal";
import { catalogProducts, type Product } from "@/data/products";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All products");

  const categories = ["All products", "Spices", "Pulses", "Grains"];
  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return catalogProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "All products" ||
        product.category === activeCategory;
      const matchesSearch =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-ivory py-10 md:py-12">
          <Reveal className="section-wrap">
            <p className="eyebrow">Our product range</p>
            <h1 className="section-title mt-3">Products from India</h1>
            <p className="section-copy max-w-2xl">
              Explore our range of spices, grains and pulses. Contact us to
              discuss product specifications, grades and availability.
            </p>
          </Reveal>
        </section>
        <section className="bg-ivory pb-12 pt-4 md:pb-16 md:pt-6">
          <div className="section-wrap">
            <Reveal className="mb-8 border-y border-charcoal/10 py-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative w-full lg:max-w-md">
                  <Search
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/45"
                  />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products..."
                    aria-label="Search products"
                    className="h-12 w-full border border-charcoal/15 bg-white py-3 pl-11 pr-11 text-sm text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-forest focus:ring-2 focus:ring-gold/20"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear product search"
                      className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center text-charcoal/45 hover:text-forest"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
                <div
                  className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0"
                  aria-label="Filter products by category"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={activeCategory === category}
                      className={`shrink-0 border px-4 py-2.5 text-[9px] font-bold uppercase tracking-[.13em] transition ${
                        activeCategory === category
                          ? "border-forest bg-forest text-white"
                          : "border-charcoal/15 bg-white text-charcoal/65 hover:border-forest/40 hover:text-forest"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-xs text-charcoal/50" aria-live="polite">
                Showing {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </Reveal>

            {filteredProducts.length > 0 ? (
              <div
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                data-reveal-sequence="row"
                data-reveal-columns="4"
              >
            {filteredProducts.map((product) => (
              <Reveal
                key={product.name}
                className="h-full"
                direction="left"
              >
                <article className="group h-full overflow-hidden border border-charcoal/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Ask about ${product.name}`}
                    className="block h-full w-full text-left"
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
                  </button>
                </article>
              </Reveal>
            ))}
              </div>
            ) : (
              <div className="border border-charcoal/10 bg-white px-6 py-16 text-center">
                <p className="font-display text-xl text-forest">No products found</p>
                <p className="mt-2 text-sm text-charcoal/55">
                  Try another search term or category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All products");
                  }}
                  className="mt-5 border border-forest px-5 py-3 text-[9px] font-bold uppercase tracking-[.13em] text-forest transition hover:bg-forest hover:text-white"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      {selectedProduct && (
        <ProductInquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
