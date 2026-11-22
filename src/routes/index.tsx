import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { CtaBand } from "@/components/site/CtaBand";
import { activities, reasons } from "@/lib/content";
import { business } from "@/lib/site";
import hero from "@/assets/hero-workspace.jpg";
import parcels from "@/assets/about-parcels.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suntech — E-commerce Business in Chicago, IL" },
      {
        name: "description",
        content:
          "Suntech is a Chicago-based e-commerce business focused on online commerce, professional customer communication and order-related support.",
      },
      { property: "og:title", content: "Suntech — E-commerce Business" },
      {
        property: "og:description",
        content: "A Chicago-based e-commerce business with clear, professional customer communication.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="A tidy e-commerce workspace with a laptop, coffee and packed parcels on a wooden desk"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          width={1600}
          height={1008}
        />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="container-site relative flex min-h-[78vh] flex-col justify-center py-24">
          <p className="eyebrow animate-rise">Chicago · E-commerce business</p>
          <h1 className="mt-5 max-w-3xl animate-rise text-5xl font-medium leading-[1.02] text-espresso sm:text-7xl">
            Suntech — <em className="font-normal text-mocha">E&#8209;commerce Business</em>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-foreground/80 sm:text-xl">
            Suntech is an e-commerce business focused on online commercial activities, professional
            customer communication, and reliable order-related support.
          </p>
          <div className="mt-9 flex animate-rise flex-col gap-3 sm:flex-row">
            <Button asChild variant="espresso" size="xl">
              <Link to="/contact">
                Contact Us <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="caramel" size="xl">
              <Link to="/about">Learn About Suntech</Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-3 text-sm">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 font-medium text-espresso backdrop-blur hover:bg-card"
            >
              <Phone className="h-4 w-4 text-mocha" /> {business.phoneDisplay}
            </a>
            <span className="flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 font-medium text-espresso backdrop-blur">
              <MapPin className="h-4 w-4 text-mocha" /> Chicago, IL, USA
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-site grid items-center gap-12 py-24 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img
            src={parcels}
            alt="Kraft paper parcels next to a latte and a smartphone"
            loading="lazy"
            width={1200}
            height={1408}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-espresso px-6 py-5 text-espresso-foreground shadow-lift sm:block">
            <p className="font-display text-2xl italic">Chicago, Illinois</p>
            <p className="text-xs uppercase tracking-[0.2em] text-caramel">Business address</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Introducing Suntech"
            title={
              <>
                An e-commerce business built on <em className="text-mocha">clear communication</em>
              </>
            }
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Suntech operates in the online commerce sector and conducts its business activities
              through digital channels. Our model centres on organized operations and a
              professional experience for every customer who contacts us.
            </p>
            <p>
              Customers can reach Suntech directly by phone or through our contact page with any
              enquiry or order-related question.
            </p>
          </div>
          <Button asChild variant="outlineEspresso" size="xl" className="mt-8">
            <Link to="/about">
              More about Suntech <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Operations */}
      <section className="bg-espresso py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              inverted
              eyebrow="Online operations"
              title={
                <>
                  How Suntech <em className="text-caramel">operates</em> online
                </>
              }
              intro="A short overview of our e-commerce business activities and customer communication."
            />
            <Button asChild variant="outlineCream" size="xl" className="self-start lg:self-auto">
              <Link to="/business-activities">
                All business activities <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12">
            <FeatureGrid items={activities.slice(0, 3)} inverted />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="container-site py-24">
        <SectionHeading
          center
          eyebrow="Why choose Suntech"
          title={
            <>
              A professional, <em className="text-mocha">customer-focused</em> approach
            </>
          }
        />
        <div className="mt-12">
          <FeatureGrid items={reasons.slice(0, 3)} />
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="How it works"
            title="From enquiry to support"
            intro="A simple outline of our general workflow. The exact process may depend on the transaction and business arrangements."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* How to contact */}
      <section className="container-site py-24">
        <SectionHeading
          center
          eyebrow="Reach us"
          title="How customers can contact Suntech"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard icon={Phone} title="Call us">
            <a href={business.phoneHref} className="font-semibold text-espresso hover:text-mocha">
              {business.phoneDisplay}
            </a>
          </ContactCard>
          <ContactCard icon={MapPin} title="Business address">
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-mocha">
              {business.addressLine1}
              <br />
              {business.addressLine2}
            </a>
          </ContactCard>
          <ContactCard icon={MessageSquareText} title="Contact page">
            <Link to="/contact" className="font-semibold text-espresso underline-offset-4 hover:underline">
              Send your enquiry details
            </Link>
          </ContactCard>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-caramel/20 text-mocha">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-medium text-espresso">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}
