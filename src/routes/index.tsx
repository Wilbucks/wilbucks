import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, SectionHeading, TextLink } from "@/components/wilbucks-shell";
import { pageHead } from "@/lib/page-head";
import { homeFocus, company, email } from "@/lib/wilbucks-content";
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
        <h1 className="hero-statement hero-enter"><span className="hero-line hero-line-1">Better value propositions.</span><span className="hero-line hero-line-2">Smarter routes to market.</span><span className="hero-line hero-line-3">Growth that delivers.</span></h1>
        <p className="hero-description hero-enter">We provide sales and marketing packages that give your business the edge it needs to achieve investment and growth, developing a clear go-to-market and communications strategy, with a validated value proposition, sales planning and training.</p>
        <div className="hero-actions hero-enter"><Button asChild variant="editorial" size="editorial"><a href={email}>Talk to us <ArrowUpRight /></a></Button></div>
        <div className="hero-footnote"><span>Wilbucks / Independent consultancy</span><a href="#perspective" aria-label="Explore the Wilbucks perspective">Scroll to explore <ArrowRight className="rotate-90" size={16} /></a></div>
      </div>
    </section>
    <section className="content-section" id="perspective"><div className="page-container"><SectionHeading number="01" label="Sales & marketing" title="Turn great ideas into propositions that win business."><p className="body-copy">We start with the market, not the product. By understanding customer needs, target buyers and how decisions are made, we help you identify where your offer creates real value and what sets it apart.</p><p className="body-copy">We turn those insights into a clear, validated value proposition and positioning, with messaging that speaks to the problems buyers need to solve. Then we connect the proposition to a practical go-to-market and communications strategy, choosing the right routes to market and equipping sales teams with the planning and training to take it to buyers.</p><p className="body-copy">Meet <Link to="/marie-wilcox" className="text-primary underline underline-offset-4">Marie Wilcox</Link> and <Link to="/simon-wilcox" className="text-primary underline underline-offset-4">Simon Wilcox</Link>.</p></SectionHeading></div></section>
    <section className="expertise-band home-expertise"><div className="page-container"><SectionHeading number="02" label="Go-to-market" title="How we help: five practical steps" /><div className="focus-grid">{homeFocus.map((area, i) => <article data-reveal key={area.title}><span className="eyebrow">0{i+1}</span><h3>{area.title}</h3><p>{area.copy}</p></article>)}</div></div></section>
    <section className="content-section home-directors"><div className="page-container"><SectionHeading number="03" label="Wilbucks" title="Our directors" /><Directors /></div></section>
    <div className="home-contact"><ContactBand actionLabel="Talk to us" /></div>
  </>;
}
