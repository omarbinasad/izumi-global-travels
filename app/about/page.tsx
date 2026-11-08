import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/about.html. */

export const metadata: Metadata = {
  title: "About us — Izumi Global Travels",
  description: "Izumi Global Travels is a Dhaka-based travel agency booking flights across Asia, the Gulf and beyond.",
};

export default function AboutPage() {
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
            About us
          </p>
          <h1 className="page-head__title">
            Travel booked by people who answer the phone
          </h1>
          <p className="page-head__text">
            Izumi Global Travels is a Dhaka-based travel agency. We book flights across Asia, the Gulf and beyond, and we stay with a booking after it is paid for.
          </p>
        </div>
        {/* END BLADE BOUNDARY: page head */}
        <div className="page-container grid gap-5 pb-10">
          <section className="review-panel">
            <h2 className="m-0 text-lg font-semibold text-fg-heading">
              Our story
            </h2>
            <div className="prose-cols mt-4">
              <p className="m-0 text-sm leading-relaxed text-fg">
                We started as a counter that sold tickets to families flying between Bangladesh and Japan. The routes grew, the aggregators arrived, and booking a flight became something you did alone at midnight with twelve tabs open.
              </p>
              <p className="m-0 text-sm leading-relaxed text-fg">
                We kept the counter. The search on this site does what a good aggregator does, and behind it is the same team that has been reading fare rules for a living since 2014 — so when a fare looks too good, or a connection is too tight, someone tells you before you pay.
              </p>
            </div>
            {/* @content-pending: illustrative figures. Replace with the real
              numbers before launch; they are the kind of claim a visitor will
              hold us to. */}
            <dl className="about-stats mt-6">
              <div className="about-stat">
                <dt className="about-stat__label">
                  Travellers booked
                </dt>
                <dd className="about-stat__value">
                  18,000+
                </dd>
              </div>
              <div className="about-stat">
                <dt className="about-stat__label">
                  Airline partners
                </dt>
                <dd className="about-stat__value">
                  40+
                </dd>
              </div>
              <div className="about-stat">
                <dt className="about-stat__label">
                  Destinations
                </dt>
                <dd className="about-stat__value">
                  120+
                </dd>
              </div>
              <div className="about-stat">
                <dt className="about-stat__label">
                  Years in travel
                </dt>
                <dd className="about-stat__value">
                  12
                </dd>
              </div>
            </dl>
          </section>
          <section aria-labelledby="values-title">
            <h2 className="m-0 mb-4 text-lg font-semibold text-fg-heading" id="values-title">
              What we stand for
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="review-panel">
                <span className="rule-icon rule-icon--brand size-11" aria-hidden="true">
                  {' '}
                  <svg className="icon size-5">
                    <use href="#i-target" />
                  </svg>
                  {' '}
                </span>
                <h3 className="mt-4 mb-0 text-base font-semibold text-fg-heading">
                  Fares you can check
                </h3>
                <p className="mt-2 mb-0 text-sm leading-relaxed text-fg-muted">
                  The price you see is the price the airline quoted, taxes and fees included. No figure on this site is worked out in your browser.
                </p>
              </article>
              <article className="review-panel">
                <span className="rule-icon rule-icon--brand size-11" aria-hidden="true">
                  {' '}
                  <svg className="icon size-5">
                    <use href="#i-headset" />
                  </svg>
                  {' '}
                </span>
                <h3 className="mt-4 mb-0 text-base font-semibold text-fg-heading">
                  People, not scripts
                </h3>
                <p className="mt-2 mb-0 text-sm leading-relaxed text-fg-muted">
                  A named agent handles your booking from the request through to the ticket, and answers when something changes.
                </p>
              </article>
              <article className="review-panel">
                <span className="rule-icon rule-icon--brand size-11" aria-hidden="true">
                  {' '}
                  <svg className="icon size-5">
                    <use href="#i-plane" />
                  </svg>
                  {' '}
                </span>
                <h3 className="mt-4 mb-0 text-base font-semibold text-fg-heading">
                  Routes we actually fly
                </h3>
                <p className="mt-2 mb-0 text-sm leading-relaxed text-fg-muted">
                  We book the carriers our travellers use most out of Dhaka, and we know which connections are worth the wait.
                </p>
              </article>
              <article className="review-panel">
                <span className="rule-icon rule-icon--brand size-11" aria-hidden="true">
                  {' '}
                  <svg className="icon size-5">
                    <use href="#i-refresh" />
                  </svg>
                  {' '}
                </span>
                <h3 className="mt-4 mb-0 text-base font-semibold text-fg-heading">
                  Changes without drama
                </h3>
                <p className="mt-2 mb-0 text-sm leading-relaxed text-fg-muted">
                  Dates move. We quote the airline fee and the fare difference up front, then make the change for you.
                </p>
              </article>
            </div>
          </section>
          <section className="review-panel flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="m-0 text-base font-semibold text-fg-heading">
                Planning something complicated?
              </h2>
              <p className="mt-1 mb-0 text-sm text-fg-muted">
                Multi-city, groups, or a fare you cannot make sense of — ask us.
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
