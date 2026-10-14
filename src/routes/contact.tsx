import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { email, linkedin, simonLinkedin } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Wilbucks | Sales & Marketing Consultancy", "Contact Wilbucks via Marie Wilcox to discuss positioning, reaching buyers and connecting sales and marketing priorities. Find both directors’ LinkedIn profiles.", "/contact"),
  component: ContactPage,
});

function ContactPage() {
  return <section className="contact-page"><div className="page-container"><div className="hero-enter"><p className="eyebrow">Contact / Let’s talk</p><h1>Contact Wilbucks<span className="text-primary">.</span></h1><p className="body-copy">Tell us what you are working through. If you want to discuss positioning, reaching the right buyers or bringing sales and marketing priorities together, contact Wilbucks via Marie.</p></div><div className="contact-options" data-reveal><div><p className="eyebrow">Email Marie about Wilbucks</p><a className="email-link" href={email}>marieawilcox@outlook.com <ArrowUpRight size={22} /></a><p className="body-copy">For company enquiries, contact Wilbucks via Marie. For Marie’s speaking and media enquiries, use the same email and include the opportunity in your message.</p></div><div><p className="eyebrow">Professional connection</p><Button asChild variant="link" className="text-link"><a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> Marie on LinkedIn <ArrowUpRight /></a></Button><p className="body-copy">Personal professional profiles for each director.</p><Button asChild variant="link" className="text-link"><a href={simonLinkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> Simon on LinkedIn <ArrowUpRight /></a></Button></div></div></div></section>;
}