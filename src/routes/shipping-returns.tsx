import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/shipping-returns")({
  head: () => ({
    meta: [
      { title: "Shipping, Returns & Refunds — Suntech" },
      { name: "description", content: "Suntech's shipping, returns and refunds information." },
      { property: "og:title", content: "Shipping, Returns & Refunds — Suntech" },
      {
        property: "og:description",
        content: "Shipping, returns and refunds details for Suntech (pending owner confirmation).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shipping,
});

const pending = [
  ["Shipping regions", "[Regions Suntech ships to — to be confirmed]"],
  ["Delivery estimates", "[Typical delivery times — to be confirmed]"],
  ["Return eligibility", "[Which items can be returned and conditions — to be confirmed]"],
  ["Refund method", "[How refunds are issued — to be confirmed]"],
  ["Processing times", "[Order and refund processing times — to be confirmed]"],
] as const;

function Shipping() {
  return (
    <LegalPage
      eyebrow="Policies"
      title="Shipping, Returns & Refunds"
      draftNote="this page applies only if Suntech directly sells goods. Details below are awaiting the owner's actual policy."
    >
      <p>
        The information below will be completed once Suntech confirms its shipping and returns
        process. Until then, please contact us directly with any question about an order.
      </p>
      {pending.map(([title, text]) => (
        <div key={title}>
          <h2>{title}</h2>
          <p>
            <Placeholder>{text}</Placeholder>
          </p>
        </div>
      ))}
    </LegalPage>
  );
}
