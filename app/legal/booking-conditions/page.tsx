import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/legal/booking-conditions.html. */

export const metadata: Metadata = {
  title: "Booking Conditions — Izumi Global Travels",
  description: "What happens between a booking request and a ticket, and what is expected of each side.",
};

export default function LegalBookingConditionsPage() {
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
            Booking Conditions
          </h1>
          <p className="page-head__text">
            What happens between a booking request and a ticket, and what is expected of each side.
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
                From request to ticket
              </h2>
              <p>
                A booking request tells us what you want. We check availability and the final fare with the airline, come back to you with anything that has moved, and issue the ticket once the booking is confirmed and paid.
              </p>
              <p>
                Izumi Global Travels acts as an agent for the airline. The airline is the carrier, and its own conditions of carriage govern the flight itself.
              </p>
              <h2>
                Traveller details
              </h2>
              <p>
                Names must match the travel document exactly, in the same order. A date of birth is required for every traveller, and passport details for every international journey.
              </p>
              <ul className="post__list">
                <li>
                  An infant is under 2 years old on the date of travel, a child is 2 to 11, and an adult is 12 or over.
                </li>
                <li>
                  Each traveller’s passport should be valid well beyond the return date; many destinations ask for six months.
                </li>
                <li>
                  Special requests — seats, meals, assistance — are passed to the airline and confirmed by the airline, not by us.
                </li>
              </ul>
              <h2>
                Baggage
              </h2>
              <p>
                The allowance shown against a fare is the airline’s. Extra bags, sports equipment and oversized items are bought from the airline and are subject to what it has left.
              </p>
              <h2>
                Check-in and boarding
              </h2>
              <p>
                Check in within the airline’s window and be at the gate by the time on the boarding pass. A missed flight is treated by the airline as a no-show, and a no-show usually forfeits the fare.
              </p>
              <h2>
                If a schedule changes
              </h2>
              <p>
                Airlines move schedules. We pass on every change we are told about, to the contact details on the booking, which is why those details need to be right and current.
              </p>
              <h2>
                Insurance
              </h2>
              <p>
                Travel insurance is optional and is arranged with the insurer, whose policy wording applies. We recommend cover for medical costs, cancellation and baggage on every international trip.
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
