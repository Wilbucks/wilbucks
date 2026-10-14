import { createFileRoute } from "@tanstack/react-router";
import { Directors } from "@/components/directors";
import { ContactBand } from "@/components/wilbucks-shell";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/directors")({ head: () => pageHead("Our Directors | Marie Wilcox & Simon Wilcox | Wilbucks", "Meet Wilbucks directors Marie Wilcox and Simon Wilcox, bringing distinct perspectives across technology, cybersecurity and marketing.", "/directors"), component: DirectorsPage });
function DirectorsPage() {
 return <><section className="page-heading"><div className="page-container hero-enter"><p className="eyebrow">Our people</p><h1>Our directors.</h1><p className="profile-specialism">Two directors. Distinct perspectives.</p><p className="body-copy">Marie Wilcox and Simon Wilcox are the directors of Wilbucks. Their profiles describe their individual experience and interests.</p></div></section><section className="content-section"><div className="page-container"><Directors /></div></section><ContactBand /></>;
}