import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) notFound();
  const articles = getArticlesByCategory(category.id);

  return (
    <main>
      <section className="hero">
        <span className="eyebrow">{category.eyebrow}</span>
        <h1>{category.name}</h1>
        <p className="lede">{category.description}</p>
      </section>
      {articles.length > 0 ? (
        <section className="section grid article-grid">
          {articles.map((article) => (
            <Link className="article-card" href={`/articles/${article.slug}`} key={article.slug}>
              <div className="article-meta">
                <span>{article.primaryKeyword || "Maritime history"}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt || article.description}</p>
              <span className="card-cta">Read the story →</span>
            </Link>
          ))}
        </section>
      ) : (
        <section className="section empty-state">
          <p>No stories have been published in this subject yet.</p>
        </section>
      )}
    </main>
  );
}
