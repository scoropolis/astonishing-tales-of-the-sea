import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Categories",
  description: "Article categories for Astonishing Tales of the Sea.",
};

export default function CategoriesPage() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">Categories</span>
        <h1>Disasters, voyages, shipbuilding, and captain&apos;s-eye decisions.</h1>
        <p className="lede">A simple article map for the first version of Astonishing Tales of the Sea.</p>
      </section>
      <section className="section grid category-grid">
        {categories.map((category) => {
          const count = getArticlesByCategory(category.id).length;
          return (
            <Link className="category-card" href={`/categories/${category.id}`} key={category.id}>
              <span className="eyebrow">{category.eyebrow}</span>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <div className="kicker-list"><div>{category.promise}</div><div>{count} seeded article{count === 1 ? "" : "s"}</div></div>
              <span className="card-cta">View category →</span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
