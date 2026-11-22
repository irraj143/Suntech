import { createFileRoute } from "@tanstack/react-router";
import { Phone, FileWarning, RotateCcw, CalendarClock, ShieldCheck, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { returnPolicyContent, type PolicySection } from "@/lib/content";
import { business } from "@/lib/site";
import parcels from "@/assets/about-parcels.jpg";

export const Route = createFileRoute("/return-policy")({
  head: () => ({
    meta: [
      { title: "Return Policy — Suntech & Econers" },
      { name: "description", content: "Review the owner-supplied Suntech and Econers return policy, 14-day refunds, cancellations, billing disputes and general terms." },
      { property: "og:title", content: "Return Policy — Suntech & Econers" },
      { property: "og:description", content: "Return, refund, cancellation and billing-dispute terms for Econers, owned and operated by Suntech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReturnPolicyPage,
});

const highlights = [
  { icon: RotateCcw, title: "Easy returns", text: "Clear, simple steps to request a return or refund." },
  { icon: CalendarClock, title: "Time-bound requests", text: "Refund requests are reviewed within the policy window." },
  { icon: ShieldCheck, title: "Fair & transparent", text: "Billing disputes and cancellations handled openly." },
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function ReturnPolicyPage() {
  const sections: PolicySection[] = returnPolicyContent.sections;
  return (
    <>
      <PageHero
        eyebrow="Policies & terms"
        title={returnPolicyContent.title}
        intro="Everything you need to know about returns, refunds, cancellations and billing — in one place."
        image={parcels}
      />

      <section className="container-site -mt-10 relative z-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-caramel/15 text-caramel">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-xl text-espresso">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-16">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-border bg-secondary p-5">
              <p className="eyebrow">On this page</p>
              <ul className="mt-4 space-y-2 text-sm">
                {sections.map((s) => (
                  <li key={s.title}>
                    <a href={`#${slug(s.title)}`} className="text-muted-foreground transition-colors hover:text-caramel">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="flex gap-3 rounded-2xl border border-dashed border-placeholder-foreground/40 bg-placeholder p-5 text-sm text-placeholder-foreground">
              <FileWarning className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
              <p><strong>Draft — </strong>{returnPolicyContent.draftNote}</p>
            </div>

            <div className="prose-legal mt-8 space-y-6">
              {sections.map((section) => (
                <section
                  key={section.title}
                  id={slug(section.title)}
                  className="scroll-mt-28 break-words rounded-2xl border border-border bg-card p-6 sm:p-8"
                >
                  <h2 className="!mt-0">{section.title}</h2>
                  {section.paragraphs.map((p) => <p key={p}>{p}</p>)}
                  {section.subsections?.map((sub) => (
                    <div key={sub.title} className="mt-7 border-l-2 border-caramel/50 pl-5">
                      <h3 className="font-sans text-lg font-semibold text-espresso">{sub.title}</h3>
                      {sub.paragraphs.map((p, i) => (
                        <div key={p}>
                          <p>{p}</p>
                          {i === 0 && sub.items && (
                            <ul className="my-4 list-disc space-y-2 pl-6 text-muted-foreground">
                              {sub.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-espresso-gradient p-8 text-espresso-foreground sm:p-10">
              <h2 className="font-display text-3xl">Questions about a return?</h2>
              <p className="mt-3 max-w-xl text-espresso-foreground/80">Call us and our team will help you with your return or refund request.</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button asChild variant="caramel" size="lg">
                  <a href={business.phoneHref}><Phone aria-hidden />{business.phoneDisplay}</a>
                </Button>
                <p className="flex items-center gap-2 text-sm text-espresso-foreground/80"><MapPin className="h-4 w-4" aria-hidden />{business.addressFull}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
