import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import type { Viewport } from "next";
import Header from "./header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Organization, WithContext } from "schema-dts";

export const viewport: Viewport = {
  themeColor: "#051B2E",
};

const PJS = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  creator: "Media Sawocangkring",
  publisher: "Media Sawocangkring",
  keywords:
    "Media, Sawocangkring, Desa Sawocangkring, Dusun Lumbang, Cangkring, Sawo, Desa Sawocangkring, Kabupaten Sidoarjo",
  authors: [
    {
      name: "Media Sawocangkring",
      url: "https://sawocangkring.my.id",
    },
    {
      name: "Rengga Prakoso Nugroho",
      url: "https://renggaprakosonugroho.my.id",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Media Sawocangkring",
    description:
      "Media Informasi Seputar Desa Sawocangkring. Diramut arek-arek Sawocangkring.",
    type: "website",
    url: "https://sawocangkring.my.id",
    siteName: "Media Sawocangkring",
  },
  metadataBase: new URL("https://sawocangkring.my.id"),
};

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Media Sawocangkring",
  alternateName: "Sawocangkring Media",
  legalName: "Media Sawocangkring",
  description:
    "Media Informasi Seputar Desa Sawocangkring. Diramut arek-arek Sawocangkring.",
  url: "https://sawocangkring.my.id",
  logo: "https://sawocangkring.my.id/icon.png",
  email: "halo@sawocangkring.my.id",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+628155338525",
    email: "halo@sawocangkring.my.id",
    contactType: "Penglola IT",
  },
  sameAs: ["https://www.instagram.com/mediasawocangkring"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Desa Sawocangkring",
    addressLocality: "Sawocangkring",
    addressRegion: "Jawa Timur",
    postalCode: "61261",
    addressCountry: "ID",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "10",
  },
  foundingDate: "2021-08-01",
  foundingLocation: {
    "@type": "Place",
    name: "Desa Sawocangkring",
    address: "Desa Sawocangkring, Sawocangkring, Sidoarjo, Jawa Timur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={PJS.className}>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
      <GoogleAnalytics gaId="G-DTRBLY6MY9" />
    </html>
  );
}
