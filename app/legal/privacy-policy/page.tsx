import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/legal/privacy-policy.html. */

export const metadata: Metadata = {
  title: "Privacy Policy — Izumi Global Travels",
  description: "What personal information we collect when you book, why we need it, and what we do with it.",
};

export default function LegalPrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="page-head__text">
            What personal information we collect when you book, why we need it, and what we do with it.
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
                What we collect
              </h2>
              <p>
                We collect what a booking needs and nothing we have no use for.
              </p>
              <ul className="post__list">
                <li>
                  Contact details: name, email address and phone number.
                </li>
                <li>
                  Traveller details: name as printed on the travel document, date of birth, nationality, and passport number and expiry.
                </li>
                <li>
                  Booking details: routes, dates, fares, seats, meals and any insurance chosen.
                </li>
                <li>
                  Technical details: the pages you visit here, and the device and browser you use.
                </li>
              </ul>
              <h2>
                Why we use it
              </h2>
              <p>
                We use your details to price and place your booking with the airline, to issue tickets, to contact you about the trip, and to meet the record-keeping the airline and the authorities require. Where we send you anything else, we ask first and you can stop it at any time.
              </p>
              <h2>
                Who we share it with
              </h2>
              <p>
                A booking cannot be made without passing traveller details to the airline and, where the route requires it, to border authorities. We also use payment providers and IT suppliers who handle data on our instructions only.
              </p>
              <p>
                We do not sell personal information.
              </p>
              <h2>
                How long we keep it
              </h2>
              <p>
                We keep booking records for as long as the law requires us to, and no longer than we can justify. Enquiries that do not become bookings are deleted once they are no longer useful.
              </p>
              <h2>
                Your choices
              </h2>
              <p>
                You can ask us for a copy of what we hold, ask us to correct it, or ask us to delete what we are not required to keep. Write to us and we will answer within a month.
              </p>
              <h2>
                Cookies
              </h2>
              <p>
                This site uses cookies to remember your language, currency and theme, and to understand which pages are used. You can clear or block them in your browser; the booking flow still works without the optional ones.
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
