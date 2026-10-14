import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, TextLink } from "@/components/wilbucks-shell";
import { focusAreas } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/expertise")({
  head: () => pageHead("Sales & Marketing Expertise | Wilbucks", "Wilbucks areas of focus include commercial strategy, market entry, sales, positioning, product marketing, demand generation and AI-enabled marketing.", "/expertise"),
  component: ExpertisePage,
});

function ExpertisePage() {
  return <>
    <section className="page-heading"><div className="page-container hero-enter"><p className="eyebrow">Areas of focus</p><h1>Sales and marketing expertise.</h1><p className="body-copy">The questions below describe our areas of focus. The scope of an engagement is agreed separately.</p></div></section>
    <section className="content-section"><div className="page-container">{focusAreas.map((area, i) => <article className="expertise-row" data-reveal key={area.title}><span className="eyebrow text-primary">0{i+1} /</span><h2>{area.title}</h2><div><h3>{area.question}</h3><p>{area.copy}</p></div></article>)}</div></section>
    <section className="approach"><div className="page-container"><p className="body-copy">Cybersecurity and enterprise technology provide context for this work. They are not separate claims of technical security services. These areas of focus do not imply current contracts or guaranteed pipeline or revenue results.</p><TextLink to="/contact">Discuss a sales or marketing question</TextLink></div></section>
    <ContactBand />
  </>;
}