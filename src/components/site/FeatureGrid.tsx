import type { Item } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FeatureGrid({ items, inverted = false }: { items: Item[]; inverted?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, text, note }) => (
        <article
          key={title}
          className={cn(
            "group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1",
            inverted
              ? "border-espresso-foreground/10 bg-espresso-foreground/5 hover:bg-espresso-foreground/10"
              : "border-border bg-card shadow-soft hover:shadow-lift",
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-caramel/20 text-mocha transition-colors group-hover:bg-caramel group-hover:text-espresso">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            {note && (
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
                  inverted ? "bg-espresso-foreground/10 text-espresso-foreground/70" : "bg-secondary text-muted-foreground",
                )}
              >
                {note}
              </span>
            )}
          </div>
          <h3
            className={cn(
              "mt-6 text-xl font-medium",
              inverted ? "text-espresso-foreground" : "text-espresso",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              inverted ? "text-espresso-foreground/70" : "text-muted-foreground",
            )}
          >
            {text}
          </p>
        </article>
      ))}
    </div>
  );
}
