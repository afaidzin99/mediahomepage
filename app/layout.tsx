import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import type { Viewport } from "next";
import Header from "./header";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  themeColor: "#051B2E",
};

const PJS = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Media Sawocangkring",
  description:
    "Media Informasi Seputar Desa Sawocangkring. Diramut arek-arek Sawocangkring.",
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
      </body>
      <GoogleAnalytics gaId="G-DTRBLY6MY9" />
    </html>
  );
}
