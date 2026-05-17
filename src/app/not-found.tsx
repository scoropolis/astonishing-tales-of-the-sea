import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">Off the chart</span>
        <h1>That page has drifted out of sight.</h1>
        <p className="lede">Try the article list or category chart instead.</p>
        <div className="actions"><Link className="button primary" href="/articles">View articles</Link><Link className="button" href="/categories">View categories</Link></div>
      </section>
    </main>
  );
}
