// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const pagesTest = process.env.VITE_GITHUB_PAGES_TEST === "true";
const base = pagesTest ? (process.env.VITE_SITE_BASE || "/") : "/";

export default defineConfig({
  vite: { base },
  ...(pagesTest ? { nitro: { preset: "node-server", output: { dir: "dist", publicDir: "dist/client", serverDir: "dist/server" } } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(pagesTest ? {
      pages: ["/", "/about", "/marie-wilcox", "/simon-wilcox"].map((path) => ({ path })),
      prerender: { enabled: true, autoStaticPathsDiscovery: false, autoSubfolderIndex: true, crawlLinks: false, failOnError: true, concurrency: 2 },
    } : {}),
  },
});
