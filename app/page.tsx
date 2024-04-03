import HomepageHero from "./homepageHero";
import HomepageLatestNews from "./homepageLatestNews";
import HomepageQuickAcces from "./homepageQuickAcces";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Sawocangkring - Media Informasi Seputar Desa Sawocangkring",
  description:
    "Media Informasi Seputar Desa Sawocangkring. Dikelola oleh tim Pengembang Media Sawocangkring.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomepageHero />
      <HomepageLatestNews />
      <HomepageQuickAcces />
    </main>
  );
}
