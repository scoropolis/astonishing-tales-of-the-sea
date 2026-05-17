import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Subjects",
  description: "Story subjects for Astonishing Tales of the Sea.",
};

export default function CategoriesPage() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">Subjects</span>
        <h1>Disasters, voyages, shipbuilding, and command at sea.</h1>
        <p className="lede">A map of the waters this site will explore.</p>
      </section>
      <section className="section grid category-grid">
        {categories.map((category) => {
          const count = getArticlesByCategory(category.id).length;
          return (
            <Link className="category-card" href={`/categories/${category.id}`} key={category.id}>
              <span className="eyebrow">{category.eyebrow}</span>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              {count > 0 ? <p className="article-count">{count} stor{count === 1 ? "y" : "ies"}</p> : null}
              <span className="card-cta">Explore →</span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
