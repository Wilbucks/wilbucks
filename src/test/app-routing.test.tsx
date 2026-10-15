import { QueryClient } from "@tanstack/react-query";
import { createRouter, isRedirect, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { Route as aboutRoute } from "@/routes/about";
import { Route as expertiseRoute } from "@/routes/expertise";
import { Route as directorsRoute } from "@/routes/directors";
import { Route as mediaRoute } from "@/routes/press-coverage";
import { Route as contactRoute } from "@/routes/contact";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("restores About Us without a redirect", () => {
    expect(aboutRoute.options.beforeLoad).toBeUndefined();
    expect(aboutRoute.options.component).toBeTypeOf("function");
  });

  it.each([
    ["/expertise", expertiseRoute], ["/directors", directorsRoute],
    ["/press-coverage", mediaRoute], ["/contact", contactRoute],
  ])("keeps %s permanently redirected home", (_path, route) => {
    try {
      route.options.beforeLoad?.();
      throw new Error("Expected a redirect");
    } catch (error) {
      expect(isRedirect(error)).toBe(true);
      if (!isRedirect(error)) throw error;
      expect(error.options.to).toBe("/");
      expect(error.options.statusCode).toBe(301);
    }
  });

  it.each(["/", "/about", "/simon-wilcox", "/marie-wilcox"])("matches the approved page at %s", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(path);

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.pathname).toBe(path);
  });
});
