import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={PJS.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
