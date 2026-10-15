import { describe, expect, it } from "vitest";
import { publications, directorIntroductions, person, simonPerson, recentPublications, earlierPublications, profilePublications, profileQuotedCoverage, profileLeadership, asosCoverage } from "@/lib/wilbucks-content";

describe("Supplied media attribution", () => {
  it("keeps all five requested profile articles authored and separate from quotes", () => {
    expect(profilePublications.map(item => item.outlet)).toEqual(["Cisco Investments", "Solutions Review", "Infosecurity Magazine", "Rail Technology Magazine", "Intersec"]);
    expect(profilePublications.every(item => item.category === "authored")).toBe(true);
    expect(profileQuotedCoverage.map(item => item.outlet)).toEqual(["Infosecurity Magazine", "Computer Weekly"]);
    expect(profileQuotedCoverage.every(item => item.category === "quoted")).toBe(true);
  });
  it("keeps CIM, CIISec and Foundation appointments distinct", () => {
    expect(profileLeadership.map(item => [item.organisation, item.role])).toEqual([["CIM", "Chair of the CIM South East Region"], ["CIISec", "Board Director"], ["CIISec Foundation", "Founding Trustee"]]);
  });
  it("uses the four supplied ASOS coverage links without duplicate outlets", () => {
    expect(asosCoverage.map(item => item.outlet)).toEqual(["Sky News", "The Guardian", "The Standard", "Daily Mail"]);
    expect(asosCoverage[0].url).toBe("https://news.sky.com/story/asos-latest-customers-told-retailer-has-been-hacked-13591381?postid=12584472");
    expect(asosCoverage[2].url).toBe("https://lnkd.in/eBSM_WWr");
    expect(asosCoverage[3].url).toBe("https://www.dailymail.com/news/article-16186489/ASOS-hacked-customers-receive-message.html");
  });
  it("curates eight contributions including the separate podcast", () => {
    expect(recentPublications.length + earlierPublications.length + 1).toBe(8);
    expect(recentPublications.filter(item => item.date.includes("2026"))).toHaveLength(1);
    expect(earlierPublications.map(item => item.date)).toEqual(["9 April 2024", "30 August 2023", "10 June 2019", "1 August 2018"]);
  });
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