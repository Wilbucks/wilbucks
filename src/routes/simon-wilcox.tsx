import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand, TextLink } from "@/components/wilbucks-shell";
import { simonLinkedin, simonPerson } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";

const description = "Simon Wilcox is a director of Wilbucks, with a professional focus on data intelligence in security and government.";
export const Route = createFileRoute("/simon-wilcox")({ head: () => pageHead("Simon Wilcox | Director, Technology & Cybersecurity | Wilbucks", description, "/simon-wilcox", { "@type": "ProfilePage", name: "Simon Wilcox", description, mainEntity: simonPerson }), component: Simon });
function Simon() {
 return <><section className="page-heading"><div className="page-container simon-opening hero-enter"><p className="eyebrow">Director / Wilbucks</p><h1>Simon Wilcox.</h1><p className="profile-specialism">Technology and cybersecurity.</p><p className="body-copy">Simon Wilcox is a director of Wilbucks. His professional focus includes data intelligence in security and government. His public LinkedIn contributions address technology and cybersecurity, including the NCSC’s Cyber Assessment Framework.</p><div className="profile-actions"><Button asChild variant="editorial" size="editorial"><a href={simonLinkedin} target="_blank" rel="noopener noreferrer">Simon on LinkedIn <ArrowUpRight /></a></Button><TextLink to="/directors">Our directors</TextLink></div></div></section><ContactBand /></>;
}