import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FaqList } from "@/components/site/FaqList";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Suntech" },
      {
        name: "description",
        content: "Answers to common questions about Suntech, where it is based and how to contact the business.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Suntech" },
      {
        property: "og:description",
        content: "Common questions about Suntech's e-commerce business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Frequently asked <em className="text-mocha">questions</em>
          </>
        }
      />
      <section className="container-site py-20">
        <div className="mx-auto max-w-3xl">
          <FaqList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
