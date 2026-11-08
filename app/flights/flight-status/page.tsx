import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/flights/flight-status.html. */

export const metadata: Metadata = {
  title: "Flight status — Izumi Global Travels",
  description: "Check a flight by its number and date: departure and arrival times as the airline has them, with the terminal, gate and belt.",
};

export default function FlightsFlightStatusPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* BLADE BOUNDARY: status search -> <x-flights.status-search /> */}
        {/* The same two fields the landing page used to carry in a tab. Nothing here
          knows a flight's status: the form asks the backend, which asks the
          airline, and the panel below is what comes back. */}
        <section className="search-summary" aria-labelledby="status-search-title">
          <div className="page-container">
            <h1 className="status-hero__title" id="status-search-title">
              Flight status
            </h1>
            <p className="status-hero__lead">
              {"Track a flight by its number — for example "}
              <b>
                BG 147
              </b>
              {" or "}
              <b>
                EK 585
              </b>
              .
            </p>
            <div className="search-panel mt-5">
              <form className="flex flex-col gap-2 lg:gap-3" action="/flights/flight-status" method="get">
                <div className="grid gap-2 items-stretch sm:grid-cols-2 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_auto]">
                  <div className="search-field">
                    <label className="search-field__label" htmlFor="status-flight">
                      Flight number
                    </label>
                    {' '}
                    <input className="search-field__control search-field__control--lg search-field__control--code" type="text" id="status-flight" name="flight_number" defaultValue="BG 147" placeholder="BG 147" autoComplete="off" maxLength={8} />
                  </div>
                  {/* The same panel the flight search opens, asking for one day
                    rather than two. The native input stays: it is the value,
                    and it is what works with no JavaScript. */}
                  <div className="search-field" data-date-range="">
                    <label className="search-field__label" htmlFor="status-date">
                      Date
                    </label>
                    {' '}
                    <span className="search-field__value">
                      {' '}
                      <input className="search-field__control search-field__control--lg" type="date" id="status-date" name="departure_date" defaultValue="2026-09-18" data-date-input="depart" />
                      {' '}
                      <span className="search-field__display" data-date-display="" aria-hidden="true">
                        18 Sep
                      </span>
                      {' '}
                    </span>
                  </div>
                  <button className="btn btn--primary min-h-(--search-field-height) px-6 max-lg:col-span-full" type="submit">
                    {" Check status "}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-arrow-right" />
                    </svg>
                    {' '}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* END BLADE BOUNDARY: status search */}
        <div className="page-container status-layout">
          {/* BLADE BOUNDARY: flight status -> <x-flights.status :flight="$flight" /> */}
          {/* Every figure below is the airline's, passed through the backend. The
            page redisplays them and works nothing out: a delay is a delay because
            the airline says so, not because two times here differ. */}
          <section className="review-panel status-card" aria-labelledby="status-title">
            <div className="status-card__head">
              <p className="status-card__flight">
                <img className="status-card__logo" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                {' '}
                <span className="status-card__names">
                  {' '}
                  <span className="status-card__carrier">
                    Biman Bangladesh Airlines
                  </span>
                  {' '}
                  <span className="status-card__number" id="status-title">
                    BG 147 · Thu, 18 Sep
                  </span>
                  {' '}
                </span>
              </p>
              <span className="status-pill status-pill--delayed">
                Delayed
              </span>
            </div>
            <p className="status-card__note">
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-info" />
              </svg>
              {" Now expected to leave at 09:05, 35 minutes after the scheduled time."}
            </p>
            <div className="status-track">
              <div className="status-stop">
                <p className="status-stop__label">
                  Departure
                </p>
                <p className="status-stop__code">
                  DAC
                </p>
                <p className="status-stop__place">
                  Hazrat Shahjalal · T2
                </p>
                <p className="status-stop__times">
                  <span className="status-stop__was">
                    08:30
                  </span>
                  {' '}
                  <span className="status-stop__now">
                    09:05
                  </span>
                </p>
              </div>
              <p className="status-track__path">
                <span className="status-track__time">
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
                <span className="status-track__note">
                  Times are local to each airport
                </span>
              </p>
              <div className="status-stop status-stop--arrive">
                <p className="status-stop__label">
                  Arrival
                </p>
                <p className="status-stop__code">
                  NRT
                </p>
                <p className="status-stop__place">
                  Narita Intl · T1
                </p>
                <p className="status-stop__times">
                  <span className="status-stop__was">
                    15:45
                  </span>
                  {' '}
                  <span className="status-stop__now">
                    16:20
                  </span>
                </p>
              </div>
            </div>
            <dl className="status-facts">
              <div>
                <dt>
                  Terminal
                </dt>
                <dd>
                  2
                </dd>
              </div>
              <div>
                <dt>
                  Gate
                </dt>
                <dd>
                  7B
                </dd>
              </div>
              <div>
                <dt>
                  Aircraft
                </dt>
                <dd>
                  Boeing 787-8
                </dd>
              </div>
              <div>
                <dt>
                  Baggage belt
                </dt>
                <dd>
                  4
                </dd>
              </div>
            </dl>
            <p className="status-card__updated">
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-refresh" />
              </svg>
              {" Updated 2 minutes ago. Gates and belts change late; the airport screens are final."}
            </p>
          </section>
          {/* END BLADE BOUNDARY: flight status */}
          {/* BLADE BOUNDARY: status key -> <x-flights.status-key /> */}
          <section className="review-panel" aria-labelledby="status-key-title">
            <h2 className="m-0 text-lg font-semibold text-fg-heading" id="status-key-title">
              What each status means
            </h2>
            <ul className="status-key" role="list">
              <li className="status-key__item">
                <span className="status-pill status-pill--ontime">
                  On time
                </span>
                {" Leaving and landing within fifteen minutes of the published times."}
              </li>
              <li className="status-key__item">
                <span className="status-pill status-pill--delayed">
                  Delayed
                </span>
                {" The airline has moved a time. The new one is shown beside the old."}
              </li>
              <li className="status-key__item">
                <span className="status-pill status-pill--landed">
                  Landed
                </span>
                {" On the ground. The belt appears once the airport publishes it."}
              </li>
              <li className="status-key__item">
                <span className="status-pill status-pill--cancelled">
                  Cancelled
                </span>
                {" Not operating. Contact the airline or us about the rebooking."}
              </li>
            </ul>
          </section>
          {/* END BLADE BOUNDARY: status key */}
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
