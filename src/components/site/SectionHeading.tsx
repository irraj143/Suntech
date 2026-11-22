import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  inverted = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
  inverted?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className={cn("eyebrow", inverted && "text-caramel")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 text-3xl font-medium leading-tight sm:text-5xl",
          inverted ? "text-espresso-foreground" : "text-espresso",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            inverted ? "text-espresso-foreground/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
