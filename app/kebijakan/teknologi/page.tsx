import PageContent from "@/components/ui/pageContent";
import PageHeader from "@/components/ui/header";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MdxRender from "@/app/mdx-render";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Teknologi",
  description: "Kebijakan Teknologi Media Sawocangkring",
};

export default function PrivacyPolicyPage() {
  // Read and parse the MDX file
  const pageFilePath = path.join(process.cwd(), "data/kebijakanteknologi.mdx");
  const source = fs.readFileSync(pageFilePath, "utf8");
  const { content, data } = matter(source);

  return (
    <main className="overflow-hidden">
      <PageHeader
        title="Kebijakan Teknologi"
        description="Kebijakan Teknologi Media Sawocangkring"
        pagePreviousDescription="Beranda"
        pagePreviousTitle="Beranda"
        pagePreviousUrl="/"
      />
      <PageContent>
        <MdxRender source={content} frontMatter={data} />
      </PageContent>
    </main>
  );
}
