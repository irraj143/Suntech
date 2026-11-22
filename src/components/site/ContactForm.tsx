import { useState } from "react";
import { z } from "zod";
import { AlertCircle, Phone, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { business } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter your phone number")
    .max(30)
    .regex(/^[+\d\s().-]*$/, "Please enter a valid phone number"),
  subject: z.string().trim().min(1, "Please enter a subject").max(150),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

/**
 * The form validates input, then connects the visitor to Suntech by phone —
 * submitting opens the phone dialer on +1 312 404 9673. No message is stored
 * or sent online, and the form says so honestly.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "call" | "error">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("call");
    window.location.href = business.phoneHref;
  }

  const field = (id: keyof Errors, label: string, el: React.ReactNode, optional = false) => (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-semibold text-espresso">
        {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {el}
      {errors[id] && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {errors[id]}
        </p>
      )}
    </div>
  );

  const inputCls = "h-12 rounded-xl bg-background";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Alert className="rounded-2xl border-placeholder-foreground/30 bg-placeholder text-placeholder-foreground">
        <Phone className="h-4 w-4" />
        <AlertTitle>We respond by phone</AlertTitle>
        <AlertDescription className="text-placeholder-foreground/90">
          Submitting this form connects you to Suntech by phone at{" "}
          <a href={business.phoneHref} className="font-semibold underline">
            {business.phoneDisplay}
          </a>
          . Keep your details handy so we can note your enquiry during the call.
        </AlertDescription>
      </Alert>

      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Name", <Input id="name" name="name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} />)}
        {field("phone", "Phone", <Input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} aria-invalid={!!errors.phone} />)}
        {field("subject", "Subject", <Input id="subject" name="subject" className={inputCls} aria-invalid={!!errors.subject} />)}
      </div>
      {field(
        "message",
        "Message",
        <Textarea id="message" name="message" rows={6} className="rounded-xl bg-background" aria-invalid={!!errors.message} />,
      )}

      {status === "error" && (
        <Alert variant="destructive" className="rounded-2xl" role="alert">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Please check the form</AlertTitle>
          <AlertDescription>Some fields need your attention before submitting.</AlertDescription>
        </Alert>
      )}
      {status === "call" && (
        <Alert className="rounded-2xl border-caramel bg-caramel/15" role="status">
          <PhoneCall className="h-4 w-4" />
          <AlertTitle>Opening your phone dialer…</AlertTitle>
          <AlertDescription>
            If the call did not start, tap{" "}
            <a href={business.phoneHref} className="font-semibold underline">
              Call {business.phoneDisplay}
            </a>{" "}
            to reach Suntech directly.
          </AlertDescription>
        </Alert>
      )}

      <Button type="submit" variant="espresso" size="xl" className="w-full sm:w-auto">
        Submit &amp; Call <PhoneCall />
      </Button>
    </form>
  );
}
