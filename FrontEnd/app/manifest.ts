import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Media Pesanggaran",
    short_name: "Media Pesanggaran",
    description: "Media Informasi Seputar Desa Pesanggaran",
    start_url: "/",
    display: "standalone",
    background_color: "#051B2E",
    theme_color: "#051B2E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
