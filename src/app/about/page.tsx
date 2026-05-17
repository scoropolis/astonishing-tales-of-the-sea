import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Editorial standards for Astonishing Tales of the Sea.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">About</span>
        <h1>Maritime stories with a source-first spine.</h1>
        <p className="lede">Astonishing Tales of the Sea is being built as an evergreen authority site for maritime disasters, voyages, construction, and captain-level decision-making.</p>
      </section>
      <section className="section panel">
        <h2>Editorial standards</h2>
        <div className="kicker-list">
          <div>Respect victims and survivors. No cheap tragedy thumbnails, gore, or disaster-porn language.</div>
          <div>Separate confirmed findings, credible disputes, and speculation.</div>
          <div>Explain mechanisms and decisions in plain English.</div>
          <div>Use official reports, public archives, and reputable history sources wherever possible.</div>
        </div>
      </section>
    </main>
  );
}
