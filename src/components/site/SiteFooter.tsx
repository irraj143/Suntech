import { Link } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { business, footerNav } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-espresso text-espresso-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-sm space-y-4">
          <Logo inverted />
          <p className="text-sm leading-relaxed text-espresso-foreground/75">
            {business.shortDescription}
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-caramel">
            Quick links
          </h2>
          <ul className="grid gap-2.5 text-sm">
            {footerNav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-espresso-foreground/80 hover:text-caramel">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-caramel">
            Contact
          </h2>
          <ul className="grid gap-4 text-sm text-espresso-foreground/85">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden />
              <a href={business.phoneHref} className="hover:text-caramel">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden />
              <span>
                {business.addressLine1}
                <br />
                {business.addressLine2}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-espresso-foreground/10">
        <div className="container-site py-6 text-xs text-espresso-foreground/60">
          © {year} Suntech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
