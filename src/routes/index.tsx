import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, SectionHeading, TextLink } from "@/components/wilbucks-shell";
import { pageHead } from "@/lib/page-head";
import { focusAreas, company } from "@/lib/wilbucks-content";
import scene from "@/assets/technology-path.jpg";
import { Directors } from "@/components/directors";

export const Route = createFileRoute("/")({
  head: () => pageHead("Wilbucks | Technology, Go-to-Market & Commercial Growth", "Wilbucks is an independent sales and marketing consultancy helping technology businesses explain their value, reach customers and connect commercial priorities.", "/", { "@type": "WebSite", name: "Wilbucks", publisher: company, mainEntity: company }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="home-hero">
      <img className="hero-scene" src={scene} alt="" width={1920} height={1088} fetchPriority="high" />
      <div className="page-container hero-content">
        <p className="eyebrow hero-enter">Independent sales & marketing consultancy</p>
        <h1 className="hero-enter">Wilbucks<span className="text-primary">.</span></h1>
        <p className="hero-statement hero-enter">Clear thinking for technology,<br />markets and growth.</p>
        <p className="hero-description hero-enter">Strong technology needs a clear reason to buy. We help technology businesses explain their value, reach the right customers and focus their commercial effort.</p>
        <div className="hero-actions hero-enter"><Button asChild variant="editorial" size="editorial"><a href="/expertise">Explore our expertise <ArrowUpRight /></a></Button><TextLink to="/contact">Let’s talk</TextLink></div>
        <div className="hero-footnote"><span>Go-to-market / Cybersecurity / AI</span><a href="#perspective" aria-label="Explore the Wilbucks perspective">Scroll to explore <ArrowRight className="rotate-90" size={16} /></a></div>
      </div>
    </section>
    <section className="content-section" id="perspective"><div className="page-container"><SectionHeading number="01" label="Why Wilbucks" title="A product story, a marketing plan and a sales conversation should work together."><p className="body-copy">Wilbucks considers them together, looking at the technology, the buyer’s problem and the decisions needed to move forward. Our directors bring different perspectives to that discussion, without adding unnecessary complexity.</p><p className="body-copy">We bring technology, cybersecurity and marketing perspectives to questions about positioning, routes to market and growth. The starting point is the business problem, not a list of activities.</p><TextLink to="/about">About Wilbucks</TextLink></SectionHeading><div className="market-path" data-reveal>{["What you build", "Who needs it", "Why they should buy"].map((item, i) => <div key={item}><span className="path-number">0{i+1}</span><h3>{item}</h3>{i < 2 && <ArrowRight aria-hidden="true" />}</div>)}</div></div></section>
    <section className="expertise-band"><div className="page-container"><SectionHeading number="02" label="Areas of focus" title="Make the value clear. Reach the right buyers." /><div className="focus-grid">{focusAreas.slice(0,3).map((area, i) => <article data-reveal key={area.title}><span className="eyebrow">0{i+1}</span><h3>{area.title}</h3><p>{area.copy}</p><TextLink to="/expertise">Explore this area</TextLink></article>)}</div><div className="focus-bottom"><span>Cybersecurity & enterprise technology · Practical AI · Sales & marketing alignment</span><TextLink to="/expertise">All areas of expertise</TextLink></div></div></section>
    <section className="content-section"><div className="page-container"><SectionHeading number="03" label="Our directors" title="Two directors. Distinct perspectives."><p className="body-copy">Wilbucks has two directors, Marie Wilcox and Simon Wilcox. Their individual backgrounds bring complementary perspectives to the company’s work.</p></SectionHeading><Directors /></div></section>
    <ContactBand />
  </>;
}
