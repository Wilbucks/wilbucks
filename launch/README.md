# Wilbucks launch checklist

This is an unpublished integration preview. No live-site, domain or DNS change is authorised.

- Confirm current company/legal details and the public business email before adding them to the new site.
- Confirm whether the Mailchimp contact form and newsletter have active users or required delivery workflows. Direct email links currently replace neither live function.
- Choose the final hosting/integration path and obtain explicit launch approval.
- Final architecture is four pages: `/`, `/about`, `/marie-wilcox`, `/simon-wilcox`. `/expertise`, `/directors`, `/press-coverage` and `/contact` return 301 redirects to `/`.
- Canonicals, og:url and JSON-LD already point at https://www.wilbucks.com (`src/lib/page-head.ts`). On approved launch, build with `VITE_ALLOW_INDEXING=true` to switch robots meta from noindex to index. Leave it unset everywhere else.
- Generate the production XML sitemap with the four live pages at the final origin using `python3 launch/generate-search-files.py <approved-https-origin> <output-directory>`. Do not expose a placeholder or live-Mailchimp sitemap in this preview.
- Production robots.txt: allow crawling and reference the final absolute sitemap URL. The preview allows crawlers to read its noindex metadata and does not advertise a production sitemap.
- Recheck media links, portrait, keyboard navigation, contact links, mobile layouts and performance on the final host.
- Existing reCAPTCHA, newsletter popup, cookie notice, info@wilbucks.com, company registration 12657721 and VAT 352 5364 05 were observed during the audit, not verified as current. No form submissions or live changes were made.

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
