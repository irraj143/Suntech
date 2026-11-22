import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { reasons } from "@/lib/content";
import parcels from "@/assets/about-parcels.jpg";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Suntech — Professional E-commerce Business" },
      {
        name: "description",
        content:
          "Professional communication, clear information, a customer-focused approach and transparent business practices.",
      },
      { property: "og:title", content: "Why Choose Suntech" },
      {
        property: "og:description",
        content: "What customers can expect when they contact Suntech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Why,
});

function Why() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title={
          <>
            Why choose <em className="text-mocha">Suntech</em>
          </>
        }
        intro="What customers can expect when they get in touch with our business."
        image={parcels}
      />
      <section className="container-site py-24">
        <FeatureGrid items={reasons} />
      </section>
      <CtaBand />
    </>
  );
}
