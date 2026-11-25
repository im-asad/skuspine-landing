/* eslint-disable react/no-unescaped-entities -- legal copy is kept verbatim */
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection, List, P } from "@/components/site/LegalPage";
import { pageMetadata } from "@/components/site/seo";
import { CONTACT_EMAIL } from "@/components/site/shared";
import { SubpageJsonLd } from "@/components/site/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "skuspine · Terms of service",
  description: "The terms for using skuspine: accounts, billing, your responsibilities, marketplaces and delivery partners, your data, liability and ending the agreement.",
  path: "/terms",
});

const TOC: [string, string][] = [
  ["service", "The service"],
  ["accounts", "Accounts and users"],
  ["billing", "Subscriptions and billing"],
  ["responsibilities", "Your responsibilities"],
  ["third", "Marketplaces and delivery partners"],
  ["limits", "What skuspine does not do"],
  ["data", "Your data"],
  ["ai", "Automation and AI features"],
  ["use", "Acceptable use"],
  ["availability", "Availability and support"],
  ["ip", "Intellectual property"],
  ["confidentiality", "Confidentiality"],
  ["warranties", "Warranties and disclaimers"],
  ["liability", "Limitation of liability"],
  ["indemnity", "Indemnity"],
  ["termination", "Ending the agreement"],
  ["changes", "Changes to these terms"],
  ["law", "Governing law"],
  ["contact", "Contact"],
];

const Email = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function TermsPage() {
  const section = (i: number) => ({ id: TOC[i][0], n: i + 1, title: TOC[i][1] });

  return (
    <LegalPage
      title="Terms of service"
      intro="These terms govern your use of skuspine. By creating an account or using the service you agree to them on behalf of your business. If you do not agree, please do not use skuspine."
      toc={TOC}
      seeAlso={{ href: "/privacy", label: "Privacy policy" }}
    >
      <SubpageJsonLd path="/terms" name="Terms of service" />
      <LegalSection {...section(0)}>
        <P>
          skuspine is a back-office platform for Shopify e-commerce businesses, provided by [LEGAL ENTITY NAME] ("skuspine", "we"). It imports orders from the stores you connect, applies the dispatch rules you set, buys shipping labels, books delivery partners, sends tracking back to your marketplaces, keeps stock in sync and tracks returns.
        </P>
        <P>We may improve, change or add features over time. We will not remove a core feature you rely on during a paid term without reasonable notice.</P>
      </LegalSection>

      <LegalSection {...section(1)}>
        <P>
          You must be at least 18 and able to bind your business. You are responsible for your users, the roles you give them and everything done under your account. Keep credentials safe and tell us promptly at <Email /> if you suspect unauthorised access.
        </P>
      </LegalSection>

      <LegalSection {...section(2)}>
        <P>Plans are billed in advance, monthly or annually, at the price shown when you subscribe. Subscriptions renew automatically until cancelled. Fees exclude taxes, which are added where applicable.</P>
        <P>Delivery partner charges for the labels you buy are separate from your skuspine subscription and are billed by the delivery partner or under your own carrier account, as configured.</P>
        <P>
          If a payment fails, we will let you know and may suspend the service after [14] days. We will give at least [30] days' notice of any price change, which applies from your next renewal. Fees already paid are non-refundable except where the law requires or these terms say otherwise.
        </P>
      </LegalSection>

      <LegalSection {...section(3)}>
        <List
          items={[
            "Keep the information you give us accurate, including product weights, dimensions, costs, addresses and customs details. Labels, rates and customs documents are generated from it.",
            "Set and review your dispatch rules. skuspine follows them faithfully; it cannot know what you intended if a rule says otherwise.",
            "Review orders in the exception queue. Orders that cannot proceed automatically wait there for a decision.",
            "Comply with the terms of the marketplaces and delivery partners you connect, and with the laws that apply to the goods you sell and ship.",
            "Have a lawful basis to share your customers' data with us for processing.",
          ]}
        />
      </LegalSection>

      <LegalSection {...section(4)}>
        <P>
          skuspine connects to services we do not control, such as Amazon, Shopify, eBay, DHL, FedEx, UPS, DPD, Royal Mail and Evri. Their availability, pricing, rules and API changes are outside our control, and your relationship with each is governed by their own terms.
        </P>
        <P>
          skuspine is not a carrier, freight forwarder or customs broker. We compare the rates available on the carrier accounts you enable but do not negotiate carrier contracts. Loss, damage and delay claims are made against the delivery partner.
        </P>
      </LegalSection>

      <LegalSection {...section(5)}>
        <P>
          skuspine does not process customer payments, issue refunds through marketplaces or handle payouts; those stay with each channel's checkout. It records tax as reported by your channels but does not calculate tax liability or file returns. Figures shown in skuspine depend on the data available to us and are management information, not accounting or tax advice.
        </P>
      </LegalSection>

      <LegalSection {...section(6)}>
        <P>
          You own your data. You give us permission to host, process and transmit it only to provide and support the service, and as described in our <Link href="/privacy">Privacy policy</Link>. Where we process personal data on your behalf, our Data Processing Agreement forms part of these terms.
        </P>
        <P>You can export your data at any time while subscribed and for [30] days after your subscription ends. After that we delete it as set out in the Privacy policy.</P>
        <P>We may use aggregated, de-identified usage statistics that do not identify you or your customers to operate and improve skuspine.</P>
      </LegalSection>

      <LegalSection {...section(7)}>
        <P>
          Some features use automation and AI, for example reading order documents or, in future, suggesting actions. Outputs can occasionally be wrong. Review anything that matters before relying on it, particularly where the system has flagged low confidence.
        </P>
      </LegalSection>

      <LegalSection {...section(8)}>
        <P>
          Do not misuse skuspine. That includes attempting to access another merchant's data, probing or disrupting the service, reverse engineering it, reselling it without our agreement, using it to ship prohibited or illegal goods, or exceeding reasonable rate limits in a way that harms other users.
        </P>
      </LegalSection>

      <LegalSection {...section(9)}>
        <P>
          We aim to keep skuspine available around the clock and to schedule maintenance outside peak dispatch hours where possible. Support is available by email at <Email />. Any uptime commitment or service credits apply only if set out in your order form.
        </P>
      </LegalSection>

      <LegalSection {...section(10)}>
        <P>
          skuspine, including its software, design and branding, belongs to us and our licensors. Your subscription gives you a non-exclusive, non-transferable right to use it for your business during your term. If you send us feedback, we may use it without obligation to you.
        </P>
      </LegalSection>

      <LegalSection {...section(11)}>
        <P>Each of us will keep the other's non-public business information confidential and use it only for the purposes of these terms. This continues after the agreement ends.</P>
      </LegalSection>

      <LegalSection {...section(12)}>
        <P>
          We will provide the service with reasonable skill and care. Apart from that, and to the extent the law allows, skuspine is provided "as is", without other warranties, including fitness for a particular purpose or uninterrupted, error-free operation.
        </P>
      </LegalSection>

      <LegalSection {...section(13)}>
        <P>Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot legally be limited.</P>
        <P>
          Otherwise, neither party is liable for loss of profits, revenue, goodwill or data, or for indirect or consequential loss. Each party's total liability in any 12-month period is limited to the fees you paid for skuspine in that period.
        </P>
      </LegalSection>

      <LegalSection {...section(14)}>
        <P>
          You will defend and compensate us for claims by third parties arising from goods you sell or ship, data you provide without a lawful basis, or your breach of a marketplace's or delivery partner's terms.
        </P>
      </LegalSection>

      <LegalSection {...section(15)}>
        <P>
          You can cancel at any time from your account settings; cancellation takes effect at the end of your current billing period. We can suspend or end your account if you materially breach these terms and do not fix the breach within [14] days of notice, or immediately where needed to protect the service or other users. On termination your right to use skuspine ends and your data is handled as described under "Your data".
        </P>
      </LegalSection>

      <LegalSection {...section(16)}>
        <P>We may update these terms. For material changes we will give account holders at least [30] days' notice by email. Continuing to use skuspine after the changes take effect means you accept them.</P>
      </LegalSection>

      <LegalSection {...section(17)}>
        <P>
          These terms are governed by the laws of [England and Wales], and the courts of [England and Wales] have exclusive jurisdiction, unless the law where you are based requires otherwise.
        </P>
      </LegalSection>

      <LegalSection {...section(18)}>
        <P>
          [LEGAL ENTITY NAME], [REGISTERED ADDRESS]. Email: <Email />.
        </P>
      </LegalSection>
    </LegalPage>
  );
}
