# Wilbucks refresh: audit and proposed direction

## 1. Audit findings

The live website and this Lovable preview are separate. Nothing has been changed on either website during this audit.

| Area | Observed on the live site | Recommendation |
| --- | --- | --- |
| Identity | Original black/near-black geometric WB mark with circular, forward-moving strokes. White header; teal buttons and sections. | Preserve the exact original logo file. Use its geometry and the existing teal as starting points, not a replacement mark. |
| Home | Sales and marketing positioning, proposition development, investment and growth messaging; large lightbulb image; long About copy. | Retain the technology-to-commercial-value idea. Replace the stock metaphor and broad promises with specific, grounded positioning. |
| Navigation | Home links mainly to its contact section; additional pages exist at `/marie-wilcox`. | Introduce clear navigation and preserve these existing URLs. |
| Marie profile | Substantial first-person technology marketing biography and an existing professional portrait. Includes a typo (“II’m”) and template subscription copy. | Retain and refine the useful biography; use the supplied SmallerExternalImageProfile.jpg, with an easy replacement option. No stock or generated face is needed. |
| Contact and subscriptions | Contact form with reCAPTCHA; newsletter popup; cookie notice. Home lists `info@wilbucks.com`, company details and a generic LinkedIn destination. | Use the supplied Marie email and LinkedIn as the preview’s working contact routes. Preserve a record of the existing form/newsletter functionality until its purpose is confirmed. |
| Technical platform | Mailchimp website-builder signals, CDN assets and Mailchimp branding/default favicon. | Build the refreshed preview in this project’s existing modern framework; do not attempt an in-place Mailchimp modification. Decide the live migration separately. |
| SEO | Home title and description describe proposition development and growth. Robots and sitemap are present; the audit discovered the profile and press URLs through the sitemap. Home content uses multiple top-level headings. | Preserve valuable paths, introduce page-specific metadata and a clearer heading hierarchy, and replace template content. |

**Verification limits:** Form delivery, newsletter ownership/use, tracking configuration, indexing, traffic, backlinks and measured Core Web Vitals have not been verified. Published company registration/VAT details are not independent confirmation of their current status. No form submissions were made.

### Existing Lovable prototype

The preview currently contains a single scrolling Marie profile, anchor navigation, direct email/LinkedIn links, editorial styling and profile metadata. It does not yet contain the Wilbucks brand or a multi-page business site. Replace its unsupported media references with selected major coverage linked in the supplied Binalyze_ASOS_Coverage_Master_9Oct2026.xlsx, using accurate article-level attribution.

### Confirmed media

Spotify’s public episode page confirms **Enterprise Thought Leadership, episode 86**, featuring Marie: **“From SDRs to AI Agents: Building Marketing’s Agentic Future with Marie Wilcox.”** Include the supplied Spotify link. Do not import performance statistics, infer current employment from the episode description, or add an unconfirmed publication year.

Use the supplied **Binalyze_ASOS_Coverage_Master_9Oct2026.xlsx** as the source for a concise selection of major coverage: **The Guardian, Sky News UK, Daily Mail, France 24, The Straits Times and Barron’s**. Use its actual article links, not invented links or outlet homepages. Include selected coverage within Marie’s profile, alongside the podcast—not on a separate press page. Check each linked article for Marie’s name and quotations before describing it as her personal commentary; otherwise label it as Binalyze/company coverage. Identify syndicated reports as such, and do not present outlet reach figures as Marie’s audience, endorsements or commercial results. The workbook is supplied evidence, not a claim that every linked article has been independently checked.

## 2. Proposed site structure

| Navigation | URL | Content |
| --- | --- | --- |
| Home | `/` | Wilbucks identity, “Making technology matter to the market,” grounded positioning, selected areas of focus, introduction to Marie and enquiry links. |
| About Marie | `/marie-wilcox` | Supplied opening and first-person biography; six expertise themes; career organisations; professional interests; supplied portrait; selected major coverage and verified podcast; speaking/advisory enquiries. |
| Expertise | `/expertise` | Business challenges around positioning, GTM, product marketing, demand, sales/marketing alignment and practical AI. Explain the approach without implying all services are currently available. |
| Contact | `/contact` | Direct email and LinkedIn for consulting, speaking, media and professional opportunities. No non-working form. |

Retain a working Home `#subscribe` legacy anchor pointing to the enquiry section; do not describe it as newsletter signup if no subscription function is provided.

**Approval assumption:** Approving this plan authorises replacing the earlier single-page prototype constraint with this multi-page preview structure. It does not authorise publishing, replacing Mailchimp, changing DNS or altering the live site.

## 3. Proposed visual direction: precise technology editorial

- **Palette:** Cool white and graphite as the main canvas; limited deep-ink sections; restrained teal for actions and key details. The logo is monochrome, so teal is continuity from the existing website—not a claimed logo colour. Avoid a palette dominated by navy or neon.
- **Logo:** Use the original transparent PNG unchanged, at its natural proportions, on a light background. No redraw, recolouring or approximation. Derive a small favicon from the same mark.
- **Typography:** Confident contemporary sans-serif headings and highly readable body text; retain the preview’s Manrope/DM Sans pairing as the proposed starting point.
- **Composition:** Strong editorial hierarchy, asymmetric layouts, generous whitespace and full-width section bands. Cards only for genuine repeated media items, not every section.
- **Visual language:** Sparse technical rules and diagrams showing capability → market relevance → commercial execution. Let the logo’s geometry inform composition without creating a second logo. No lightbulb stock imagery, hackers, robots, glowing brains or decorative visual noise.
- **Motion:** More expressive motion through purposeful scroll reveals, staggered entrances, animated technical diagrams and polished navigation/action transitions, with reduced-motion support and no interference with reading or interaction.
- **Photography:** Use the supplied SmallerExternalImageProfile.jpg as Marie’s chosen professional portrait, with an easy replacement option.

## 4. Content and credibility rules

- Describe Wilbucks as an independent consultancy concept and potential areas of focus; do not imply a large team, active client roster or scaled operation.
- Use the six supplied career organisations without invented titles, dates, responsibilities or achievements.
- Preserve supplied credentials conservatively; no implied current board appointment. Add detailed role chronology only when confirmed.
- No fabricated testimonials, case studies, client logos, quantified outcomes or endorsements.
- Use `marieawilcox@outlook.com` and the supplied personal LinkedIn link throughout the preview.
- Remove unverified personal press claims from the preview; retain only supported personal media, or clearly attributed company coverage with a source.
- Existing legal/company details and business contact information need current confirmation before launch, rather than silently being declared verified or permanently discarded.

## 5. Build and review stages after approval

1. Establish shared Wilbucks navigation, footer and visual tokens; import the original logo and supplied SmallerExternalImageProfile.jpg through the project’s asset flow.
2. Build the four-page preview with reusable layouts and easily editable content records. Keep all changes confined to the preview.
3. Add unique metadata, descriptive internal links, accessible headings and appropriate alt text. Use the exact suggested Marie page title and description. Add accurate Person/ProfilePage and WebSite structured data; podcast schema only for verified episode details.
4. Preserve the useful existing paths and document any later redirects. Keep canonicals relative while this remains an integration preview; prepare the production sitemap/robots configuration for the approved final host. Do not point a preview sitemap at the live Mailchimp site.
5. Check navigation, enquiry links, media links, keyboard access, contrast and desktop/tablet/mobile layouts. Run relevant tests and performance checks, reporting measured results rather than promising scores.
6. Present the preview and a launch checklist. Publishing, domain/DNS changes, live replacement, production canonicals/sitemap and any redirects require separate explicit launch approval.

## Technical details

- Retain TanStack Start and the existing project tooling; shared shell around dedicated content routes.
- Semantic colour tokens in the global stylesheet and existing Button variants for actions.
- Central, typed content records for expertise and media; no database, CMS subscription, contact integration or paid service is needed for this scope.
- Direct email contact is the default. Reintroducing form submission or newsletter subscription is a separately agreed task, after confirming existing usage and delivery requirements.
- Update the earlier architecture and project requirements when implementation is approved; preserve all continuing factual and no-publish constraints.

## Launch items requiring confirmation

- Current legal/company details and whether `info@wilbucks.com` should remain publicly listed.
- Whether the existing contact form or newsletter has active users or a required workflow; no live functionality will be removed during preview work.
- Sources for any additional personal press coverage, detailed roles/dates or achievements.
- Final hosting/integration choice and explicit launch approval.

### Audit sources

- [Wilbucks home](https://www.wilbucks.com/)
- [Existing Marie profile](https://www.wilbucks.com/marie-wilcox)
- Supplied Binalyze_ASOS_Coverage_Master_9Oct2026.xlsx and SmallerExternalImageProfile.jpg.
- [Supplied Spotify episode](https://open.spotify.com/episode/3H6HWOa1QC6c2XzBZmzUsH)
- Original logo and portrait files linked from the live Wilbucks pages; visual inspection completed.