import { business, returnPolicy } from "./site";
import {
  Globe2,
  Inbox,
  MessagesSquare,
  Truck,
  LifeBuoy,
  Handshake,
  FileText,
  HeartHandshake,
  ListChecks,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Item = { icon: LucideIcon; title: string; text: string; note?: string };

export type PolicySection = {
  title: string;
  paragraphs: string[];
  subsections?: { title: string; paragraphs: string[]; items?: string[] }[];
};

export const returnPolicyContent = {
  title: "Return Policy",
  draftNote: "these owner-supplied terms cover Econers, owned and operated by Suntech. Legal compliance, payment practices and dispute provisions require owner and qualified legal review before publication. Nothing here limits rights available under applicable law.",
  sections: [
    {
      title: "1. General",
      paragraphs: ["Econers is owned and operated by Suntech. All services, content, and products provided through this website are subject to these Terms."],
    },
    {
      title: "2. Services",
      paragraphs: ["Econers provides [e-commerce / digital services — to be confirmed by the owner]. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice, subject to applicable law. Prices are subject to change without notice."],
    },
    {
      title: "3. Orders and payment",
      paragraphs: [`By placing an order on Econers, you warrant that you are at least ${returnPolicy.minimumOrderAge} years of age and are authorized to use the payment method provided. All payments are processed securely via third-party payment gateways. We do not store your complete credit card information.`],
    },
    {
      title: `4. ${returnPolicy.refundCalendarDays}-day refund policy`,
      paragraphs: [
        `We offer a ${returnPolicy.refundCalendarDays}-day money-back guarantee, subject to the eligibility conditions below.`,
        `a) You may request a full refund within ${returnPolicy.refundCalendarDays} calendar days from the date of purchase.`,
        `b) To be eligible for a refund, you must contact us by phone at ${business.phoneDisplay} with your order ID and reason for refund.`,
        "c) Refunds are not applicable if the service has been fully delivered, misused, or violated our terms, except where required by applicable law.",
        `d) Approved refunds will be credited to your original payment method within ${returnPolicy.refundProcessingMinBusinessDays}–${returnPolicy.refundProcessingMaxBusinessDays} business days.`,
        `After ${returnPolicy.refundCalendarDays} days, all sales are final and no refund will be issued, except where required by applicable law.`,
      ],
    },
    {
      title: "5. Chargeback policy — U.S. law and card-network rules",
      paragraphs: ["This policy is intended to operate subject to the Fair Credit Billing Act (FCBA), Electronic Fund Transfer Act, and applicable Visa/Mastercard chargeback rules. Applicability and legal compliance must be reviewed; customers retain their statutory and card-network dispute rights."],
      subsections: [
        {
          title: "a) Contact us before filing a chargeback",
          paragraphs: [`If you notice an incorrect charge, duplicate charge, or have any billing dispute, please contact us first by phone at ${business.phoneDisplay} so we can help. This does not prevent you from contacting your bank or initiating a lawful dispute.`, `The supplied terms reference ${returnPolicy.billingErrorReportDays} days from your billing statement to report billing errors and a ${returnPolicy.billingResolutionHours}-hour resolution commitment. Actual statutory deadlines depend on the payment type and circumstances; the owner must confirm the resolution commitment.`],
        },
        {
          title: "b) No chargeback fraud",
          paragraphs: ["You agree not to submit knowingly false or abusive chargeback claims, including claims based solely on the following circumstances where no valid dispute right exists:", "Such claims may constitute friendly fraud or chargeback abuse. We reserve the right to submit relevant, lawfully collected evidence to your bank, including order confirmation, IP address, device logs, correspondence, and delivery proof. A legitimate dispute is not automatically fraud."],
          items: ["A legitimate purchase that was delivered as described", "A purchase made by a family member or authorized user", "Forgetting to cancel a subscription", "After a refund has already been issued"],
        },
        {
          title: "c) Chargeback fees and consequences",
          paragraphs: [`If a chargeback is filed in violation of these Terms and is resolved in our favor, the supplied terms request reimbursement of dispute costs, including a $${returnPolicy.chargebackFeeUsd} administrative chargeback processing fee per dispute, only where permitted by applicable law and card-network regulations. This provision requires legal review.`, "Customers who abuse the chargeback process may have their accounts permanently banned from Econers, subject to applicable law and a review of the circumstances."],
        },
        {
          title: "d) How we handle chargebacks",
          paragraphs: ["Upon receiving a chargeback notice, we will provide your financial institution with proof of transaction. If the dispute is found to be valid, we will accept the chargeback and arrange the appropriate refund or credit through the payment provider without duplicating a credit already issued."],
        },
      ],
    },
    {
      title: "6. Cancellation",
      paragraphs: [`You may cancel your order within ${returnPolicy.cancellationHours} hours of purchase for a full refund, provided work on your order has not commenced.`],
    },
    {
      title: "7. Intellectual property",
      paragraphs: ["All content on Econers, including logos, text, graphics, and software, is the intellectual property of Suntech and protected under U.S. Copyright Law (Title 17, U.S. Code), subject to any third-party ownership or licensing rights. Any unauthorized reproduction is strictly prohibited."],
    },
    {
      title: "8. Limitation of liability",
      paragraphs: [`To the fullest extent permitted by applicable law, in no event shall Suntech or Econers be liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount you paid to us in the last ${returnPolicy.liabilityLookbackDays} days. This limitation does not apply where prohibited by law and requires legal review.`],
    },
    {
      title: "9. Governing law and dispute resolution",
      paragraphs: ["The supplied terms designate the laws of the State of Delaware, United States, and binding arbitration in Delaware in accordance with the Federal Arbitration Act, including a waiver of the right to a jury trial. These provisions require qualified legal review and apply only to the extent enforceable under applicable law; non-waivable consumer rights are preserved."],
    },
    {
      title: "10. Contact us",
      paragraphs: ["For any questions regarding these Terms, refunds, or billing disputes, contact Suntech using the phone number below."],
    },
  ] satisfies PolicySection[],
};

export const activities: Item[] = [
  {
    icon: Globe2,
    title: "Online commerce & digital operations",
    text: "Suntech conducts its business activities through digital channels, managing day-to-day e-commerce operations online.",
  },
  {
    icon: Inbox,
    title: "Enquiries & order processing",
    text: "Receiving and reviewing customer enquiries and orders in an organized, documented way.",
    note: "If applicable",
  },
  {
    icon: MessagesSquare,
    title: "Customer communication",
    text: "Clear, professional communication and order-related assistance for customers who reach out.",
    note: "If applicable",
  },
  {
    icon: Truck,
    title: "Fulfilment coordination",
    text: "Coordinating fulfilment, shipping or delivery arrangements related to customer transactions.",
    note: "If applicable",
  },
  {
    icon: LifeBuoy,
    title: "After-sales support",
    text: "Handling follow-up questions and customer requests after a transaction has been completed.",
    note: "If applicable",
  },
];

export const reasons: Item[] = [
  {
    icon: Handshake,
    title: "Professional communication",
    text: "Every enquiry is answered in a courteous, clear and business-like manner.",
  },
  {
    icon: FileText,
    title: "Clear information",
    text: "Straightforward details so customers know how to reach us and what to expect.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-focused approach",
    text: "We listen to each request and respond with the customer's needs in mind.",
  },
  {
    icon: ListChecks,
    title: "Organized handling",
    text: "Business enquiries and requests are reviewed and tracked in an orderly way.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent practices",
    text: "A commitment to honest, transparent business information and conduct.",
  },
];

export const steps = [
  {
    title: "Customer enquiry / order",
    text: "A customer contacts Suntech by phone or through the contact form with an enquiry or order request.",
  },
  {
    title: "Review",
    text: "The order or request is reviewed so the relevant details can be confirmed with the customer.",
  },
  {
    title: "Processing & coordination",
    text: "Suntech processes the request and coordinates any next steps required for the transaction.",
  },
  {
    title: "Updates & support",
    text: "The customer receives updates and can reach Suntech for any follow-up support.",
  },
];

export const faqs = [
  {
    q: "What type of business is Suntech?",
    a: "Suntech is an e-commerce business. A more specific description will be added once the owner confirms the products and sales channels.",
  },
  {
    q: "Where is Suntech based?",
    a: "Suntech's business address is 5636 N Bernard St, Chicago, IL 60659, USA.",
  },
  {
    q: "How can I contact Suntech?",
    a: "You can contact Suntech by phone at +1 312 404 9673 or by using the contact form, which connects you to us by phone.",
  },
  {
    q: "How can I ask about an order or business enquiry?",
    a: "Use the Contact Us page and provide the relevant details so the business can review your enquiry.",
  },
];
