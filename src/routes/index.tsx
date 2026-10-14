import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, SectionHeading, TextLink } from "@/components/wilbucks-shell";
import { pageHead } from "@/lib/page-head";
import { focusAreas } from "@/lib/wilbucks-content";
import scene from "@/assets/technology-path.jpg";
import portrait from "@/assets/marie-wilcox.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => pageHead("Wilbucks | Technology, Go-to-Market & Commercial Growth", "Independent sales and marketing consultancy thinking for technology businesses. Connecting technical capability with market relevance and commercial growth.", "/", { "@type": "WebSite", name: "Wilbucks", description: "Independent sales and marketing consultancy for technology businesses." }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="home-hero">
      <img className="hero-scene" src={scene} alt="" width={1920} height={1088} fetchPriority="high" />
      <div className="page-container hero-content">
        <p className="eyebrow hero-enter">Independent sales & marketing consultancy</p>
        <h1 className="hero-enter">Wilbucks<span className="text-primary">.</span></h1>
        <p className="hero-statement hero-enter">Making technology<br />matter to the market.</p>
        <p className="hero-description hero-enter">Turning technical capability into market relevance<br className="desktop-break" /> and commercial growth.</p>
        <div className="hero-actions hero-enter"><Button asChild variant="editorial" size="editorial"><a href="/expertise">Explore the expertise <ArrowUpRight /></a></Button><TextLink to="/contact">Let’s talk</TextLink></div>
        <div className="hero-footnote"><span>Go-to-market / Cybersecurity / AI</span><a href="#perspective" aria-label="Explore the Wilbucks perspective">Scroll to explore <ArrowRight className="rotate-90" size={16} /></a></div>
      </div>
    </section>
    <section className="content-section" id="perspective"><div className="page-container"><SectionHeading number="01" label="The perspective" title="Great technology needs a clear commercial story."><p className="body-copy">Technical excellence is only part of the picture. The challenge is connecting what your technology can do with what your market needs—and why it matters.</p><p className="body-copy">Wilbucks brings independent sales and marketing thinking to that conversation: clear positioning, connected go-to-market decisions and practical commercial focus.</p></SectionHeading><div className="market-path" data-reveal>{["Technical capability", "Market relevance", "Commercial growth"].map((item, i) => <div key={item}><span className="path-number">0{i+1}</span><h3>{item}</h3>{i < 2 && <ArrowRight aria-hidden="true" />}</div>)}</div></div></section>
    <section className="expertise-band"><div className="page-container"><SectionHeading number="02" label="Areas of focus" title="From complex questions to clearer direction." /><div className="focus-grid">{focusAreas.slice(0,3).map((area, i) => <article data-reveal key={area.title}><span className="eyebrow">0{i+1}</span><h3>{area.title}</h3><p>{area.copy}</p><TextLink to="/expertise">Explore this area</TextLink></article>)}</div><div className="focus-bottom"><span>Cybersecurity & enterprise technology · Practical AI · Sales & marketing alignment</span><TextLink to="/expertise">All areas of expertise</TextLink></div></div></section>
    <section className="content-section"><div className="page-container marie-intro"><div className="intro-portrait" data-reveal><img src={portrait.url} width={1000} height={750} alt="Marie Wilcox, technology marketing and go-to-market leader" loading="lazy" /></div><div data-reveal><p className="eyebrow">03 / The person behind the perspective</p><h2>Marie Wilcox.<br />Experience that connects.</h2><p className="body-copy">A technology marketing and GTM executive, cybersecurity commentator and AI-enabled growth practitioner with 20+ years’ experience.</p><p className="body-copy">From enterprise technology to cybersecurity, my work connects complex products with the markets and people that matter.</p><TextLink to="/marie-wilcox">Meet Marie</TextLink></div></div></section>
    <ContactBand />
  </>;
}
