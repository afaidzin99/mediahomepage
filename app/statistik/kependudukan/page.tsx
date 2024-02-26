import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <section id="homepage-hero" className="relative w-full bg-gray-800 pt-16">
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-blue-700 to-blue-950 mix-blend-multiply" />
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
              Statistik Kependudukan
            </h1>
            <p className="text-white font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Statistik Kependudukan Desa Sawocangkring. Data ini diambil dari
              Sistem Informasi Desa (SID) Kementerian Desa Negeri Republik
              Indonesia.
            </p>
          </div>
        </section>
      </section>
      <section id="content" className="bg-gray-200">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative -top-40">
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/7422b3cd-d674-488a-b04a-8e8318d0141e/page/P1LrD"
            className="w-full h-screen rounded-md"
            title="Statistik Kependudukan"
          />
        </div>
      </section>
    </main>
  );
}
