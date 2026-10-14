import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, SectionHeading } from "@/components/wilbucks-shell";
import { focusAreas } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/expertise")({
  head: () => pageHead("Wilbucks Expertise | Positioning, GTM & AI-enabled Marketing", "Explore independent thinking across go-to-market strategy, product positioning, demand generation, cybersecurity, practical AI and commercial alignment.", "/expertise"),
  component: ExpertisePage,
});

function ExpertisePage() {
  return <>
    <section className="page-heading"><div className="page-container hero-enter"><p className="eyebrow">Expertise / Commercial clarity</p><h1>Better questions.<br />Clearer market direction.</h1><p className="body-copy">A strong product can still be difficult to position, hard to explain or aimed at buyers who do not recognise its value. These are areas Wilbucks can explore with you. Priorities, scope and suitability are agreed through a conversation.</p></div></section>
    <section className="content-section"><div className="page-container">{focusAreas.map((area, i) => <article className="expertise-row" data-reveal key={area.title}><span className="eyebrow text-primary">0{i+1} /</span><h2>{area.title}</h2><div><h3>{area.question}</h3><p>{area.copy}</p></div></article>)}</div></section>
    <section className="approach"><div className="page-container"><SectionHeading number="07" label="The approach" title="Understand the market. Connect the thinking."><p className="body-copy">Start with context: the buyers you want to reach, the problems you solve and what makes your technology relevant. Bring sales, marketing and leadership perspectives together before deciding what to do next.</p><p className="body-copy">The scope of any work is agreed around your priorities. These areas of focus are not promises of results or claims that every service is currently being delivered.</p></SectionHeading><div className="market-path" data-reveal>{["Understand", "Position", "Connect"].map((label, i) => <div key={label}><span className="path-number">0{i+1}</span><h3>{label}</h3></div>)}</div></div></section>
    <ContactBand />
  </>;
}