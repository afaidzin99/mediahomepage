import Link from "next/link";
import Image from "next/image";

export default function HomepageQuickAcces() {
  return (
    <section id="akses-cepat" className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 md:grid-rows-[auto,1fr] md:gap-x-6 lg:gap-x-20 gap-y-6 lg:gap-y-12">
          <div className="md:row-start-1 md:col-start-1 md:col-end-4 lg:row-start-auto lg:col-start-auto lg:col-end-auto flex flex-col gap-2 lg:gap-6 p-4">
            <h2 className="text-center lg:text-left font-bold text-2xl text-slate-900 pb-4">
              Akses Cepat
            </h2>
            <p className="text-center lg:text-left text-sm ">
              Akses cepat terhadap layanan desa, jaringan informasi desa dan
              kementerian terkait untuk kebutuhan anda.
            </p>
          </div>
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.url}
              className="flex flex-col items-start justify-center gap-3 group bg-white p-6 rounded-xl border border-white hover:border-green-700 hover:shadow transition-colors ease-brand duration-250"
            >
              <Image
                src={`${service.image || "/Seal_of_Sidoarjo_Regency.svg"}`}
                alt={service.title}
                width={40}
                height={40}
              />
              <h3 className="font-bold text-slate-900 text-xl md:text-2xl leading-normal group-hover:text-green-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Website Desa",
    description: "Situs web resmi milik desa Pesanggaran",
    url: "https://pesanggaran.desa.id/?fbclid=IwY2xjawL5EzNleHRuA2FlbQIxMABicmlkETFUbldCYko3aXJ6VWJjODR1AR5CCRNepqq6TPl9rFj0KL7BTRsSyypL4-8foNNupYcjSydkGag9yJG4dh-uuQ_aem_wIdGO2bApOAAAilrR8qqnA",
    image: "/logo_bwi_small.png",
  },
  // {
  //   title: "Profil Desa @ Kemendes",
  //   description: "Profil desa Pesanggaran pada website Kemendes.",
  //   url: "https://sid.kemendesa.go.id",
  // },
  {
    title: "Peta Desa",
    description:
      "Peta desa Pesanggaran berbasis data geospasial tim KKN Sangga Baruna.",
    url: "/peta",
    image: "/medialogo.png",
  },
  {
    title: "Statistik Desa",
    description: "Statistik desa Pesanggaran berbasis data Kementerian Desa.",
    url: "/statistik",
    image: "/medialogo.png",
  },
  {
    title: "Kepemudaan Desa",
    description: "Daftar organisasi kepemudaan Desa Pesanggaran.",
    url: "/kepemudaan",
    image: "/medialogo.png",
  },
];