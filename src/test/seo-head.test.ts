import { describe, expect, it } from "vitest";
import { pageHead } from "@/lib/page-head";

describe("search metadata", () => {
  const head = pageHead("T", "D", "/about");
  it("keeps the preview out of search results by default", () => {
    expect(head.meta).toContainEqual({ name: "robots", content: "noindex, follow" });
  });
  it("points the canonical at the production domain", () => {
    expect(head.links[0].href).toBe("https://www.wilbucks.com/about");
  });
  it("gives the home page a trailing-slash canonical", () => {
    expect(pageHead("T", "D", "/").links[0].href).toBe("https://www.wilbucks.com/");
  });
});
