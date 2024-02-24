import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Media Sawocangkring",
    short_name: "Media Sawocangkring",
    description: "Media Informasi Seputar Desa Sawocangkring",
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
