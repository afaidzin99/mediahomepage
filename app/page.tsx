import HomepageHero from "./homepageHero";
import HomepageLatestNews from "./homepageLatestNews";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomepageHero />
      <HomepageLatestNews />
    </main>
  );
}
