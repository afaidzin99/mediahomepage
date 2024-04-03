import { MapPin, Mail, GitFork, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoLong from "@/app/logo-long.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import sosmedData from "@/data/sosmed.json";
import { Instagram, Youtube, Github, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#16a75c] relative pt-8">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <div className="py-6 md:py-12 flex flex-col gap-6 md:gap-12 bg-no-repeat">
          <Link href={"/"} className="w-fit lg:w-1/4 h-16 md:h-fit">
            <Image
              src={logoLong}
              alt="Media Sawocangkring"
              className="h-full w-full object-contain"
            />
          </Link>
          <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {/* HQ Media Sawocangkring */}
            <div className="flex items-start gap-3">
              <MapPin size={24} />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold leading-7">
                  Media Sawocangkring
                </p>
                <div className="flex flex-col text-sm leading-6">
                  <p>Desa Sawocangkring, Kec. Wonoayu</p>
                  <p>Kab. Sidoarjo, Jawa Timur, 61261</p>
                </div>
              </div>
            </div>
            {/* Surel Media Sawocangkring */}
            <div className="flex items-start gap-3">
              <Mail size={24} />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold leading-7">Alamat Email</p>
                <div className="flex flex-col text-sm leading-6">
                  <p>halo@sawocangkring.my.id</p>
                </div>
              </div>
            </div>

            {/* Sosial media */}
            <div className="flex items-start gap-3">
              <Share2 size={24} />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold leading-7">Sosial Media</p>
                <ul className="flex w-full max-w-xl justify-between gap-6">
                  {sosmedData.map((sosmed, index) => (
                    <li key={index} className="flex items-center">
                      <Link
                        href={sosmed.url}
                        className="relative size-11 items-center justify-center flex rounded-md p-2 border-[1px] border-white border-opacity-20 hover:bg-green-800 transition-colors duration-300 ease-in-out"
                        aria-label={sosmed.media}
                      >
                        {/* if sosmed are facebook, show facebook components and so on */}
                        {sosmed.media === "instagram" && (
                          <Instagram color="#fff" className="z-10" />
                        )}
                        {sosmed.media === "youtube" && (
                          <Youtube color="#fff" className="z-10" />
                        )}
                        {sosmed.media === "github" && (
                          <Github color="#ffffff" className="z-10" />
                        )}
                        {sosmed.media === "facebook" && (
                          <Facebook color="#fff" className="z-10" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sitemap group */}
          </div>
          <div id="sitemap-group" className="text-white">
            <div className="flex items-start gap-3">
              <GitFork size={24} />
              <div className="flex flex-col gap-1 w-full">
                <p className="font-roboto font-bold leading-7">Sitemap</p>
                <SitemapGroup />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="IT-Disclaimer"
        className="w-full py-4 lg:py-6 border-t border-green-500"
      >
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-sm font-normal leading-6 text-white lg:text-left">
              Website ini tidak dalam pengelolaan pemerintah desa Sawocangkring.
              Segala konten yang ada di website ini merupakan referensi semata
              yang dikelola oleh Tim Media Sawocangkring. Seluruhnya yang
              terdapat pada website ini tidak menyatakan sikap resmi dari
              pemerintah desa Sawocangkring.
            </p>
            <p className="text-sm font-normal leading-6 text-white lg:text-left">
              Pengelola IT:{" "}
              <Link
                className="underline"
                href={"https://renggaprakosonugroho.my.id"}
              >
                Rengga Prakoso Nugroho
              </Link>
            </p>
            <p className="text-base font-normal leading-6 text-white text-center lg:text-left">
              Hakcipta © 2024 Tim Pengembang Media Sawocangkring
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SitemapGroup() {
  return (
    <>
      <Accordion type="multiple" className="flex flex-col lg:hidden">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold">
            Profil Sawocangkring
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <Link href={"/sejarah"}>Sejarah Desa</Link>
            <Link href={"/kepemudaan"}>Kepemudaan</Link>
            <Link href={"/peta"}>Peta Desa</Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold">
            Statistik Sawocangkring
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <Link href={"/statistik"}>Dashboard Statistik</Link>
            <Link href={"/kepemudaan"}>Statistik Kependudukan</Link>
            <Link href={"https://rekap-pemilu2024-swc.internal.reng.my.id/"}>
              Rekapitulasi KPPS PEMILU 2024
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold">
            Ekosistem Sawocangkring
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <Link href={"https://sawocangkring-wonoayu.desa.id"}>
              Website Desa
            </Link>
            <Link href={"https://kemendesa.go.id"}>Kementerian Desa</Link>
            <Link href={"https://tanahair.indonesia.go.id/portal-web"}>
              Geo Spasial Desa
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="hidden lg:grid grid-cols-4 lg:gap-12">
        <div className="flex flex-col gap-3 py-4">
          <p className="font-semibold">Profil Sawocangkring</p>
          <div className="flex flex-col gap-2">
            <Link href={"/sejarah"}>Sejarah Desa</Link>
            <Link href={"/kepemudaan"}>Kepemudaan</Link>
            <Link href={"/peta"}>Peta Desa</Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-4">
          <p className="font-semibold">Statistik Sawocangkring</p>
          <div className="flex flex-col gap-2">
            <Link href={"/statistik"}>Dashboard Statistik</Link>
            <Link href={"/kepemudaan"}>Statistik Kependudukan</Link>
            <Link href={"https://rekap-pemilu2024-swc.internal.reng.my.id/"}>
              Rekapitulasi KPPS PEMILU 2024
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-4">
          <p className="font-semibold">Ekosistem Sawocangkring</p>
          <div className="flex flex-col gap-2">
            <Link href={"https://sawocangkring-wonoayu.desa.id"}>
              Website Desa
            </Link>
            <Link href={"https://kemendesa.go.id"}>Kementerian Desa</Link>
            <Link href={"https://tanahair.indonesia.go.id/portal-web"}>
              Geo Spasial Desa
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
