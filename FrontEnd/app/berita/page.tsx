"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Home() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("http://localhost:8000/api/berita");
        const data = await res.json();
        console.log("Hasil dari API:", data); // Tambahkan ini
        setBlogs(data.data);
      } catch (error) {
        console.error("Gagal fetch berita:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Bagian hero */}
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
          className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 z-10"
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
              Berita Desa Pesanggaran
            </h1>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Perluas wawasanmu dengan membaca berita terbaru seputar Desa
              Pesanggaran.
            </p>
          </div>
        </section>
      </section>

      {/* Daftar berita */}
      <section
        id="news-list"
        className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl py-8"
      >
        <ul className="w-full h-full flex flex-col gap-4">
          {Array.isArray(blogs) &&
            blogs
              .sort(
                (a, b) =>
                  new Date(b.published_at).getTime() -
                  new Date(a.published_at).getTime()
              )
              .map((news) => (
                <li
                  key={news.id}
                  className="hover:bg-green-50 p-3 rounded-lg group transition-colors ease-brand duration-250 border-green-400 border-1"
                >
                  <Link
                    href={`/berita/${news.slug}`}
                    className="flex flex-col gap-1 w-full"
                  >
                    <p className="line-clamp-2 font-semibold text-lg leading-7 text-blue-900 group-hover:text-green-900">
                      {news.title}
                    </p>
                    <p className="flex justify-between text-sm items-center">
                      {new Date(news.published_at).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Link>
                </li>
              ))}
        </ul>
      </section>
    </main>
  );
}
