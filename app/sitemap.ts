import fs from "fs";
import matter from "gray-matter";
import { MetadataRoute } from "next";

const URL = "https://sawocangkring.my.id";

function getPostData() {
  const files = fs.readdirSync("data/berita");
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      `data/berita/${filename}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { frontmatter, slug };
  });
  return posts;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // News Article
  const posts = getPostData();
  const routesNews = posts.map((post) => ({
    url: `${URL}/berita/${post.slug}`,
    lastModified: new Date().toISOString(),
  }));

  // Static pages
  const routes = ["", "/sejarah"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...routesNews];
}
