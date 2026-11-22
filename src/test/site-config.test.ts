import { describe, expect, it } from "vitest";
import { business, footerNav, mainNav, placeholders } from "@/lib/site";

describe("Suntech site rules", () => {
  it("main navigation matches the brief exactly", () => {
    expect(mainNav.map((l) => l.label)).toEqual([
      "Home",
      "About Us",
      "Business Activities",
      "Why Choose Us",
      "How It Works",
      "FAQ",
      "Contact Us",
    ]);
  });

  it("never offers an Our Products page", () => {
    const all = [...mainNav, ...footerNav];
    expect(all.some((l) => /product/i.test(l.label) || /product/i.test(l.to))).toBe(false);
  });

  it("uses the supplied phone and address", () => {
    expect(business.phoneDisplay).toBe("+1 312 404 9673");
    expect(business.addressFull).toBe("5636 N Bernard St, Chicago, IL 60659, USA");
  });

  it("has no email channel anywhere — contact is by phone only", () => {
    expect("email" in business).toBe(false);
    expect("email" in placeholders).toBe(false);
  });
});
