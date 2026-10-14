import { createFileRoute } from "@tanstack/react-router";
import { Podcast, PublicationList } from "@/components/media-selection";
import { SectionHeading, TextLink, ContactBand } from "@/components/wilbucks-shell";
import { recentPublications, earlierPublications } from "@/lib/wilbucks-content";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/press-coverage")({ head: () => pageHead("Wilbucks Insights & Media | Marie Wilcox’s Writing & Commentary", "Selected writing, press commentary and a podcast featuring Marie Wilcox, with recent contributions and earlier articles from 2018 onwards.", "/press-coverage"), component: Media });
function Media() {
 return <><section className="page-heading"><div className="page-container hero-enter"><p className="eyebrow">Selected contributions</p><h1>Insights &amp; Media.</h1><p className="body-copy">Selected writing, press commentary and a podcast featuring Marie Wilcox. Contributions below retain the byline and role used at publication.</p></div></section><section className="media-section"><div className="page-container"><SectionHeading number="01" label="Recent work" title="Recent writing and commentary" /><PublicationList items={recentPublications} /></div></section><section className="content-section"><div className="page-container"><SectionHeading number="02" label="Podcast" title="Enterprise Thought Leadership" /><Podcast /></div></section><section className="content-section"><div className="page-container"><SectionHeading number="03" label="Earlier work" title="Earlier writing and commentary" /><PublicationList items={earlierPublications} /><TextLink to="/marie-wilcox">Marie’s profile</TextLink></div></section><ContactBand /></>;
}
