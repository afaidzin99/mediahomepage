import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import nextSafe from "next-safe";
const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  domains: ["localhost", "127.0.0.1"], // agar bisa load dari Laravel


    remotePatterns: [
      {
        protocol: "https",
        hostname: "is3.cloudhost.id",
        port: "",
      },
      {
        protocol: "http",
        hostname: "sawocangkring-wonoayu.desa.id",
        port: "",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: nextSafe({
          contentSecurityPolicy: {
            "script-src":
              "'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com cdn.jsdelivr.net *.youtube.com *.tableau.com",
            "frame-src":
              "'self' *.googletagmanager.com *.youtube.com *.google.com *.tableau.com *.openstreetmap.org",
            "style-src":
              "'self' 'unsafe-inline' fonts.googleapis.com cdn.jsdelivr.net",
            "connect-src":
              "'self' http://127.0.0.1:8000 http://localhost:8000 *.googletagmanager.com *.google-analytics.com sid.kemendesa.go.id",

            "img-src":
  "'self' data: http://localhost:8000 http://127.0.0.1:8000 http://sawocangkring-wonoayu.desa.id *.ytimg.com *.tableau.com is3.cloudhost.id *.tile.openstreetmap.org *.bmkg.go.id",

          },
          frameoptions: false,
        }),
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // frontend
        destination: "http://127.0.0.1:8000/api/:path*", // backend Laravel
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
