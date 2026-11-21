import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { company } from "@/data/company";
import { absoluteUrl, siteMetadataBase, siteUrl } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

const siteTitle = "Indian Spices, Grains & Pulses Exporter | Khushi Exim";
const siteDescription =
  "Indian exporter of spices, grains and pulses based in Unjha, Gujarat. Explore Khushi Exim’s product range and enquire about export supply.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      url: siteUrl,
      logo: absoluteUrl("/images/khushi-exim-logo.png"),
      description: siteDescription,
      email: company.email,
      telephone: company.phones.map((phone) => phone.href.replace(/^tel:/, "")),
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.slice(0, 3).join(" "),
        addressLocality: "Unjha",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      contactPoint: company.phones.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone.href.replace(/^tel:/, ""),
        email: company.email,
        contactType: "sales",
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: company.name,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: siteTitle,
    template: "%s | Khushi Exim",
  },
  description: siteDescription,
  applicationName: company.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: company.name,
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/hero.jpg",
        alt: "Indian spices from Khushi Exim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/images/khushi-exim-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
