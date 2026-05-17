import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Astonishing Tales of the Sea.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">About</span>
        <h1>The sea makes every decision matter.</h1>
        <p className="lede">Astonishing Tales of the Sea tells true maritime stories with respect for the people involved and attention to the forces that shaped each event: weather, design, command, navigation, luck, and time.</p>
      </section>
      <section className="section panel about-panel">
        <h2>How the stories are told</h2>
        <div className="kicker-list">
          <div>Start with what happened, then explain why it mattered.</div>
          <div>Separate confirmed findings from uncertainty.</div>
          <div>Respect victims, survivors, crews, rescuers, and families.</div>
          <div>Make the technical parts understandable without flattening the truth.</div>
        </div>
      </section>
    </main>
  );
}
