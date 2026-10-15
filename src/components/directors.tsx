import { directorIntroductions } from "@/lib/wilbucks-content";
import { TextLink } from "@/components/wilbucks-shell";

export function Directors() {
  return <div className="director-grid">{directorIntroductions.map(director => <article key={director.name} data-reveal><h3>{director.name}</h3><p className="body-copy">{director.copy}</p><TextLink to={director.path}>{director.name.split(" ")[0]}’s profile</TextLink></article>)}</div>;
}