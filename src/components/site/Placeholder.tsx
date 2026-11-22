/** Visibly marks information the business owner still has to supply. */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md border border-dashed border-placeholder-foreground/40 bg-placeholder px-2 py-0.5 text-sm font-medium text-placeholder-foreground">
      {children}
    </span>
  );
}
