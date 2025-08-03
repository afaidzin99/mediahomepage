import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MdxRender from "../mdx-render";
import { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Profil Desa Pesanggaran - MSangga Baruna",
  description:
    "Profil Desa Pesanggaran. Ditelisik melalui landasan riset sosial media.",
  openGraph: {
    title: "Profil Desa Pesanggaran - Sangga Baruna",
    description:
      "Profil Desa Pesanggaran. Ditelisik melalui landasan riset sosial media.",
    images: [
      {
        url: "https://media.sawocangkring.com/opengraph-image.png",
        width: 2400,
        height: 1260,
        alt: "Profil Desa Pesanggaran",
      },
    ],
    url: "https://media.sawocangkring.com/sejarah",
    type: "website",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=In_JTfpt-RU",
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default function Page() {
  // Read and parse the MDX file
  const pageFilePath = path.join(process.cwd(), "data/sejarah.mdx");
  const source = fs.readFileSync(pageFilePath, "utf8");
  const { content, data } = matter(source);

  // Render the MDX content
  return (
    <main className="overflow-hidden">
      <section
        id="homepage-hero"
        className="relative w-full bg-gray-800 pt-16"
        style={{
          backgroundImage: 'url("/hero.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay" />
        <section
          id="hero-content"
          className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 pb-40 z-10"
        >
          <div className="flex flex-col -mt-20 bg-no-repeat py-3">
            <Link
              href={"/"}
              className="text-blue-400 text-base flex flex-row gap-2 py-3 pb-6"
            >
              <ChevronLeft />
              <p className="text-blue-400 font-semibold">Beranda</p>
            </Link>
            <h1 className="lg:pt-5 font-extrabold text-white font-intro uppercase leading-normal tracking-tight text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2">
              {data.title}
            </h1>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Profil desa Pesanggaran. Ditelisik melalui landasan riset sosial media.
            </p>
          </div>
        </section>
      </section>
      <section id="content" className="bg-gray-200">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative -top-40 z-20">
          <div className="p-6 md:p-6 lg:py-8 lg:px-10 rounded-xl bg-white">
            <div className="pb-4">
              <YouTubeEmbed videoid="POTIPuiLRxA" />
              <span className="text-sm text-gray-700 pt-1">
                Tourism Promotional Video of Pesanggaran Sub-District by KKN-PPM UGM Pesanggaran 2019
              </span>
            </div>
            <MdxRender source={content} frontMatter={data} />
          </div>
        </div>
      </section>
    </main>
  );
}
