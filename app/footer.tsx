import { MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-600 relative pt-8">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <div className="py-6 md:py-12 flex flex-col gap-6 md:gap-12 bg-no-repeat">
          <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-6 text-white">
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
          </div>
        </div>
      </div>
      <div className="w-full py-4 lg:py-6 border-t border-green-500">
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
