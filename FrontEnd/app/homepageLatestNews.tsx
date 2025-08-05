"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  slug: string;
  category: string;
  image_url: string;
  published_at: string;
  instagram_url?: string;
}

interface FeaturedArticleProps {
  id: string;
  title: string;
  date: string;
  category: string;
  instagramURL?: string;
  photo?: string;
  className?: string;
}

export default function HomepageLatestNews() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
  const fetchBlogs = async () => {
    const res = await fetch("${process.env.NEXT_PUBLIC_API_BASE_URL}/api/berita", {
      cache: "no-store",
    });
    const json = await res.json();

    // Urutkan dari yang terbaru ke terlama
    const sortedBlogs = json.data.sort(
      (a: Blog, b: Blog) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

    setBlogs(sortedBlogs);
  };

  fetchBlogs();
}, []);


  if (blogs.length === 0) {
    return null; // atau tampilkan spinner/loading
  }

  return (
    <section className="relative top-[-12rem] mb-[-12rem] md:top-[-14rem] md:mb-[-14rem] lg:-top-40 lg:-mb-40 z-10 pb-6 md:pb-8 xl:pb-12">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Berita Terkini
            </CardTitle>
            <CardDescription />
          </CardHeader>

          <CardContent className="md:grid grid-cols-2 gap-8">
            <FeaturedArticle
              id={blogs[0].slug}
              title={blogs[0].title}
              date={blogs[0].published_at}
              category={blogs[0].category}
              instagramURL={blogs[0].instagram_url}
              photo={blogs[0].image_url}
            />

            <div className="w-full md:flex flex-col grid grid-cols-1 gap-4 mt-8">
              <h3 className="text-2xl font-extrabold text-center">
                Terbitan Terbaru
              </h3>
              <ul className="w-full flex flex-col md:grid grid-cols-2 grid-rows-3 gap-4">
                {blogs.slice(1, 6).map((news) => (
                  <li
                    key={news.slug}
                    className="hover:bg-green-50 p-3 rounded-lg group transition-colors ease-brand duration-250"
                  >
                    <Link
                      href={
                        news.instagram_url
                          ? news.instagram_url
                          : `/berita/${news.slug}`
                      }
                      className="flex flex-col gap-1 w-full"
                    >
                      <h4 className="line-clamp-2 font-semibold text-base leading-7 text-blue-900 group-hover:text-green-900">
                        {news.title}
                      </h4>
                      <p className="flex justify-between text-sm items-center">
                        {new Date(news.published_at).toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        | {news.category}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>

          <CardFooter>
            <Button asChild variant="default" className="w-full py-6 text-xl">
              <Link href="/berita">Baca berita lainnya</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id,
  title,
  date,
  category,
  instagramURL,
  className,
  photo,
}) => {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <div id="hero-image" className="relative">
        <AspectRatio ratio={1 / 1}>
          <Image
            fill
            src={photo ? photo : "/hero.jpg"}
            alt={title}
            className="object-cover filter transition-all ease-brand duration-500 transform group-hover:scale-110 group-hover:filter-none group-hover:grayscale-0 group-hover:opacity-100 object-top"
          />
        </AspectRatio>

        <Link href={instagramURL ? instagramURL : `/berita/${id}`}>
          <Card className="border-0 visible inline-block absolute bottom-0 w-full bg-black bg-opacity-50 transition duration-500 ease-in-out group-hover:bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg px-8 py-6 text-white">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold line-clamp-2">{title}</p>
              <p className="text-xs">
                {new Date(date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                | {category}
              </p>
            </div>
          </Card>
        </Link>
      </div>
    </Card>
  );
};
