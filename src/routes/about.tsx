import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, SectionHeading, TextLink } from "@/components/wilbucks-shell";
import { company, email } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";
import { AboutField } from "@/components/about-field";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Wilbucks | B2B Sales & Go-to-Market Experience", "Marie and Simon Wilcox bring more than 20 years of B2B sales and marketing experience between them to value propositions, communications and go-to-market plans.", "/about", company),
  component: About,
});

function About() {
  return <>
    <section className="page-heading profile-hero about-hero"><AboutField /><div className="page-container hero-enter about-opening">
      <p className="eyebrow">About Wilbucks</p>
      <h1>Helping businesses turn great technology and services <span className="text-primary">into growth.</span></h1>
      <p className="body-copy">We are a company set up to help SMEs and large organisations get the investment they need and really grow. Many organisations have great technology or services but communicate them poorly to their target markets, wasting money and resources and sometimes failing to succeed.</p>
      <p className="body-copy">Our business is founded on more than 20 years of B2B experience across sales and marketing, working in large corporates and small start-ups, including businesses backed by private equity and venture capital from Series A to Series C. We help deliver better value propositions, and marketing and sales strategies that actually deliver revenue and growth. Wilbucks is led by two directors, Marie Wilcox and Simon Wilcox.</p>
      <Button asChild variant="editorial" size="editorial" className="mt-6"><a href={email}>Talk to us <ArrowUpRight /></a></Button>
    </div></section>
    <section className="content-section"><div className="page-container"><SectionHeading number="01" label="Our approach" title="A proposition that meets a real customer need">
      <p className="body-copy">Without a solid, clearly communicated value proposition, targeted at the right audience and meeting a real customer need, a business will struggle to achieve revenue or investment.</p>
      <p className="body-copy">We help make sure your products and services are right for your customers, investors and markets by developing the right sales and marketing strategies to support growth, investment and ROI.</p>
      <p className="body-copy">Where it adds real value, we also help businesses identify opportunities to embed AI into their systems and processes. The focus is practical: using AI to improve how work gets done, support better decisions and make teams more effective, with a clear purpose rather than technology for its own sake.</p>
      <div className="profile-actions"><TextLink to="/marie-wilcox">Meet Marie Wilcox</TextLink><TextLink to="/simon-wilcox">Meet Simon Wilcox</TextLink></div>
    </SectionHeading></div></section>
    <ContactBand actionLabel="Talk to us" />
  </>;
}
