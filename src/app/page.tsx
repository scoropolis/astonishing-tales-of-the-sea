import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  const articles = getAllArticles();

  return (
    <main>
      <section className="hero home-hero">
        <span className="eyebrow">Stories from the deep</span>
        <h1>Astonishing Tales of the Sea</h1>
        <p className="lede">{site.description}</p>
      </section>

      {articles.length > 0 ? (
        <section className="section latest-section" aria-label="Latest stories">
          <div className="grid article-grid single-focus-grid">
            {articles.map((article) => (
              <Link className="article-card feature-card" href={`/articles/${article.slug}`} key={article.slug}>
                <div className="article-meta">
                  <span>{article.primaryKeyword || "Maritime history"}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt || article.description}</p>
                <span className="card-cta">Read the story →</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
