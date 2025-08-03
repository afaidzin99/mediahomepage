import DataKepemudaan from "@/data/kepemudaan.json";
import Link from "next/link";
import PageHeader from "@/components/ui/header";
import PageContent from "@/components/ui/pageContent";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kepemudaan Desa Sawocangkring",
  description:
    "Kepemudaan Desa Sawocangkring, merupakan wadah bagi pemuda desa untuk berpartisipasi dalam pembangunan desa.",
  keywords:
    "Kepemudaan, Organisasi Kepemudaan, Desa Sawocangkring, Kepemudaan Sawocangkring",
};

export default function PageKepemudaan() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        title="Kepemudaan Desa Sawocangkring"
        description="Kepemudaan Desa Sawocangkring, merupakan wadah bagi pemuda desa untuk berpartisipasi dalam pembangunan desa."
        pagePreviousDescription="Beranda"
        pagePreviousTitle="Beranda"
        pagePreviousUrl="/"
      />
      <PageContent>
        <div className="w-full flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Daftar Organisasi Kepemudaan</h2>
          <Table>
            <TableCaption>Daftar Organisasi Kepemudaan</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                {/* <TableHead>Jenis</TableHead> */}
                <TableHead>Sosmed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DataKepemudaan.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.nama}</TableCell>
                  {/* <TableCell>{data.jenis}</TableCell> */}
                  <TableCell className="text-blue-600 font-semibold">
                    <Link href={data.sosialmedia}>
                      {/* omit the https://wwww.instagram.com/ and add @ in front */}
                      {data.sosialmedia
                        .replace("https://www.instagram.com/", "@")
                        .replace(/\/$/, "")}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-sm">
            Data diperbarui pada {new Date().toDateString()} secara manual.
            Hubungi kami jika anda berminat untuk menambahkan atau mengusulkan
            entri organisasi baru. Kami akan sangat senang untuk menambahkannya
          </p>
        </div>
      </PageContent>
    </main>
  );
}
