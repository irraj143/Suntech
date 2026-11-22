import { steps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="relative rounded-3xl border border-border bg-card p-7 shadow-soft"
        >
          <span className="font-display text-5xl font-light italic text-caramel">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-xl font-medium text-espresso">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
