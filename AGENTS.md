<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep company pages and separate director profiles under the shared Wilbucks shell, with retired content routes redirecting home, because company identity must remain distinct from individual reputations and old links must still resolve.
- Define editorial styling and semantic colors in the global stylesheet and use Button variants for actions to keep presentation consistent.
- Keep structured data limited to supplied identity and expertise, and point canonicals, og:url and schema @ids at the production origin in page-head.ts; robots meta stays noindex unless a launch build sets VITE_ALLOW_INDEXING=true, so the preview can never be indexed by accident.
- Keep browser-safe typed content and metadata in shared modules so expertise and verified media remain consistent across pages without a database.
- Keep production sitemap and redirect configuration in launch templates, not served with an unapproved host, because this preview must not replace the live site.

- Keep media authorship category and publication-time attribution in typed records so personal bylines, quoted commentary and company coverage cannot be silently conflated.
- Keep profile media selections and distinct professional appointments in browser-safe records, rendering media as compact lists, so attribution and organisation boundaries remain testable without a database.
- Keep homepage artwork in a browser-mounted Canvas 2D component with CSS palette tokens, bounded resolution and visibility/reduced-motion guards, so motion needs no external assets or rendering dependency.
- GitHub Pages tests use opt-in prerendering, a shared Vite/router base and an exported static client directory; manual deployment rejects an existing custom domain and keeps noindex so test hosting cannot replace production.
