import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/hotels/search-results.html. */

export const metadata: Metadata = {
  title: "Hotels in Tokyo — Izumi Global Travels",
  description: "Hotels in Tokyo for your dates, with nightly rates our team confirms with the hotel before anything is held.",
};

export default function HotelsSearchResultsPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        <div className="page-container">
          {/* BLADE BOUNDARY: hotel search -> <x-hotels.search-form :query="$query" /> */}
          {/* The search itself, not a readback of it: the same fields as the landing
            page, rendered with what was asked for, so a date can be changed here
            rather than back on the home page. The names are the ones the hotels
            route reads, so Blade swaps the action for that route and nothing else
            moves. */}
          <div className="search-panel mt-6">
            <form className="flex flex-col gap-2 lg:gap-3" action="/hotels/search-results" method="get">
              <div className="grid gap-2 items-stretch sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2.2fr)_minmax(0,1.2fr)_auto]">
                <div className="search-field">
                  <label className="search-field__label" htmlFor="hotel-place">
                    Where to
                  </label>
                  {' '}
                  <input className="search-field__control search-field__control--lg" type="text" id="hotel-place" name="destination" defaultValue="Tokyo, Japan" placeholder="City, area or hotel" autoComplete="off" />
                </div>
                {/* The pair is one scope, so the picker opens as a range: choosing a
                  check-in moves it straight on to the check-out. */}
                <div className="relative grid grid-cols-2 gap-2 items-stretch sm:col-span-2 lg:col-span-1" data-date-range="" data-date-start="check-in" data-date-end="check-out">
                  <div className="search-field">
                    <label className="search-field__label" htmlFor="hotel-check-in">
                      Check in
                    </label>
                    {' '}
                    <span className="search-field__value">
                      {' '}
                      <input className="search-field__control search-field__control--lg" type="date" id="hotel-check-in" name="check_in" defaultValue="2026-09-18" required data-date-input="depart" />
                      {' '}
                      <span className="search-field__display" data-date-display="" aria-hidden="true">
                        18 Sep
                      </span>
                      {' '}
                    </span>
                  </div>
                  <div className="search-field">
                    <label className="search-field__label" htmlFor="hotel-check-out">
                      Check out
                    </label>
                    {' '}
                    <span className="search-field__value">
                      {' '}
                      <input className="search-field__control search-field__control--lg" type="date" id="hotel-check-out" name="check_out" defaultValue="2026-09-27" required data-date-input="return" />
                      {' '}
                      <span className="search-field__display" data-date-display="" aria-hidden="true">
                        27 Sep
                      </span>
                      {' '}
                    </span>
                  </div>
                </div>
                {/* <details> so the panel opens without JavaScript, and the counts are
                  real number inputs for the same reason. */}
                <details className="search-field relative max-lg:col-span-full" data-guests="">
                  <summary className="pax__summary">
                    <span className="search-field__label">
                      Guests
                    </span>
                    {' '}
                    <span className="search-field__control--lg" data-guests-summary="">
                      2 guests
                    </span>
                    {' '}
                    <span className="search-field__sub" data-guests-rooms="">
                      1 room
                    </span>
                  </summary>
                  <div className="pax__panel" data-guests-panel="">
                    <div className="pax__row">
                      <span className="pax__name">
                        {" Guests "}
                        <span className="pax__hint">
                          Adults and children
                        </span>
                        {' '}
                      </span>
                      {' '}
                      <span className="stepper" data-stepper="">
                        {' '}
                        <button className="stepper__button" type="button" data-stepper-down="" aria-label="One fewer guest">
                          {' '}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-minus" />
                          </svg>
                          {' '}
                        </button>
                        {' '}
                        <input className="stepper__value" type="number" id="hotel-guests" name="guests" defaultValue="2" min="1" max="12" aria-label="Guests" data-guests-count="" />
                        {' '}
                        <button className="stepper__button" type="button" data-stepper-up="" aria-label="One more guest">
                          {' '}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-plus" />
                          </svg>
                          {' '}
                        </button>
                        {' '}
                      </span>
                    </div>
                    <div className="pax__row">
                      <span className="pax__name">
                        {" Rooms "}
                        <span className="pax__hint">
                          We ask the hotel to keep them together
                        </span>
                        {' '}
                      </span>
                      {' '}
                      <span className="stepper" data-stepper="">
                        {' '}
                        <button className="stepper__button" type="button" data-stepper-down="" aria-label="One fewer room">
                          {' '}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-minus" />
                          </svg>
                          {' '}
                        </button>
                        {' '}
                        <input className="stepper__value" type="number" id="hotel-rooms" name="rooms" defaultValue="1" min="1" max="6" aria-label="Rooms" data-rooms-count="" />
                        {' '}
                        <button className="stepper__button" type="button" data-stepper-up="" aria-label="One more room">
                          {' '}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-plus" />
                          </svg>
                          {' '}
                        </button>
                        {' '}
                      </span>
                    </div>
                  </div>
                </details>
                <button className="btn btn--primary min-h-(--search-field-height) px-6 max-lg:col-span-full" type="submit">
                  {" Find hotels "}
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                  {' '}
                </button>
              </div>
            </form>
          </div>
          {/* END BLADE BOUNDARY: hotel search */}
          <section className="hotel-results" aria-labelledby="hotels-title">
            <div className="results__head">
              <h1 className="results__title" id="hotels-title">
                Hotels in Tokyo
              </h1>
              <p className="results__count">
                24 hotels found · 18 Sep – 27 Sep
              </p>
            </div>
            {/* BLADE BOUNDARY: hotel list -> <x-hotels.card-list :hotels="$hotels" /> */}
            {/* @brand-pending: the photographs stand in for hotel photography, so
              they carry no alt text — the name and the place below them are what
              say which hotel this is. */}
            <div className="hotel-grid">
              <article className="hotel-card" data-reveal="">
                <div className="hotel-card__frame">
                  <img className="hotel-card__media" src="/images/hotel1.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                  {' '}
                  <span className="hotel-card__badge" data-kind="best">
                    Best seller
                  </span>
                  {' '}
                  <button className="hotel-card__save" type="button" aria-pressed="false" data-save-toggle="">
                    {' '}
                    <svg className="icon size-5" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                    {' '}
                    <span className="sr-only">
                      Save Mitsui Garden Hotel Ginza
                    </span>
                    {' '}
                  </button>
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">
                    Mitsui Garden Hotel Ginza
                  </h3>
                  <p className="hotel-card__place">
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    Ginza, Tokyo
                  </p>
                  <p className="hotel-card__rating">
                    <span className="hotel-card__score">
                      9.1
                      <span className="sr-only">
                        {" out of 10"}
                      </span>
                    </span>
                    {' '}
                    <span className="hotel-card__stars" role="img" aria-label="5 star hotel">
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
                  </p>
                  <div className="hotel-card__foot">
                    <p className="hotel-card__price">
                      <span className="hotel-card__from">
                        From
                      </span>
                      {' '}
                      <span className="hotel-card__amount">
                        BDT 14,800
                      </span>
                      {' '}
                      <span className="hotel-card__unit">
                        / night
                      </span>
                    </p>
                    <Link className="btn btn--outline hotel-card__action" href="/hotels/hotel">
                      {" View hotel "}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                      {' '}
                    </Link>
                  </div>
                </div>
              </article>
              <article className="hotel-card" data-reveal="">
                <div className="hotel-card__frame">
                  <img className="hotel-card__media" src="/images/hotel2.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                  {' '}
                  <span className="hotel-card__badge" data-kind="free">
                    Free cancellation
                  </span>
                  {' '}
                  <button className="hotel-card__save" type="button" aria-pressed="false" data-save-toggle="">
                    {' '}
                    <svg className="icon size-5" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                    {' '}
                    <span className="sr-only">
                      Save Shinjuku Granbell Hotel
                    </span>
                    {' '}
                  </button>
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">
                    Shinjuku Granbell Hotel
                  </h3>
                  <p className="hotel-card__place">
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    Shinjuku, Tokyo
                  </p>
                  <p className="hotel-card__rating">
                    <span className="hotel-card__score">
                      8.7
                      <span className="sr-only">
                        {" out of 10"}
                      </span>
                    </span>
                    {' '}
                    <span className="hotel-card__stars" role="img" aria-label="5 star hotel">
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
                  </p>
                  <div className="hotel-card__foot">
                    <p className="hotel-card__price">
                      <span className="hotel-card__from">
                        From
                      </span>
                      {' '}
                      <span className="hotel-card__amount">
                        BDT 11,400
                      </span>
                      {' '}
                      <span className="hotel-card__unit">
                        / night
                      </span>
                    </p>
                    <Link className="btn btn--outline hotel-card__action" href="/hotels/hotel">
                      {" View hotel "}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                      {' '}
                    </Link>
                  </div>
                </div>
              </article>
              <article className="hotel-card" data-reveal="">
                <div className="hotel-card__frame">
                  <img className="hotel-card__media" src="/images/hotel3.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                  {' '}
                  <button className="hotel-card__save" type="button" aria-pressed="false" data-save-toggle="">
                    {' '}
                    <svg className="icon size-5" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                    {' '}
                    <span className="sr-only">
                      Save Hotel Monterey Grasmere
                    </span>
                    {' '}
                  </button>
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">
                    Hotel Monterey Grasmere
                  </h3>
                  <p className="hotel-card__place">
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    Namba, Osaka
                  </p>
                  <p className="hotel-card__rating">
                    <span className="hotel-card__score">
                      8.9
                      <span className="sr-only">
                        {" out of 10"}
                      </span>
                    </span>
                    {' '}
                    <span className="hotel-card__stars" role="img" aria-label="5 star hotel">
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
                  </p>
                  <div className="hotel-card__foot">
                    <p className="hotel-card__price">
                      <span className="hotel-card__from">
                        From
                      </span>
                      {' '}
                      <span className="hotel-card__amount">
                        BDT 10,900
                      </span>
                      {' '}
                      <span className="hotel-card__unit">
                        / night
                      </span>
                    </p>
                    <Link className="btn btn--outline hotel-card__action" href="/hotels/hotel">
                      {" View hotel "}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                      {' '}
                    </Link>
                  </div>
                </div>
              </article>
              <article className="hotel-card" data-reveal="">
                <div className="hotel-card__frame">
                  <img className="hotel-card__media" src="/images/hotel4.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                  {' '}
                  <span className="hotel-card__badge" data-kind="popular">
                    Popular
                  </span>
                  {' '}
                  <button className="hotel-card__save" type="button" aria-pressed="false" data-save-toggle="">
                    {' '}
                    <svg className="icon size-5" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                    {' '}
                    <span className="sr-only">
                      Save Avani+ Riverside Bangkok
                    </span>
                    {' '}
                  </button>
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">
                    Avani+ Riverside Bangkok
                  </h3>
                  <p className="hotel-card__place">
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    Bangkok, Thailand
                  </p>
                  <p className="hotel-card__rating">
                    <span className="hotel-card__score">
                      9.0
                      <span className="sr-only">
                        {" out of 10"}
                      </span>
                    </span>
                    {' '}
                    <span className="hotel-card__stars" role="img" aria-label="5 star hotel">
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
                  </p>
                  <div className="hotel-card__foot">
                    <p className="hotel-card__price">
                      <span className="hotel-card__from">
                        From
                      </span>
                      {' '}
                      <span className="hotel-card__amount">
                        BDT 12,600
                      </span>
                      {' '}
                      <span className="hotel-card__unit">
                        / night
                      </span>
                    </p>
                    <Link className="btn btn--outline hotel-card__action" href="/hotels/hotel">
                      {" View hotel "}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                      {' '}
                    </Link>
                  </div>
                </div>
              </article>
              <article className="hotel-card" data-reveal="">
                <div className="hotel-card__frame">
                  <img className="hotel-card__media" src="/images/hotel1.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                  {' '}
                  <button className="hotel-card__save" type="button" aria-pressed="false" data-save-toggle="">
                    {' '}
                    <svg className="icon size-5" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                    {' '}
                    <span className="sr-only">
                      Save Harbour View Residences
                    </span>
                    {' '}
                  </button>
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">
                    Harbour View Residences
                  </h3>
                  <p className="hotel-card__place">
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    Tsim Sha Tsui, Hong Kong
                  </p>
                  <p className="hotel-card__rating">
                    <span className="hotel-card__score">
                      8.5
                      <span className="sr-only">
                        {" out of 10"}
                      </span>
                    </span>
                    {' '}
                    <span className="hotel-card__stars" role="img" aria-label="4 star hotel">
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
                  </p>
                  <div className="hotel-card__foot">
                    <p className="hotel-card__price">
                      <span className="hotel-card__from">
                        From
                      </span>
                      {' '}
                      <span className="hotel-card__amount">
                        BDT 9,800
                      </span>
                      {' '}
                      <span className="hotel-card__unit">
                        / night
                      </span>
                    </p>
                    <Link className="btn btn--outline hotel-card__action" href="/hotels/hotel">
                      {" View hotel "}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                      {' '}
                    </Link>
                  </div>
                </div>
              </article>
              <article className="hotel-card" data-reveal="">
                <div className="hotel-card__frame">
                  <img className="hotel-card__media" src="/images/hotel2.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                  {' '}
                  <span className="hotel-card__badge" data-kind="free">
                    Free cancellation
                  </span>
                  {' '}
                  <button className="hotel-card__save" type="button" aria-pressed="false" data-save-toggle="">
                    {' '}
                    <svg className="icon size-5" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                    {' '}
                    <span className="sr-only">
                      Save Bay Breeze Colombo
                    </span>
                    {' '}
                  </button>
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__name">
                    Bay Breeze Colombo
                  </h3>
                  <p className="hotel-card__place">
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    Galle Face, Colombo
                  </p>
                  <p className="hotel-card__rating">
                    <span className="hotel-card__score">
                      8.2
                      <span className="sr-only">
                        {" out of 10"}
                      </span>
                    </span>
                    {' '}
                    <span className="hotel-card__stars" role="img" aria-label="4 star hotel">
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
                  </p>
                  <div className="hotel-card__foot">
                    <p className="hotel-card__price">
                      <span className="hotel-card__from">
                        From
                      </span>
                      {' '}
                      <span className="hotel-card__amount">
                        BDT 7,200
                      </span>
                      {' '}
                      <span className="hotel-card__unit">
                        / night
                      </span>
                    </p>
                    <Link className="btn btn--outline hotel-card__action" href="/hotels/hotel">
                      {" View hotel "}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                      {' '}
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            {/* END BLADE BOUNDARY: hotel list */}
            <p className="results__more">
              <button className="btn btn--secondary results__more-button" type="button">
                {" Show more hotels "}
                <svg className="icon" aria-hidden="true">
                  <use href="#i-chevron-down" />
                </svg>
                {' '}
              </button>
            </p>
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
