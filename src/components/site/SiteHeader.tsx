import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { business, mainNav } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = mainNav.filter((l) => l.to !== "/contact");

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-espresso text-espresso-foreground">
        <div className="container-site flex h-10 items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="flex min-w-0 items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-caramel" aria-hidden />
            <span className="truncate">E-commerce business based in Chicago, Illinois, USA</span>
          </p>
          <a
            href={business.phoneHref}
            className="hidden shrink-0 items-center gap-2 font-semibold hover:text-caramel sm:flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-b border-border/70 bg-crema/90 backdrop-blur-md">
        <div className="container-site flex h-18 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-espresso"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="caramel" className="hidden h-11 px-6 sm:inline-flex">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                  <Menu className="!size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm bg-crema">
                <SheetHeader>
                  <SheetTitle className="text-left font-display text-2xl">Menu</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="mt-4 flex flex-col gap-1">
                  {mainNav.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: true }}
                      className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-espresso"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 space-y-2 border-t border-border px-4 pt-6 text-sm text-muted-foreground">
                  <a href={business.phoneHref} className="flex items-center gap-2 font-semibold text-foreground">
                    <Phone className="h-4 w-4" /> {business.phoneDisplay}
                  </a>
                  <p>{business.addressFull}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
