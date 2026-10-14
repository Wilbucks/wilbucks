export function pageHead(title: string, description: string, path: string, schema?: Record<string, unknown>) {
  return {
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: path === "/marie-wilcox" || path === "/simon-wilcox" ? "profile" : "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: schema ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", ...schema }) }] : [],
  };
}