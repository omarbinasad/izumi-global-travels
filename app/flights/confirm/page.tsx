import Link from 'next/link';
import type { Metadata } from 'next';
import BookingSteps from '@/components/booking/BookingSteps';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/flights/confirm.html. */

export const metadata: Metadata = {
  title: "Booking confirmed — Izumi Global Travels",
  description: "Your booking is confirmed and paid. Your reference and itinerary are here.",
  robots: { index: false },
};

export default function FlightsConfirmPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* ====================================================================
          Step five, and the end of the flow. Payment has already been taken on
          the step before this one, so this page is a receipt: it is reached
          after the backend has a settled payment and nothing else may open it.
          The reference, the status and every figure below are the backend's —
          the browser does not generate a reference, decide a status, or add up
          a total.
          ==================================================================== */}
        <div className="page-container pt-6" data-booking-reference="IGT-BR-240918">
          {/* BLADE BOUNDARY: booking steps -> <x-booking.steps current="5" /> */}
          <BookingSteps current={5} />
          {/* END BLADE BOUNDARY: booking steps */}
        </div>
        <div className="page-container confirm-layout">
          {/* BLADE BOUNDARY: booking receipt -> <x-booking.booking-receipt /> */}
          <div className="confirm-hero">
            {/* Decorative. The status it illustrates is written out below it. */}
            <svg className="confirm-hero__art" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <linearGradient id="confirm-disc" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--color-cta-from)" />
                  <stop offset="100%" stopColor="#25b39a" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="58" fill="url(#confirm-disc)" />
              <rect x="78" y="70" width="44" height="58" rx="6" fill="#fff" />
              <path d="M87 84h26M87 94h26M87 104h14" stroke="var(--color-cta-from)" strokeWidth="4" strokeLinecap="round" />
              <g className="confirm-hero__tick">
                <circle cx="118" cy="118" r="15" fill="#1f9d76" />
                <path d="m111 118 4.5 4.5L125 113" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <g fill="var(--color-primary)" opacity="0.55">
                <circle cx="42" cy="74" r="3" />
                <circle cx="52" cy="132" r="2.4" />
                <circle cx="160" cy="72" r="2.6" />
                <circle cx="150" cy="140" r="3.2" />
              </g>
              <g fill="#1f9d76" opacity="0.6">
                <circle cx="60" cy="58" r="2.4" />
                <circle cx="146" cy="52" r="2" />
                <circle cx="36" cy="112" r="2.2" />
              </g>
            </svg>
            <h1 className="confirm-hero__title">
              Booking Confirmed!
            </h1>
            <p className="confirm-hero__text">
              Your payment went through and your seats are booked. The confirmation is on its way to your email.
            </p>
            <p className="confirm-ref">
              <span className="confirm-ref__label">
                Booking Reference
              </span>
              {' '}
              <span className="confirm-ref__code">
                IGT-BR-240918
              </span>
            </p>
            <p className="confirm-hero__status">
              <span className="status-pill status-pill--confirmed">
                Confirmed
              </span>
            </p>
            <p className="confirm-hero__note">
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-lock" />
              </svg>
              {" Paid in full. Your statement will show Izumi Global Travels."}
            </p>
            <p className="confirm-actions">
              <Link className="btn btn--primary" href="/account/bookings">
                {' '}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-ticket" />
                </svg>
                {" View my booking "}
              </Link>
              {' '}
              <Link className="btn btn--secondary" href="/">
                {' '}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-home" />
                </svg>
                {" Go to Home "}
              </Link>
            </p>
          </div>
          {/* END BLADE BOUNDARY: booking receipt */}
          {/* BLADE BOUNDARY: booking summary -> <x-booking.booking-summary /> */}
          <section className="review-panel" aria-labelledby="booking-summary-title">
            <div className="confirm-head">
              <h2 className="m-0 text-lg font-semibold text-fg-heading" id="booking-summary-title">
                Booking Summary
              </h2>
              <p className="confirm-head__status">
                {"Status "}
                <span className="status-pill status-pill--confirmed">
                  Confirmed
                </span>
              </p>
            </div>
            <dl className="summary-rows">
              <div className="summary-row" data-offer-id="off_1">
                <dt className="summary-row__label">
                  <img className="summary-row__logo" src="/images/BG.avif" alt="" width="120" height="120" />
                  {" Flight details"}
                </dt>
                <dd className="summary-row__value">
                  <span className="summary-row__line">
                    {"Biman Bangladesh Airlines "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {" BG 376 "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {" Non-stop"}
                  </span>
                  {' '}
                  <span className="summary-row__line">
                    {" 18 Sep "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {' '}
                    <strong>
                      02:20
                    </strong>
                    {" DAC "}
                    <svg className="icon size-4 summary-row__arrow" aria-hidden="true">
                      <use href="#i-arrow-right" />
                    </svg>
                    {' '}
                    <strong>
                      10:05
                    </strong>
                    {" NRT "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {' '}
                    <span className="summary-row__muted">
                      6h 45m
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="summary-row__line">
                    {" 27 Sep "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {' '}
                    <strong>
                      11:00
                    </strong>
                    {" NRT "}
                    <svg className="icon size-4 summary-row__arrow" aria-hidden="true">
                      <use href="#i-arrow-right" />
                    </svg>
                    {' '}
                    <strong>
                      15:15
                    </strong>
                    {" DAC "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {' '}
                    <span className="summary-row__muted">
                      7h 15m
                    </span>
                    {' '}
                  </span>
                </dd>
              </div>
              <div className="summary-row">
                <dt className="summary-row__label">
                  <svg className="icon size-5 summary-row__icon" aria-hidden="true">
                    <use href="#i-user" />
                  </svg>
                  {" Passengers"}
                </dt>
                <dd className="summary-row__value">
                  <span className="summary-row__line">
                    {"1 Adult "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {" 1 Child "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {" 1 Infant "}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {" Economy"}
                  </span>
                  {' '}
                  <span className="summary-row__line summary-row__muted">
                    Passenger details completed
                  </span>
                </dd>
                <span className="summary-row__done" aria-label="Complete">
                  {' '}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  {' '}
                </span>
              </div>
              <div className="summary-row">
                <dt className="summary-row__label">
                  <svg className="icon size-5 summary-row__icon" aria-hidden="true">
                    <use href="#i-bag" />
                  </svg>
                  {" Add-ons"}
                </dt>
                <dd className="summary-row__value">
                  <div className="addon-summary__group">
                    <p className="addon-summary__who">
                      Passenger 1 · Adult
                    </p>
                    <dl className="addon-summary__list">
                      <div className="price-row">
                        <dt>
                          Window seat × 2
                        </dt>
                        <dd className="price-row__value m-0">
                          BDT 2,400
                        </dd>
                      </div>
                      <div className="price-row">
                        <dt>
                          Halal meal
                        </dt>
                        <dd className="price-row__value m-0">
                          Included
                        </dd>
                      </div>
                      <div className="price-row">
                        <dt>
                          Standard cover
                        </dt>
                        <dd className="price-row__value m-0">
                          BDT 1,250
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="addon-summary__group">
                    <p className="addon-summary__who">
                      Passenger 2 · Child
                    </p>
                    <dl className="addon-summary__list">
                      <div className="price-row">
                        <dt>
                          Aisle seat × 2
                        </dt>
                        <dd className="price-row__value m-0">
                          BDT 2,400
                        </dd>
                      </div>
                      <div className="price-row">
                        <dt>
                          Regular meal
                        </dt>
                        <dd className="price-row__value m-0">
                          Included
                        </dd>
                      </div>
                      <div className="price-row">
                        <dt>
                          Premium cover
                        </dt>
                        <dd className="price-row__value m-0">
                          BDT 2,450
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="addon-summary__group">
                    <p className="addon-summary__who">
                      Passenger 3 · Infant
                    </p>
                    <dl className="addon-summary__list">
                      <div className="price-row">
                        <dt>
                          No seat preference × 2
                        </dt>
                        <dd className="price-row__value m-0">
                          Free
                        </dd>
                      </div>
                      <div className="price-row">
                        <dt>
                          Vegetarian
                        </dt>
                        <dd className="price-row__value m-0">
                          Included
                        </dd>
                      </div>
                      <div className="price-row">
                        <dt>
                          No insurance
                        </dt>
                        <dd className="price-row__value m-0">
                          BDT 0
                        </dd>
                      </div>
                    </dl>
                  </div>
                </dd>
              </div>
              <div className="summary-row">
                <dt className="summary-row__label">
                  <svg className="icon size-5 summary-row__icon" aria-hidden="true">
                    <use href="#i-mail" />
                  </svg>
                  {" Contact"}
                </dt>
                <dd className="summary-row__value">
                  <span className="summary-row__line">
                    {' '}
                    <a href="mailto:name@example.com">
                      name@example.com
                    </a>
                    {' '}
                    <span aria-hidden="true">
                      ·
                    </span>
                    {' '}
                    <a href="tel:+8801XXXXXXXX">
                      +880 1XXXXXXXXX
                    </a>
                    {' '}
                  </span>
                </dd>
              </div>
              <div className="summary-row summary-row--price">
                <dt className="summary-row__label">
                  <svg className="icon size-5 summary-row__icon" aria-hidden="true">
                    <use href="#i-tag" />
                  </svg>
                  {' '}
                  <span className="sr-only">
                    Estimated price
                  </span>
                </dt>
                <dd className="summary-row__value">
                  <span className="price-row">
                    {' '}
                    <span>
                      Adult × 1
                    </span>
                    {' '}
                    <span className="price-row__value">
                      BDT 61,900
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="price-row">
                    {' '}
                    <span>
                      Child × 1
                    </span>
                    {' '}
                    <span className="price-row__value">
                      BDT 49,600
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="price-row">
                    {' '}
                    <span>
                      Infant × 1
                    </span>
                    {' '}
                    <span className="price-row__value">
                      BDT 6,200
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="price-row">
                    {' '}
                    <span>
                      Taxes &amp; fees
                    </span>
                    {' '}
                    <span className="price-row__value">
                      BDT 12,810
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="price-row">
                    {' '}
                    <span>
                      Add-ons
                    </span>
                    {' '}
                    <span className="price-row__value">
                      BDT 8,500
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="price-row price-row--total">
                    {' '}
                    <span>
                      Total paid
                    </span>
                    {' '}
                    <span className="price-row__value">
                      BDT 139,010
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="summary-row__line summary-row__muted">
                    Paid on 5 Sep 2026 · Stripe · card ending 4242.
                  </span>
                </dd>
              </div>
            </dl>
          </section>
          {/* END BLADE BOUNDARY: booking summary */}
        </div>
        <div className="page-container confirm-foot">
          <p className="next-steps">
            <svg className="icon size-5 next-steps__icon" aria-hidden="true">
              <use href="#i-info" />
            </svg>
            {' '}
            <span>
              {' '}
              <strong className="next-steps__lead">
                What happens next?
              </strong>
              {" Your confirmation arrives by email "}
              <svg className="icon size-4 next-steps__arrow" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {" check in with the airline "}
              <svg className="icon size-4 next-steps__arrow" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {" manage the booking from your account any time. "}
            </span>
          </p>
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
