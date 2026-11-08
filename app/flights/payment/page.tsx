import Link from 'next/link';
import type { Metadata } from 'next';
import BookingSteps from '@/components/booking/BookingSteps';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/flights/payment.html. */

export const metadata: Metadata = {
  title: "Payment — Izumi Global Travels",
  description: "Pay for your Izumi Global Travels booking by card or through SSLCommerz.",
  robots: { index: false },
};

export default function FlightsPaymentPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* ====================================================================
          Step four. NOTHING IS CHARGED IN THE BROWSER. The method chosen here
          is submitted as an id; the backend creates the payment with the
          gateway, and the card number never reaches this document — Stripe's
          own field is an iframe served by Stripe, and what comes back to us is
          a token. No key, secret or amount is trusted from this page.
          ==================================================================== */}
        <div className="page-container pt-6" data-offer-id="off_1">
          <Link className="review-back" href="/flights/add-ons">
            {' '}
            <svg className="icon size-4" aria-hidden="true">
              <use href="#i-arrow-left" />
            </svg>
            {" Back to add-ons "}
          </Link>
          {/* BLADE BOUNDARY: booking steps -> <x-booking.steps current="4" /> */}
          <BookingSteps current={4} />
          {/* END BLADE BOUNDARY: booking steps */}
        </div>
        <div className="page-container review-layout">
          {/* method="post": paying is not navigation. In this static build
            assets/js/pages/payment.js only moves to the next page so the flow can
            be walked; it takes no payment and never could. */}
          <form className="grid gap-5" method="post" action="/flights/confirm" data-payment-form="">
            {/* BLADE BOUNDARY: payment method -> <x-booking.payment-method :methods="$methods" /> */}
            <section className="review-panel" aria-labelledby="payment-method-title">
              <h2 className="pay-title" id="payment-method-title">
                <svg className="icon size-5 pay-title__icon" aria-hidden="true">
                  <use href="#i-card" />
                </svg>
                {" Payment Method"}
              </h2>
              {/* Radios: the chosen method is a real form value, and the card
                fields below appear from the CSS that follows the checked one. */}
              <div className="pay-methods" role="radiogroup" aria-labelledby="payment-method-title">
                <label className="pay-method">
                  {' '}
                  <input className="pay-method__input" type="radio" name="payment_method" value="pay_sslcommerz" data-pay-method="redirect" defaultChecked />
                  {' '}
                  <span className="pay-method__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-5">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                  <span className="pay-method__name">
                    SSLCommerz
                  </span>
                  {' '}
                </label>
                {' '}
                <label className="pay-method">
                  {' '}
                  <input className="pay-method__input" type="radio" name="payment_method" value="pay_stripe" data-pay-method="card" />
                  {' '}
                  <span className="pay-method__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-5">
                      <use href="#i-card" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                  <span className="pay-method__name">
                    Stripe (Card)
                  </span>
                  {' '}
                </label>
              </div>
              <p className="pay-methods__note" data-pay-note="">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-external" />
                </svg>
                {" SSLCommerz opens its own secure page for cards, bKash, Nagad and bank transfer."}
              </p>
              {/* THE CARD NUMBER NEVER TOUCHES THIS PAGE.
                The box below is a mount point, not a field. Stripe's card input is
                an iframe served by Stripe: the number, expiry and CVC are typed
                into their document, we are handed a token, and the card data never
                enters ours. That is what keeps this out of PCI scope, so nothing
                here may ever be replaced with a real <input> for a card number.
                The publishable key that mounts it is rendered by the backend into
                the page it serves. It is not written into this file, and the
                secret key never leaves the server. */}
              <div className="pay-card">
                <h3 className="pay-card__title">
                  Card Details
                </h3>
                <div className="pay-card__mount" data-stripe-card="">
                  <span className="pay-card__placeholder">
                    {' '}
                    <svg className="icon size-5 pay-card__placeholder-icon" aria-hidden="true">
                      <use href="#i-card" />
                    </svg>
                    {" Card number "}
                    <span className="pay-card__meta">
                      MM / YY
                      <span aria-hidden="true">
                        {"  "}
                      </span>
                      CVC
                    </span>
                    {' '}
                  </span>
                </div>
                <p className="pay-card__hint">
                  Stripe's secure card field loads here. Your card details go straight to Stripe.
                </p>
              </div>
            </section>
            {/* END BLADE BOUNDARY: payment method */}
            {/* BLADE BOUNDARY: pay actions -> <x-booking.pay-actions :total="$total" /> */}
            <section className="review-panel pay-terms">
              <p className="pay-terms__line">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-lock" />
                </svg>
                {" Payments are encrypted end to end. We never see or store your card number."}
              </p>
              <p className="pay-terms__line pay-terms__line--muted">
                {"By paying you accept our "}
                <Link href="/legal/booking-conditions">
                  booking conditions
                </Link>
                {" and "}
                <Link href="/legal/refund-policy">
                  refund policy
                </Link>
                .
              </p>
            </section>
            <div className="step-actions">
              <Link className="btn btn--outline" href="/flights/add-ons">
                Back
              </Link>
              {' '}
              <button className="btn btn--primary step-actions__next" type="submit">
                {" Pay BDT 139,010 "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </button>
            </div>
            {/* END BLADE BOUNDARY: pay actions */}
          </form>
          {/* BLADE BOUNDARY: trip summary -> <x-booking.trip-summary /> */}
          <aside className="review-aside grid gap-5">
            <section className="review-panel">
              <h2 className="m-0 text-lg font-semibold text-fg-heading">
                Trip Summary
              </h2>
              <p className="itinerary__airline mt-4" data-segment-id="seg_out_1">
                <img className="itinerary__logo size-7" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                {' '}
                <span className="min-w-0 flex-1">
                  {' '}
                  <span className="itinerary__carrier text-xs">
                    Biman Bangladesh Airlines
                  </span>
                  {' '}
                  <span className="itinerary__flight text-2xs">
                    BG 376
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="tag-pill">
                  Non-stop
                </span>
              </p>
              <div className="trip-summary__route mt-5">
                <span className="trip-summary__end">
                  {' '}
                  <span className="trip-summary__clock">
                    02:20
                  </span>
                  {' '}
                  <span className="trip-summary__iata">
                    DAC
                  </span>
                  {' '}
                  <span className="trip-summary__city">
                    Dhaka (DAC)
                  </span>
                  {' '}
                  <span className="trip-summary__date">
                    18 Sep 2026
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="itinerary__path">
                  {' '}
                  <span className="itinerary__duration">
                    6h 45m
                  </span>
                  {' '}
                  <span className="itinerary__line" aria-hidden="true">
                    {' '}
                    <svg className="icon--solid">
                      <use href="#i-plane" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="trip-summary__end trip-summary__end--arrive">
                  {' '}
                  <span className="trip-summary__clock">
                    10:05
                  </span>
                  {' '}
                  <span className="trip-summary__iata">
                    NRT
                  </span>
                  {' '}
                  <span className="trip-summary__city">
                    Tokyo (NRT)
                  </span>
                  {' '}
                  <span className="trip-summary__date">
                    27 Sep 2026
                  </span>
                  {' '}
                </span>
              </div>
              <hr className="trip-summary__rule mt-5" />
              <p className="flex items-center gap-2 mt-4 mb-0 text-sm text-fg">
                <svg className="icon size-4 text-fg-muted" aria-hidden="true">
                  <use href="#i-user" />
                </svg>
                {" 1 Adult, 1 Child, 1 Infant · Economy"}
              </p>
              <hr className="trip-summary__rule mt-4" />
              {/* BLADE BOUNDARY: add-ons summary -> <x-booking.add-ons-summary :selection="$selection" /> */}
              {/* Settled by now: this is the selection as it was left on the
                previous step, rendered by the backend. */}
              <div className="addon-summary">
                <h3 className="addon-summary__title">
                  Selected add-ons
                </h3>
                <div className="addon-summary__body">
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
                </div>
              </div>
              {/* END BLADE BOUNDARY: add-ons summary */}
              <hr className="trip-summary__rule mt-4" />
              <dl className="grid gap-3 mt-4 m-0">
                <div className="price-row">
                  <dt>
                    Adult × 1
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 61,900
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Child × 1
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 49,600
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Infant × 1
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 6,200
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Taxes &amp; Fees
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 12,810
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Add-ons
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 8,500
                  </dd>
                </div>
                <div className="price-row price-row--total">
                  <dt>
                    Total
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 139,010
                  </dd>
                </div>
              </dl>
              {/* Every figure is the backend's. The amount actually charged is
                the one it sends to the gateway, not the one printed here. */}
              <p className="mt-2 mb-0 text-xs text-fg-muted">
                This is the amount that will be charged.
              </p>
            </section>
          </aside>
          {/* END BLADE BOUNDARY: trip summary */}
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
