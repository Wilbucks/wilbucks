import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

export const livePaths = ['/', '/about', '/marie-wilcox', '/simon-wilcox'];
export const retiredPaths = ['/expertise', '/directors', '/press-coverage', '/contact'];
export function testBase(value = '/') {
  if (!/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(value)) throw new Error('Base must start and end with / and contain only path segments.');
  return value;
}
export function redirectDocument(base) {
  const home = testBase(base);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex, follow"><meta http-equiv="refresh" content="0;url=${home}"><title>Wilbucks | Page moved</title><link rel="canonical" href="https://www.wilbucks.com/"></head><body><a href="${home}">Continue to Wilbucks</a><script>location.replace(${JSON.stringify(home)})</script></body></html>`;
}

async function prepare() {
  const output = 'dist/client';
  const base = testBase(process.env.VITE_SITE_BASE);
  // Export exact immutable assets. The deployed test must not depend on Lovable's asset proxy.
  for (const file of await readdir('src/assets')) {
    if (!file.endsWith('.asset.json')) continue;
    const asset = JSON.parse(await readFile(join('src/assets', file), 'utf8'));
    if (!/^\/__l5e\/assets-v1\/[A-Za-z0-9-]+\/[A-Za-z0-9._-]+$/.test(asset.url)) throw new Error(`Unexpected asset path: ${file}`);
    const response = await fetch(`https://id-preview--da48fb2c-933a-488e-8c28-c903fdb6da29.lovable.app${asset.url}`);
    if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error(`Cannot export image ${file}: ${response.status}`);
    const target = join(output, asset.url.slice(1));
    await mkdir(join(target, '..'), { recursive: true });
    await writeFile(target, Buffer.from(await response.arrayBuffer()));
  }
  async function rewrite(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) await rewrite(path);
      else if (/\.(html|js)$/.test(entry.name)) {
        const text = await readFile(path, 'utf8');
        await writeFile(path, text.replaceAll('/__l5e/assets-v1/', `${base}__l5e/assets-v1/`));
      }
    }
  }
  await rewrite(output);
  for (const path of livePaths) {
    const html = await readFile(join(output, path.slice(1), 'index.html'), 'utf8');
    if (!/<meta[^>]*name="robots"[^>]*content="noindex, follow"/.test(html)) throw new Error(`Noindex missing: ${path}`);
    if (!html.includes(`href="https://www.wilbucks.com${path === '/' ? '/' : path}"`)) throw new Error(`Production canonical missing: ${path}`);
    if (!/<h1[\s>]/.test(html)) throw new Error(`Prerendered content missing: ${path}`);
  }
  for (const path of retiredPaths) {
    await mkdir(join(output, path.slice(1)), { recursive: true });
    await writeFile(join(output, path.slice(1), 'index.html'), redirectDocument(base));
  }
  await writeFile(join(output, '.nojekyll'), '');
  // Allow crawlers to see page-level noindex, without advertising a production sitemap.
  await writeFile(join(output, 'robots.txt'), 'User-agent: *\nAllow: /\n');
  console.log('Prepared four noindex static pages, retired-path redirects and locally exported images.');
}

if (process.argv[1]?.endsWith('prepare-pages.mjs')) await prepare();