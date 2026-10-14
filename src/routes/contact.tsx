import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { email, linkedin, simonLinkedin } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Wilbucks | Sales & Marketing Consultancy", "Email Marie Wilcox about a sales or marketing question for Wilbucks, or find Marie and Simon’s personal LinkedIn profiles.", "/contact"),
  component: ContactPage,
});

function ContactPage() {
  return <section className="contact-page"><div className="page-container"><div className="hero-enter"><p className="eyebrow">Company enquiries</p><h1>Contact Wilbucks<span className="text-primary">.</span></h1><p className="body-copy">For a company enquiry, email Marie with a short outline of the sales or marketing question you want to discuss.</p></div><div className="contact-options" data-reveal><div><p className="eyebrow">Email about Wilbucks</p><a className="email-link" href={email}>marieawilcox@outlook.com <ArrowUpRight size={22} /></a><p className="body-copy">For Marie’s speaking or media enquiries, use the same address and include the subject, timing and format.</p></div><div><p className="eyebrow">Personal profiles</p><Button asChild variant="link" className="text-link"><a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> Marie on LinkedIn <ArrowUpRight /></a></Button><Button asChild variant="link" className="text-link"><a href={simonLinkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> Simon on LinkedIn <ArrowUpRight /></a></Button></div></div></div></section>;
}