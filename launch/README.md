# Wilbucks launch checklist

**No DNS, custom-domain or live-site change may happen until the owner explicitly approves the launch.** Nothing below has been run against production. Redirects are not live until tested on www.wilbucks.com.

## Production launch (future, approval only)

Pages: `/`, `/about`, `/marie-wilcox`, `/simon-wilcox`. Canonicals, og:url and JSON-LD `@id`s already point at `https://www.wilbucks.com` in every build (`src/lib/page-head.ts`).

1. Build at root with indexing deliberately on (all three variables required):
   ```
   VITE_STATIC_EXPORT=true VITE_SITE_BASE=/ VITE_ALLOW_INDEXING=true bun run build
   WILBUCKS_TARGET=production VITE_SITE_BASE=/ VITE_ALLOW_INDEXING=true node launch/prepare-pages.mjs
   ```
   The prepare step refuses production unless base is `/` and indexing is `true`, and refuses indexing on any non-production export. It checks each page for `index, follow`, its production canonical and exactly one h1, exports the logo and portraits into `dist/client/__l5e/...`, and writes `robots.txt` (with `Sitemap: https://www.wilbucks.com/sitemap.xml`) and `sitemap.xml` (four URLs). `launch/generate-search-files.py <origin> <dir>` produces the same two files for another approved origin.
2. Upload only `dist/client` to the chosen host. No server is needed at runtime.
3. Host-level redirects (configure on the approved host, not applied anywhere yet):
   - `wilbucks.com/*` → `https://www.wilbucks.com/:path` 301, and `http://` → `https://` 301.
   - `/expertise`, `/directors`, `/press-coverage`, `/contact` (with or without trailing slash) → `/` 301.
   - Netlify/Cloudflare Pages `_redirects` example: `/expertise  /  301` (one line per path). Nginx: `location ~ ^/(expertise|directors|press-coverage|contact)/?$ { return 301 /; }`.
   - The export also contains noindex HTML fallbacks at those paths for hosts that cannot send 301s (GitHub Pages). Real 301s are preferred and take precedence where supported.
4. Verify on production: each page opens directly and on refresh; `curl -I` shows 301 for the four legacy paths and the apex; page source shows `index, follow` and the self canonical; `/robots.txt` and `/sitemap.xml` load; images and logo load; validate JSON-LD in Google's Rich Results Test; check phone layout. Then submit the sitemap in Google Search Console and Bing Webmaster Tools.

## Open items before launch

- Confirm whether the Mailchimp contact form and newsletter have active users or required delivery workflows. Direct email links currently replace neither live function.
- Choose the final host and obtain explicit launch approval.
- Images are copied from the Lovable preview at build time; the preview must stay reachable for the build, or the files should be committed locally first.
- Existing reCAPTCHA, newsletter popup and cookie notice on the live site were observed during the audit, not verified as current. No form submissions or live changes were made.

## Media evidence

Sources: supplied Binalyze_ASOS_Coverage_Master_9Oct2026.xlsx and accessible linked articles checked 14 October 2026. The Guardian, Sky News, Daily Mail, France 24, The Straits Times and Barron's name and quote Marie with Binalyze attribution. The latter three carry AFP syndication. No outlet reach metrics or inferred current employment are imported.

Portrait: supplied SmallerExternalImageProfile.jpg. Logo: unchanged original monochrome Wilbucks mark; browser icon downscaled from the same source. Home visual: generated architectural glass/metal still life, not a client project or commercial achievement.
## Company-first content review
Wilbucks is the company; Marie and Simon are its two directors. Simon's expanded history needs confirmation. No invented photograph is used.
Older authored sources include Infosecurity (2018), Rail Technology Magazine (2019) and Intersec (limited preview, June 2019). Cisco Investments guest article checked against publisher and indexed content (2025).
The supplied Solutions Review article (2023) and Computer Weekly feature (2024) blocked direct inspection with 403; retain the user's exact attribution with indexed/related corroboration, not a claim of full independent verification. Cyber insurance feature (2025) was directly accessible. Historical employer and board descriptions on media items are not current appointment claims.
LinkedIn Featured cards and their outbound destinations remain inaccessible. BBC Newsnight, Mirror and the additional SourceSecurity candidate are not public entries pending source confirmation. The uploaded workbook contains only ASOS reporting dated 6 to 8 October 2026.

## GitHub Pages test (not production launch)

Prepared workflow: `.github/workflows/wilbucks-pages-test.yml`. It has **only** a manual `workflow_dispatch` trigger, not a push trigger. Existing workflows must remain intact. No `CNAME` is supplied and no domain is configured.

1. Confirm these source changes have synced into **Wilbucks/wilbucks**, on its default branch. Lovable Git sync is separate from the GitHub API connector; the editor's Project Settings → Git shows sync status. This preparation does not push or run GitHub Actions.
2. In **GitHub Settings → Pages**, choose **Source: GitHub Actions**. Leave **Custom domain empty**. Do not remove an existing production domain to make this test work: stop and use an isolated test repository instead if Pages already hosts production. The workflow refuses deployment if Pages reports a custom domain or a URL outside `https://wilbucks.github.io/`.
3. If required by your organisation, allow Actions and the official Pages actions under **Settings → Actions → General**. Allow the `github-pages` environment to deploy from the selected branch, and optionally add a required reviewer.
4. When ready for the public *test URL only*, open **Actions → Wilbucks GitHub Pages test → Run workflow**. Nothing is automatically deployed by adding this workflow. The expected test address is `https://wilbucks.github.io/wilbucks/`; an already-existing Pages test site would be replaced by this manual run.

### Build behaviour

- Default Vite base is `/`, suitable for eventual root-of-custom-domain hosting. The isolated repository test explicitly supplies `/wilbucks/`; TanStack Router and the favicon use the same base so assets, navigation and direct page opens work at the GitHub address.
- All four public pages are prerendered as `index.html`, `about/index.html`, `marie-wilcox/index.html`, and `simon-wilcox/index.html`. Only `dist/client` is uploaded, never the server bundle. GitHub Pages may normalise direct links to a trailing slash; production canonicals remain unchanged.
- CI uses Node 22, Bun 1.3.10, the frozen lockfile, existing tests, and `bun run build`. `launch/prepare-pages.mjs` validates static content, noindex and canonicals, exports the original immutable portrait/logo files into the static artifact, and makes their URLs base-aware. Image export fails closed if an asset is unavailable; no credentials are needed and no image or design is replaced.
- The Pages build uses a Node build-time SSR bundle to prerender, but requires no server at runtime. Server functions would need a separate hosting solution if added later.
- `VITE_ALLOW_INDEXING=false` stays explicit. The four canonical and social URLs still point at `https://www.wilbucks.com`. Test robots allows crawling so crawlers can see **noindex**; it advertises no sitemap. Production sitemap/robots generation remains a separate, approval-only launch task.
- GitHub Pages cannot send per-route HTTP 301 responses. The four retired paths receive tiny noindex HTML redirects to the test homepage (meta refresh plus `location.replace` and a fallback link). The existing TanStack 301 guards remain unchanged on server-backed hosting. No generic homepage-as-404 fallback is added.

### Verification limits and post-run checks

The local existing preview and tests can be checked without deployment. The actual GitHub-runner static build, Pages permissions and final Pages URLs must be confirmed in the first manual workflow run; repository Settings and sync status are not accessible through the project filesystem. After that run, open and refresh all four test URLs, check portraits/logo and pause controls, and confirm noindex, production canonicals and retired-path redirects. Do not set a custom domain or enable indexing during this test.
