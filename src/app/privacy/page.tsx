/* eslint-disable react/no-unescaped-entities -- legal copy is kept verbatim */
import type { Metadata } from "next";
import LegalPage, { LegalSection, List, P } from "@/components/site/LegalPage";
import { CONTACT_EMAIL } from "@/components/site/shared";

export const metadata: Metadata = { title: "skuspine · Privacy policy" };

const TOC: [string, string][] = [
  ["who", "Who we are"],
  ["collect", "What we collect"],
  ["use", "How we use it and why"],
  ["ai", "Automation and AI features"],
  ["share", "Who we share it with"],
  ["transfers", "International transfers"],
  ["retention", "How long we keep it"],
  ["security", "How we protect it"],
  ["rights", "Your rights"],
  ["cookies", "Cookies"],
  ["children", "Children"],
  ["changes", "Changes to this policy"],
];

const Email = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function PrivacyPage() {
  const section = (i: number) => ({ id: TOC[i][0], n: i + 1, title: TOC[i][1] });

  return (
    <LegalPage
      title="Privacy policy"
      intro="This policy explains what personal data skuspine collects, why, who it is shared with and the choices you have. It covers our website, our demo requests and the skuspine platform. Plain English first; the legal detail sits underneath."
      toc={TOC}
      seeAlso={{ href: "/terms", label: "Terms of service" }}
    >
      <LegalSection {...section(0)}>
        <P>skuspine is operated by [LEGAL ENTITY NAME], registered at [REGISTERED ADDRESS], company number [COMPANY NUMBER] ("skuspine", "we", "us").</P>
        <P>
          For data about you as a website visitor, demo requester or account user, we are the <strong>controller</strong>. For data our merchants bring into the platform about their own customers (for example a delivery address on an order), the merchant is the controller and we act as their <strong>processor</strong>, under our Data Processing Agreement.
        </P>
        <P>
          Questions about privacy go to <Email />.
        </P>
      </LegalSection>

      <LegalSection {...section(1)}>
        <P>
          <strong>When you request a demo:</strong> your name, work email, role, company name, website, the channels you sell on, and the ranges you choose for order volume, team size, shipping locations, turnover and timing. Your website and the turnover question are optional.
        </P>
        <P>
          <strong>When you create an account:</strong> your name, email, password (stored only as a salted hash), role and permissions, and billing contact details. Card payments for subscriptions are handled by our payment provider; we never see or store full card numbers.
        </P>
        <P>
          <strong>When you connect your stores and carriers:</strong> access tokens for marketplaces such as Amazon, Shopify and eBay, and for delivery partners. These are stored encrypted, are never written to logs and are not visible to skuspine staff.
        </P>
        <P>
          <strong>Data that flows through the platform:</strong> orders, products, stock levels, landed cost, suppliers, fees, settlements, advertising spend, shipments and returns. Orders include your customers' names, delivery addresses, and sometimes phone numbers or emails where a carrier requires them for delivery.
        </P>
        <P>
          <strong>When you use the site or app:</strong> IP address, browser and device type, pages visited, and timestamps, plus security and audit logs of actions taken in your account.
        </P>
      </LegalSection>

      <LegalSection {...section(2)}>
        <P>
          <strong>To run the service you signed up for</strong> (performance of a contract): importing orders, buying labels, booking delivery partners, sending tracking back to marketplaces, calculating margin and handling returns.
        </P>
        <P>
          <strong>To respond to your demo request and follow up</strong> (legitimate interests): we use your answers to prepare a relevant demo and to suggest a suitable plan. We will not add you to a marketing list without your consent.
        </P>
        <P>
          <strong>To keep the platform secure and reliable</strong> (legitimate interests): monitoring, fraud prevention, debugging and audit logging.
        </P>
        <P>
          <strong>To bill you and keep financial records</strong> (legal obligation and contract).
        </P>
        <P>
          <strong>To improve skuspine</strong> (legitimate interests): aggregated, de-identified usage statistics. We do not sell personal data, and we do not use merchants' customer data to train general-purpose AI models.
        </P>
      </LegalSection>

      <LegalSection {...section(3)}>
        <P>
          skuspine makes automated operational decisions on your behalf, such as which warehouse ships an order and which delivery partner is booked, based on rules you set. These decisions concern orders, not people, and you can review or override any of them from the exception queue.
        </P>
        <P>
          Some features use large language model providers, for example to read order manifests that arrive as files rather than through an API. Only the data needed for that task is sent, under contracts that prohibit the provider from training on it or retaining it beyond the request.
        </P>
      </LegalSection>

      <LegalSection {...section(4)}>
        <P>We share data only with the service providers we need to run skuspine, each under a written agreement:</P>
        <List
          items={[
            "Cloud hosting and storage ([HOSTING PROVIDER], [REGION])",
            "Shipping rate and label services, and the delivery partners you enable, which receive the delivery details needed to ship each order",
            "The marketplaces you connect, which receive tracking numbers and order status",
            "Payment processing for subscriptions ([PAYMENT PROVIDER])",
            "Email delivery and customer support tools",
            "Language model providers, for the features described above",
          ]}
        />
        <P>A current list of sub-processors is available on request. We may also disclose data where the law requires it, or as part of a merger or acquisition, in which case this policy continues to apply.</P>
      </LegalSection>

      <LegalSection {...section(5)}>
        <P>
          skuspine serves merchants in the UK, the EU and the US. Where personal data moves outside the UK or EEA, we rely on adequacy decisions or the UK International Data Transfer Agreement and EU Standard Contractual Clauses, with additional safeguards where needed.
        </P>
      </LegalSection>

      <LegalSection {...section(6)}>
        <P>
          <strong>Demo requests:</strong> up to 24 months after our last contact, unless you become a customer or ask us to delete them sooner.
        </P>
        <P>
          <strong>Account and platform data:</strong> for as long as your subscription is active. After cancellation you have [30] days to export your data, after which it is deleted from live systems and removed from backups within a further [90] days.
        </P>
        <P>
          <strong>Billing records:</strong> as long as tax and accounting law requires, typically six years.
        </P>
        <P>
          <strong>Security logs:</strong> up to 12 months.
        </P>
      </LegalSection>

      <LegalSection {...section(7)}>
        <P>
          Data is encrypted in transit and at rest. Each merchant's data is isolated at the database level, so one merchant can never read another's records. Access to cost and margin data is restricted by role, administrative actions are audit-logged, and marketplace and carrier credentials are encrypted and inaccessible to our staff. skuspine does not process card data.
        </P>
        <P>No system is perfectly secure. If a breach affects your personal data, we will notify you and the relevant regulator as the law requires.</P>
      </LegalSection>

      <LegalSection {...section(8)}>
        <P>
          Depending on where you live, you can ask to access, correct, delete or export your personal data, object to or restrict how we use it, and withdraw consent at any time. UK and EU residents can complain to the ICO or their local data protection authority. California residents have the rights set out in the CCPA, including the right to know and delete; we do not sell or share personal information for cross-context behavioural advertising.
        </P>
        <P>If you are a merchant's customer, please contact the merchant you bought from first; we will help them respond.</P>
        <P>
          To make a request, email <Email />. We reply within one month.
        </P>
      </LegalSection>

      <LegalSection {...section(9)}>
        <P>
          We use strictly necessary cookies to keep you signed in and to secure the app. With your consent, we use analytics cookies to understand how the website is used. You can change your choice at any time through the cookie settings link in the footer.
        </P>
      </LegalSection>

      <LegalSection {...section(10)}>
        <P>skuspine is a business service and is not intended for anyone under 18.</P>
      </LegalSection>

      <LegalSection {...section(11)}>
        <P>If we make material changes, we will update the date at the top of this page and notify account holders by email before the changes take effect.</P>
      </LegalSection>
    </LegalPage>
  );
}
