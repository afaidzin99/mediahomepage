"use client";

import { usePathname } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import LdJson from "./LdJson";

const PJS = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <html lang="id">
      <body className={PJS.className}>
        {!isAdminPage && <Header />}
        {children}
        {!isAdminPage && <Footer />}
        <LdJson />
      </body>
      <GoogleAnalytics gaId="G-DTRBLY6MY9" />
    </html>
  );
}
