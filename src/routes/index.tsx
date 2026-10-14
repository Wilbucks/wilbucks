import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, SectionHeading, TextLink } from "@/components/wilbucks-shell";
import { pageHead } from "@/lib/page-head";
import { homeFocus, company } from "@/lib/wilbucks-content";
import scene from "@/assets/technology-path.jpg";
import { Directors } from "@/components/directors";

export const Route = createFileRoute("/")({
  head: () => pageHead("Wilbucks | Sales & Marketing Consultancy for Technology Businesses", "Wilbucks is an independent sales and marketing consultancy for technology businesses, working on propositions, routes to market and sales opportunities.", "/", { "@type": "WebSite", name: "Wilbucks", publisher: company, mainEntity: company }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="home-hero">
      <img className="hero-scene" src={scene} alt="" width={1920} height={1088} fetchPriority="high" />
      <div className="page-container hero-content">
        <p className="eyebrow hero-enter">Sales & marketing</p>
        <h1 className="hero-enter">Wilbucks<span className="text-primary">.</span></h1>
        <p className="hero-statement hero-enter">Independent sales and marketing consultancy for technology businesses.</p>
        <p className="hero-description hero-enter">We work on the commercial decisions behind a technology business: the proposition, the route to market and how sales and marketing win business.</p>
        <div className="hero-actions hero-enter"><Button asChild variant="editorial" size="editorial"><a href="/expertise">Areas of expertise <ArrowUpRight /></a></Button><TextLink to="/contact">Contact Wilbucks</TextLink></div>
        <div className="hero-footnote"><span>Wilbucks / Independent consultancy</span><a href="#perspective" aria-label="Explore the Wilbucks perspective">Scroll to explore <ArrowRight className="rotate-90" size={16} /></a></div>
      </div>
    </section>
    <section className="content-section" id="perspective"><div className="page-container"><SectionHeading number="01" label="Sales & marketing" title="Why sales and marketing together?"><p className="body-copy">That might mean revisiting a product’s positioning, choosing a market to enter or examining why marketing interest is not turning into sales opportunities. Marie and Simon bring marketing and sales experience to those decisions.</p><p className="body-copy">A campaign can attract attention without creating pipeline. A sales conversation can expose a weakness in the proposition that marketing has missed. Wilbucks looks at both sides before recommending more activity.</p><TextLink to="/about">About Wilbucks</TextLink></SectionHeading></div></section>
    <section className="expertise-band"><div className="page-container"><SectionHeading number="02" label="Areas of focus" title="Where we focus" /><div className="focus-grid">{homeFocus.map((area, i) => <article data-reveal key={area.title}><span className="eyebrow">0{i+1}</span><h3>{area.title}</h3><p>{area.copy}</p><TextLink to="/expertise">{area.title}</TextLink></article>)}</div></div></section>
    <section className="content-section"><div className="page-container"><SectionHeading number="03" label="Wilbucks" title="Our directors" /><Directors /></div></section>
    <ContactBand />
  </>;
}
