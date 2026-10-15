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
