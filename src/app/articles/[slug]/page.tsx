import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getAllArticles, getArticle, formatDate } from "@/lib/content";
import { getCategory } from "@/lib/categories";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${site.url}/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${site.url}/articles/${article.slug}`,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const category = getCategory(article.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: `${site.url}/articles/${article.slug}`,
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <main className="article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="article-header">
          <Link className="eyebrow" href={`/categories/${article.category}`}>{category?.name ?? article.category}</Link>
          <h1>{article.title}</h1>
          <p className="lede">{article.description}</p>
          <div className="fact-card">
            <div className="article-meta">
              <span>{formatDate(article.publishedAt)}</span><span>·</span><span>{article.primaryKeyword}</span><span>·</span><span>{article.sourceConfidence}</span>
            </div>
            <p>{article.excerpt}</p>
          </div>
        </header>
        <div className="article-body">
          <MDXRemote source={article.body} />
        </div>
      </article>
    </main>
  );
}
