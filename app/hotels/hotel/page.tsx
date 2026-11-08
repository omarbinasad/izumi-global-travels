import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/hotels/hotel.html. */

export const metadata: Metadata = {
  title: "Mitsui Garden Hotel Ginza, Tokyo — Izumi Global Travels",
  description: "Mitsui Garden Hotel Ginza — rooms, amenities and house rules, with a nightly rate our team confirms with the hotel.",
};

export default function HotelsHotelPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* ====================================================================
          One hotel. Every rate, room and rule here is what the backend returned
          for this property and these dates — nothing is priced or totalled in
          the browser, and nothing on this page holds a room. A stay is asked
          for and our team confirms it with the hotel, which is what the panels
          below say in as many words.
          ==================================================================== */}
        <div className="page-container pt-6">
          <Link className="review-back" href="/hotels/search-results">
            {' '}
            <svg className="icon size-4" aria-hidden="true">
              <use href="#i-arrow-left" />
            </svg>
            {" Back to hotels in Tokyo "}
          </Link>
        </div>
        {/* BLADE BOUNDARY: hotel gallery -> <x-hotels.gallery :hotel="$hotel" /> */}
        {/* @brand-pending: stand-in photography, so no alt text — the name and the
          address below are what say which hotel this is. */}
        <div className="page-container">
          <div className="hotel-gallery">
            <img className="hotel-gallery__lead" src="/images/hotel1.webp" alt="" width="1200" height="900" decoding="async" />
            {' '}
            <img className="hotel-gallery__tile" src="/images/hotel2.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
            {' '}
            <img className="hotel-gallery__tile" src="/images/hotel3.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
            {' '}
            <img className="hotel-gallery__tile hotel-gallery__tile--last" src="/images/hotel4.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
            {' '}
            <button className="hotel-gallery__save" type="button" aria-pressed="false" data-save-toggle="">
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
        </div>
        {/* END BLADE BOUNDARY: hotel gallery */}
        <div className="page-container review-layout">
          <div className="grid gap-5">
            {/* BLADE BOUNDARY: hotel head -> <x-hotels.head :hotel="$hotel" /> */}
            <section className="review-panel">
              <div className="hotel-head">
                <div>
                  <h1 className="hotel-head__name">
                    Mitsui Garden Hotel Ginza
                  </h1>
                  <p className="hotel-head__place">
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    {" 8-13-1 Ginza, Chuo, Tokyo 104-0061, Japan"}
                  </p>
                </div>
                <p className="hotel-head__rating">
                  <span className="hotel-head__score">
                    9.1
                    <span className="sr-only">
                      {" out of 10"}
                    </span>
                  </span>
                  {' '}
                  <span className="hotel-head__verdict">
                    {' '}
                    <span className="hotel-head__word">
                      Exceptional
                    </span>
                    {' '}
                    <span className="hotel-head__count">
                      1,284 reviews
                    </span>
                    {' '}
                  </span>
                </p>
              </div>
              <p className="hotel-head__tags">
                <span className="tag-pill">
                  5 star hotel
                </span>
                {' '}
                <span className="tag-pill">
                  Free cancellation
                </span>
                {' '}
                <span className="tag-pill">
                  Breakfast available
                </span>
                {' '}
                <span className="tag-pill">
                  2 min to Ginza Station
                </span>
              </p>
              <p className="hotel-head__lead">
                A quiet, well-run hotel a couple of streets back from Ginza's main crossing, with rooms that look over the rooftops towards Tokyo Tower. The station is a two-minute walk, which puts Tokyo Station and Haneda within easy reach of the front door.
              </p>
            </section>
            {/* END BLADE BOUNDARY: hotel head */}
            {/* BLADE BOUNDARY: hotel amenities -> <x-hotels.amenities :amenities="$amenities" /> */}
            <section className="review-panel" aria-labelledby="amenities-title">
              <h2 className="m-0 text-lg font-semibold text-fg-heading" id="amenities-title">
                What this place offers
              </h2>
              <ul className="amenity-grid">
                <li className="amenity">
                  <span className="amenity__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-sparkles" />
                    </svg>
                    {' '}
                  </span>
                  {" Free Wi-Fi throughout"}
                </li>
                <li className="amenity">
                  <span className="amenity__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-bag" />
                    </svg>
                    {' '}
                  </span>
                  {" Luggage storage"}
                </li>
                <li className="amenity">
                  <span className="amenity__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-home" />
                    </svg>
                    {' '}
                  </span>
                  {" Rooftop bath house"}
                </li>
                <li className="amenity">
                  <span className="amenity__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-seat" />
                    </svg>
                    {' '}
                  </span>
                  {" Restaurant and bar"}
                </li>
                <li className="amenity">
                  <span className="amenity__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-headset" />
                    </svg>
                    {' '}
                  </span>
                  {" 24-hour front desk"}
                </li>
                <li className="amenity">
                  <span className="amenity__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                  </span>
                  {" Air conditioning"}
                </li>
                <li className="amenity">
                  <span className="amenity__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-refresh" />
                    </svg>
                    {' '}
                  </span>
                  {" Same-day laundry"}
                </li>
                <li className="amenity">
                  <span className="amenity__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-pin" />
                    </svg>
                    {' '}
                  </span>
                  {" Airport shuttle on request"}
                </li>
              </ul>
            </section>
            {/* END BLADE BOUNDARY: hotel amenities */}
            {/* BLADE BOUNDARY: hotel rules -> <x-hotels.house-rules :hotel="$hotel" /> */}
            <section className="review-panel" aria-labelledby="rules-title">
              <h2 className="m-0 text-lg font-semibold text-fg-heading" id="rules-title">
                House rules
              </h2>
              <dl className="rule-rows">
                <div className="rule-row">
                  <dt>
                    Check-in
                  </dt>
                  <dd>
                    From 15:00. Passport needed for every guest.
                  </dd>
                </div>
                <div className="rule-row">
                  <dt>
                    Check-out
                  </dt>
                  <dd>
                    By 11:00. Luggage can stay at the desk until 18:00.
                  </dd>
                </div>
                <div className="rule-row">
                  <dt>
                    Cancellation
                  </dt>
                  <dd>
                    Free until 11 Sep 2026. After that the first night is charged.
                  </dd>
                </div>
                <div className="rule-row">
                  <dt>
                    Children
                  </dt>
                  <dd>
                    Under 6 stay free in an existing bed. Cots on request.
                  </dd>
                </div>
                <div className="rule-row">
                  <dt>
                    Payment
                  </dt>
                  <dd>
                    Card at the hotel. City tax is collected on arrival.
                  </dd>
                </div>
                <div className="rule-row">
                  <dt>
                    Smoking
                  </dt>
                  <dd>
                    Non-smoking throughout, with a smoking room on level 2.
                  </dd>
                </div>
              </dl>
            </section>
            {/* END BLADE BOUNDARY: hotel rules */}
          </div>
          {/* BLADE BOUNDARY: hotel booking box -> <x-hotels.book-box :hotel="$hotel" /> */}
          <aside className="review-aside grid gap-5">
            <section className="review-panel" aria-labelledby="book-title">
              <h2 className="m-0 text-lg font-semibold text-fg-heading" id="book-title">
                Your stay
              </h2>
              <p className="book-box__rate">
                <span className="book-box__amount">
                  BDT 18,600
                </span>
                {' '}
                <span className="book-box__unit">
                  / night
                </span>
              </p>
              <dl className="grid gap-3 mt-4 m-0">
                <div className="price-row">
                  <dt>
                    Dates
                  </dt>
                  <dd className="m-0 price-row__value">
                    18 – 27 Sep
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Guests
                  </dt>
                  <dd className="m-0 price-row__value">
                    2 Adults · 1 Child
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Room
                  </dt>
                  <dd className="m-0 price-row__value">
                    Deluxe twin
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    BDT 18,600 × 9 nights
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 167,400
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Taxes &amp; fees
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 19,000
                  </dd>
                </div>
                <div className="price-row price-row--total">
                  <dt>
                    Estimated total
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 186,400
                  </dd>
                </div>
              </dl>
              {/* Blade: route('hotels.request', $hotel). Nothing is held from this
                page — the team confirms the room and the rate with the hotel,
                which is what the line under the button says. */}
              <Link className="btn btn--primary w-full mt-4" href="/contact">
                {" Request this stay "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </Link>
              <p className="book-box__note">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-lock" />
                </svg>
                {" No payment now. We confirm the room and the final rate with the hotel first."}
              </p>
            </section>
            <section className="review-panel">
              <div className="flex items-center gap-4">
                <span className="rule-icon rule-icon--brand size-12" aria-hidden="true">
                  {' '}
                  <svg className="icon size-6">
                    <use href="#i-headset" />
                  </svg>
                  {' '}
                </span>
                <div>
                  <h2 className="m-0 text-base font-semibold text-fg-heading">
                    Need help?
                  </h2>
                  <p className="mt-1 mb-0 text-sm text-fg-muted">
                    Our team knows this hotel.
                  </p>
                </div>
              </div>
              <Link className="btn btn--secondary w-full mt-4" href="/contact">
                Contact support
              </Link>
            </section>
          </aside>
          {/* END BLADE BOUNDARY: hotel booking box */}
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
