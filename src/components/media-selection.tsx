import { ArrowUpRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { podcast, type Publication } from "@/lib/wilbucks-content";

export function PublicationList({ items }: { items: Publication[] }) {
  return <div className="publication-list">{items.map(item => <article className="publication-row" key={item.url} data-reveal><div><p className="eyebrow">{item.category === "authored" ? "Article by Marie" : "Press commentary / quoted in"}</p><p className="publication-source">{item.outlet}<br />{item.date}</p></div><div><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h3><p>{item.context}</p><small>{item.attribution}</small></div><Button asChild variant="ghost" size="icon"><a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${item.title}`} title="Read original source"><ArrowUpRight /></a></Button></article>)}</div>;
}

export function Podcast() {
  return <article className="podcast-row" data-reveal><div><p className="eyebrow">Podcast / Marie Wilcox</p><p>Enterprise Thought Leadership / Episode 86</p></div><div><h3>From SDRs to AI Agents: Building Marketing’s Agentic Future with Marie Wilcox</h3><p>AI-enabled marketing workflows and the changing work of go-to-market teams.</p></div><Button asChild variant="link" className="text-link"><a href={podcast} target="_blank" rel="noopener noreferrer"><Headphones /> Listen on Spotify <ArrowUpRight /></a></Button></article>;
}