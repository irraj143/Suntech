import { FileWarning } from "lucide-react";
import { PageHero } from "./PageHero";

export function LegalPage({
  eyebrow,
  title,
  draftNote,
  children,
}: {
  eyebrow: string;
  title: string;
  draftNote: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="container-site py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex gap-3 rounded-2xl border border-dashed border-placeholder-foreground/40 bg-placeholder p-5 text-sm text-placeholder-foreground">
            <FileWarning className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <p>
              <strong>Draft — </strong>
              {draftNote}
            </p>
          </div>
          <div className="prose-legal mt-6">{children}</div>
        </div>
      </section>
    </>
  );
}
