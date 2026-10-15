import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, SectionHeading, TextLink } from "@/components/wilbucks-shell";
import { simonLinkedin, simonPerson } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";
import { ProfileField } from "@/components/profile-field";
import portrait from "@/assets/simon-wilcox.jpg.asset.json";

const description = "Simon Wilcox is a sales and commercial leader and a director of Wilbucks, with a technology and security background.";

const careerNames = ["Daintta", "QinetiQ / Naimuri", "SecureCloud+", "BAE Systems Applied Intelligence", "BAE Systems Detica", "Categoric Software", "UK Government"];

export const Route = createFileRoute("/simon-wilcox")({ head: () => pageHead("Simon Wilcox | Sales & Commercial Leadership | Wilbucks", description, "/simon-wilcox", { "@type": "ProfilePage", name: "Simon Wilcox", description, mainEntity: simonPerson }), component: Simon });
function Simon() {
  return <>
    <section className="page-heading profile-hero"><ProfileField /><div className="page-container profile-opening"><div className="hero-enter"><h1>Simon Wilcox<span className="text-primary">.</span></h1><h2 className="profile-specialism">Sales and commercial leadership.</h2><p className="body-copy">Simon is a sales and commercial leader and a director of Wilbucks. His background includes technology and security, with a professional focus on data intelligence in security and government.</p><p className="body-copy">His areas of focus include business development, sales strategy, market entry and client relationships. He brings a commercial perspective to product strategy: how technical capability becomes a proposition a buyer can understand and assess.</p><div className="profile-actions"><Button asChild variant="editorial" size="editorial"><a href={simonLinkedin} target="_blank" rel="noopener noreferrer">Simon on LinkedIn <ArrowUpRight /></a></Button><Button asChild variant="link" className="text-link"><Link to="/marie-wilcox">Meet Marie Wilcox <ArrowUpRight /></Link></Button></div></div><img className="profile-portrait hero-enter" src={portrait.url} width={1000} height={750} alt="Simon Wilcox in a navy blazer and white shirt" fetchPriority="high" /></div></section>
    <nav className="page-container profile-nav profile-nav-branded" aria-label="Simon profile sections"><a href="#experience">Experience</a></nav>
    <section className="content-section profile-accent" id="experience"><div className="page-container"><SectionHeading number="01" label="Career" title="Experience"><h3 className="mt-6 text-xl leading-8">From engineering to commercial leadership</h3><p className="body-copy">Simon began his career in engineering and software roles at GCHQ, before moving into commercial technology and then into sales and business development. That technical grounding shapes how he works: he understands the capability behind a proposition, and how to present it so a buyer can assess its value.</p><p className="body-copy">Over more than two decades he has progressed through sales, business development and product strategy roles to senior leadership in the government and national-security sector, building businesses and pipelines at Detica, BAE Systems Applied Intelligence, SecureCloud+, QinetiQ and Daintta.</p></SectionHeading>
      <div className="mt-10">{career.map(item => <div className="topic-row" key={item.company}><p className="eyebrow text-primary">{item.dates}</p><h3 className="mt-2">{item.company} — {item.role}</h3><p>{item.copy}</p></div>)}</div>
      <div className="career-names justify-center text-center" aria-label="Career organisations">{career.map(item => <span key={item.company}>{item.company}</span>)}</div>
      <p className="body-copy mt-10">Simon's expertise covers government and national-security business development, cybersecurity, data intelligence and AI, proposition and go-to-market development, partner ecosystems, opportunity shaping, bids and commercial leadership. He has built partnerships with organisations including Microsoft, Leonardo, AWS and Salesforce.</p></div></section>
    <ContactBand />
  </>;
}
