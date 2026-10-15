import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, TextLink } from "@/components/wilbucks-shell";
import { focusAreas } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/expertise")({
  head: () => pageHead("Go-to-Market Approach | Wilbucks Sales & Marketing", "Understand target markets and buyers, shape value propositions and messaging, choose channels and communications, and align sales planning and training with Wilbucks.", "/expertise"),
  component: ExpertisePage,
});

function ExpertisePage() {
  return <>
    <section className="page-heading"><div className="page-container hero-enter"><p className="eyebrow">Our expertise</p><h1>Taking your offer to market.</h1><p className="body-copy">Going to market effectively means understanding who needs your technology or service, explaining its value and reaching buyers when it matters. Our approach brings those decisions together with communications, sales planning and training, rather than treating each as a separate package.</p><p className="body-copy">The work follows a connected process. What we learn about the market shapes the proposition; the proposition guides how sales and marketing reach buyers. We agree the scope around what your business needs.</p></div></section>
    <section className="content-section"><div className="page-container">{focusAreas.map((area, i) => <article className="expertise-row" data-reveal key={area.title}><span className="eyebrow text-primary">0{i+1} /</span><h2>{area.title}</h2><div><h3>{area.question}</h3><p>{area.copy}</p></div></article>)}</div></section>
    <section className="approach"><div className="page-container"><p className="body-copy">Our experience in enterprise technology, cybersecurity and AI informs this work. The focus is on taking products and services to market, not providing technical security services. Plans are designed to support commercial progress, not guarantee investment, revenue or growth.</p><TextLink to="/contact">Talk to us</TextLink></div></section>
    <ContactBand />
  </>;
}