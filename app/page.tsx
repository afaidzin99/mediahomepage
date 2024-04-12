import HomepageHero from "./homepageHero";
import HomepageLatestNews from "./homepageLatestNews";
import HomepageQuickAcces from "./homepageQuickAcces";
import HomepageSidoarjoNetwork from "./homepageSidoarjoNetwork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Sawocangkring - Media Informasi Seputar Desa Sawocangkring",
  description:
    "Media Informasi Seputar Desa Sawocangkring. Dikelola oleh tim Pengembang Media Sawocangkring.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomepageHero />
      <HomepageLatestNews />
      <HomepageQuickAcces />
      {/* <HomepageSidoarjoNetwork /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDFAQ) }}
      />
    </main>
  );
}

const jsonLDFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dimanakah letak dari Desa Sawocangkring ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "<p>Sawocangkring adalah sebuah desa di wilayah Kecamatan Wonoayu, Kabupaten Sidoarjo, Provinsi Jawa Timur.</p>",
      },
    },
    {
      "@type": "Question",
      name: "Siapakah Media Sawocangkring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mediasawocangkring merupakan organisasi kepemudaan di Desa Sawocangkring yang berfokus pada penyebarluasan informasi faktual dan akurat untuk mendukung kemandirian desa. Tidak terafiliasi dengan pemerintah desa maupun organisasi karang taruna.",
      },
    },
    {
      "@type": "Question",
      name: "Siapakah Kepada Desa dari Desa Sawocangkring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kepada Desa Sawocangkring saat ini dijabat oleh Bapak Mukhammad Nursiyo, sedangkan sekretaris desa saat ini ialah Bapak Kasan Muzakki.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja fasilitas umum yang tersedia di desa ini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beragam fasilitas umum yang disediakan di Desa Sawocangkring, mulai dari Masjid, Pemakaman, Warung, Sekolah dan Klinik. ",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana kondisi infrastruktur jalan di desa ini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kondisi infrastruktur jalan di Desa Sawocangkring sudah sangat baik, pada jalan Raya, telah dilakukan betonisasi dan aspal untuk jalan utama lingkungan desa. Pada daerah pemukiman, telah digunakan paving sebagai badan jalan. Tidak ada jalan lumpur maupun batuan pada Desa Sawocangkring.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada tempat-tempat wisata atau objek menarik di sekitar desa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saat ini, masih belum tersedia tempat wisata di Desa Sawocangkring. Namun, Desa Sawocangkring memiliki potensi wisata alam yang sangat menarik, seperti persawahan, sungai",
      },
    },
  ],
};
