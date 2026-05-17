import Link from "next/link";
import { categories } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  const featured = getAllArticles().slice(0, 3);

  return (
    <main>
      <section className="hero">
        <span className="eyebrow">Maritime case files</span>
        <h1>Stories from the sea, told with evidence instead of fog.</h1>
        <p className="lede">{site.description}</p>
        <div className="actions">
          <Link className="button primary" href="/categories">Explore the categories</Link>
          <Link className="button" href="/articles">Read the launch list</Link>
        </div>
      </section>

      <section className="section panel">
        <span className="eyebrow">The chart</span>
        <h2>Four article channels for the site.</h2>
        <div className="grid category-grid">
          {categories.map((category) => (
            <Link className="category-card" href={`/categories/${category.id}`} key={category.id}>
              <span className="eyebrow">{category.eyebrow}</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">First articles</span>
        <h2>Launch case files seeded from Article Ops.</h2>
        <div className="grid article-grid">
          {featured.map((article) => (
            <Link className="article-card" href={`/articles/${article.slug}`} key={article.slug}>
              <div className="article-meta"><span>{article.primaryKeyword}</span><span>·</span><span>{article.sourceConfidence}</span></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
