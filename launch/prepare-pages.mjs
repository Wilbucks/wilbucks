import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

export const PRODUCTION_ORIGIN = 'https://www.wilbucks.com';
export const livePaths = ['/', '/about', '/marie-wilcox', '/simon-wilcox'];
export const retiredPaths = ['/expertise', '/directors', '/press-coverage', '/contact'];
export function testBase(value = '/') {
  if (!/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(value)) throw new Error('Base must start and end with / and contain only path segments.');
  return value;
}
/** Test (default) or production. Production must be requested explicitly and must use root hosting with indexing on. */
export function resolveTarget(env) {
  const target = env.WILBUCKS_TARGET === 'production' ? 'production' : 'test';
  const base = testBase(env.VITE_SITE_BASE || '/');
  const indexing = env.VITE_ALLOW_INDEXING === 'true';
  if (target === 'production' && (base !== '/' || !indexing)) throw new Error('Production export needs VITE_SITE_BASE=/ and VITE_ALLOW_INDEXING=true.');
  if (target === 'test' && indexing) throw new Error('Test export must stay noindex: unset VITE_ALLOW_INDEXING.');
  return { target, base, robotsMeta: target === 'production' ? 'index, follow, max-image-preview:large' : 'noindex, follow' };
}
export function sitemapXml(origin = PRODUCTION_ORIGIN) {
  const urls = livePaths.map((p) => `  <url><loc>${origin}${p}</loc></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
export function robotsTxt(target) {
  // Test robots allows crawling so page-level noindex is seen, and advertises no sitemap.
  return target === 'production' ? `User-agent: *\nAllow: /\nSitemap: ${PRODUCTION_ORIGIN}/sitemap.xml\n` : 'User-agent: *\nAllow: /\n';
}
export function redirectDocument(base) {
  const home = testBase(base);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex, follow"><meta http-equiv="refresh" content="0;url=${home}"><title>Wilbucks | Page moved</title><link rel="canonical" href="https://www.wilbucks.com/"></head><body><a href="${home}">Continue to Wilbucks</a><script>location.replace(${JSON.stringify(home)})</script></body></html>`;
}

async function prepare() {
  const output = 'dist/client';
  const { target, base, robotsMeta } = resolveTarget(process.env);
  // Images are committed under src/assets and bundled by Vite with the configured base; no remote fetch.
  const assetFiles = await readdir(join(output, 'assets'));
  for (const name of ['wilbucks-logo', 'marie-wilcox', 'simon-wilcox']) {
    if (!assetFiles.some((f) => f.startsWith(name) && /\.(png|jpe?g)$/.test(f))) throw new Error(`Bundled image missing: ${name}`);
  }
  for (const path of livePaths) {
    const html = await readFile(join(output, path.slice(1), 'index.html'), 'utf8');
    if (!html.includes(`content="${robotsMeta}"`)) throw new Error(`Robots meta "${robotsMeta}" missing: ${path}`);
    if (!html.includes(`href="${PRODUCTION_ORIGIN}${path}"`)) throw new Error(`Production canonical missing: ${path}`);
    if ((html.match(/<h1[\s>]/g) || []).length !== 1) throw new Error(`Expected one h1: ${path}`);
  }
  // Static fallback only. A server-backed or edge host should send real 301s (see launch/README.md).
  for (const path of retiredPaths) {
    await mkdir(join(output, path.slice(1)), { recursive: true });
    await writeFile(join(output, path.slice(1), 'index.html'), redirectDocument(base));
  }
  await writeFile(join(output, '.nojekyll'), '');
  await writeFile(join(output, 'robots.txt'), robotsTxt(target));
  if (target === 'production') await writeFile(join(output, 'sitemap.xml'), sitemapXml());
  console.log(`Prepared ${target} static export at base ${base} (${robotsMeta}).`);
}

if (process.argv[1]?.endsWith('prepare-pages.mjs')) await prepare();
