import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check, Menu, X, Linkedin, Mail, MoveDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const description = "Meet Marie Wilcox, a technology marketing and go-to-market executive with 20+ years’ experience in commercial growth, cybersecurity commentary and AI-enabled marketing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "About Marie Wilcox — GTM, Cybersecurity & Technology Growth" },
      { name: "description", content: description },
      { property: "og:title", content: "Marie Wilcox — Go-to-Market, Cybersecurity & Technology Growth" },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "About Marie Wilcox",
      description,
      mainEntity: {
        "@type": "Person",
        name: "Marie Wilcox",
        description: "Technology marketing and go-to-market executive, cybersecurity commentator and AI-enabled growth practitioner with 20+ years’ experience.",
        email: "marieawilcox@outlook.com",
        sameAs: ["https://uk.linkedin.com/in/marieclutterbuck"],
        knowsAbout: ["Go-to-market strategy", "Product marketing", "Category creation", "Demand generation", "Analyst relations", "Communications", "Cybersecurity", "AI-enabled marketing workflows"],
        hasCredential: { "@type": "EducationalOccupationalCredential", name: "Fellow of the Chartered Institute of Marketing (FCIM)" },
      },
    }) }],
  }),
  component: ProfilePage,
});

const navigation = [
  ["About", "about"], ["Media & Press", "media"], ["GTM & Growth", "growth"], ["Speaking", "speaking"], ["Contact", "contact"],
];
const email = "mailto:marieawilcox@outlook.com";
const linkedin = "https://uk.linkedin.com/in/marieclutterbuck";

function Section({ id, number, label, children }: { id: string; number: string; label: string; children: ReactNode }) {
  return <section id={id} className="editorial-section"><div className="page-container section-grid"><div className="section-marker"><span className="section-number">{number}</span><p className="eyebrow">{label}</p></div><div>{children}</div></div></section>;
}

function ProfilePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header relative z-30">
        <div className="page-container flex h-full items-center justify-between gap-6">
          <a href="#about" className="wordmark" aria-label="Marie Wilcox, back to top">Marie Wilcox<span className="text-primary">.</span></a>
          <nav aria-label="Main navigation" className="desktop-nav flex items-center gap-8">{navigation.map(([label, id]) => <a className="nav-link" href={`#${id}`} key={id}>{label}{id === "contact" && <ArrowUpRight className="ml-1 inline size-3" />}</a>)}</nav>
          <Button className="md:hidden" variant="ghost" size="icon" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-menu md:hidden">{navigation.map(([label, id]) => <a className="nav-link" href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>
      <main>
        <section id="about" className="hero page-container reveal">
          <div className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" /><p className="eyebrow text-muted-foreground">Executive perspective. Commercial impact.</p></div>
          <h1 className="hero-title"><span className="name">Marie Wilcox <span className="text-primary">—</span></span>Go-to-Market, Cybersecurity <span className="specialism">&amp; Technology Growth</span></h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-intro text-muted-foreground">A technology marketing and GTM executive, cybersecurity commentator and AI-enabled growth practitioner. <span className="text-foreground">20+ years connecting complex technology with the markets that matter.</span></p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="editorial" size="editorial"><a href={email}>Media &amp; speaking enquiries <ArrowUpRight /></a></Button>
                <Button asChild variant="editorialOutline" size="editorial"><a href="#growth">Explore my experience <MoveDown /></a></Button>
              </div>
            </div>
            <div className="portrait-placeholder" role="img" aria-label="Placeholder for a future portrait of Marie Wilcox; no photograph supplied"><span className="portrait-monogram" aria-hidden="true">MW</span><span className="portrait-label">Portrait to follow</span></div>
          </div>
        </section>
        <div className="career-strip"><div className="page-container"><p className="eyebrow text-muted-foreground">A career across technology &amp; cybersecurity</p><div className="career-names">{["Binalyze", "Panaseer", "McLaren Applied", "Digital Barriers", "Siemens", "BAE Systems"].map(name => <span key={name}>{name}</span>)}</div></div></div>
        <Section id="growth" number="01" label="GTM & commercial growth">
          <h2 className="section-title">Turning complex technology<br className="hidden lg:block" /> into a compelling market story.</h2>
          <p className="body-copy mt-5 max-w-2xl">My work sits at the intersection of market understanding, product value and commercial ambition. Across technology and cybersecurity businesses, I bring clarity to positioning and connect go-to-market strategy with the work of building demand.</p>
          <div className="expertise-list">{["Go-to-market strategy", "Product marketing & positioning", "Category creation", "Demand generation", "Analyst relations", "Communications & market narrative"].map(item => <div key={item} className="expertise-item"><Check strokeWidth={1.5} /><span>{item}</span></div>)}</div>
          <p className="body-copy mt-5">My experience includes working with Gartner on market categories, bringing an analyst-informed perspective to how technology markets are understood and described.</p>
        </Section>
        <section id="media" className="press-band"><div className="page-container section-grid"><div className="section-marker"><span className="section-number">02</span><p className="eyebrow">Media &amp; cybersecurity</p></div><div>
          <h2 className="section-title">A clear voice on cybersecurity.<br />Beyond the technical headlines.</h2>
          <p className="body-copy mt-5">I comment on cybersecurity through a business and communications lens, connecting technical issues with their implications for organisations, customers and trust.</p>
          <h3 className="eyebrow mt-9">Featured media coverage</h3>
          <div className="press-grid"><article className="press-item"><h4 className="publication">The Guardian</h4><p className="body-copy mt-3">National press coverage and cybersecurity commentary.</p></article><article className="press-item"><h4 className="publication">Sky News</h4><p className="body-copy mt-3">Cybersecurity perspective for a wider news audience.</p></article></div>
          <p className="body-copy">Broader coverage spans national and international media, alongside specialist cybersecurity publications.</p>
          <div className="mt-7 border-t border-ink-foreground/20 pt-5"><p className="eyebrow">In focus · October 2026</p><p className="body-copy mt-2">Cybersecurity commentary relating to ASOS.</p></div>
          <Button asChild variant="link" className="mt-5 h-auto p-0 text-ink-foreground"><a href={email}>For commentary &amp; interview enquiries <ArrowUpRight /></a></Button>
        </div></div></section>
        <Section id="ai" number="03" label="AI-enabled marketing">
          <h2 className="section-title">New tools. Sound judgement.<br />Better go-to-market thinking.</h2>
          <p className="body-copy mt-5">I bring a practical, practitioner-led approach to AI-enabled marketing and GTM workflows. The focus is on using emerging tools thoughtfully, while keeping strategy, brand credibility and human judgement at the centre.</p>
          <div className="mt-7 flex items-start gap-4 border-l-2 border-primary pl-5"><p className="text-lg leading-relaxed">AI-enabled growth, grounded in commercial experience.</p></div>
        </Section>
        <Section id="leadership" number="04" label="Leadership & credentials">
          <h2 className="section-title">Experience with perspective.<br />Leadership with substance.</h2>
          <p className="body-copy mt-5">A career spanning Binalyze, Panaseer, McLaren Applied, Digital Barriers, Siemens and BAE Systems brings experience across cybersecurity, applied technology and complex B2B markets.</p>
          <div className="credential-grid"><div className="credential"><span className="eyebrow text-primary">Professional recognition</span><h3 className="mt-3 text-xl font-medium">FCIM</h3><p className="body-copy mt-2">Fellow of the Chartered Institute of Marketing.</p></div><div className="credential"><span className="eyebrow text-primary">Professional contribution</span><h3 className="mt-3 text-xl font-medium">CIM &amp; CIISec</h3><p className="body-copy mt-2">Professional leadership and board roles with the Chartered Institute of Marketing and the Chartered Institute of Information Security.</p></div></div>
          <a className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-primary" href={linkedin} target="_blank" rel="noopener noreferrer">Explore my professional background on LinkedIn <ArrowUpRight className="size-4" /></a>
        </Section>
        <Section id="speaking" number="05" label="Speaking & conversations">
          <h2 className="section-title">Ideas for your next<br />meaningful conversation.</h2>
          <p className="body-copy mt-5">For conference organisers, journalists and leadership teams: perspectives informed by hands-on work across technology, marketing and cybersecurity.</p>
          <div className="topic-list">{[
            ["Taking complex technology to market", "Positioning, category creation and connecting product value with commercial opportunity."],
            ["Cybersecurity, communication & trust", "Bringing a business perspective to cyber issues and the public conversation."],
            ["AI-enabled marketing & GTM", "Practical workflows, human judgement and the changing work of marketing."],
            ["Leading marketing in technology businesses", "The relationship between marketing, executive leadership and commercial growth."],
          ].map(([title, copy], i) => <div key={title} className="topic-row"><span className="mt-1 text-xs text-muted-foreground">0{i + 1}</span><div><h3 className="text-lg font-medium">{title}</h3><p className="body-copy mt-1">{copy}</p></div></div>)}</div>
          <Button asChild variant="editorialOutline" size="editorial" className="mt-5"><a href={email}>Discuss a speaking opportunity <ArrowUpRight /></a></Button>
        </Section>
        <section id="contact" className="contact-band"><div className="page-container section-grid"><div className="section-marker"><span className="section-number">06</span><p className="eyebrow">Get in touch</p></div><div><h2 className="contact-heading">Let’s start a conversation<span className="text-primary">.</span></h2><p className="body-copy mt-5 max-w-xl">Executive opportunities, media commentary, speaking engagements or a conversation about technology growth.</p><div className="mt-7 flex flex-wrap items-center gap-5"><Button asChild variant="editorial" size="editorial"><a href={email}><Mail /> Contact Marie <ArrowUpRight /></a></Button><Button asChild variant="link" className="px-0 text-foreground"><a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> Connect on LinkedIn <ArrowUpRight /></a></Button></div><a href={email} className="mt-5 inline-block break-all text-xs text-muted-foreground">marieawilcox@outlook.com</a></div></div></section>
      </main>
      <footer className="site-footer"><div className="page-container flex flex-wrap items-center justify-between gap-4"><p>© 2026 Marie Wilcox</p><p>Go-to-market. Cybersecurity. Technology growth.</p><a href="#about" className="flex items-center gap-2">Back to top <ArrowRight className="size-3 -rotate-90" /></a></div></footer>
    </>
  );
}
