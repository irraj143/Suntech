/**
 * Single source of truth for Suntech's business details and navigation.
 * Values marked `null` have not been supplied by the owner yet and render as
 * visible placeholders — never replace them with invented data.
 */
export const business = {
  name: "Suntech",
  type: "E-commerce business",
  phoneDisplay: "+1 312 404 9673",
  phoneHref: "tel:+13124049673",
  addressLine1: "5636 N Bernard St",
  addressLine2: "Chicago, IL 60659, USA",
  addressFull: "5636 N Bernard St, Chicago, IL 60659, USA",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=5636+N+Bernard+St,+Chicago,+IL+60659",
  legalName: null as string | null,
  registration: null as string | null,
  shortDescription:
    "Suntech is an e-commerce business based in Chicago, Illinois, focused on online commercial activities, professional customer communication and reliable order-related support.",
} as const;

export const placeholders = {
  legalName: "[Registered legal name — to be added if different]",
  registration: "[Registration details — to be added only if applicable and verified]",
} as const;

export const returnPolicy = {
  refundCalendarDays: 14,
  refundProcessingMinBusinessDays: 5,
  refundProcessingMaxBusinessDays: 10,
  cancellationHours: 24,
  minimumOrderAge: 18,
  billingErrorReportDays: 60,
  billingResolutionHours: 48,
  chargebackFeeUsd: 25,
  liabilityLookbackDays: 14,
} as const;

export const mainNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/business-activities", label: "Business Activities" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/faq", label: "FAQ" },
  { to: "/return-policy", label: "Return Policy" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const footerNav = [
  { to: "/about", label: "About Us" },
  { to: "/business-activities", label: "Business Activities" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/shipping-returns", label: "Shipping, Returns & Refunds" },
  { to: "/return-policy", label: "Return Policy" },
] as const;
