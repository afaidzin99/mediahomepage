import { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import WidgetJadwalPuasa from "./widget";
import jadwalImsakiya from "@/data/imsakiyah.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ClockWidget from "./clock";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sejarah Desa Sawocangkring - Media Sawocangkring",
  description:
    "Sejarah desa Sawocangkring. Ditelisik melalui landasan riset dan wawancara dengan tokoh masyarakat.",
  openGraph: {
    title: "Sejarah Desa Sawocangkring - Media Sawocangkring",
    description:
      "Sejarah desa Sawocangkring. Ditelisik melalui landasan riset dan wawancara dengan tokoh masyarakat.",
    images: [
      {
        url: "https://media.sawocangkring.com/opengraph-image.png",
        width: 2400,
        height: 1260,
        alt: "Sejarah Desa Sawocangkring",
      },
    ],
    url: "https://media.sawocangkring.com/sejarah",
    type: "website",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=POTIPuiLRxA",
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default function Page() {
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
              Ramadhan 2024 - 1445 H
            </h1>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Jadwal Imsakiyah, Waktu Sholat, dan Kajian Ramadhan di Desa
            </p>
          </div>
        </section>
      </section>
      <section id="content" className="bg-gray-200">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative -top-40 z-20">
          <div className="p-6 md:p-6 lg:py-8 lg:px-10 rounded-xl bg-white">
            <div className="pb-4 flex flex-col gap-2">
              {/* return current hour and minutes */}
              <div className="w-full flex flex-col justify-center items-center border-solid border-[1px] border-[#DDD] py-2 rounded-md bg-[#F3F4F6]">
                <p>Sekarang pukul (WIB)</p>
                <ClockWidget />
              </div>
              <WidgetJadwalPuasa />
              <div className="w-full flex flex-col justify-center items-center mt-4 py-2 rounded-md border-solid border-[1px] border-[#DDD]">
                <h2 className="font-bold text-[#333] text-xl text-center">
                  Jadwal Imsakiyah 1445 H
                </h2>
                <Table>
                  <TableCaption>Jadwal Imsakiyah 1445 H</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Imsak</TableHead>
                      <TableHead>Subuh</TableHead>
                      <TableHead>Dhuha</TableHead>
                      <TableHead>Dzuhur</TableHead>
                      <TableHead>Ashar</TableHead>
                      <TableHead>Maghrib</TableHead>
                      <TableHead>Isya</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {jadwalImsakiya.map((row) => {
                      const currentDate = new Date();
                      const rowDate = new Date(row.tanggal);
                      const isToday =
                        currentDate.getDate() === rowDate.getDate() &&
                        currentDate.getMonth() === rowDate.getMonth() &&
                        currentDate.getFullYear() === rowDate.getFullYear();

                      return (
                        <TableRow
                          key={row.tanggal}
                          style={isToday ? { backgroundColor: "#FFD700" } : {}}
                        >
                          <TableCell>
                            {rowDate.toLocaleDateString("id-ID", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </TableCell>
                          <TableCell>{row.imsak}</TableCell>
                          <TableCell>{row.subuh}</TableCell>
                          <TableCell>{row.duha}</TableCell>
                          <TableCell>{row.zuhur}</TableCell>
                          <TableCell>{row.asar}</TableCell>
                          <TableCell>{row.magrib}</TableCell>
                          <TableCell>{row.isya}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
              <span className="text-[#666] text-sm">
                Sumber daya waktu dari Kementerian Agama Republik Indonesia,
                2024 H. Direktorat Jenderal Bimbingan Masyarakat Islam,
                Kementerian Agama Republik Indonesia.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
