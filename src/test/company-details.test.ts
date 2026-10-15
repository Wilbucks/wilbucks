import { describe, expect, it } from "vitest";

import { company, companyDetails, companyLinkedIn, email, person } from "@/lib/wilbucks-content";

// Wilbucks is reached through info@wilbucks.com. Marie's personal mailbox is not
// the public contact route, and the registration, VAT and office details are
// legal copy supplied by Marie, so they must stay exactly as given.
describe("Company contact and legal details", () => {
  it("sends every contact link to the company mailbox", () => {
    expect(email).toBe("mailto:info@wilbucks.com");
    expect(companyDetails.email).toBe("info@wilbucks.com");
    expect(person.email).toBe("info@wilbucks.com");
    expect(company.email).toBe("info@wilbucks.com");
  });

  it("keeps the personal mailbox out of the public contact details", () => {
    expect(email).not.toContain("outlook.com");
    expect(person.email).not.toContain("outlook.com");
    expect(company.email).not.toContain("outlook.com");
  });

  it("shows the supplied company registration and VAT numbers", () => {
    expect(companyDetails.registrationNumber).toBe("Company Registration Number: 12657721");
    expect(companyDetails.vatNumber).toBe("VAT Number: 352 5364 05");
    expect(company.taxID).toBe("12657721");
    expect(company.vatID).toBe("352 5364 05");
  });

  it("links the company LinkedIn page and shows the Godalming office", () => {
    expect(companyLinkedIn).toBe("https://www.linkedin.com/company/wilbucks-ltd/");
    expect(company.sameAs).toEqual([companyLinkedIn]);
    expect(companyDetails.copyright).toBe("Copyright 2026");
    expect(companyDetails.websiteLabel).toBe("www.wilbucks.com");
    expect(companyDetails.office).toEqual(["Wilbucks Ltd", "Godalming, Surrey. United Kingdom"]);
  });
});
