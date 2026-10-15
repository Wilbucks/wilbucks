import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, TextLink } from "@/components/wilbucks-shell";
import { simonLinkedin, simonPerson } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";
import { SignalField } from "@/components/signal-field";

const description = "Simon Wilcox is a sales and commercial leader and a director of Wilbucks, with a technology and security background.";
export const Route = createFileRoute("/simon-wilcox")({ head: () => pageHead("Simon Wilcox | Sales & Commercial Leadership | Wilbucks", description, "/simon-wilcox", { "@type": "ProfilePage", name: "Simon Wilcox", description, mainEntity: simonPerson }), component: Simon });
function Simon() {
 return <><section className="page-heading profile-hero"><SignalField /><div className="page-container simon-opening hero-enter"><p className="eyebrow">Director / Wilbucks</p><h1>Simon Wilcox.</h1><p className="profile-specialism">Sales and commercial leadership.</p><p className="body-copy">Simon is a sales and commercial leader and a director of Wilbucks. His background includes technology and security, with a professional focus on data intelligence in security and government.</p><p className="body-copy">His areas of focus include business development, sales strategy, market entry and client relationships. He brings a commercial perspective to product strategy: how technical capability becomes a proposition a buyer can understand and assess.</p><div className="profile-actions"><Button asChild variant="editorial" size="editorial"><a href={simonLinkedin} target="_blank" rel="noopener noreferrer">Simon on LinkedIn <ArrowUpRight /></a></Button><TextLink to="/marie-wilcox">Meet Marie Wilcox</TextLink></div></div></section><ContactBand /></>;
}