import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/services/halal-meal.html. */

export const metadata: Metadata = {
  title: "Halal Meal — Izumi Global Travels",
  description: "Request a halal-certified meal on your flight. Izumi Global Travels passes the request to the airline and confirms it on your booking.",
};

export default function ServicesHalalMealPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* BLADE BOUNDARY: service banner -> <x-services.hero :service="$service" /> */}
        <div className="page-container pt-6 pb-5">
          <section className="service-hero" aria-labelledby="service-title">
            <img className="service-hero__media" src="/images/halal%20meal.png" alt="A tray of halal meal dishes served on board" width="1774" height="887" decoding="async" />
            {' '}
            <img className="absolute top-4 right-4 z-1 w-18 h-auto bg-transparent md:top-6 md:right-6 md:w-24" src="/images/halallogo.png" alt="Halal certified" width="1200" height="1200" decoding="async" />
            <div className="service-hero__body">
              <nav className="service-hero__crumbs" aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2 m-0 p-0 list-none text-xs" role="list">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li className="text-on-panel-muted" aria-hidden="true">
                    /
                  </li>
                  <li>
                    <span className="text-on-panel-muted">
                      Our services
                    </span>
                  </li>
                  <li className="text-on-panel-muted" aria-hidden="true">
                    /
                  </li>
                  <li>
                    <span className="font-semibold text-on-panel" aria-current="page">
                      Halal Meal
                    </span>
                  </li>
                </ol>
              </nav>
              <p className="service-hero__chip m-0">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-sparkles" />
                </svg>
                Halal Meal
              </p>
              <h1 id="service-title" className="m-0 text-3xl font-bold leading-tight tracking-tight text-on-panel md:text-4xl lg:text-5xl">
                Halal meals, requested before you fly
              </h1>
              <p className="m-0 text-base leading-relaxed text-on-panel-muted md:text-lg">
                Tell us once and we request a halal-certified meal from the airline for every flight on your ticket, then confirm it on your booking so you are not left asking at the gate.
              </p>
              <ul className="flex flex-wrap gap-2 m-0 p-0 list-none" role="list">
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Certified caterers
                </li>
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-plane" />
                  </svg>
                  Every flight on your ticket
                </li>
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>
                  Request 48 hours ahead
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* END BLADE BOUNDARY: service banner */}
        {/* BLADE BOUNDARY: service -> <x-services.detail :service="$service" />
          @content-pending: the wording, the conditions and the airports that
          offer each service come from the backend. Prices are never shown
          here: the backend quotes them for a booking. */}
        <div className="page-container grid gap-5 pb-10">
          <section className="review-panel" aria-labelledby="included-title">
            <h2 className="m-0 text-lg font-semibold text-fg-heading" id="included-title">
              What you get
            </h2>
            <ul className="grid gap-5 mt-5 mb-0 p-0 list-none md:grid-cols-2" role="list">
              <li className="flex gap-3">
                <span className="rule-icon rule-icon--brand size-9 flex-none" aria-hidden="true">
                  {' '}
                  <svg className="icon size-4">
                    <use href="#i-check" />
                  </svg>
                  {' '}
                </span>
                {' '}
                <span>
                  {' '}
                  <span className="block text-sm font-semibold text-fg-heading">
                    Certified kitchens
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    Prepared by the airline’s halal-certified caterer, with no pork or alcohol in the dish or its preparation.
                  </span>
                  {' '}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="rule-icon rule-icon--brand size-9 flex-none" aria-hidden="true">
                  {' '}
                  <svg className="icon size-4">
                    <use href="#i-check" />
                  </svg>
                  {' '}
                </span>
                {' '}
                <span>
                  {' '}
                  <span className="block text-sm font-semibold text-fg-heading">
                    Every flight on the ticket
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    One request covers each leg, outbound and return, including connections.
                  </span>
                  {' '}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="rule-icon rule-icon--brand size-9 flex-none" aria-hidden="true">
                  {' '}
                  <svg className="icon size-4">
                    <use href="#i-check" />
                  </svg>
                  {' '}
                </span>
                {' '}
                <span>
                  {' '}
                  <span className="block text-sm font-semibold text-fg-heading">
                    Served first
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    Special meals usually reach you before the main cabin service begins.
                  </span>
                  {' '}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="rule-icon rule-icon--brand size-9 flex-none" aria-hidden="true">
                  {' '}
                  <svg className="icon size-4">
                    <use href="#i-check" />
                  </svg>
                  {' '}
                </span>
                {' '}
                <span>
                  {' '}
                  <span className="block text-sm font-semibold text-fg-heading">
                    Confirmed in writing
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    The meal shows on your booking once the airline accepts the request.
                  </span>
                  {' '}
                </span>
              </li>
            </ul>
          </section>
          <section aria-labelledby="how-title">
            <h2 className="m-0 mb-4 text-lg font-semibold text-fg-heading" id="how-title">
              How it works
            </h2>
            <ol className="grid gap-4 m-0 p-0 list-none md:grid-cols-3" role="list">
              <li className="step-card">
                <span className="step-card__number" aria-hidden="true">
                  1
                </span>
                {' '}
                <span className="flex-auto">
                  {' '}
                  <span className="step-card__title">
                    Choose it
                  </span>
                  {' '}
                  <span className="step-card__text">
                    Pick Halal on the add-ons step, or ask us to add it to a booking you already have.
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="step-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                </span>
              </li>
              <li className="step-card">
                <span className="step-card__number" aria-hidden="true">
                  2
                </span>
                {' '}
                <span className="flex-auto">
                  {' '}
                  <span className="step-card__title">
                    We request it
                  </span>
                  {' '}
                  <span className="step-card__text">
                    We send the airline’s halal meal code with your booking and follow it up.
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="step-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-headset" />
                  </svg>
                </span>
              </li>
              <li className="step-card">
                <span className="step-card__number" aria-hidden="true">
                  3
                </span>
                {' '}
                <span className="flex-auto">
                  {' '}
                  <span className="step-card__title">
                    Enjoy it on board
                  </span>
                  {' '}
                  <span className="step-card__text">
                    The crew serves the meal against your seat — no need to ask again.
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="step-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-plane" />
                  </svg>
                </span>
              </li>
            </ol>
          </section>
          <section className="review-panel" aria-labelledby="notes-title">
            <h2 className="m-0 text-lg font-semibold text-fg-heading" id="notes-title">
              Good to know
            </h2>
            <ul className="grid gap-3 mt-4 mb-0 p-0 list-none" role="list">
              <li className="flex gap-3 text-sm leading-relaxed text-fg">
                <svg className="icon size-5 flex-none text-primary" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                {' '}
                <span>
                  Requests must reach the airline at least 48 hours before departure; some carriers need longer.
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-fg">
                <svg className="icon size-5 flex-none text-primary" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                {' '}
                <span>
                  Most full-service airlines include special meals in the fare. On low-cost carriers a meal may be sold separately.
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-fg">
                <svg className="icon size-5 flex-none text-primary" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                {' '}
                <span>
                  Availability is confirmed by the airline for each route. If a flight cannot supply it, we tell you before you travel.
                </span>
              </li>
            </ul>
          </section>
          <section aria-labelledby="more-title">
            <h2 className="m-0 mb-4 text-lg font-semibold text-fg-heading" id="more-title">
              More ways to travel your way
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="preference-card">
                <img className="preference-card__media" src="/images/meet-geet.png" alt="" width="2294" height="1090" loading="lazy" decoding="async" />
                {' '}
                <Link className="absolute inset-0 z-2 rounded-lg" href="/services/meet-and-greet" aria-labelledby="other-meet-and-greet" />
                <div className="preference-card__body">
                  <h3 className="preference-card__title" id="other-meet-and-greet">
                    Meet &amp; Greet
                  </h3>
                  <svg className="icon size-5 text-neutral-0" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </div>
              </article>
              <article className="preference-card">
                <img className="preference-card__media" src="/images/window.webp" alt="" width="1448" height="1086" loading="lazy" decoding="async" />
                {' '}
                <Link className="absolute inset-0 z-2 rounded-lg" href="/services/window-seat" aria-labelledby="other-window-seat" />
                <div className="preference-card__body">
                  <h3 className="preference-card__title" id="other-window-seat">
                    Window Seat
                  </h3>
                  <svg className="icon size-5 text-neutral-0" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </div>
              </article>
            </div>
          </section>
          <section className="review-panel flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="m-0 text-base font-semibold text-fg-heading">
                Travelling soon?
              </h2>
              <p className="mt-1 mb-0 text-sm text-fg-muted">
                Add Halal Meal to a booking you already have, or ask our team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="btn btn--outline" href="/contact">
                {' '}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-headset" />
                </svg>
                {"Ask our team "}
              </Link>
              {' '}
              <Link className="btn btn--primary" href="/account/bookings">
                {" Add a halal meal "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </Link>
            </div>
          </section>
        </div>
        {/* END BLADE BOUNDARY: service */}
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
