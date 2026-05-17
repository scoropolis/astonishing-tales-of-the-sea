import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  draft: boolean;
  featured: boolean;
  articleType: string;
  primaryKeyword: string;
  sensitivityLevel: "low" | "medium" | "high";
  sourceConfidence: "seed" | "draft" | "verified";
  body: string;
};

function ensureArticlesDirectory() {
  if (!fs.existsSync(articlesDirectory)) {
    return [] as string[];
  }
  return fs.readdirSync(articlesDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getAllArticles() {
  return ensureArticlesDirectory()
    .map((file) => {
      const fullPath = path.join(articlesDirectory, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.mdx$/, "");

      return {
        slug,
        title: data.title,
        description: data.description,
        excerpt: data.excerpt,
        category: data.category,
        tags: data.tags ?? [],
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        draft: Boolean(data.draft),
        featured: Boolean(data.featured),
        articleType: data.articleType ?? "case-file",
        primaryKeyword: data.primaryKeyword ?? "",
        sensitivityLevel: data.sensitivityLevel ?? "medium",
        sourceConfidence: data.sourceConfidence ?? "seed",
        body: content,
      } satisfies Article;
    })
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.publishedAt.localeCompare(b.publishedAt);
    });
}

export function getArticle(slug: string) {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return getAllArticles().filter((article) => article.category === category);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}
