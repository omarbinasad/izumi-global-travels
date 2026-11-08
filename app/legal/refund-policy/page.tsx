import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/legal/refund-policy.html. */

export const metadata: Metadata = {
  title: "Refund Policy — Izumi Global Travels",
  description: "When a ticket can be refunded, what it costs, and how long the money takes to come back.",
};

export default function LegalRefundPolicyPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* BLADE BOUNDARY: page head -> <x-ui.page-head /> */}
        <div className="page-container page-head">
          <p className="page-head__eyebrow">
            Legal
          </p>
          <h1 className="page-head__title">
            Refund Policy
          </h1>
          <p className="page-head__text">
            When a ticket can be refunded, what it costs, and how long the money takes to come back.
          </p>
        </div>
        {/* END BLADE BOUNDARY: page head */}
        <div className="page-container pb-10">
          {/* BLADE BOUNDARY: legal document -> <x-legal.document :page="$page" /> */}
          {/* @content-pending: placeholder wording. The published text is the one
            the company's legal adviser approves; this only fixes the layout. */}
          <article className="post">
            <p className="legal-note">
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-info" />
              </svg>
              {" Placeholder wording for layout only. Replace it with the text your legal adviser approves before launch."}
            </p>
            <p className="legal-updated">
              Last updated 1 September 2026
            </p>
            <div className="post__body">
              <h2>
                What decides a refund
              </h2>
              <p>
                The airline’s fare rules decide whether a ticket is refundable and what is deducted. Those rules are shown against the fare before you confirm, and they are the same rules whether you book with us or with the airline.
              </p>
              <h2>
                Fare types
              </h2>
              <ul className="post__list">
                <li>
                  Refundable fares: refunded less the airline’s cancellation fee.
                </li>
                <li>
                  Partly refundable fares: taxes and some charges come back, the fare does not.
                </li>
                <li>
                  Non-refundable fares: nothing comes back except the taxes the airline returns by rule.
                </li>
              </ul>
              <h2>
                Our service fee
              </h2>
              <p>
                We charge a service fee for arranging a refund, shown before we begin. The fee is not charged where the cancellation is the airline’s doing.
              </p>
              <h2>
                When the airline cancels
              </h2>
              <p>
                If the airline cancels the flight or changes it beyond what its own conditions allow, you are entitled to what those conditions provide — usually a rebooking or a full refund. We claim it on your behalf at no service fee.
              </p>
              <h2>
                How long it takes
              </h2>
              <p>
                We pass a refund request to the airline within two working days. Airlines usually settle within 7 to 30 working days, and card refunds can take a further banking cycle to appear.
              </p>
              <p>
                We tell you the reference the airline gave us so the claim can be followed.
              </p>
              <h2>
                How to ask for one
              </h2>
              <p>
                Reply to your booking confirmation or use the contact page with your booking reference. Tell us which passengers and which flights the request covers.
              </p>
            </div>
          </article>
          {/* END BLADE BOUNDARY: legal document */}
        </div>
      </main>
      {/* END BLADE BOUNDARY: main content */}
      {/* BLADE BOUNDARY: site footer -> <x-layout.footer /> */}
      <SiteFooter />
      {/* END BLADE BOUNDARY: site footer */}
      {/* A link, not a button: "#top" is the top of the document in HTML, so this
        returns there with the stylesheet's smooth scroll and nothing running. */}
    </>
  );
}
