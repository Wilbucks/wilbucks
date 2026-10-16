import { describe, expect, it } from 'vitest';
// @ts-expect-error Build-only script is deliberately outside the app's TypeScript graph.
import { livePaths, retiredPaths, testBase, redirectDocument, resolveTarget, sitemapXml, robotsTxt } from '../../launch/prepare-pages.mjs';

describe('GitHub Pages test safeguards', () => {
  it('exports exactly the four approved pages', () => {
    expect(livePaths).toEqual(['/', '/about', '/marie-wilcox', '/simon-wilcox']);
  });
  it('keeps the retired paths pointed at the test homepage', () => {
    expect(retiredPaths).toEqual(['/expertise', '/directors', '/press-coverage', '/contact']);
    expect(redirectDocument('/wilbucks/')).toContain('location.replace("/wilbucks/")');
  });
  it('keeps the root default and accepts the repository test base', () => {
    expect(testBase()).toBe('/');
    expect(testBase('/wilbucks/')).toBe('/wilbucks/');
    expect(() => testBase('https://www.wilbucks.com/')).toThrow();
  });
});

describe('production launch safeguards', () => {
  it('defaults to a noindex test export', () => {
    expect(resolveTarget({ VITE_SITE_BASE: '/wilbucks/' }).robotsMeta).toBe('noindex, follow');
  });
  it('refuses indexing on a test export', () => {
    expect(() => resolveTarget({ VITE_ALLOW_INDEXING: 'true' })).toThrow();
  });
  it('refuses production without root base and explicit indexing', () => {
    expect(() => resolveTarget({ WILBUCKS_TARGET: 'production', VITE_SITE_BASE: '/wilbucks/', VITE_ALLOW_INDEXING: 'true' })).toThrow();
    expect(() => resolveTarget({ WILBUCKS_TARGET: 'production' })).toThrow();
  });
  it('lists only the four pages on www.wilbucks.com in the sitemap', () => {
    expect(sitemapXml().match(/<loc>/g)).toHaveLength(4);
    expect(sitemapXml()).toContain('<loc>https://www.wilbucks.com/marie-wilcox</loc>');
  });
  it('only advertises the sitemap in production robots', () => {
    expect(robotsTxt('production')).toContain('Sitemap: https://www.wilbucks.com/sitemap.xml');
    expect(robotsTxt('test')).not.toContain('Sitemap');
  });
});
