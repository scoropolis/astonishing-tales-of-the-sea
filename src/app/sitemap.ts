import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now },
    { url: `${site.url}/articles`, lastModified: now },
    { url: `${site.url}/categories`, lastModified: now },
    { url: `${site.url}/about`, lastModified: now },
    ...categories.map((category) => ({ url: `${site.url}/categories/${category.id}`, lastModified: now })),
    ...getAllArticles().map((article) => ({ url: `${site.url}/articles/${article.slug}`, lastModified: new Date(article.updatedAt) })),
  ];
}
