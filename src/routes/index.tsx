import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, SectionHeading, TextLink } from "@/components/wilbucks-shell";
import { pageHead } from "@/lib/page-head";
import { homeFocus, company } from "@/lib/wilbucks-content";
import { SignalField } from "@/components/signal-field";
import { Directors } from "@/components/directors";

export const Route = createFileRoute("/")({
  head: () => pageHead("Wilbucks | Go-to-Market, Sales & Marketing Consultancy", "Wilbucks helps technology businesses understand markets and buyers, shape value propositions and messaging, and put go-to-market and sales plans into practice.", "/", { "@type": "WebSite", name: "Wilbucks", publisher: company, mainEntity: company }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="home-hero">
      <SignalField />
      <div className="page-container hero-content">
        <p className="eyebrow hero-enter">Sales & marketing</p>
        <h1 className="hero-enter">Wilbucks<span className="hero-stop">.</span></h1>
        <p className="hero-statement hero-enter">Better value propositions.<br />Smarter routes to market.<br /><span>Growth that delivers.</span></p>
        <p className="hero-description hero-enter">We help technology businesses understand their target markets and buyers, shape a value proposition and messaging that resonates, and reach the right people at the right time.</p>
        <p className="hero-description hero-enter">From go-to-market strategy and communications to sales planning and training, we help turn strong products and services into commercial results.</p>
        <div className="hero-actions hero-enter"><Button asChild variant="editorial" size="editorial"><Link to="/contact">Talk to us <ArrowUpRight /></Link></Button><TextLink to="/expertise">Areas of expertise</TextLink></div>
        <div className="hero-footnote"><span>Wilbucks / Independent consultancy</span><a href="#perspective" aria-label="Explore the Wilbucks perspective">Scroll to explore <ArrowRight className="rotate-90" size={16} /></a></div>
      </div>
    </section>
    <section className="content-section" id="perspective"><div className="page-container"><SectionHeading number="01" label="Sales & marketing" title="A proposition is only useful if it reaches the right buyers."><p className="body-copy">Great technology and services can be overlooked when their value is hard to explain or the message never reaches the people making the decision. More sales or marketing activity alone does not solve that.</p><p className="body-copy">Wilbucks brings both disciplines together. Marie’s technology marketing background and Simon’s sales and commercial experience inform the work, from understanding the market to preparing teams to take the offer to buyers.</p><TextLink to="/about">About Wilbucks</TextLink></SectionHeading></div></section>
    <section className="expertise-band home-expertise"><div className="page-container"><SectionHeading number="02" label="Go-to-market" title="From understanding the market to reaching buyers" /><div className="focus-grid">{homeFocus.map((area, i) => <article data-reveal key={area.title}><span className="eyebrow">0{i+1}</span><h3>{area.title}</h3><p>{area.copy}</p><TextLink to="/expertise">Explore our approach</TextLink></article>)}</div></div></section>
    <section className="content-section home-directors"><div className="page-container"><SectionHeading number="03" label="Wilbucks" title="Our directors" /><Directors /></div></section>
    <div className="home-contact"><ContactBand actionLabel="Talk to us" /></div>
  </>;
}
