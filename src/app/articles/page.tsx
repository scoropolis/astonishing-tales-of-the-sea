import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { getCategory } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Articles",
  description: "Seeded maritime articles for Astonishing Tales of the Sea.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">Articles</span>
        <h1>The first case files are on the chart.</h1>
        <p className="lede">These are seeded draft slots. Article Ops can expand them into full source-led pieces.</p>
      </section>
      <section className="section grid article-grid">
        {articles.map((article) => (
          <Link className="article-card" href={`/articles/${article.slug}`} key={article.slug}>
            <div className="article-meta"><span>{getCategory(article.category)?.name}</span><span>·</span><span>{article.primaryKeyword}</span></div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
