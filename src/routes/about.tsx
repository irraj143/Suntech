import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Placeholder } from "@/components/site/Placeholder";
import { business, placeholders } from "@/lib/site";
import parcels from "@/assets/about-parcels.jpg";
import chicago from "@/assets/chicago-street.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Suntech — Chicago E-commerce Business" },
      {
        name: "description",
        content:
          "Learn about Suntech, an e-commerce business based in Chicago, Illinois, and its mission and vision.",
      },
      { property: "og:title", content: "About Suntech" },
      {
        property: "og:description",
        content: "Suntech is an e-commerce business based in Chicago, Illinois, USA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            About <em className="text-mocha">Suntech</em>
          </>
        }
        intro="An e-commerce business based in Chicago, Illinois, USA."
        image={chicago}
      />

      <section className="container-site grid items-center gap-12 py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p className="eyebrow">Who we are</p>
          <p className="font-display text-2xl leading-snug text-espresso sm:text-3xl">
            Suntech is an e-commerce business based in Chicago, Illinois, USA.
          </p>
          <p>
            The business operates in the online commerce sector and is focused on conducting its
            business activities through digital channels. Suntech aims to provide clear
            communication, a professional customer experience, and organized business operations.
          </p>
          <dl className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 text-base shadow-soft sm:grid-cols-2">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-mocha">Business name</dt>
              <dd className="mt-1 text-espresso">{business.name}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-mocha">Business type</dt>
              <dd className="mt-1 text-espresso">{business.type}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-mocha">Address</dt>
              <dd className="mt-1 text-espresso">{business.addressFull}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-mocha">Phone</dt>
              <dd className="mt-1 text-espresso">
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-mocha">Legal name</dt>
              <dd className="mt-1">
                {business.legalName ?? <Placeholder>{placeholders.legalName}</Placeholder>}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-mocha">Registration</dt>
              <dd className="mt-1">
                {business.registration ?? <Placeholder>{placeholders.registration}</Placeholder>}
              </dd>
            </div>
          </dl>
        </div>
        <img
          src={parcels}
          alt="Wrapped parcels beside a cup of coffee and a phone"
          loading="lazy"
          width={1200}
          height={1408}
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
        />
      </section>

      <section className="bg-secondary py-24">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] bg-card p-10 shadow-soft">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-caramel text-espresso">
              <Target className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-3xl font-medium text-espresso">Our mission</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              To carry out our e-commerce activities responsibly, communicate clearly with every
              customer, and handle each enquiry in an organized and professional way.
            </p>
          </article>
          <article className="rounded-[2rem] bg-espresso p-10 text-espresso-foreground shadow-lift">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-caramel text-espresso">
              <Eye className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-3xl font-medium">Our vision</h2>
            <p className="mt-3 text-lg leading-relaxed text-espresso-foreground/75">
              To be known as a dependable online business that customers find easy to contact and
              straightforward to work with.
            </p>
          </article>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
