import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import sosmedData from "@/data/sosmed.json";
import { Instagram } from "lucide-react";

export default function HomepageHero() {
  return (
    <div id="homepage-hero" className="relative">
      <div id="hero-image" className="h-[650px] relative">
        <img
          src="/hero.webp"
          alt="Media Sawocangkring"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-800 mix-blend-multiply" />
      </div>
      <section
        id="hero-content"
        className="flex justify-center items-center w-full absolute top-0 min-h-[650px]"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center -mt-20 bg-no-repeat py-3">
            <h1 className="lg:pt-5 font-extrabold text-white font-intro uppercase leading-normal text-center tracking-tight text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2">
              Media Sawocangkring
            </h1>
            <p className="text-gray-300 font-medium leading-relaxed text-center max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Media informasi seputar Desa Sawocangkring.
            </p>
            <div className="max-w-xl lg:max-w-2xl w-full">
              <section>
                <h2 className="font-bold text-base leading-6 text-center text-gray-300 mb-4">
                  Seputar Desa Sawocangkring
                </h2>
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="basis-1/2">
                      <Link
                        className={`${buttonVariants({
                          variant: "outline",
                        })} w-full py-4 font-semibold`}
                        href={"/sejarah"}
                      >
                        Sejarah
                      </Link>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <Link
                        className={`${buttonVariants({
                          variant: "outline",
                        })} w-full py-4 font-semibold`}
                        href={"/berita"}
                      >
                        Berita
                      </Link>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                      <Link
                        className={`${buttonVariants({
                          variant: "outline",
                        })} w-full py-4 font-semibold`}
                        href={"/kepemudaan"}
                      >
                        Kepemudaan
                      </Link>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </section>
            </div>
            <div className="w-full max-w-xl">
              <div className="flex flex-col mt-6 content-center">
                <Button asChild variant={"default"} className="py-6">
                  <Link href={"https://instagram.com/mediasawocangkring"}>
                    Kirim Berita atau Artikel
                  </Link>
                </Button>
              </div>
            </div>
            <ul className="flex w-full max-w-xl mt-4 justify-between gap-6">
              {sosmedData.map((sosmed, index) => (
                <li key={index} className="flex items-center">
                  <Link href={sosmed.url}>
                    <div
                      className="group bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg group cursor-pointer border-l border-t border-transparent hover:bg-opacity-10 hover:border-white hover:border-opacity-10 transition-all ease-brand duration-250"
                      title={sosmed.media}
                    >
                      <Instagram color="#ffffff" size={32} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {/* <p className="text-gray-300 font-medium leading-relaxed text-center max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base mt-6">
              Disclaimer: Media Sawocangkring tidak dikelola oleh pemerintah
              desa Sawocangkring. Media Sawocangkring dikelola oleh pemuda desa
              Sawocangkring.
            </p> */}
          </div>
        </div>
      </section>
      <div className="curved"></div>
    </div>
  );
}
