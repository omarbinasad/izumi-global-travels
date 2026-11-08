import Link from 'next/link';
import type { Metadata } from 'next';
import AccountNav from '@/components/account/AccountNav';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/account/saved.html. */

export const metadata: Metadata = {
  title: "Saved fares — Izumi Global Travels",
  description: "Fares you kept for later.",
};

export default function AccountSavedPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader signedIn />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        <div className="page-container account-layout">
          {/* BLADE BOUNDARY: account nav -> <x-account.nav :current="$current" /> */}
          <AccountNav current="saved" />
          {/* END BLADE BOUNDARY: account nav */}
          <div className="account-main">
            <h1 className="account-title">
              Saved
            </h1>
            <p className="account-lead">
              Flights and hotels you kept for later. Prices move, so we check them again when you search.
            </p>
            {/* BLADE BOUNDARY: saved tabs -> <x-account.saved-tabs :saved="$saved" /> */}
            {/* Radios, not buttons: the two lists swap with no JavaScript, and the
              chosen tab is a real form value the backend can render back. The
              same markup as the bookings tabs, so it is one Blade component.
              The counts are the backend's; saved-list.js keeps them in step
              when something is removed on the static page. */}
            <div className="booking-tabs-wrap">
              <input className="booking-tab__input sr-only" type="radio" name="saved-tab" id="saved-tab-flights" defaultChecked />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="saved-tab" id="saved-tab-hotels" />
              <div className="booking-tabs">
                <label className="booking-tab" htmlFor="saved-tab-flights">
                  Flights
                  <span className="saved-count" data-saved-count="flights">
                    2
                  </span>
                </label>
                {' '}
                <label className="booking-tab" htmlFor="saved-tab-hotels">
                  Hotels
                  <span className="saved-count" data-saved-count="hotels">
                    3
                  </span>
                </label>
              </div>
              <div className="booking-panels">
                <div className="booking-panel">
                  {/* BLADE BOUNDARY: saved flights -> <x-account.saved-flights :saved="$savedFlights" />
                    @content-pending: the saved price is what the backend
                    recorded; it is never presented as the current fare. */}
                  <div className="saved-list" data-saved-list="flights">
                    <article className="saved-card" data-saved-item="" data-saved-name="Cathay Pacific, DAC to NRT">
                      <div className="saved-card__body">
                        <div className="saved-card__top">
                          <div className="flex items-center gap-3 min-w-0">
                            <img className="saved-card__logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
                            <div className="min-w-0">
                              <h2 className="saved-card__title">
                                Cathay Pacific
                              </h2>
                              <p className="saved-card__sub">
                                CX 750 • CX 520
                              </p>
                            </div>
                          </div>
                          <span className="saved-card__when">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-bookmark" />
                            </svg>
                            Saved 3 Sep
                          </span>
                        </div>
                        <p className="saved-route">
                          <span className="saved-route__end">
                            {' '}
                            <span className="saved-route__code">
                              DAC
                            </span>
                            {' '}
                            <span className="saved-route__city">
                              Dhaka
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="saved-route__path">
                            {' '}
                            <span className="saved-route__line">
                              <svg className="icon icon--solid size-4" aria-hidden="true">
                                <use href="#i-plane" />
                              </svg>
                            </span>
                            {' '}
                            <span>
                              10h 45m · 1 stop in HKG
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="saved-route__end saved-route__end--arrive">
                            {' '}
                            <span className="saved-route__code">
                              NRT
                            </span>
                            {' '}
                            <span className="saved-route__city">
                              Tokyo
                            </span>
                            {' '}
                          </span>
                        </p>
                        <ul className="saved-card__chips" role="list">
                          <li className="saved-chip">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-calendar" />
                            </svg>
                            18 Sep – 27 Sep 2026
                          </li>
                          <li className="saved-chip">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-refresh" />
                            </svg>
                            Round trip
                          </li>
                          <li className="saved-chip">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-user" />
                            </svg>
                            Economy · 1 adult
                          </li>
                        </ul>
                      </div>
                      <div className="saved-card__aside">
                        <div>
                          <p className="saved-card__label">
                            Saved at
                          </p>
                          <p className="saved-card__price">
                            BDT 72,900
                          </p>
                          <p className="saved-card__label mt-1">
                            Total · checked again when you search
                          </p>
                        </div>
                        <div className="saved-card__actions">
                          <Link className="btn btn--primary" href="/flights/search-results">
                            {" Search this route "}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-arrow-right" />
                            </svg>
                            {' '}
                          </Link>
                          {/* Removing something changes state, so it is a POST, not a link. */}
                          <form method="post" action="/account/saved" data-saved-remove="">
                            <input type="hidden" name="saved_id" value="sav_fl_1" />
                            {' '}
                            <button className="saved-card__remove" type="submit">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-close" />
                              </svg>
                              Remove
                              <span className="sr-only">
                                {" Cathay Pacific, DAC to NRT from saved"}
                              </span>
                              {' '}
                            </button>
                          </form>
                        </div>
                      </div>
                    </article>
                    <article className="saved-card" data-saved-item="" data-saved-name="China Eastern, DAC to KIX">
                      <div className="saved-card__body">
                        <div className="saved-card__top">
                          <div className="flex items-center gap-3 min-w-0">
                            <img className="saved-card__logo" src="/images/MU.avif" alt="" width="120" height="120" decoding="async" />
                            <div className="min-w-0">
                              <h2 className="saved-card__title">
                                China Eastern
                              </h2>
                              <p className="saved-card__sub">
                                MU 272 • MU 747
                              </p>
                            </div>
                          </div>
                          <span className="saved-card__when">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-bookmark" />
                            </svg>
                            Saved 28 Aug
                          </span>
                        </div>
                        <p className="saved-route">
                          <span className="saved-route__end">
                            {' '}
                            <span className="saved-route__code">
                              DAC
                            </span>
                            {' '}
                            <span className="saved-route__city">
                              Dhaka
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="saved-route__path">
                            {' '}
                            <span className="saved-route__line">
                              <svg className="icon icon--solid size-4" aria-hidden="true">
                                <use href="#i-plane" />
                              </svg>
                            </span>
                            {' '}
                            <span>
                              11h 20m · 1 stop in PVG
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="saved-route__end saved-route__end--arrive">
                            {' '}
                            <span className="saved-route__code">
                              KIX
                            </span>
                            {' '}
                            <span className="saved-route__city">
                              Osaka
                            </span>
                            {' '}
                          </span>
                        </p>
                        <ul className="saved-card__chips" role="list">
                          <li className="saved-chip">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-calendar" />
                            </svg>
                            02 Nov – 14 Nov 2026
                          </li>
                          <li className="saved-chip">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-refresh" />
                            </svg>
                            Round trip
                          </li>
                          <li className="saved-chip">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-user" />
                            </svg>
                            Economy · 2 adults
                          </li>
                        </ul>
                      </div>
                      <div className="saved-card__aside">
                        <div>
                          <p className="saved-card__label">
                            Saved at
                          </p>
                          <p className="saved-card__price">
                            BDT 68,300
                          </p>
                          <p className="saved-card__label mt-1">
                            Total · checked again when you search
                          </p>
                        </div>
                        <div className="saved-card__actions">
                          <Link className="btn btn--primary" href="/flights/search-results">
                            {" Search this route "}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-arrow-right" />
                            </svg>
                            {' '}
                          </Link>
                          {/* Removing something changes state, so it is a POST, not a link. */}
                          <form method="post" action="/account/saved" data-saved-remove="">
                            <input type="hidden" name="saved_id" value="sav_fl_2" />
                            {' '}
                            <button className="saved-card__remove" type="submit">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-close" />
                              </svg>
                              Remove
                              <span className="sr-only">
                                {" China Eastern, DAC to KIX from saved"}
                              </span>
                              {' '}
                            </button>
                          </form>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="review-panel panel-empty" data-saved-empty="flights" hidden>
                    <span className="panel-empty__icon" aria-hidden="true">
                      <svg className="icon size-6" aria-hidden="true">
                        <use href="#i-heart" />
                      </svg>
                    </span>
                    <p className="panel-empty__title">
                      No saved flights
                    </p>
                    <p className="panel-empty__text">
                      Save a flight from your search results and it will wait here, with the price it was when you saved it.
                    </p>
                    <Link className="btn btn--primary" href="/">
                      {" Search flights "}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                      {' '}
                    </Link>
                  </div>
                  {/* END BLADE BOUNDARY: saved flights */}
                </div>
                <div className="booking-panel">
                  {/* BLADE BOUNDARY: saved hotels -> <x-account.saved-hotels :saved="$savedHotels" /> */}
                  <div className="saved-list" data-saved-list="hotels">
                    <article className="saved-card saved-card--stay" data-saved-item="" data-saved-name="Mitsui Garden Hotel Ginza">
                      <img className="saved-card__media" src="/images/hotel1.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                      <div className="saved-card__body">
                        <div className="saved-card__top">
                          <div className="min-w-0">
                            <h2 className="saved-card__title">
                              Mitsui Garden Hotel Ginza
                            </h2>
                            <p className="saved-card__sub">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-pin" />
                              </svg>
                              Ginza, Tokyo
                            </p>
                          </div>
                          <span className="saved-card__when">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-bookmark" />
                            </svg>
                            Saved 4 Sep
                          </span>
                        </div>
                        <p className="saved-card__rating">
                          <span className="saved-card__stars" role="img" aria-label="5 star hotel">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                          </span>
                          {' '}
                          <span className="saved-card__score">
                            9.1
                            <span className="sr-only">
                              {" out of 10"}
                            </span>
                          </span>
                          {' '}
                          <span className="font-semibold text-fg-heading">
                            Exceptional
                          </span>
                        </p>
                        <ul className="saved-card__chips" role="list">
                          <li className="saved-chip saved-chip--good">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-check" />
                            </svg>
                            Free cancellation
                          </li>
                          <li className="saved-chip">
                            2 min to Ginza Station
                          </li>
                          <li className="saved-chip">
                            Breakfast available
                          </li>
                        </ul>
                      </div>
                      <div className="saved-card__aside">
                        <div>
                          <p className="saved-card__label">
                            Saved at
                          </p>
                          <p className="saved-card__price">
                            {"BDT 14,800 "}
                            <span className="saved-card__unit">
                              / night
                            </span>
                          </p>
                          <p className="saved-card__label mt-1">
                            Checked again when you search
                          </p>
                        </div>
                        <div className="saved-card__actions">
                          <Link className="btn btn--primary" href="/hotels/hotel">
                            {" View hotel "}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-arrow-right" />
                            </svg>
                            {' '}
                          </Link>
                          {/* Removing something changes state, so it is a POST, not a link. */}
                          <form method="post" action="/account/saved" data-saved-remove="">
                            <input type="hidden" name="saved_id" value="sav_ht_1" />
                            {' '}
                            <button className="saved-card__remove" type="submit">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-close" />
                              </svg>
                              Remove
                              <span className="sr-only">
                                {" Mitsui Garden Hotel Ginza from saved"}
                              </span>
                              {' '}
                            </button>
                          </form>
                        </div>
                      </div>
                    </article>
                    <article className="saved-card saved-card--stay" data-saved-item="" data-saved-name="Shinjuku Granbell Hotel">
                      <img className="saved-card__media" src="/images/hotel2.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                      <div className="saved-card__body">
                        <div className="saved-card__top">
                          <div className="min-w-0">
                            <h2 className="saved-card__title">
                              Shinjuku Granbell Hotel
                            </h2>
                            <p className="saved-card__sub">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-pin" />
                              </svg>
                              Shinjuku, Tokyo
                            </p>
                          </div>
                          <span className="saved-card__when">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-bookmark" />
                            </svg>
                            Saved 30 Aug
                          </span>
                        </div>
                        <p className="saved-card__rating">
                          <span className="saved-card__stars" role="img" aria-label="4 star hotel">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                          </span>
                          {' '}
                          <span className="saved-card__score">
                            8.8
                            <span className="sr-only">
                              {" out of 10"}
                            </span>
                          </span>
                          {' '}
                          <span className="font-semibold text-fg-heading">
                            Excellent
                          </span>
                        </p>
                        <ul className="saved-card__chips" role="list">
                          <li className="saved-chip saved-chip--good">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-check" />
                            </svg>
                            Free cancellation
                          </li>
                          <li className="saved-chip">
                            5 min to Shinjuku Station
                          </li>
                          <li className="saved-chip">
                            Rooftop bar
                          </li>
                        </ul>
                      </div>
                      <div className="saved-card__aside">
                        <div>
                          <p className="saved-card__label">
                            Saved at
                          </p>
                          <p className="saved-card__price">
                            {"BDT 12,400 "}
                            <span className="saved-card__unit">
                              / night
                            </span>
                          </p>
                          <p className="saved-card__label mt-1">
                            Checked again when you search
                          </p>
                        </div>
                        <div className="saved-card__actions">
                          <Link className="btn btn--primary" href="/hotels/hotel">
                            {" View hotel "}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-arrow-right" />
                            </svg>
                            {' '}
                          </Link>
                          {/* Removing something changes state, so it is a POST, not a link. */}
                          <form method="post" action="/account/saved" data-saved-remove="">
                            <input type="hidden" name="saved_id" value="sav_ht_2" />
                            {' '}
                            <button className="saved-card__remove" type="submit">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-close" />
                              </svg>
                              Remove
                              <span className="sr-only">
                                {" Shinjuku Granbell Hotel from saved"}
                              </span>
                              {' '}
                            </button>
                          </form>
                        </div>
                      </div>
                    </article>
                    <article className="saved-card saved-card--stay" data-saved-item="" data-saved-name="Hotel Monterey Grasmere">
                      <img className="saved-card__media" src="/images/hotel3.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                      <div className="saved-card__body">
                        <div className="saved-card__top">
                          <div className="min-w-0">
                            <h2 className="saved-card__title">
                              Hotel Monterey Grasmere
                            </h2>
                            <p className="saved-card__sub">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-pin" />
                              </svg>
                              Namba, Osaka
                            </p>
                          </div>
                          <span className="saved-card__when">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-bookmark" />
                            </svg>
                            Saved 21 Aug
                          </span>
                        </div>
                        <p className="saved-card__rating">
                          <span className="saved-card__stars" role="img" aria-label="4 star hotel">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-star" />
                            </svg>
                            {' '}
                          </span>
                          {' '}
                          <span className="saved-card__score">
                            8.6
                            <span className="sr-only">
                              {" out of 10"}
                            </span>
                          </span>
                          {' '}
                          <span className="font-semibold text-fg-heading">
                            Excellent
                          </span>
                        </p>
                        <ul className="saved-card__chips" role="list">
                          <li className="saved-chip saved-chip--good">
                            <svg className="icon size-3.5" aria-hidden="true">
                              <use href="#i-check" />
                            </svg>
                            Free cancellation
                          </li>
                          <li className="saved-chip">
                            Airport shuttle on request
                          </li>
                        </ul>
                      </div>
                      <div className="saved-card__aside">
                        <div>
                          <p className="saved-card__label">
                            Saved at
                          </p>
                          <p className="saved-card__price">
                            {"BDT 10,900 "}
                            <span className="saved-card__unit">
                              / night
                            </span>
                          </p>
                          <p className="saved-card__label mt-1">
                            Checked again when you search
                          </p>
                        </div>
                        <div className="saved-card__actions">
                          <Link className="btn btn--primary" href="/hotels/hotel">
                            {" View hotel "}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-arrow-right" />
                            </svg>
                            {' '}
                          </Link>
                          {/* Removing something changes state, so it is a POST, not a link. */}
                          <form method="post" action="/account/saved" data-saved-remove="">
                            <input type="hidden" name="saved_id" value="sav_ht_3" />
                            {' '}
                            <button className="saved-card__remove" type="submit">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-close" />
                              </svg>
                              Remove
                              <span className="sr-only">
                                {" Hotel Monterey Grasmere from saved"}
                              </span>
                              {' '}
                            </button>
                          </form>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="review-panel panel-empty" data-saved-empty="hotels" hidden>
                    <span className="panel-empty__icon" aria-hidden="true">
                      <svg className="icon size-6" aria-hidden="true">
                        <use href="#i-heart" />
                      </svg>
                    </span>
                    <p className="panel-empty__title">
                      No saved hotels
                    </p>
                    <p className="panel-empty__text">
                      Tap the heart on any hotel to keep it here for later.
                    </p>
                    <Link className="btn btn--primary" href="/hotels/search-results">
                      {" Find hotels "}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                      {' '}
                    </Link>
                  </div>
                  {/* END BLADE BOUNDARY: saved hotels */}
                </div>
              </div>
            </div>
            {/* The undo notice for a remove made on this page. */}
            <div className="saved-notice" role="status" data-saved-notice="" hidden>
              <span data-saved-notice-text="" />
              {' '}
              <button className="saved-notice__undo" type="button" data-saved-undo="">
                Undo
              </button>
            </div>
            {/* END BLADE BOUNDARY: saved tabs */}
          </div>
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
