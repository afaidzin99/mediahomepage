"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BeritaForm() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    author: "",
    content: "",
    image_url: null as File | null,
    published_at: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const formData = new FormData();
formData.append("title", form.title);
formData.append("slug", form.slug);
formData.append("author", form.author);
formData.append("content", form.content);
formData.append("published_at", form.published_at);

// hanya kalau ada file
if (form.image_url instanceof File) {
  formData.append("image", form.image_url);
}

const res = await fetch("http://localhost:8000/api/berita", {
  method: "POST",
  body: formData, // ⬅️ kirim FormData, tanpa headers manual
});


      if (res.ok) {
        setMessage("Berita berhasil ditambahkan.");
        setForm({
          title: "",
          slug: "",
          author: "",
          content: "",
          image_url: null as File | null,
          published_at: "",
        });
      } else {
        const data = await res.json();
        setMessage(data.message || "Gagal menyimpan data.");
      }
    } catch (error) {
      setMessage("Terjadi kesalahan saat mengirim data.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/admin" className="flex items-center text-blue-600 mb-4">
        <ChevronLeft className="mr-1" />
        Kembali ke Admin
      </Link>
      <h1 className="text-2xl font-bold mb-4">Tambah Berita</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Judul"
          value={form.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="slug"
          placeholder="Slug (tanpa spasi)"
          value={form.slug}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="author"
          placeholder="Penulis"
          value={form.author}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setForm({ ...form, image_url: e.target.files ? e.target.files[0] : null });
            }
          }}
          className="w-full border px-4 py-2 rounded"
        />


        <input
          name="published_at"
          type="datetime-local"
          placeholder="Tanggal Terbit"
          value={form.published_at}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="content"
          placeholder="Konten Berita (HTML atau Markdown)"
          value={form.content}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded h-40"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Mengirim..." : "Kirim Berita"}
        </button>
        {message && <p className="text-sm text-gray-700 mt-2">{message}</p>}
      </form>
    </main>
  );
}
