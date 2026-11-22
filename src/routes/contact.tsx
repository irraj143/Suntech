import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { business } from "@/lib/site";
import chicago from "@/assets/chicago-street.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Suntech — Phone & Chicago Address" },
      {
        name: "description",
        content:
          "Contact Suntech at +1 312 404 9673 or 5636 N Bernard St, Chicago, IL 60659, USA for business enquiries and general questions.",
      },
      { property: "og:title", content: "Contact Suntech" },
      {
        property: "og:description",
        content: "For business enquiries and general questions, contact Suntech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Contact <em className="text-mocha">Suntech</em>
          </>
        }
        intro="For business enquiries and general questions, please contact Suntech using the details below."
        image={chicago}
      />
      <section className="container-site grid gap-10 py-20 lg:grid-cols-[1fr_1.5fr]">
        <aside className="space-y-4">
          <DetailCard icon={Phone} label="Phone">
            <a href={business.phoneHref} className="text-lg font-semibold text-espresso hover:text-mocha">
              {business.phoneDisplay}
            </a>
          </DetailCard>
          <DetailCard icon={MapPin} label="Address">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-espresso hover:text-mocha"
            >
              {business.addressLine1}
              <br />
              {business.addressLine2}
            </a>
          </DetailCard>
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Map showing Suntech's business address in Chicago"
              src="https://www.google.com/maps?q=5636+N+Bernard+St,+Chicago,+IL+60659&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-10">
          <h2 className="text-3xl font-medium text-espresso">Send an enquiry</h2>
          <p className="mb-6 mt-2 text-muted-foreground">
            Fill in your details and the subject of your enquiry.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function DetailCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-caramel/20 text-mocha">
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-mocha">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
