import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { activities } from "@/lib/content";
import hero from "@/assets/hero-workspace.jpg";

export const Route = createFileRoute("/business-activities")({
  head: () => ({
    meta: [
      { title: "Business Activities — Suntech E-commerce" },
      {
        name: "description",
        content:
          "An overview of Suntech's e-commerce business activities: online operations, enquiries, customer communication and support.",
      },
      { property: "og:title", content: "Our E-commerce Business Activities — Suntech" },
      {
        property: "og:description",
        content: "How Suntech conducts its e-commerce activities through digital channels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Activities,
});

function Activities() {
  return (
    <>
      <PageHero
        eyebrow="Business activities"
        title={
          <>
            Our E-commerce <em className="text-mocha">Business Activities</em>
          </>
        }
        intro="A general overview of the activities Suntech carries out as an online business."
        image={hero}
      />
      <section className="container-site py-24">
        <FeatureGrid items={activities} />
        <p className="mt-10 max-w-3xl rounded-2xl border border-dashed border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
          Activities marked “If applicable” depend on the specific transaction and business
          arrangement. This page will be updated with further detail once confirmed by the business
          owner.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
