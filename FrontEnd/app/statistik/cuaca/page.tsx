import PageHeader from "@/components/ui/header";
import PageContent from "@/components/ui/pageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistik & Prakiraan Cuaca",
  description:
    "Statistik & Prakiraan Cuaca wilayah Sidoarjo dan sekitarnya - Data dari BMKG",
};

export default function WeatherMapPage() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        title="Statistik & Prakiraan Cuaca Sidoarjo"
        description="Statistik Statistik & Prakiraan Cuaca wilayah Sidoarjo dan sekitarnya - Data dari BMKG"
        pagePreviousDescription="Dashboard Statistik"
        pagePreviousTitle="Dashboard Statistik"
        pagePreviousUrl="/statistik"
      />
      <PageContent>
        <div className="flex flex-col lg:flex-row gap-4">
          <img
            src="https://stamet-juanda.bmkg.go.id/data/prakicu_img/prakicu_kab_sidoarjo.jpg"
            alt="Prakiraan Cuaca Kabupaten Sidoarjo"
            className="items-start"
          />
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://inderaja.bmkg.go.id/Radar/SURA_SingleLayerCRefQC.png"
              alt="Citra Satelit CMAX BMKG Juanda"
            />
            <img
              src="https://inderaja.bmkg.go.id/Radar/Indonesia_ReflectivityQCComposite.png"
              alt="Citra Satelit CMAX BMKG Indonesia"
            />
            <img
              src="https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_RP_Indonesia.png"
              alt="Citra Satelit HIMAWARI BMKG Indonesia"
              className="lg:p-4"
            />
          </div>
        </div>
      </PageContent>
    </main>
  );
}
