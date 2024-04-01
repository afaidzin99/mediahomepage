import HomepageHero from "./homepageHero";
import HomepageLatestNews from "./homepageLatestNews";
import HomepageQuickAcces from "./homepageQuickAcces";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomepageHero />
      <HomepageLatestNews />
      <HomepageQuickAcces />
    </main>
  );
}
