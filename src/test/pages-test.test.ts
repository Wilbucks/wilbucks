import { describe, expect, it } from 'vitest';
// @ts-expect-error Build-only script is deliberately outside the app's TypeScript graph.
import { livePaths, retiredPaths, testBase, redirectDocument } from '../../launch/prepare-pages.mjs';

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