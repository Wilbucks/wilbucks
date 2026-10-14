import { createFileRoute } from "@tanstack/react-router";
import { Directors } from "@/components/directors";
import { ContactBand } from "@/components/wilbucks-shell";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/directors")({ head: () => pageHead("Our Directors | Marie Wilcox & Simon Wilcox | Wilbucks", "Meet Marie Wilcox and Simon Wilcox, the two directors of Wilbucks, with backgrounds in technology marketing and sales and commercial leadership.", "/directors"), component: DirectorsPage });
function DirectorsPage() {
 return <><section className="page-heading"><div className="page-container hero-enter"><p className="eyebrow">Our people</p><h1>Our directors.</h1><p className="body-copy">Marie Wilcox and Simon Wilcox are the two directors of Wilbucks. Marie brings technology marketing experience. Simon brings sales and commercial leadership.</p></div></section><section className="content-section"><div className="page-container"><Directors /></div></section><ContactBand /></>;
}