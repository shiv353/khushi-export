import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Spices, Grains & Pulses",
  description:
    "Explore Khushi Exim’s Indian spices, grains and pulses for export. Browse whole spices, rice, millets and pulses, then enquire about specifications and supply.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Indian Spices, Grains & Pulses | Khushi Exim",
    description:
      "Browse spices, grains and pulses from Khushi Exim, an Indian export business based in Unjha, Gujarat.",
    url: "/products",
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
