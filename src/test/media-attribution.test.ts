import { describe, expect, it } from "vitest";
import { publications, directorIntroductions, person, simonPerson } from "@/lib/wilbucks-content";

describe("Supplied media attribution", () => {
  it("keeps Solutions Review as Marie’s authored article from 30 August 2023", () => {
    const item = publications.find(item => item.outlet === "Solutions Review");
    expect(item?.category).toBe("authored");
    expect(item?.date).toBe("30 August 2023");
    expect(item?.url).toBe("https://solutionsreview.com/security-information-event-management/restoring-cybersecurity-confidence-amidst-a-resource-crisis/");
  });
  it("keeps Computer Weekly as quoted commentary rather than Marie’s authorship", () => {
    const item = publications.find(item => item.outlet === "Computer Weekly");
    expect(item?.category).toBe("quoted");
    expect(item?.date).toBe("9 April 2024");
  });
  it("keeps the insurance feature as quoted commentary from 31 December 2025", () => {
    const item = publications.find(item => item.url.endsWith("/the-state-of-cyber-insurance-2025/"));
    expect(item?.category).toBe("quoted");
    expect(item?.date).toBe("31 December 2025");
  });
  it("identifies both directors as separate people connected to Wilbucks", () => {
    expect(directorIntroductions.map(item => item.name)).toEqual(["Marie Wilcox", "Simon Wilcox"]);
    expect(person.worksFor["@id"]).toBe("/#wilbucks");
    expect(simonPerson.worksFor["@id"]).toBe("/#wilbucks");
    expect(person["@id"]).not.toBe(simonPerson["@id"]);
  });
});