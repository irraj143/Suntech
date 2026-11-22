import { describe, expect, it } from "vitest";
import { returnPolicy } from "@/lib/site";

describe("Owner-supplied policy limits", () => {
  it("allows refund requests within 14 calendar days", () => {
    expect(returnPolicy.refundCalendarDays).toBe(14);
  });
  it("processes approved refunds in 5–10 business days", () => {
    expect([returnPolicy.refundProcessingMinBusinessDays, returnPolicy.refundProcessingMaxBusinessDays]).toEqual([5, 10]);
  });
  it("allows cancellation within 24 hours before work starts", () => {
    expect(returnPolicy.cancellationHours).toBe(24);
  });
  it("requires an order age of at least 18", () => {
    expect(returnPolicy.minimumOrderAge).toBe(18);
  });
  it("references a 60-day billing-error reporting window", () => {
    expect(returnPolicy.billingErrorReportDays).toBe(60);
  });
  it("references a 48-hour billing resolution commitment", () => {
    expect(returnPolicy.billingResolutionHours).toBe(48);
  });
  it("specifies a 25-dollar chargeback fee subject to legal review", () => {
    expect(returnPolicy.chargebackFeeUsd).toBe(25);
  });
  it("sets the liability lookback to 14 days", () => {
    expect(returnPolicy.liabilityLookbackDays).toBe(14);
  });
});