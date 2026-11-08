import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/services/window-seat.html. */

export const metadata: Metadata = {
  title: "Window Seat — Izumi Global Travels",
  description: "Reserve a window seat on your flight in advance. Izumi Global Travels requests the seat from the airline and shows it on your booking.",
};

export default function ServicesWindowSeatPage() {
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
            <img className="service-hero__media" src="/images/window.webp" alt="Clouds and an aircraft wing seen through a cabin window" width="1448" height="1086" decoding="async" />
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
                      Window Seat
                    </span>
                  </li>
                </ol>
              </nav>
              <p className="service-hero__chip m-0">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-sparkles" />
                </svg>
                Window Seat
              </p>
              <h1 id="service-title" className="m-0 text-3xl font-bold leading-tight tracking-tight text-on-panel md:text-4xl lg:text-5xl">
                Your preferred view, reserved in advance
              </h1>
              <p className="m-0 text-base leading-relaxed text-on-panel-muted md:text-lg">
                Reserve a window seat when you book, and we request it from the airline for each flight — so the view, and the wall to lean on, are yours before you reach the airport.
              </p>
              <ul className="flex flex-wrap gap-2 m-0 p-0 list-none" role="list">
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-seat" />
                  </svg>
                  Outbound and return
                </li>
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-user" />
                  </svg>
                  Seated together
                </li>
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-ticket" />
                  </svg>
                  On your boarding pass
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
                    Chosen in advance
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    No hoping for the best at check-in: the seat is requested when you book.
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
                    Both directions
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    Choose a window for the outbound and the return, together or separately.
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
                    Sit together
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    Travelling as a group? We place your party side by side wherever the seat map allows.
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
                    On your booking
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    The seat number shows on your booking and your boarding pass.
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
                    Pick a window
                  </span>
                  {' '}
                  <span className="step-card__text">
                    Choose Window on the add-ons step, or ask us to add it to an existing booking.
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="step-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-seat" />
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
                    We reserve it
                  </span>
                  {' '}
                  <span className="step-card__text">
                    We request the seat from the airline and confirm the seat number.
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
                    Take your seat
                  </span>
                  {' '}
                  <span className="step-card__text">
                    Board, find your row and enjoy the view.
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
                  Seats are assigned by the airline. A change of aircraft can move a seat, and we let you know if it does.
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-fg">
                <svg className="icon size-5 flex-none text-primary" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                {' '}
                <span>
                  Some fares include seat selection; on others a window seat is charged. The price is shown before you confirm.
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-fg">
                <svg className="icon size-5 flex-none text-primary" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                {' '}
                <span>
                  Exit-row windows have extra legroom but come with conditions, and are not available to every traveller.
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
                <img className="preference-card__media" src="/images/halal%20meal.png" alt="" width="1774" height="887" loading="lazy" decoding="async" />
                {' '}
                <Link className="absolute inset-0 z-2 rounded-lg" href="/services/halal-meal" aria-labelledby="other-halal-meal" />
                <div className="preference-card__body">
                  <h3 className="preference-card__title" id="other-halal-meal">
                    Halal Meal
                  </h3>
                  <svg className="icon size-5 text-neutral-0" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </div>
              </article>
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
            </div>
          </section>
          <section className="review-panel flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="m-0 text-base font-semibold text-fg-heading">
                Travelling soon?
              </h2>
              <p className="mt-1 mb-0 text-sm text-fg-muted">
                Add Window Seat to a booking you already have, or ask our team.
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
                {" Choose a window seat "}
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
