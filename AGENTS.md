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

- Use company content routes, a directors directory, separate person profiles and a curated media route under the shared Wilbucks shell because company identity must remain distinct from individual reputations.
- Define editorial styling and semantic colors in the global stylesheet and use Button variants for actions to keep presentation consistent.
- Keep profile structured data limited to supplied identity and expertise; use relative canonical metadata until the final integration path is confirmed.
- Keep browser-safe typed content and metadata in shared modules so expertise and verified media remain consistent across pages without a database.
- Keep production sitemap and redirect configuration in launch templates, not served with an unapproved host, because this preview must not replace the live site.

- Keep media authorship category and publication-time attribution in typed records so personal bylines, quoted commentary and company coverage cannot be silently conflated.
