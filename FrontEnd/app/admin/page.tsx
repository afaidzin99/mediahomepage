"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PlusCircle, Pencil, Trash } from "lucide-react";
import { ChevronLeft } from "lucide-react";


type Berita = {
  id: number;
  title: string;
  slug: string;
  category: string;
  published_at: string;
};

export default function AdminDashboard() {
  const [beritaList, setBeritaList] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBerita() {
      try {
        const res = await fetch("http://localhost:8000/api/berita");
        const data = await res.json();
        setBeritaList(data.data); // pastikan ini sesuai struktur API
      } catch (err) {
        console.error("Gagal mengambil berita:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBerita();
  }, []);

  async function handleDelete(slug: string) {
    const confirmDelete = window.confirm("Yakin ingin menghapus berita ini?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:8000/api/berita/${slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Berita berhasil dihapus.");
        setBeritaList((prev) => prev.filter((item) => item.slug !== slug));
      } else {
        alert("Gagal menghapus berita.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Terjadi kesalahan saat menghapus.");
    }
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <Link
          href="/admin/berita"
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <PlusCircle className="mr-2 w-5 h-5" />
          Tambah Berita
        </Link>
      </div>

      {loading ? (
        <p>Memuat data...</p>
      ) : beritaList.length === 0 ? (
        <p>Tidak ada berita tersedia.</p>
      ) : (
        <table className="w-full border rounded text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Judul</th>
              <th className="p-2 border">Tanggal</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {beritaList.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">
                  {item.published_at
                    ? new Date(item.published_at).toLocaleDateString("id-ID")
                    : "-"}
                </td>
                <td className="p-2 border flex gap-3 items-center">
                  <Link
                    href={`/admin/berita/edit/${item.slug}`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.slug)}
                    className="text-red-600 hover:underline flex items-center gap-1"
                  >
                    <Trash className="w-4 h-4" />
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
