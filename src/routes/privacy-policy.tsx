import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { business } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Suntech" },
      {
        name: "description",
        content: "How Suntech collects and uses information submitted through its website contact form.",
      },
      { property: "og:title", content: "Privacy Policy — Suntech" },
      { property: "og:description", content: "Suntech's website privacy policy (draft)." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      draftNote="this policy is a draft for owner and legal review before publication."
    >
      <p>
        This Privacy Policy explains how Suntech handles information that visitors provide through
        this website.
      </p>
      <h2>Information we collect</h2>
      <p>When you use our contact form, you may provide:</p>
      <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your phone number (optional)</li>
        <li>The subject and content of your message</li>
      </ul>
      <h2>Why we use it</h2>
      <p>
        We use this information only to read, review and respond to your enquiry, and to
        communicate with you about it.
      </p>
      <h2>How enquiries are handled</h2>
      <p>
        Enquiries are reviewed by Suntech for the purpose of responding to you. We do not sell the
        information you submit through this website.
      </p>
      <h2>Contact us about privacy</h2>
      <p>
        For any privacy question, please contact Suntech by phone at{" "}
        <a href={business.phoneHref}>{business.phoneDisplay}</a> or by post at{" "}
        {business.addressFull}.
      </p>
    </LegalPage>
  );
}
