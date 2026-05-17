import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { getCategory } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Stories",
  description: "Maritime stories from Astonishing Tales of the Sea.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">Stories</span>
        <h1>Maritime stories worth reading closely.</h1>
        <p className="lede">Each piece follows the evidence, the human decisions, and the sea conditions behind the story.</p>
      </section>
      {articles.length > 0 ? (
        <section className="section grid article-grid">
          {articles.map((article) => (
            <Link className="article-card" href={`/articles/${article.slug}`} key={article.slug}>
              <div className="article-meta">
                <span>{getCategory(article.category)?.name ?? "Story"}</span>
                {article.primaryKeyword ? <><span>·</span><span>{article.primaryKeyword}</span></> : null}
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt || article.description}</p>
              <span className="card-cta">Read the story →</span>
            </Link>
          ))}
        </section>
      ) : (
        <section className="section empty-state">
          <p>The first story is being prepared. Once it is published, it will appear here.</p>
        </section>
      )}
    </main>
  );
}
