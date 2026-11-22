import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/suntech-logo.png";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Suntech home">
      <img src={logo} alt="" width={816} height={816} className="h-10 w-10 object-contain" />
      <span
        className={cn(
          "font-display text-2xl font-semibold tracking-tight",
          inverted ? "text-espresso-foreground" : "text-espresso",
        )}
      >
        Suntech
      </span>
    </Link>
  );
}
