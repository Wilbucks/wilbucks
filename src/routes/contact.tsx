import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { email, linkedin } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Wilbucks & Marie Wilcox | Consulting, Media & Speaking", "Contact Marie Wilcox directly for technology marketing, go-to-market conversations, cybersecurity commentary, speaking and professional opportunities.", "/contact"),
  component: ContactPage,
});

function ContactPage() {
  return <section className="contact-page"><div className="page-container"><div className="hero-enter"><p className="eyebrow">Contact / Let’s talk</p><h1>A conversation is<br />a good place to start<span className="text-primary">.</span></h1><p className="body-copy">Your next market challenge. A speaking opportunity.<br />A perspective on cybersecurity or technology growth.</p></div><div className="contact-options" data-reveal><div><p className="eyebrow">Email Marie</p><a className="email-link" href={email}>marieawilcox@outlook.com <ArrowUpRight size={22} /></a><p className="body-copy">For consulting conversations, executive opportunities,<br />media commentary and speaking enquiries.</p></div><div><p className="eyebrow">Professional connection</p><Button asChild variant="link" className="text-link"><a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> Connect on LinkedIn <ArrowUpRight /></a></Button><p className="body-copy">Professional background and a direct connection with Marie.</p></div></div></div></section>;
}