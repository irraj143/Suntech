import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { CtaBand } from "@/components/site/CtaBand";
import hero from "@/assets/hero-workspace.jpg";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Suntech" },
      {
        name: "description",
        content:
          "Suntech's general workflow: customer enquiry or order, review, processing and coordination, and customer updates.",
      },
      { property: "og:title", content: "How It Works — Suntech" },
      {
        property: "og:description",
        content: "A simple outline of how Suntech handles enquiries and orders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: How,
});

function How() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            A simple, <em className="text-mocha">organized</em> process
          </>
        }
        intro="Our general workflow from the first enquiry to follow-up support."
        image={hero}
      />
      <section className="container-site py-24">
        <ProcessSteps />
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Please note: the exact process may depend on the transaction and the business
          arrangements agreed with each customer.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
