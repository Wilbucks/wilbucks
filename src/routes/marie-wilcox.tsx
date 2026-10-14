import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, SectionHeading, TextLink } from "@/components/wilbucks-shell";
import { pageHead } from "@/lib/page-head";
import { email, linkedin, organisations, profilePublications, person } from "@/lib/wilbucks-content";
import { PublicationList, Podcast } from "@/components/media-selection";
import portrait from "@/assets/marie-wilcox.jpg.asset.json";

const description = "Marie Wilcox is a senior technology marketing leader and Wilbucks director, with experience in positioning, product marketing, go-to-market, demand generation and AI-enabled marketing.";
export const Route = createFileRoute("/marie-wilcox")({
  head: () => pageHead("Marie Wilcox | Technology Marketing & Go-to-Market | Wilbucks", description, "/marie-wilcox", { "@type": "ProfilePage", name: "Marie Wilcox", description, mainEntity: person }),
  component: MariePage,
});

function MariePage() {
  return <>
    <section className="page-heading"><div className="page-container profile-opening"><div className="hero-enter"><p className="eyebrow">Director / Wilbucks</p><h1>Marie Wilcox<span className="text-primary">.</span></h1><p className="profile-specialism">Technology marketing</p><p className="body-copy">I’m a senior technology marketing leader and a director of Wilbucks. I have more than 20 years’ experience, with strengths in positioning, product marketing, go-to-market strategy and demand generation.</p><p className="body-copy">My work includes cybersecurity and enterprise technology. I’m also interested in the practical use of AI in marketing, particularly where it changes research, content production and day-to-day workflows.</p><div className="profile-actions"><Button asChild variant="editorial" size="editorial"><a href={email}>Email Marie <ArrowUpRight /></a></Button><Button asChild variant="link" className="text-link"><a href="#experience">Explore my experience ↓</a></Button></div></div><img className="profile-portrait hero-enter" src={portrait.url} width={1000} height={750} alt="Marie Wilcox in a black jacket and purple top" fetchPriority="high" /></div></section>
    <nav className="page-container profile-nav" aria-label="Marie profile sections"><a href="#experience">Experience</a><a href="#leadership">Professional involvement</a><a href="#media">Media &amp; podcast</a><a href="#speaking">Speaking</a></nav>
    <section className="content-section" id="experience"><div className="page-container"><SectionHeading number="01" label="Career" title="Experience"><p className="body-copy">My career includes the organisations below. My experience also covers category creation, analyst relations and communications, including work with Gartner on market categories.</p></SectionHeading><div className="career-names" aria-label="Career organisations">{organisations.map(name => <span key={name}>{name}</span>)}</div></div></section>
    <section className="content-section" id="leadership"><div className="page-container"><SectionHeading number="02" label="Professional involvement" title="CIM and CIISec"><p className="body-copy">I’m a Fellow of the Chartered Institute of Marketing (FCIM). My professional involvement has included leadership and board roles with the Chartered Institute of Marketing and the Chartered Institute of Information Security.</p><Button asChild variant="link" className="text-link mt-8"><a href={linkedin} target="_blank" rel="noopener noreferrer">Marie on LinkedIn <ArrowUpRight /></a></Button></SectionHeading></div></section>
    <section className="media-section" id="media"><div className="page-container"><SectionHeading number="03" label="Selected contributions" title="Writing and conversations" /><p className="media-intro">I’ve written about cybersecurity resources, recovery and forensic visibility, and contributed commentary to reporting on cyber risk. On Enterprise Thought Leadership, I discuss AI agents and marketing workflows.</p><PublicationList items={profilePublications} /><Podcast /><div className="profile-actions"><TextLink to="/press-coverage">Insights &amp; Media</TextLink><TextLink to="/directors">Our directors</TextLink></div></div></section>
    <section className="content-section" id="speaking"><div className="page-container"><SectionHeading number="04" label="Speaking" title="Speaking interests"><p className="body-copy">Product positioning, go-to-market strategy, demand generation and AI-enabled marketing. Cybersecurity commentary is a further area of interest, not the sole description of my work.</p><Button asChild variant="editorialOutline" size="editorial" className="mt-6"><a href={email}>Discuss a speaking opportunity <ArrowUpRight /></a></Button></SectionHeading></div></section>
    <ContactBand />
  </>;
}
