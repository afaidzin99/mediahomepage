import APBDES from "@/data/apbdes.json";
import PageHeader from "@/components/ui/header";
import PageContent from "@/components/ui/pageContent";
import { Metadata } from "next";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Anggaran Pendapatan dan Belanja Desa",
  description: "Anggaran Pendapatan dan Belanja Desa",
};

export default function AnggaranPendapatanBelanjaDesa() {
  let totalPendapatanDesa = 0;
  for (const key in APBDES.pendapatan_desa) {
    const value =
      APBDES.pendapatan_desa[key as keyof typeof APBDES.pendapatan_desa];
    if (typeof value === "number") {
      totalPendapatanDesa += value;
    }
  }

  let totalBelanjaDesa = 0;
  for (const key in APBDES.belanja_desa) {
    const value = APBDES.belanja_desa[key as keyof typeof APBDES.belanja_desa];
    if (typeof value === "number") {
      totalBelanjaDesa += value;
    }
  }

  let totalPembiayaan = 0;
  for (const key in APBDES.pembiayaan) {
    const value = APBDES.pembiayaan[key as keyof typeof APBDES.pembiayaan];
    if (typeof value === "number") {
      totalPembiayaan += value;
    }
  }

  return (
    <main className="overflow-hidden">
      <PageHeader
        title="Anggaran Pendapatan dan Belanja Desa"
        description="Anggaran Pendapatan dan Belanja Desa"
        pagePreviousDescription="Dashboard Statistik"
        pagePreviousTitle="Dashboard Statistik"
        pagePreviousUrl="/statistik"
      />
      <PageContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center bg-green-600 text-white p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Total Pendapatan Desa
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {totalPendapatanDesa.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-green-600 text-white p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Total Belanja Desa
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {totalBelanjaDesa.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-green-600 text-white p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Total Pembiayaan Desa
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {totalPembiayaan.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
        <p className="my-4">
          Diperbarui pada: {APBDES.update.date} dengan sumber data dari{" "}
          <Link
            href={APBDES.archive.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {APBDES.archive.source}
          </Link>{" "}
          dan{" "}
          <Link
            href={APBDES.update.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {APBDES.update.source}
          </Link>
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-center font-bold text-4xl">
            Tabel Anggaran Pendapatan dan Belanja Desa
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Indikator</TableHead>
                <TableHead>Skor</TableHead>
                <TableHead>Keterangan</TableHead>
                <TableHead>Rekomendasi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {APBDES.pendapatan_desa && (
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Pendapatan Desa</TableCell>
                  <TableCell>Pendapatan Asli Desa</TableCell>
                  <TableCell>
                    {APBDES.pendapatan_desa.pendapatan_asli_desa.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.pendapatan_desa && (
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Pendapatan Desa</TableCell>
                  <TableCell>Dana Desa</TableCell>
                  <TableCell>
                    {APBDES.pendapatan_desa.dana_desa.toLocaleString("id-ID")}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.pendapatan_desa && (
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Pendapatan Desa</TableCell>
                  <TableCell>Bagi Hasil Pajak</TableCell>
                  <TableCell>
                    {APBDES.pendapatan_desa.bagi_hasil_pajak.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.pendapatan_desa && (
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>Pendapatan Desa</TableCell>
                  <TableCell>Alokasi Dana Desa</TableCell>
                  <TableCell>
                    {APBDES.pendapatan_desa.alokasi_dana_desa.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.pendapatan_desa && (
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell>Pendapatan Desa</TableCell>
                  <TableCell>Pendapatan Lain-lain</TableCell>
                  <TableCell>
                    {APBDES.pendapatan_desa.pendapatan_lain_lain.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Indikator</TableHead>
                <TableHead>Skor</TableHead>
                <TableHead>Keterangan</TableHead>
                <TableHead>Rekomendasi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {APBDES.belanja_desa && (
                <TableRow>
                  <TableCell>6</TableCell>
                  <TableCell>Belanja Desa</TableCell>
                  <TableCell>Penyelenggaraan Pemerintah Desa</TableCell>
                  <TableCell>
                    {APBDES.belanja_desa.b_penyelenggaraan_pemerintah_desa.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.belanja_desa && (
                <TableRow>
                  <TableCell>7</TableCell>
                  <TableCell>Belanja Desa</TableCell>
                  <TableCell>Pelaksanaan Pembangunan Desa</TableCell>
                  <TableCell>
                    {APBDES.belanja_desa.b_pelaksanan_pembangunan_desa.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.belanja_desa && (
                <TableRow>
                  <TableCell>8</TableCell>
                  <TableCell>Belanja Desa</TableCell>
                  <TableCell>Pembinaan Kemasyarakatan</TableCell>
                  <TableCell>
                    {APBDES.belanja_desa.b_pembinaan_kemasyarakatan.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.belanja_desa && (
                <TableRow>
                  <TableCell>9</TableCell>
                  <TableCell>Belanja Desa</TableCell>
                  <TableCell>Pemberdayaan Kemasyarakatan</TableCell>
                  <TableCell>
                    {APBDES.belanja_desa.b_pemberdayaan_kemasyarakatan.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.belanja_desa && (
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell>Belanja Desa</TableCell>
                  <TableCell>
                    Penanggulangan Bencana Darurat dan Mendesak
                  </TableCell>
                  <TableCell>
                    {APBDES.belanja_desa.b_penanggulangan_bencana_darurat_dan_mendesak.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Indikator</TableHead>
                <TableHead>Skor</TableHead>
                <TableHead>Keterangan</TableHead>
                <TableHead>Rekomendasi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {APBDES.pembiayaan && (
                <TableRow>
                  <TableCell>11</TableCell>
                  <TableCell>Pembiayaan</TableCell>
                  <TableCell>Silpa Tahun Sebelumnya</TableCell>
                  <TableCell>
                    {APBDES.pembiayaan.silpa_tahun_sebelumnya.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.pembiayaan && (
                <TableRow>
                  <TableCell>12</TableCell>
                  <TableCell>Pembiayaan</TableCell>
                  <TableCell>Penyertaan Modal Desa</TableCell>
                  <TableCell>
                    {APBDES.pembiayaan.penyertaan_modal_desa.toLocaleString(
                      "id-ID"
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
              {APBDES.pembiayaan && (
                <TableRow>
                  <TableCell>13</TableCell>
                  <TableCell>Pembiayaan</TableCell>
                  <TableCell>Pembiayaan Netto</TableCell>
                  <TableCell>
                    {APBDES.pembiayaan.pembiayaan_netto.toLocaleString("id-ID")}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col justify-center items-center my-8 gap-8">
          <p className="font-bold text-4xl">
            {" "}
            Dokumentasi Pengumuman Informasi Anggaran
          </p>
          <Image
            src="/spanduk-apbdes.jpg"
            alt="APBDES"
            width={800}
            height={600}
          />
          {/* show the exif data */}
          <code className="w-full">
            Dipotret pada tanggal: 2024:05:13 Model kamera: OPPO A3s GPS
            Latitude: 7 deg 24 minutes 56.07 seconds South GPS Longitude: 112
            deg 39 minutes 6.67 seconds East GPS Timestamp: 2024:05:13 07:03:01Z
          </code>
        </div>
      </PageContent>
    </main>
  );
}

interface BudgetData {
  pendapatan_desa: {
    pendapatan_asli_desa: number;
    dana_desa: number;
    bagi_hasil_pajak: number;
    alokasi_dana_desa: number;
    pendapatan_lain_lain: number;
  };
  belanja_desa: {
    b_penyelenggaraan_pemerintah_desa: number;
    b_pelaksanan_pembangunan_desa: number;
    b_pembinaan_kemasyarakatan: number;
    b_pemberdayaan_kemasyarakatan: number;
    b_penanggulangan_bencana_darurat_dan_mendesak: number;
  };
  pembiayaan: {
    silpa_tahun_sebelumnya: number;
    penyertaan_modal_desa: number;
    pembiayaan_netto: number;
  };
  update: {
    date: string;
    url: string;
  };
  archive: {
    source: string;
    url: string;
  };
}
