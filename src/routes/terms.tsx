import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { Placeholder } from "@/components/site/Placeholder";
import { business } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Suntech" },
      { name: "description", content: "General terms for using the Suntech website." },
      { property: "og:title", content: "Terms & Conditions — Suntech" },
      { property: "og:description", content: "Suntech's website terms and conditions (draft)." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      draftNote="these terms are a draft for owner review before publication."
    >
      <h2>Use of this website</h2>
      <p>
        This website provides general information about Suntech, an e-commerce business based in
        Chicago, Illinois. By using it, you agree to use it lawfully and not to misuse its content
        or forms.
      </p>
      <h2>Information on this website</h2>
      <p>
        We aim to keep information accurate and up to date, but it is provided for general
        information only and may change without notice.
      </p>
      <h2>Enquiries are not orders</h2>
      <p>
        Sending an enquiry through this website or by phone does not constitute a confirmed order
        or contract unless it is separately accepted by Suntech.
      </p>
      <h2>Transactions, payments, cancellations and disputes</h2>
      <p>
        <Placeholder>
          [Transaction, payment, cancellation and dispute terms — to be supplied and approved by the
          business owner]
        </Placeholder>
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be directed to Suntech at{" "}
        <a href={business.phoneHref}>{business.phoneDisplay}</a> or {business.addressFull}.
      </p>
    </LegalPage>
  );
}
