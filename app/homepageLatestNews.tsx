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
import latestNews from "@/data/berita.json";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FeaturedArticleProps {
  id: string;
  title: string;
  date: string;
  category: string;
  instagramURL: string;
}

export default function HomepageLatestNews() {
  return (
    <section className="relative top-[-12rem] mb-[-12rem] md:top-[-14rem] md:mb-[-14rem] lg:-top-40 lg:-mb-40 z-10 pb-6 md:pb-8 xl:pb-12">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Berita Terkini
            </CardTitle>
            <CardDescription className="flex justify-center items-center"></CardDescription>
          </CardHeader>
          <CardContent>
            {latestNews
              .filter((news) => news.featured)
              .slice(0, 1)
              .map((news) => (
                <FeaturedArticle
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  date={news.date}
                  category={news.category}
                  instagramURL={news.instagramURL}
                />
              ))}
            <LatestNews />
          </CardContent>
          <CardFooter>
            <Button asChild variant={"default"} className="w-full">
              <Link href={"/berita"}>Baca berita lainnya </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

function LatestNews() {
  return (
    <div className="w-full grid grid-cols-1 gap-4 mt-8">
      <h3 className="text-2xl font-extrabold text-center">Terbitan Terbaru</h3>
      <ul className="w-full h-full flex flex-col gap-4">
        {latestNews.slice(0, 5).map((news) => (
          <li
            key={news.id}
            className="hover:bg-green-50 p-3 rounded-lg group transition-colors ease-brand duration-250"
          >
            <Link
              href={
                news.instagramURL ? news.instagramURL : `/berita/${news.id}`
              }
              className="flex flex-col gap-3 w-full"
            >
              <p className="line-clamp-2 font-semibold text-lg leading-7 text-blue-900 group-hover:text-green-900">
                {news.title}
              </p>
              <p className="flex justify-between text-sm items-center">
                {news.date} | {news.category}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id,
  title,
  date,
  category,
  instagramURL,
}) => {
  return (
    <Card className="relative overflow-hidden">
      <div id="hero-image" className="relative">
        <AspectRatio ratio={1 / 1}>
          <img
            src="/hero.webp"
            alt="Media Sawocangkring"
            className="object-cover filter grayscale opacity-50 transition-all ease-brand duration-500 transform group-hover:scale-110 group-hover:filter-none group-hover:grayscale-0 group-hover:opacity-100 object-top"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-800 mix-blend-multiply" />
        <Card className="border-0 visible inline-block absolute bottom-0 w-full bg-black bg-opacity-50 transition duration-500 ease-in-out group-hover:bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg px-8 py-6 text-white">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold line-clamp-2">{title}</p>
            <p className="text-xs">{category}</p>
            <Button asChild variant={"default"} className="w-full">
              <Link href={instagramURL ? instagramURL : `/berita/${id}`}>
                Baca berita
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </Card>
  );
};
