import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/legal/terms.html. */

export const metadata: Metadata = {
  title: "Terms & Conditions — Izumi Global Travels",
  description: "The terms on which Izumi Global Travels sells travel and on which this website may be used.",
};

export default function LegalTermsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="page-head__text">
            The terms on which Izumi Global Travels sells travel and on which this website may be used.
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
                Who we are
              </h2>
              <p>
                Izumi Global Travels is a travel agency registered in Dhaka, Bangladesh. In these terms “we” and “us” mean Izumi Global Travels, and “you” means the person making a booking or using this site.
              </p>
              <p>
                Izumi Global Travels acts as an agent for the airline. The airline is the carrier, and its own conditions of carriage govern the flight itself.
              </p>
              <h2>
                Using this site
              </h2>
              <p>
                You may use this site to search for travel and to send us a booking request. You agree not to use it to place false or speculative requests, and not to interfere with how it works for anyone else.
              </p>
              <p>
                Fares, availability and schedules shown here come from the airline and can change until a ticket is issued.
              </p>
              <h2>
                Booking requests and contracts
              </h2>
              <p>
                Submitting a request does not create a booking. We confirm availability and the final fare with the airline, and a contract exists only once we confirm the booking in writing and the ticket is issued.
              </p>
              <ul className="post__list">
                <li>
                  A request is held for as long as the airline holds the fare, which is often only a few hours.
                </li>
                <li>
                  Names must match the travel document exactly; a correction after ticketing is a change and may carry an airline fee.
                </li>
                <li>
                  The traveller is responsible for passports, visas, transit permits and any health requirements for the whole journey.
                </li>
              </ul>
              <h2>
                Prices and payment
              </h2>
              <p>
                The price we confirm includes the fare, taxes and any fee we have named. Optional extras such as seats, meals and insurance are priced separately and shown before you confirm.
              </p>
              <p>
                Payment is due as set out in the confirmation. A ticket is issued only once payment has cleared.
              </p>
              <h2>
                Changes and cancellations
              </h2>
              <p>
                The airline’s fare rules decide what a change or a cancellation costs. Where the airline allows one, we make the change for you and quote its fee and any fare difference before we act.
              </p>
              <p>
                Our own service fee for arranging a change is shown separately.
              </p>
              <h2>
                Liability
              </h2>
              <p>
                We are responsible for arranging your booking with reasonable care and skill. We are not liable for the airline’s performance, for delays and cancellations outside our control, or for losses that were not foreseeable when the booking was made.
              </p>
              <p>
                Nothing in these terms limits liability that cannot be limited under Bangladeshi law.
              </p>
              <h2>
                Complaints and governing law
              </h2>
              <p>
                Tell us as soon as something goes wrong so we can put it right; our contact details are on the contact page. These terms are governed by the laws of Bangladesh.
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
