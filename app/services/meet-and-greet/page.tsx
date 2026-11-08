import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/services/meet-and-greet.html. */

export const metadata: Metadata = {
  title: "Meet & Greet — Izumi Global Travels",
  description: "Meet & Greet: an airport host meets you on arrival and walks you through check-in, bag drop and security.",
};

export default function ServicesMeetAndGreetPage() {
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
            <img className="service-hero__media" src="/images/meet-geet.png" alt="An airport host welcoming a traveller at the terminal" width="2294" height="1090" decoding="async" />
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
                      Meet &amp; Greet
                    </span>
                  </li>
                </ol>
              </nav>
              <p className="service-hero__chip m-0">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-sparkles" />
                </svg>
                Meet &amp; Greet
              </p>
              <h1 id="service-title" className="m-0 text-3xl font-bold leading-tight tracking-tight text-on-panel md:text-4xl lg:text-5xl">
                A friendly face from arrival to check-in
              </h1>
              <p className="m-0 text-base leading-relaxed text-on-panel-muted md:text-lg">
                An airport host meets you at the terminal, stays with you through check-in, bag drop and security, and sees you to your gate — or meets you off the aircraft when you land.
              </p>
              <ul className="flex flex-wrap gap-2 m-0 p-0 list-none" role="list">
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-user" />
                  </svg>
                  Met by name
                </li>
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-ticket" />
                  </svg>
                  Check-in to the gate
                </li>
                <li className="service-hero__chip">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-pin" />
                  </svg>
                  Selected airports
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
                    Met by name
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    Your host waits at an agreed meeting point with a name board.
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
                    Help through the airport
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    Check-in, bag drop, immigration and security, with someone who knows the way.
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
                    Right to the gate
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    On departure your host walks you to the gate; on arrival, out to the exit.
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
                    One number to call
                  </span>
                  {' '}
                  <span className="block mt-1 text-sm leading-relaxed text-fg-muted">
                    You get your host’s contact details the day before you fly.
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
                    Request it
                  </span>
                  {' '}
                  <span className="step-card__text">
                    Add Meet &amp; Greet to your booking, or ask our team, at least 48 hours before you fly.
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
                    We confirm it
                  </span>
                  {' '}
                  <span className="step-card__text">
                    We confirm the host, the meeting point and the time, and send them to you.
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="step-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-mail" />
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
                    Meet your host
                  </span>
                  {' '}
                  <span className="step-card__text">
                    Your host is waiting when you arrive and stays until you are at the gate.
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="step-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-user" />
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
                  Available at selected airports. We confirm availability for your airport before the service is booked.
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-fg">
                <svg className="icon size-5 flex-none text-primary" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                {' '}
                <span>
                  The price depends on the airport and the size of your group, and we quote it before anything is charged.
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-fg">
                <svg className="icon size-5 flex-none text-primary" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                {' '}
                <span>
                  Wheelchair and mobility assistance is a separate airline service, free of charge. Ask us and we request it for you.
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
                Add Meet &amp; Greet to a booking you already have, or ask our team.
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
                {" Request Meet & Greet "}
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
