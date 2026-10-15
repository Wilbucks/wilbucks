import { ArrowUpRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { podcast, type Publication } from "@/lib/wilbucks-content";

export function PublicationList({ items }: { items: Publication[] }) {
  return <div className="publication-list">{items.map(item => <article className="publication-row" key={item.url} data-reveal><div><p className="eyebrow">{item.category === "authored" ? "Written by Marie" : "Quoted in"}</p><p className="publication-source">{item.outlet}<br />{item.date}</p></div><div><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h3><p>{item.context}</p><small>{item.attribution}</small></div><Button asChild variant="ghost" size="icon"><a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${item.title}`} title="Read original source"><ArrowUpRight /></a></Button></article>)}</div>;
}

export function Podcast() {
  return <article className="podcast-featured" data-reveal>
    <div>
      <p className="text-xs leading-6 text-muted-foreground">Enterprise Thought Leadership<br />Episode 86</p>
      <p className="eyebrow mt-1 text-primary">Podcast / Marie Wilcox</p>
    </div>
    <div>
      <h3><a href={podcast} target="_blank" rel="noopener noreferrer">From SDRs to AI Agents: Building Marketing’s Agentic Future with Marie Wilcox</a></h3>
      <p className="podcast-featured__copy">Marie discusses AI-enabled marketing workflows.</p>
      <Button asChild variant="link" className="text-link"><a href={podcast} target="_blank" rel="noopener noreferrer"><Headphones /> Listen on Spotify <ArrowUpRight /></a></Button>
    </div>
  </article>;
}

export function CompactPublicationList({ items, category }: { items: ReadonlyArray<{ outlet: string; title: string; url: string; date?: string; attribution?: string }>; category: "authored" | "quoted" }) {
  return <ul className="mt-7 border-b border-border">{items.map(item => <li key={item.url} className="grid gap-3 border-t border-border py-5 md:grid-cols-[210px_minmax(0,1fr)] md:gap-8"><div><p className="text-xs leading-6 text-muted-foreground">{item.outlet}{item.date && <> · {item.date}</>}</p><p className="eyebrow mt-1 text-primary">{category === "authored" ? "Written by Marie" : "Quoted in"}</p></div><div><a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-3 text-base leading-7 text-foreground hover:text-primary"><span>{item.title}</span><ArrowUpRight className="mt-1 size-4 shrink-0" aria-hidden="true" /></a>{item.attribution && <p className="mt-2 text-xs leading-6 text-muted-foreground">{item.attribution}</p>}</div></li>)}</ul>;
}