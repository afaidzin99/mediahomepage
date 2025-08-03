"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function EditBerita({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    content: "",
    published_at: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBerita() {
      try {
        const res = await fetch(
          `http://localhost:8000/api/berita/${params.slug}`
        );
        const data = await res.json();
        console.log("DATA:", data);
        const berita = data.data;
        setForm({
          title: berita.title || "",
          content: berita.content || "",
          published_at: berita.published_at
            ? berita.published_at.slice(0, 10)
            : "",
        });
      } catch (err) {
        alert("Gagal memuat data");
      } finally {
        setLoading(false);
      }
    }

    fetchBerita();
  }, [params.slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:8000/api/berita/${params.slug}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        alert("Berita berhasil diperbarui");
        router.push("/admin");
      } else {
        alert("Gagal memperbarui berita");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (loading) return <p>Memuat...</p>;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/admin" className="flex items-center text-blue-600 mb-4">
        <ChevronLeft className="mr-1" />
        Kembali ke Admin
      </Link>
      <h1 className="text-2xl font-bold mb-4">Edit Berita</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Judul</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Konten</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={8}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Tanggal Publikasi</label>
          <input
            type="date"
            name="published_at"
            value={form.published_at}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Simpan Perubahan
        </button>
      </form>
    </main>
  );
}
