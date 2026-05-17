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
      <section className="section grid article-grid">
        {articles.length ? articles.map((article) => (
          <Link className="article-card" href={`/articles/${article.slug}`} key={article.slug}>
            <div className="article-meta"><span>{article.primaryKeyword}</span><span>·</span><span>{article.sourceConfidence}</span></div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
          </Link>
        )) : <div className="panel"><p>No articles seeded yet. This category is ready for Article Ops.</p></div>}
      </section>
    </main>
  );
}
