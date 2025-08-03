import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:8000/api/berita");
  const data = await res.json();

  return data.data.map((item: any) => ({
    slug: item.slug,
  }));
}

export default async function BeritaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(`http://localhost:8000/api/berita/${params.slug}`);

  if (!res.ok) return notFound();

  const berita = await res.json();

  return (
    <main className="container mx-auto m-24 px-4">
      {/* Tombol Kembali */}
      <div className="flex justify-start mb-4">
        <Link
          href="/berita"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          <ChevronLeft className="mr-1 w-4 h-4" />
          Kembali
        </Link>
      </div>

      {/* Judul & Konten */}
      <h1 className="text-3xl font-bold mb-4">{berita.data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(berita.data.published_at).toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <Image
        src={berita.data.image_url}
        alt={berita.data.title}
        width={800}
        height={400}
        className="rounded mb-6"
      />
      <article
        className="prose max-w-3xl w-full break-words overflow-hidden [&_img]:max-w-full [&_table]:block [&_table]:overflow-auto"
        dangerouslySetInnerHTML={{ __html: berita.data.content }}
      />
    </main>
  );
}
