import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function FaqList() {
  return (
    <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
      {faqs.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`item-${i}`}
          className="rounded-2xl border border-border bg-card px-6 shadow-soft last:border-b"
        >
          <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-espresso hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
