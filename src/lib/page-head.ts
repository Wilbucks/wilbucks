/** Intended production origin. Canonicals and structured data point here, never at the preview host. */
export const SITE_URL = "https://www.wilbucks.com";

/** Indexing stays off unless a launch build explicitly sets VITE_ALLOW_INDEXING=true. */
export const allowIndexing = import.meta.env.VITE_ALLOW_INDEXING === "true";

export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export function pageHead(title: string, description: string, path: string, schema?: Record<string, unknown>) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: path === "/marie-wilcox" || path === "/simon-wilcox" ? "profile" : "website" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title }, { name: "twitter:description", content: description },
      { name: "robots", content: allowIndexing ? "index, follow, max-image-preview:large" : "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: schema ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", ...schema }) }] : [],
  };
}
