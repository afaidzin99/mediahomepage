import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/internal/",
    },
    sitemap: "https://sawocangkring.my.id/sitemap.xml",
  };
}
