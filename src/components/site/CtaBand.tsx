import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-site py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-espresso-gradient px-8 py-14 shadow-lift sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-caramel/20 blur-3xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow text-caramel">Get in touch</p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-espresso-foreground sm:text-5xl">
              Have a business enquiry? <em className="text-caramel">Let's talk.</em>
            </h2>
            <p className="mt-4 max-w-xl text-espresso-foreground/75">
              Reach Suntech by phone or send your details through our contact page and we will
              review your enquiry.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild variant="caramel" size="xl">
              <Link to="/contact">
                Contact Us <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outlineCream" size="xl">
              <a href={business.phoneHref}>
                <Phone /> Call now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
