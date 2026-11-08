import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/support/feedback-thanks.html. */

export const metadata: Metadata = {
  title: "Thank you for your feedback — Izumi Global Travels",
  description: "Your feedback has reached the team that handles bookings.",
};

export default function SupportFeedbackThanksPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* BLADE BOUNDARY: feedback thanks -> <x-support.feedback-thanks /> */}
        {/* Where the feedback form lands once Laravel has stored the message. It is
          a page of its own rather than a banner on the form, so a reload cannot
          send the same feedback twice and the address can be linked to. */}
        <div className="page-container thanks">
          <section className="review-panel thanks__panel" aria-labelledby="thanks-title">
            <span className="thanks__mark" aria-hidden="true">
              {' '}
              <svg className="icon size-8">
                <use href="#i-check" />
              </svg>
              {' '}
            </span>
            <h1 className="thanks__title" id="thanks-title">
              Thank you for your valuable feedback
            </h1>
            <p className="thanks__text">
              It has reached the team that handles bookings. We read every message, and it is the fastest way to change how we book, what we quote and how we answer.
            </p>
            <p className="thanks__note">
              If you asked us to reply, we come back to you within two working days.
            </p>
            <div className="thanks__actions">
              <Link className="btn btn--primary" href="/">
                {" Back to home "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </Link>
              {' '}
              <Link className="btn btn--outline" href="/contact">
                Contact the team
              </Link>
            </div>
          </section>
        </div>
        {/* END BLADE BOUNDARY: feedback thanks */}
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
