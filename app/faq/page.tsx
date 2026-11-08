import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/faq.html. */

export const metadata: Metadata = {
  title: "Frequently asked questions — Izumi Global Travels",
  description: "Answers on booking, passenger documents, baggage, seats, changes and refunds.",
};

export default function FaqPage() {
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
            FAQ
          </p>
          <h1 className="page-head__title">
            Questions we are asked most
          </h1>
          <p className="page-head__text">
            {"Booking, documents, baggage and what happens when plans change. If your question is not here, "}
            <Link href="/contact">
              send it to us
            </Link>
            {" and we will answer it."}
          </p>
        </div>
        {/* END BLADE BOUNDARY: page head */}
        <div className="page-container pb-10">
          {/* Two groups to a row; the questions inside each stay in one column. */}
          <div className="faq-groups">
            {/* BLADE BOUNDARY: faq group -> <x-support.faq-group /> */}
            <section className="review-panel" aria-labelledby="faq-group-0">
              <h2 className="m-0 text-lg font-semibold text-fg-heading" id="faq-group-0">
                Booking
              </h2>
              <div className="faq mt-4">
                <details className="faq__item">
                  <summary className="faq__question">
                    {"How do I book a flight? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    Search the route and dates on the home page, pick an offer, then work through the four steps: flight details, passengers, add-ons and confirm. Nothing is charged at the end of it — you get a booking request reference, and we confirm the fare and availability with the airline before anyone pays.
                  </p>
                </details>
                <details className="faq__item">
                  <summary className="faq__question">
                    {"Why is the fare an estimate until you confirm it? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    Airline fares change between the moment a search runs and the moment a ticket is issued, and the last seat at a price is often gone. We re-check the fare and the seats with the airline, then come back to you with the figure we can actually hold.
                  </p>
                </details>
                <details className="faq__item">
                  <summary className="faq__question">
                    {"Can I book for someone else? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    Yes. Enter their details exactly as they appear on their passport. The contact email and phone are yours if you are arranging the trip, and that is where we send the confirmation.
                  </p>
                </details>
              </div>
            </section>
            {/* END BLADE BOUNDARY: faq group */}
            {/* BLADE BOUNDARY: faq group -> <x-support.faq-group /> */}
            <section className="review-panel" aria-labelledby="faq-group-1">
              <h2 className="m-0 text-lg font-semibold text-fg-heading" id="faq-group-1">
                Passengers and documents
              </h2>
              <div className="faq mt-4">
                <details className="faq__item">
                  <summary className="faq__question">
                    {"My name is spelled differently on my passport. Which do I use? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    The passport, every time. Airlines match the ticket to the travel document, and a mismatch is usually a name change — which most fares do not permit and some airlines refuse outright.
                  </p>
                </details>
                <details className="faq__item">
                  <summary className="faq__question">
                    {"How long does my passport need to be valid? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    Many destinations ask for six months beyond your return date. It is the airline that checks this at the airport, so tell us if your passport is close to expiring and we will look up the rule for your route.
                  </p>
                </details>
                <details className="faq__item">
                  <summary className="faq__question">
                    {"Do children and infants need their own booking? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    They go on the same booking. An infant under two can travel on an adult’s lap; from two they need their own seat. Age is taken on the date of travel, not the date of booking.
                  </p>
                </details>
              </div>
            </section>
            {/* END BLADE BOUNDARY: faq group */}
            {/* BLADE BOUNDARY: faq group -> <x-support.faq-group /> */}
            <section className="review-panel" aria-labelledby="faq-group-2">
              <h2 className="m-0 text-lg font-semibold text-fg-heading" id="faq-group-2">
                Baggage, seats and meals
              </h2>
              <div className="faq mt-4">
                <details className="faq__item">
                  <summary className="faq__question">
                    {"What baggage is included? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    Every offer shows its cabin and checked allowance before you select it, and again on the review step. Allowances differ by airline, route and fare — a cheaper fare often carries less.
                  </p>
                </details>
                <details className="faq__item">
                  <summary className="faq__question">
                    {"Can I choose my seat? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    You can request a window or an aisle on the add-ons step. It is a request: the airline confirms seats at check-in, and some carriers only assign them there.
                  </p>
                </details>
                <details className="faq__item">
                  <summary className="faq__question">
                    {"How do I ask for a halal or vegetarian meal? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    Choose it on the add-ons step. Special meals are free but have to be requested ahead of the flight, and availability varies by airline and route.
                  </p>
                </details>
              </div>
            </section>
            {/* END BLADE BOUNDARY: faq group */}
            {/* BLADE BOUNDARY: faq group -> <x-support.faq-group /> */}
            <section className="review-panel" aria-labelledby="faq-group-3">
              <h2 className="m-0 text-lg font-semibold text-fg-heading" id="faq-group-3">
                Changes, refunds and payment
              </h2>
              <div className="faq mt-4">
                <details className="faq__item">
                  <summary className="faq__question">
                    {"Can I change my dates after booking? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    On most fares, yes, for the airline’s change fee plus any difference in fare. We quote both before making the change. The fare rules on the review step say what your specific ticket allows.
                  </p>
                </details>
                <details className="faq__item">
                  <summary className="faq__question">
                    {"How do refunds work? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    Refundable fares go back to the original payment method, less the carrier’s cancellation fee. Non-refundable fares usually still return the taxes. We tell you the amount before anything is cancelled.
                  </p>
                </details>
                <details className="faq__item">
                  <summary className="faq__question">
                    {"When do I pay, and how? "}
                    <svg className="icon size-5 faq__chevron" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <p className="faq__answer">
                    After we confirm the fare. We will send you the payment options for your booking — no card details are collected on this site.
                  </p>
                </details>
              </div>
            </section>
            {/* END BLADE BOUNDARY: faq group */}
          </div>
          <section className="review-panel flex flex-wrap items-center justify-between gap-4 mt-5">
            <div>
              <h2 className="m-0 text-base font-semibold text-fg-heading">
                Still stuck?
              </h2>
              <p className="mt-1 mb-0 text-sm text-fg-muted">
                Tell us the route and the dates and we will take it from there.
              </p>
            </div>
            <Link className="btn btn--primary" href="/contact">
              {" Contact the team "}
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {' '}
            </Link>
          </section>
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
