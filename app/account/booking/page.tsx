import Link from 'next/link';
import type { Metadata } from 'next';
import AccountNav from '@/components/account/AccountNav';
import ItinerarySlice from '@/components/booking/ItinerarySlice';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/account/booking.html. */

export const metadata: Metadata = {
  title: "Booking IGT-BR-240918 — Izumi Global Travels",
  description: "The flights, travellers and price on this booking.",
};

export default function AccountBookingPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader signedIn />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        <div className="page-container account-layout">
          {/* BLADE BOUNDARY: account nav -> <x-account.nav :current="$current" /> */}
          <AccountNav current="bookings" />
          {/* END BLADE BOUNDARY: account nav */}
          <div className="account-main">
            <p className="account-back">
              <Link className="review-back" href="/account/bookings">
                {' '}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-left" />
                </svg>
                {"All bookings "}
              </Link>
            </p>
            {/* BLADE BOUNDARY: booking head -> <x-account.booking-head :booking="$booking" /> */}
            <section className="review-panel booking-head">
              <div>
                <h1 className="account-title m-0">
                  Booking IGT-BR-240918
                </h1>
                <p className="booking-head__meta">
                  Requested 5 Sep 2026 · Round trip · 3 travellers
                </p>
              </div>
              <div className="booking-head__side">
                <span className="status-pill status-pill--confirmed">
                  Confirmed
                </span>
                {' '}
                <Link className="btn btn--outline" href="/contact">
                  {' '}
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-headset" />
                  </svg>
                  {"Ask about this booking "}
                </Link>
              </div>
            </section>
            {/* END BLADE BOUNDARY: booking head */}
            {/* BLADE BOUNDARY: booking tabs -> <x-account.booking-tabs :booking="$booking" />
              Radios, not buttons: the panels swap with no JavaScript, and the
              chosen tab is a real form value the backend can render back. */}
            <div className="booking-tabs-wrap">
              <input className="booking-tab__input sr-only" type="radio" name="booking-tab" id="booking-tab-itinerary" defaultChecked />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="booking-tab" id="booking-tab-passengers" />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="booking-tab" id="booking-tab-fare" />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="booking-tab" id="booking-tab-payment" />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="booking-tab" id="booking-tab-baggage" />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="booking-tab" id="booking-tab-date-change" />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="booking-tab" id="booking-tab-cancellation" />
              <div className="booking-tabs">
                <label className="booking-tab" htmlFor="booking-tab-itinerary">
                  Itinerary
                </label>
                {' '}
                <label className="booking-tab" htmlFor="booking-tab-passengers">
                  Passenger Details
                </label>
                {' '}
                <label className="booking-tab" htmlFor="booking-tab-fare">
                  Fare Breakdown
                </label>
                {' '}
                <label className="booking-tab" htmlFor="booking-tab-payment">
                  Payment Details
                </label>
                {' '}
                <label className="booking-tab" htmlFor="booking-tab-baggage">
                  Baggage
                </label>
                {' '}
                <label className="booking-tab" htmlFor="booking-tab-date-change">
                  Date Change Policy
                </label>
                {' '}
                <label className="booking-tab" htmlFor="booking-tab-cancellation">
                  Cancellation Policy
                </label>
              </div>
              <div className="booking-panels">
                <div className="booking-panel booking-panel--itinerary">
                  {/* BLADE BOUNDARY: itinerary slice -> <x-booking.itinerary :slice="$slice" /> */}
                  <ItinerarySlice />
                  {/* END BLADE BOUNDARY: itinerary slice */}
                  <section className="review-panel itinerary" data-slice-id="slc_ret">
                    <div className="itinerary__head">
                      <h2 className="itinerary__when">
                        <span className="itinerary__kind">
                          Inbound
                        </span>
                        {' '}
                        <span className="itinerary__date">
                          Sat, 27 Sep
                        </span>
                      </h2>
                      <p className="itinerary__airline">
                        <img className="itinerary__logo" src="/images/MU.avif" alt="" width="120" height="120" decoding="async" />
                        {' '}
                        <span className="itinerary__names">
                          {' '}
                          <span className="itinerary__carrier">
                            China Eastern
                          </span>
                          {' '}
                          <span className="itinerary__flight">
                            MU 524 / MU 5379 / CZ 8447
                          </span>
                          {' '}
                        </span>
                      </p>
                    </div>
                    <div className="itinerary__leg">
                      <p className="itinerary__point">
                        <span className="itinerary__clock">
                          11:00
                        </span>
                        {' '}
                        <span className="itinerary__where">
                          <span className="itinerary__iata">
                            NRT
                          </span>
                          <span aria-hidden="true">
                            ·
                          </span>
                          <span className="itinerary__city">
                            Tokyo
                          </span>
                        </span>
                        {' '}
                        <span className="itinerary__point-date">
                          Sat, 27 Sep
                        </span>
                      </p>
                      <div className="itinerary__path">
                        <span className="itinerary__duration">
                          20h 20m · 2 stops
                        </span>
                        {' '}
                        <span className="route">
                          {' '}
                          <span className="route__line" aria-hidden="true" />
                          {' '}
                          <svg className="route__plane icon--solid" aria-hidden="true">
                            <use href="#i-plane" />
                          </svg>
                          {' '}
                          <span className="route__line" aria-hidden="true" />
                          {' '}
                          <span className="route__stop">
                            {' '}
                            <span className="route__dot" aria-hidden="true" />
                            {' '}
                            <span className="route__labels">
                              {' '}
                              <span className="route__code">
                                PVG
                              </span>
                              {' '}
                              <span className="route__wait">
                                3h 20m
                                <span className="sr-only">
                                  {" transit"}
                                </span>
                              </span>
                              {' '}
                              <span className="route__place">
                                Shanghai
                              </span>
                              <span className="route__airport">
                                Shanghai Pudong International Airport
                              </span>
                              {' '}
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="route__line" aria-hidden="true" />
                          {' '}
                          <svg className="route__plane icon--solid" aria-hidden="true">
                            <use href="#i-plane" />
                          </svg>
                          {' '}
                          <span className="route__line" aria-hidden="true" />
                          {' '}
                          <span className="route__stop">
                            {' '}
                            <span className="route__dot" aria-hidden="true" />
                            {' '}
                            <span className="route__labels">
                              {' '}
                              <span className="route__code">
                                CAN
                              </span>
                              {' '}
                              <span className="route__wait">
                                1h 45m
                                <span className="sr-only">
                                  {" transit"}
                                </span>
                              </span>
                              {' '}
                              <span className="route__place">
                                Guangzhou
                              </span>
                              <span className="route__airport">
                                Guangzhou Baiyun International Airport
                              </span>
                              {' '}
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="route__line" aria-hidden="true" />
                          {' '}
                          <svg className="route__plane icon--solid" aria-hidden="true">
                            <use href="#i-plane" />
                          </svg>
                          {' '}
                          <span className="route__line" aria-hidden="true" />
                          {' '}
                        </span>
                      </div>
                      <p className="itinerary__point itinerary__point--arrive">
                        <span className="itinerary__clock">
                          08:20
                          <sup className="itinerary__day">
                            +1
                            <span className="sr-only">
                              {" day later"}
                            </span>
                          </sup>
                        </span>
                        {' '}
                        <span className="itinerary__where">
                          <span className="itinerary__iata">
                            DAC
                          </span>
                          <span aria-hidden="true">
                            ·
                          </span>
                          <span className="itinerary__city">
                            Dhaka
                          </span>
                        </span>
                        {' '}
                        <span className="itinerary__point-date">
                          Sun, 28 Sep
                        </span>
                      </p>
                    </div>
                    <details className="itinerary__more">
                      <summary className="itinerary__summary">
                        <span className="itinerary__cabin">
                          {' '}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-seat" />
                          </svg>
                          {"Economy · 23 kg baggage "}
                        </span>
                        {' '}
                        <span className="itinerary__toggle">
                          {" Flight details "}
                          <svg className="icon size-4 itinerary__chevron" aria-hidden="true">
                            <use href="#i-chevron-down" />
                          </svg>
                          {' '}
                        </span>
                      </summary>
                      <ol className="itinerary__segments">
                        <li className="itinerary__segment" data-segment-id="seg_ret_1">
                          <p className="itinerary__segment-index">
                            <span className="itinerary__segment-dot" aria-hidden="true" />
                            {" Flight 1"}
                          </p>
                          <div className="itinerary__segment-body">
                            <p className="itinerary__segment-head">
                              <span className="itinerary__segment-route">
                                {' '}
                                <span className="itinerary__segment-flight">
                                  MU 524
                                </span>
                                {' '}
                                <span aria-hidden="true">
                                  ·
                                </span>
                                {" NRT → PVG "}
                              </span>
                              {' '}
                              <span className="itinerary__segment-carrier">
                                {' '}
                                <img className="itinerary__segment-logo" src="/images/MU.avif" alt="" width="120" height="120" decoding="async" />
                                {" China Eastern "}
                              </span>
                            </p>
                            <div className="itinerary__hop">
                              <p className="itinerary__stop">
                                <span className="itinerary__stop-label sr-only lg:not-sr-only">
                                  From
                                </span>
                                {' '}
                                <span className="itinerary__stop-code">
                                  NRT
                                </span>
                                {' '}
                                <span className="itinerary__stop-name">
                                  Narita Intl · T1
                                </span>
                              </p>
                              <p className="itinerary__hop-path">
                                <span className="itinerary__line" aria-hidden="true">
                                  {' '}
                                  <svg className="icon--solid">
                                    <use href="#i-plane" />
                                  </svg>
                                  {' '}
                                </span>
                                {' '}
                                <span className="itinerary__hop-time">
                                  3h 05m
                                  <span className="sr-only">
                                    {" flight time"}
                                  </span>
                                </span>
                              </p>
                              <p className="itinerary__stop itinerary__stop--arrive">
                                <span className="itinerary__stop-label sr-only lg:not-sr-only">
                                  To
                                </span>
                                {' '}
                                <span className="itinerary__stop-code">
                                  PVG
                                </span>
                                {' '}
                                <span className="itinerary__stop-name">
                                  Shanghai Pudong · T1
                                </span>
                              </p>
                            </div>
                            <p className="itinerary__segment-meta">
                              <span>
                                Airbus A330-300
                              </span>
                              {' '}
                              <span>
                                Economy
                              </span>
                              {' '}
                              <span>
                                Operated by China Eastern
                              </span>
                            </p>
                            <p className="itinerary__layover">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-clock" />
                              </svg>
                              {' '}
                              <span className="itinerary__layover-wait">
                                3h 20m layover in Shanghai
                              </span>
                              {' '}
                              <span className="itinerary__layover-note">
                                Change aircraft
                              </span>
                            </p>
                          </div>
                        </li>
                        <li className="itinerary__segment" data-segment-id="seg_ret_2">
                          <p className="itinerary__segment-index">
                            <span className="itinerary__segment-dot" aria-hidden="true" />
                            {" Flight 2"}
                          </p>
                          <div className="itinerary__segment-body">
                            <p className="itinerary__segment-head">
                              <span className="itinerary__segment-route">
                                {' '}
                                <span className="itinerary__segment-flight">
                                  MU 5379
                                </span>
                                {' '}
                                <span aria-hidden="true">
                                  ·
                                </span>
                                {" PVG → CAN "}
                              </span>
                              {' '}
                              <span className="itinerary__segment-carrier">
                                {' '}
                                <img className="itinerary__segment-logo" src="/images/MU.avif" alt="" width="120" height="120" decoding="async" />
                                {" China Eastern "}
                              </span>
                            </p>
                            <div className="itinerary__hop">
                              <p className="itinerary__stop">
                                <span className="itinerary__stop-label sr-only lg:not-sr-only">
                                  From
                                </span>
                                {' '}
                                <span className="itinerary__stop-code">
                                  PVG
                                </span>
                                {' '}
                                <span className="itinerary__stop-name">
                                  Shanghai Pudong · T1
                                </span>
                              </p>
                              <p className="itinerary__hop-path">
                                <span className="itinerary__line" aria-hidden="true">
                                  {' '}
                                  <svg className="icon--solid">
                                    <use href="#i-plane" />
                                  </svg>
                                  {' '}
                                </span>
                                {' '}
                                <span className="itinerary__hop-time">
                                  2h 20m
                                  <span className="sr-only">
                                    {" flight time"}
                                  </span>
                                </span>
                              </p>
                              <p className="itinerary__stop itinerary__stop--arrive">
                                <span className="itinerary__stop-label sr-only lg:not-sr-only">
                                  To
                                </span>
                                {' '}
                                <span className="itinerary__stop-code">
                                  CAN
                                </span>
                                {' '}
                                <span className="itinerary__stop-name">
                                  Guangzhou Baiyun · T2
                                </span>
                              </p>
                            </div>
                            <p className="itinerary__segment-meta">
                              <span>
                                Boeing 737-800
                              </span>
                              {' '}
                              <span>
                                Economy
                              </span>
                              {' '}
                              <span>
                                Operated by China Eastern
                              </span>
                            </p>
                            <p className="itinerary__layover">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-clock" />
                              </svg>
                              {' '}
                              <span className="itinerary__layover-wait">
                                1h 45m layover in Guangzhou
                              </span>
                              {' '}
                              <span className="itinerary__layover-note">
                                Change airline
                              </span>
                            </p>
                          </div>
                        </li>
                        <li className="itinerary__segment" data-segment-id="seg_ret_3">
                          <p className="itinerary__segment-index">
                            <span className="itinerary__segment-dot" aria-hidden="true" />
                            {" Flight 3"}
                          </p>
                          <div className="itinerary__segment-body">
                            <p className="itinerary__segment-head">
                              <span className="itinerary__segment-route">
                                {' '}
                                <span className="itinerary__segment-flight">
                                  CZ 8447
                                </span>
                                {' '}
                                <span aria-hidden="true">
                                  ·
                                </span>
                                {" CAN → DAC "}
                              </span>
                              {' '}
                              <span className="itinerary__segment-carrier">
                                {' '}
                                <img className="itinerary__segment-logo" src="/images/CZ.avif" alt="" width="120" height="120" decoding="async" />
                                {" China Southern "}
                              </span>
                            </p>
                            <div className="itinerary__hop">
                              <p className="itinerary__stop">
                                <span className="itinerary__stop-label sr-only lg:not-sr-only">
                                  From
                                </span>
                                {' '}
                                <span className="itinerary__stop-code">
                                  CAN
                                </span>
                                {' '}
                                <span className="itinerary__stop-name">
                                  Guangzhou Baiyun · T2
                                </span>
                              </p>
                              <p className="itinerary__hop-path">
                                <span className="itinerary__line" aria-hidden="true">
                                  {' '}
                                  <svg className="icon--solid">
                                    <use href="#i-plane" />
                                  </svg>
                                  {' '}
                                </span>
                                {' '}
                                <span className="itinerary__hop-time">
                                  2h 35m
                                  <span className="sr-only">
                                    {" flight time"}
                                  </span>
                                </span>
                              </p>
                              <p className="itinerary__stop itinerary__stop--arrive">
                                <span className="itinerary__stop-label sr-only lg:not-sr-only">
                                  To
                                </span>
                                {' '}
                                <span className="itinerary__stop-code">
                                  DAC
                                </span>
                                {' '}
                                <span className="itinerary__stop-name">
                                  Hazrat Shahjalal · T2
                                </span>
                              </p>
                            </div>
                            <p className="itinerary__segment-meta">
                              <span>
                                Boeing 737-800
                              </span>
                              {' '}
                              <span>
                                Economy
                              </span>
                              {' '}
                              <span>
                                Operated by China Southern
                              </span>
                            </p>
                          </div>
                        </li>
                      </ol>
                    </details>
                  </section>
                </div>
                <div className="booking-panel booking-panel--passengers">
                  {/* BLADE BOUNDARY: booking passengers -> <x-account.booking-passengers :booking="$booking" /> */}
                  <div className="summary-strip">
                    <p className="summary-strip__item">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-user" />
                      </svg>
                      {' '}
                      <span>
                        <span className="summary-strip__label">
                          Total passengers
                        </span>
                        2 Adults · 1 Child
                      </span>
                    </p>
                    <p className="summary-strip__item">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-ticket" />
                      </svg>
                      {' '}
                      <span>
                        <span className="summary-strip__label">
                          Booking ID
                        </span>
                        IGT-BR-240918
                      </span>
                    </p>
                    <p className="summary-strip__item">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-headset" />
                      </svg>
                      {' '}
                      <span>
                        <span className="summary-strip__label">
                          Primary contact
                        </span>
                        +880 1712 345678
                      </span>
                    </p>
                    <p className="summary-strip__item">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-mail" />
                      </svg>
                      {' '}
                      <span>
                        <span className="summary-strip__label">
                          Email
                        </span>
                        tanvir.ahmed@example.com
                      </span>
                    </p>
                  </div>
                  <section className="review-panel">
                    <h3 className="pax-head">
                      <span className="pax-head__number" aria-hidden="true">
                        1
                      </span>
                      {" Passenger 1 (Adult)"}
                    </h3>
                    <dl className="detail-grid">
                      <div className="detail">
                        <dt className="detail__label">
                          First name
                        </dt>
                        <dd className="detail__value">
                          Tanvir
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Last name
                        </dt>
                        <dd className="detail__value">
                          Ahmed
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Gender
                        </dt>
                        <dd className="detail__value">
                          Male
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Date of birth
                        </dt>
                        <dd className="detail__value">
                          12 Aug 1985
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Nationality
                        </dt>
                        <dd className="detail__value">
                          Bangladeshi
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport number
                        </dt>
                        <dd className="detail__value">
                          A12345678
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport expiry
                        </dt>
                        <dd className="detail__value">
                          02 Jun 2035
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Email address
                        </dt>
                        <dd className="detail__value">
                          tanvir.ahmed@example.com
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Phone number
                        </dt>
                        <dd className="detail__value">
                          +880 1712 345678
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passenger type
                        </dt>
                        <dd className="detail__value">
                          Adult
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Seat preference
                        </dt>
                        <dd className="detail__value">
                          25A
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          {"Frequent flyer "}
                          <span className="detail__optional">
                            (optional)
                          </span>
                        </dt>
                        <dd className="detail__value detail__value--muted">
                          Not provided
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          {"Special requests "}
                          <span className="detail__optional">
                            (optional)
                          </span>
                        </dt>
                        <dd className="detail__value detail__value--muted">
                          No special requests
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport photo
                        </dt>
                        <dd className="detail__value">
                          <a className="detail__file" href="#main-content">
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-image" />
                            </svg>
                            passport.jpg
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </section>
                  <section className="review-panel">
                    <h3 className="pax-head">
                      <span className="pax-head__number" aria-hidden="true">
                        2
                      </span>
                      {" Passenger 2 (Adult)"}
                    </h3>
                    <dl className="detail-grid">
                      <div className="detail">
                        <dt className="detail__label">
                          First name
                        </dt>
                        <dd className="detail__value">
                          Samia
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Last name
                        </dt>
                        <dd className="detail__value">
                          Ahmed
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Gender
                        </dt>
                        <dd className="detail__value">
                          Female
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Date of birth
                        </dt>
                        <dd className="detail__value">
                          21 Sep 1990
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Nationality
                        </dt>
                        <dd className="detail__value">
                          Bangladeshi
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport number
                        </dt>
                        <dd className="detail__value">
                          B23456789
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport expiry
                        </dt>
                        <dd className="detail__value">
                          11 Jan 2031
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Email address
                        </dt>
                        <dd className="detail__value">
                          samia.ahmed@example.com
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Phone number
                        </dt>
                        <dd className="detail__value">
                          +880 1811 223344
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passenger type
                        </dt>
                        <dd className="detail__value">
                          Adult
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Seat preference
                        </dt>
                        <dd className="detail__value">
                          25B
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          {"Frequent flyer "}
                          <span className="detail__optional">
                            (optional)
                          </span>
                        </dt>
                        <dd className="detail__value detail__value--muted">
                          Not provided
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          {"Special requests "}
                          <span className="detail__optional">
                            (optional)
                          </span>
                        </dt>
                        <dd className="detail__value">
                          Vegetarian meal
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport photo
                        </dt>
                        <dd className="detail__value">
                          <a className="detail__file" href="#main-content">
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-image" />
                            </svg>
                            samia-passport.jpg
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </section>
                  <section className="review-panel">
                    <h3 className="pax-head">
                      <span className="pax-head__number" aria-hidden="true">
                        3
                      </span>
                      {" Passenger 3 (Child)"}
                    </h3>
                    <dl className="detail-grid">
                      <div className="detail">
                        <dt className="detail__label">
                          First name
                        </dt>
                        <dd className="detail__value">
                          Rafi
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Last name
                        </dt>
                        <dd className="detail__value">
                          Ahmed
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Gender
                        </dt>
                        <dd className="detail__value">
                          Male
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Date of birth
                        </dt>
                        <dd className="detail__value">
                          04 Mar 2016
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Nationality
                        </dt>
                        <dd className="detail__value">
                          Bangladeshi
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport number
                        </dt>
                        <dd className="detail__value">
                          C34567890
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport expiry
                        </dt>
                        <dd className="detail__value">
                          19 Aug 2029
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Email address
                        </dt>
                        <dd className="detail__value">
                          tanvir.ahmed@example.com
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Phone number
                        </dt>
                        <dd className="detail__value">
                          +880 1712 345678
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passenger type
                        </dt>
                        <dd className="detail__value">
                          Child
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Seat preference
                        </dt>
                        <dd className="detail__value">
                          25C
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          {"Frequent flyer "}
                          <span className="detail__optional">
                            (optional)
                          </span>
                        </dt>
                        <dd className="detail__value detail__value--muted">
                          Not provided
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          {"Special requests "}
                          <span className="detail__optional">
                            (optional)
                          </span>
                        </dt>
                        <dd className="detail__value detail__value--muted">
                          No special requests
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Passport photo
                        </dt>
                        <dd className="detail__value">
                          <a className="detail__file" href="#main-content">
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-image" />
                            </svg>
                            rafi-passport.jpg
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </section>
                  {/* END BLADE BOUNDARY: booking passengers */}
                </div>
                <div className="booking-panel booking-panel--fare">
                  {/* BLADE BOUNDARY: booking fare -> <x-account.booking-fare :booking="$booking" /> */}
                  {/* Every figure is the one the backend confirmed with the airline;
                    nothing on this page is worked out in the browser. */}
                  <section className="review-panel">
                    <h2 className="panel-head">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-tag" />
                      </svg>
                      Fare breakdown
                    </h2>
                    <dl className="grid gap-3 mt-4 m-0">
                      <div className="price-row">
                        <dt>
                          Adult fare × 2
                        </dt>
                        <dd className="m-0 price-row__value">
                          BDT 123,800
                        </dd>
                      </div>
                      <div className="price-row">
                        <dt>
                          Child fare × 1
                        </dt>
                        <dd className="m-0 price-row__value">
                          BDT 49,600
                        </dd>
                      </div>
                      <div className="price-row">
                        <dt>
                          Taxes &amp; fees
                        </dt>
                        <dd className="m-0 price-row__value">
                          BDT 18,160
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
                          Total paid
                        </dt>
                        <dd className="m-0 price-row__value">
                          BDT 200,060
                        </dd>
                      </div>
                    </dl>
                  </section>
                  <section className="review-panel">
                    <h2 className="panel-head">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      Add-ons, passenger by passenger
                    </h2>
                    <div className="addon-summary">
                      <div className="addon-summary__body">
                        <div className="addon-summary__group">
                          <p className="addon-summary__who">
                            Tanvir Ahmed
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
                            Samia Ahmed
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
                            Rafi Ahmed
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
                  </section>
                  {/* END BLADE BOUNDARY: booking fare */}
                </div>
                <div className="booking-panel booking-panel--payment">
                  {/* BLADE BOUNDARY: booking payment -> <x-account.booking-payment :booking="$booking" />
                    The card is shown the way the payment provider returns it: a brand
                    and the last four digits. No card number, expiry or security code
                    is ever held by this site or sent to it. */}
                  <section className="review-panel payment-panel">
                    <div>
                      <h2 className="panel-head">
                        <svg className="icon size-5" aria-hidden="true">
                          <use href="#i-lock" />
                        </svg>
                        Payment details
                      </h2>
                      <dl className="detail-grid detail-grid--two mt-4">
                        <div className="detail">
                          <dt className="detail__label">
                            Payment method
                          </dt>
                          <dd className="detail__value">
                            Credit card (Visa)
                          </dd>
                        </div>
                        <div className="detail">
                          <dt className="detail__label">
                            Paid amount
                          </dt>
                          <dd className="detail__value">
                            BDT 200,060
                          </dd>
                        </div>
                        <div className="detail">
                          <dt className="detail__label">
                            Payment status
                          </dt>
                          <dd className="detail__value">
                            <span className="status-pill status-pill--confirmed">
                              Paid
                            </span>
                          </dd>
                        </div>
                        <div className="detail">
                          <dt className="detail__label">
                            Payment date
                          </dt>
                          <dd className="detail__value">
                            10 Sep 2026, 10:30
                          </dd>
                        </div>
                        <div className="detail">
                          <dt className="detail__label">
                            Transaction ID
                          </dt>
                          <dd className="detail__value">
                            TXN1234567890
                          </dd>
                        </div>
                        <div className="detail">
                          <dt className="detail__label">
                            Billing name
                          </dt>
                          <dd className="detail__value">
                            Tanvir Ahmed
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="payment-panel__card">
                      <h3 className="panel-head">
                        <svg className="icon size-5" aria-hidden="true">
                          <use href="#i-tag" />
                        </svg>
                        Card information
                      </h3>
                      <dl className="detail-grid mt-4">
                        <div className="detail">
                          <dt className="detail__label">
                            Card number
                          </dt>
                          <dd className="detail__value">
                            •••• •••• •••• 4242
                          </dd>
                        </div>
                        <div className="detail">
                          <dt className="detail__label">
                            Card holder
                          </dt>
                          <dd className="detail__value">
                            Tanvir Ahmed
                          </dd>
                        </div>
                        <div className="detail">
                          <dt className="detail__label">
                            Expiry
                          </dt>
                          <dd className="detail__value">
                            06 / 27
                          </dd>
                        </div>
                        <div className="detail">
                          <dt className="detail__label">
                            Issuing bank
                          </dt>
                          <dd className="detail__value">
                            Mitsubishi UFJ Bank
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </section>
                  {/* END BLADE BOUNDARY: booking payment */}
                </div>
                <div className="booking-panel booking-panel--baggage">
                  {/* BLADE BOUNDARY: booking baggage -> <x-account.booking-baggage :booking="$booking" /> */}
                  <section className="review-panel">
                    <h2 className="panel-head">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      Baggage included
                    </h2>
                    <dl className="detail-grid detail-grid--two mt-4">
                      <div className="detail">
                        <dt className="detail__label">
                          Cabin baggage
                        </dt>
                        <dd className="detail__value">
                          7 kg per traveller
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Checked baggage
                        </dt>
                        <dd className="detail__value">
                          23 kg per traveller
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Cabin bag size
                        </dt>
                        <dd className="detail__value">
                          55 × 38 × 20 cm
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Extra bag
                        </dt>
                        <dd className="detail__value">
                          BDT 4,500 per 23 kg, bought from the airline
                        </dd>
                      </div>
                    </dl>
                    <p className="add-ons__note mt-4">
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-info" />
                      </svg>
                      {" The allowance is the airline's and applies to every leg of this booking."}
                    </p>
                  </section>
                  <section className="review-panel">
                    <h2 className="panel-head">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-user" />
                      </svg>
                      Per traveller
                    </h2>
                    <dl className="detail-grid detail-grid--two mt-4">
                      <div className="detail">
                        <dt className="detail__label">
                          Tanvir Ahmed
                        </dt>
                        <dd className="detail__value">
                          7 kg cabin · 23 kg checked
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Samia Ahmed
                        </dt>
                        <dd className="detail__value">
                          7 kg cabin · 23 kg checked
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Rafi Ahmed
                        </dt>
                        <dd className="detail__value">
                          7 kg cabin · 23 kg checked
                        </dd>
                      </div>
                      <div className="detail">
                        <dt className="detail__label">
                          Sports equipment
                        </dt>
                        <dd className="detail__value">
                          Not booked
                        </dd>
                      </div>
                    </dl>
                  </section>
                  {/* END BLADE BOUNDARY: booking baggage */}
                </div>
                <div className="booking-panel booking-panel--date-change">
                  {/* BLADE BOUNDARY: booking date change -> <x-account.booking-date-change :booking="$booking" />
                    @content-pending: the tiers, fees and wording are the fare's own
                    change rules, which the backend returns with the booking. Any fare
                    difference is quoted by the backend against the new date. */}
                  <section className="review-panel">
                    <h2 className="panel-head">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      Date change policy
                    </h2>
                    <p className="account-lead">
                      What a new date costs depends on how far ahead of departure the request reaches us.
                    </p>
                    <div className="tier-grid">
                      <div className="tier tier--ok">
                        <p className="tier__head">
                          <svg className="icon size-5 tier__icon" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {' '}
                          <span>
                            {' '}
                            <span className="tier__name">
                              14+ days before
                            </span>
                            {' '}
                            <span className="tier__note">
                              More than two weeks to go
                            </span>
                            {' '}
                          </span>
                        </p>
                        <p className="tier__figure">
                          BDT 2,500
                          <span className="tier__label">
                            Change fee per traveller
                          </span>
                        </p>
                      </div>
                      <div className="tier tier--warn">
                        <p className="tier__head">
                          <svg className="icon size-5 tier__icon" aria-hidden="true">
                            <use href="#i-info" />
                          </svg>
                          {' '}
                          <span>
                            {' '}
                            <span className="tier__name">
                              3 – 13 days before
                            </span>
                            {' '}
                            <span className="tier__note">
                              Under two weeks to go
                            </span>
                            {' '}
                          </span>
                        </p>
                        <p className="tier__figure">
                          BDT 5,000
                          <span className="tier__label">
                            Change fee per traveller
                          </span>
                        </p>
                      </div>
                      <div className="tier tier--stop">
                        <p className="tier__head">
                          <svg className="icon size-5 tier__icon" aria-hidden="true">
                            <use href="#i-close" />
                          </svg>
                          {' '}
                          <span>
                            {' '}
                            <span className="tier__name">
                              Less than 3 days
                            </span>
                            {' '}
                            <span className="tier__note">
                              Within 72 hours of departure
                            </span>
                            {' '}
                          </span>
                        </p>
                        <p className="tier__figure">
                          No change
                          <span className="tier__label">
                            Date cannot be changed
                          </span>
                        </p>
                      </div>
                    </div>
                    <h3 className="panel-head mt-8">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      How a date change runs
                    </h3>
                    <div className="process-grid">
                      <div className="process-card">
                        <svg className="icon size-5 process-card__icon" aria-hidden="true">
                          <use href="#i-tag" />
                        </svg>
                        {' '}
                        <span>
                          {' '}
                          <span className="process-card__name">
                            Fare difference
                          </span>
                          {' '}
                          <span className="process-card__text">
                            If the new date is dearer, the difference is added to the change fee. A cheaper date is not refunded.
                          </span>
                          {' '}
                        </span>
                      </div>
                      <div className="process-card">
                        <svg className="icon size-5 process-card__icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {' '}
                        <span>
                          {' '}
                          <span className="process-card__name">
                            Same route and cabin
                          </span>
                          {' '}
                          <span className="process-card__text">
                            Only the date moves. A new route, airline or cabin is a new booking.
                          </span>
                          {' '}
                        </span>
                      </div>
                      <div className="process-card">
                        <svg className="icon size-5 process-card__icon" aria-hidden="true">
                          <use href="#i-refresh" />
                        </svg>
                        {' '}
                        <span>
                          {' '}
                          <span className="process-card__name">
                            One change per ticket
                          </span>
                          {' '}
                          <span className="process-card__text">
                            This fare allows one date change. After that, the ticket follows the cancellation policy.
                          </span>
                          {' '}
                        </span>
                      </div>
                      <div className="process-card">
                        <svg className="icon size-5 process-card__icon" aria-hidden="true">
                          <use href="#i-ticket" />
                        </svg>
                        {' '}
                        <span>
                          {' '}
                          <span className="process-card__name">
                            New ticket
                          </span>
                          {' '}
                          <span className="process-card__text">
                            We reissue the ticket once the change is paid, and email it to you within 24 hours.
                          </span>
                          {' '}
                        </span>
                      </div>
                    </div>
                    <p className="callout">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-info" />
                      </svg>
                      {' '}
                      <span>
                        {' '}
                        <span className="callout__name">
                          Need a different date?
                        </span>
                        {" Ask our team to check it. We confirm seats on the new flight and the total to pay before anything is changed. "}
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {/* Changing a date changes a booking, so it is a POST that the team
                        acts on; nothing is changed by pressing this in a browser. */}
                      <form method="post" action="/contact">
                        <button className="btn btn--primary" type="submit" data-dialog-open="change-dialog">
                          {' '}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-headset" />
                          </svg>
                          {"Request date change "}
                        </button>
                      </form>
                    </div>
                  </section>
                  {/* END BLADE BOUNDARY: booking date change */}
                </div>
                <div className="booking-panel booking-panel--cancellation">
                  {/* BLADE BOUNDARY: booking cancellation -> <x-account.booking-cancellation :booking="$booking" />
                    @content-pending: the tiers and the wording are the fare's own rules,
                    which the backend returns with the booking. */}
                  <section className="review-panel">
                    <h2 className="panel-head">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-refresh" />
                      </svg>
                      Cancellation policy
                    </h2>
                    <p className="account-lead">
                      What comes back depends on how far ahead of departure the request reaches us.
                    </p>
                    <div className="tier-grid">
                      <div className="tier tier--ok">
                        <p className="tier__head">
                          <svg className="icon size-5 tier__icon" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {' '}
                          <span>
                            {' '}
                            <span className="tier__name">
                              30+ days before
                            </span>
                            {' '}
                            <span className="tier__note">
                              More than 30 days to go
                            </span>
                            {' '}
                          </span>
                        </p>
                        <p className="tier__figure">
                          100%
                          <span className="tier__label">
                            Full refund
                          </span>
                        </p>
                      </div>
                      <div className="tier tier--warn">
                        <p className="tier__head">
                          <svg className="icon size-5 tier__icon" aria-hidden="true">
                            <use href="#i-info" />
                          </svg>
                          {' '}
                          <span>
                            {' '}
                            <span className="tier__name">
                              7 – 29 days before
                            </span>
                            {' '}
                            <span className="tier__note">
                              A week to a month to go
                            </span>
                            {' '}
                          </span>
                        </p>
                        <p className="tier__figure">
                          50%
                          <span className="tier__label">
                            Partial refund
                          </span>
                        </p>
                      </div>
                      <div className="tier tier--stop">
                        <p className="tier__head">
                          <svg className="icon size-5 tier__icon" aria-hidden="true">
                            <use href="#i-close" />
                          </svg>
                          {' '}
                          <span>
                            {' '}
                            <span className="tier__name">
                              Less than 7 days
                            </span>
                            {' '}
                            <span className="tier__note">
                              Within the week of travel
                            </span>
                            {' '}
                          </span>
                        </p>
                        <p className="tier__figure">
                          0%
                          <span className="tier__label">
                            Non-refundable
                          </span>
                        </p>
                      </div>
                    </div>
                    <h3 className="panel-head mt-8">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      How a refund runs
                    </h3>
                    <div className="process-grid">
                      <div className="process-card">
                        <svg className="icon size-5 process-card__icon" aria-hidden="true">
                          <use href="#i-clock" />
                        </svg>
                        {' '}
                        <span>
                          {' '}
                          <span className="process-card__name">
                            Processing time
                          </span>
                          {' '}
                          <span className="process-card__text">
                            Refunds are processed within 7 to 10 working days of the cancellation date.
                          </span>
                          {' '}
                        </span>
                      </div>
                      <div className="process-card">
                        <svg className="icon size-5 process-card__icon" aria-hidden="true">
                          <use href="#i-refresh" />
                        </svg>
                        {' '}
                        <span>
                          {' '}
                          <span className="process-card__name">
                            Refund method
                          </span>
                          {' '}
                          <span className="process-card__text">
                            The refund goes back to the card it was paid with, the Visa ending 4242.
                          </span>
                          {' '}
                        </span>
                      </div>
                      <div className="process-card">
                        <svg className="icon size-5 process-card__icon" aria-hidden="true">
                          <use href="#i-tag" />
                        </svg>
                        {' '}
                        <span>
                          {' '}
                          <span className="process-card__name">
                            Non-refundable charges
                          </span>
                          {' '}
                          <span className="process-card__text">
                            Service fees, taxes and convenience charges are not refundable, whichever tier applies.
                          </span>
                          {' '}
                        </span>
                      </div>
                      <div className="process-card">
                        <svg className="icon size-5 process-card__icon" aria-hidden="true">
                          <use href="#i-shield" />
                        </svg>
                        {' '}
                        <span>
                          {' '}
                          <span className="process-card__name">
                            Travel insurance
                          </span>
                          {' '}
                          <span className="process-card__text">
                            Where cover was bought, the policy may add to this. Check the wording or ask the insurer.
                          </span>
                          {' '}
                        </span>
                      </div>
                    </div>
                    <p className="callout">
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-info" />
                      </svg>
                      {' '}
                      <span>
                        {' '}
                        <span className="callout__name">
                          Need to cancel?
                        </span>
                        {" Ask our team to start it. The refund is worked out from the date your request reaches us, and we confirm the figure before anything is cancelled. "}
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {/* Cancelling changes a booking, so it is a POST that the team
                        acts on; nothing is cancelled by pressing this in a browser. */}
                      <form method="post" action="/contact">
                        <button className="btn btn--primary" type="submit" data-dialog-open="cancel-dialog">
                          {' '}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-headset" />
                          </svg>
                          {"Request cancellation "}
                        </button>
                      </form>
                    </div>
                  </section>
                  {/* END BLADE BOUNDARY: booking cancellation */}
                </div>
              </div>
            </div>
            {/* END BLADE BOUNDARY: booking tabs */}
          </div>
        </div>
        {/* BLADE BOUNDARY: date change dialog -> <x-account.request-dialog type="date_change" :booking="$booking" />
          Opened by the "Request date change" button through data-dialog-open. Without
          JavaScript that button posts the plain request instead.
          @content-pending: the travellers, flights and every figure are the
          backend's quote for this booking; nothing in here is worked out in the
          browser, and the request is re-priced when the team picks it up. */}
        <dialog className="request-dialog" id="change-dialog" aria-labelledby="change-title" data-dialog="">
          <form className="request-dialog__body" method="post" action="/contact" noValidate data-validate="" data-request-form="" data-sent-panel="change-sent">
            <input type="hidden" name="booking_reference" value="IGT-BR-240918" />
            {' '}
            <input type="hidden" name="request_type" value="date_change" />
            <div className="request-dialog__head">
              <span className="request-dialog__icon request-dialog__icon--brand" aria-hidden="true">
                {' '}
                <svg className="icon size-6">
                  <use href="#i-calendar" />
                </svg>
                {' '}
              </span>
              <div>
                <h2 className="request-dialog__title" id="change-title">
                  Request a date change
                </h2>
                <p className="m-0 mt-1 text-sm text-fg-muted md:text-base">
                  Choose your new dates and review the estimated cost before submitting.
                </p>
              </div>
              <button className="request-dialog__close" type="button" aria-label="Close" data-dialog-close="">
                {' '}
                <svg className="icon size-5" aria-hidden="true">
                  <use href="#i-close" />
                </svg>
                {' '}
              </button>
            </div>
            <div className="request-dialog__summary">
              <p className="m-0 grid gap-1 text-sm text-fg">
                <span>
                  {"Booking ID: "}
                  <strong className="text-fg-heading">
                    IGT-BR-240918
                  </strong>
                </span>
                {' '}
                <span>
                  Dhaka to Tokyo · Round trip
                </span>
                {' '}
                <span className="text-fg-muted">
                  Thu, 18 Sep 2026 – Sat, 27 Sep 2026
                </span>
              </p>
              <div className="grid justify-items-center gap-1">
                <p className="request-dialog__route">
                  {"DAC "}
                  <svg className="icon size-5 text-primary" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                  {" NRT"}
                </p>
                <span className="text-xs text-fg-muted">
                  Dhaka to Tokyo
                </span>
              </div>
              <span className="status-pill status-pill--confirmed justify-self-start md:justify-self-end">
                Confirmed
              </span>
            </div>
            <p className="m-0 flex items-start gap-3 rounded-lg bg-warning-surface p-4 text-sm leading-relaxed text-fg">
              <svg className="icon size-5 flex-none text-warning" aria-hidden="true">
                <use href="#i-info" />
              </svg>
              {' '}
              <span>
                Submitting this request will not change your flight immediately. Our team will confirm seat availability and the total to pay before anything is changed.
              </span>
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <fieldset className="request-dialog__box">
                <legend className="request-dialog__box-title float-left w-full">
                  What do you want to change?
                </legend>
                <div className="clear-left grid">
                  <p className="m-0 mt-1 text-xs font-semibold uppercase tracking-caps text-fg-muted">
                    Travellers
                  </p>
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="passenger_ids[]" value="pax_1" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-user" />
                    </svg>
                    {' '}
                    <span>
                      Tanvir Ahmed
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Adult
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="passenger_ids[]" value="pax_2" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-user" />
                    </svg>
                    {' '}
                    <span>
                      Samia Ahmed
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Adult
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="passenger_ids[]" value="pax_3" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-user" />
                    </svg>
                    {' '}
                    <span>
                      Rafi Ahmed
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Child
                    </span>
                    {' '}
                  </label>
                  <p className="m-0 mt-1 text-xs font-semibold uppercase tracking-caps text-fg-muted">
                    Flights
                  </p>
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="slice_ids[]" value="slc_out" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-plane" />
                    </svg>
                    {' '}
                    <span>
                      Outbound · DAC → NRT
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Thu, 18 Sep
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="slice_ids[]" value="slc_ret" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-plane" />
                    </svg>
                    {' '}
                    <span>
                      Inbound · NRT → DAC
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Sat, 27 Sep
                    </span>
                    {' '}
                  </label>
                </div>
              </fieldset>
              <section className="request-dialog__box request-dialog__box--tint" aria-labelledby="change-estimate-title">
                <h3 className="request-dialog__box-title" id="change-estimate-title">
                  <span className="rule-icon rule-icon--brand size-9" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-card" />
                    </svg>
                    {' '}
                  </span>
                  {" Estimated cost"}
                </h3>
                <dl className="grid gap-3 m-0">
                  <div className="price-row">
                    <dt>
                      Change fee × 3 travellers
                    </dt>
                    <dd className="m-0 price-row__value">
                      BDT 7,500
                    </dd>
                  </div>
                  <div className="price-row">
                    <dt>
                      Service fee
                    </dt>
                    <dd className="m-0 price-row__value">
                      BDT 1,000
                    </dd>
                  </div>
                  <div className="price-row">
                    <dt>
                      Fare difference
                    </dt>
                    <dd className="m-0 price-row__value">
                      Quoted on review
                    </dd>
                  </div>
                  <div className="price-row price-row--total">
                    <dt>
                      Estimated to pay
                    </dt>
                    <dd className="m-0 price-row__value text-primary">
                      BDT 8,500
                    </dd>
                  </div>
                </dl>
                <p className="m-0 mt-3 text-xs leading-relaxed text-fg-muted">
                  Plus any fare difference for the new dates. The final amount may change after airline review.
                </p>
              </section>
            </div>
            <fieldset className="request-dialog__box">
              <legend className="request-dialog__box-title float-left w-full">
                Your new dates
              </legend>
              {/* The same calendar panel the search forms open (date-range.js). The
                native inputs stay: they are the values, and they are what works
                with no JavaScript. */}
              <div className="clear-left relative grid gap-3 md:grid-cols-2" data-date-range="" data-date-start="new outbound" data-date-end="new return">
                <div className="search-field search-field--solid">
                  <label className="search-field__label" htmlFor="change-date-out">
                    New outbound date
                  </label>
                  {' '}
                  <span className="search-field__value">
                    {' '}
                    <input className="search-field__control search-field__control--lg" type="date" id="change-date-out" name="new_departure_date" defaultValue="2026-09-18" data-date-input="depart" />
                    {' '}
                    <span className="search-field__display" data-date-display="" aria-hidden="true">
                      18 Sep
                    </span>
                    {' '}
                  </span>
                </div>
                <div className="search-field search-field--solid">
                  <label className="search-field__label" htmlFor="change-date-ret">
                    New return date
                  </label>
                  {' '}
                  <span className="search-field__value">
                    {' '}
                    <input className="search-field__control search-field__control--lg" type="date" id="change-date-ret" name="new_return_date" defaultValue="2026-09-27" data-date-input="return" />
                    {' '}
                    <span className="search-field__display" data-date-display="" aria-hidden="true">
                      27 Sep
                    </span>
                    {' '}
                  </span>
                </div>
              </div>
            </fieldset>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="field">
                <label className="field__label" htmlFor="change-reason">
                  Reason for the change
                </label>
                {' '}
                <span className="field__select" data-select="">
                  {' '}
                  <select className="field__control" id="change-reason" name="reason" required data-required="Choose a reason so the team knows how to help.">
                    <option value="">
                      Select a reason
                    </option>
                    <option value="change_of_plans">
                      Change of plans
                    </option>
                    <option value="work">
                      Work commitment
                    </option>
                    <option value="medical">
                      Medical reason
                    </option>
                    <option value="visa">
                      Visa or documents
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                  {' '}
                  <svg className="icon size-4 field__chevron" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                  {' '}
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="change-details">
                  Additional details (optional)
                </label>
                {' '}
                <textarea className="field__control field__control--area" id="change-details" name="details" rows={3} maxLength={500} aria-describedby="change-details-hint" placeholder="Tell us more (e.g. flexible dates, preferred times)" />
                {' '}
                <span className="field__hint" id="change-details-hint">
                  Up to 500 characters.
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
            </div>
            <details className="request-dialog__policy">
              <summary>
                <svg className="icon size-5 text-primary" aria-hidden="true">
                  <use href="#i-ticket" />
                </svg>
                {" View date change policy "}
                <svg className="icon size-4 request-dialog__policy-chevron" aria-hidden="true">
                  <use href="#i-chevron-down" />
                </svg>
              </summary>
              <ul className="grid gap-2 m-0 px-5 pb-5 pl-10 list-disc text-sm leading-relaxed text-fg">
                <li>
                  More than 14 days before departure: BDT 2,500 per traveller, plus any fare difference.
                </li>
                <li>
                  3 to 13 days before departure: BDT 5,000 per traveller, plus any fare difference.
                </li>
                <li>
                  Less than 3 days before departure: the date cannot be changed.
                </li>
                <li>
                  Only the date moves. A new route, airline or cabin is a new booking. One change is allowed per ticket.
                </li>
              </ul>
            </details>
            <div className="field">
              <label className="flex items-start gap-3 text-sm text-fg">
                {' '}
                <input type="checkbox" name="terms_accepted" value="1" required data-required="Tick the box to confirm you have read this." />
                {" I understand that a date change is subject to seat availability, airline approval and applicable charges. "}
              </label>
              {' '}
              <span className="field__error" data-field-error="" hidden />
            </div>
            <div className="request-dialog__foot">
              <p className="m-0 flex items-center gap-2 text-xs text-fg-muted">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-clock" />
                </svg>
                {" Typical review time: within 24 hours"}
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn--outline" type="button" data-dialog-close="">
                  Keep current dates
                </button>
                {' '}
                <button className="btn btn--primary request-dialog__submit" type="submit">
                  Submit change request
                </button>
              </div>
            </div>
          </form>
          {/* What the backend returns once the request is stored. The static page
            shows it on a valid submit; see assets/js/pages/account.js. */}
          <div className="request-dialog__body" id="change-sent" tabIndex={-1} hidden>
            <div className="request-dialog__head">
              <span className="request-dialog__icon request-dialog__icon--done" aria-hidden="true">
                {' '}
                <svg className="icon size-6">
                  <use href="#i-check" />
                </svg>
                {' '}
              </span>
              <div>
                <h2 className="request-dialog__title">
                  Date change request sent
                </h2>
                <p className="m-0 mt-1 text-sm leading-relaxed text-fg-muted md:text-base">
                  Our team will check seats on your new dates and email you the total to pay, usually within 24 hours. Nothing changes until you approve it.
                </p>
              </div>
              <button className="request-dialog__close" type="button" aria-label="Close" data-dialog-close="">
                {' '}
                <svg className="icon size-5" aria-hidden="true">
                  <use href="#i-close" />
                </svg>
                {' '}
              </button>
            </div>
            <div className="request-dialog__summary">
              <p className="m-0 grid gap-1 text-sm text-fg">
                <span>
                  {"Request reference: "}
                  <strong className="text-fg-heading">
                    DCR-240918-01
                  </strong>
                </span>
                {' '}
                <span className="text-fg-muted">
                  Booking IGT-BR-240918 · DAC – NRT – DAC
                </span>
              </p>
            </div>
            <div className="flex justify-end">
              <button className="btn btn--primary" type="button" data-dialog-close="">
                Done
              </button>
            </div>
          </div>
        </dialog>
        {/* END BLADE BOUNDARY: date change dialog */}
        {/* BLADE BOUNDARY: cancellation dialog -> <x-account.request-dialog type="cancellation" :booking="$booking" />
          Opened by the "Request cancellation" button through data-dialog-open. Without
          JavaScript that button posts the plain request instead.
          @content-pending: the travellers, flights and every figure are the
          backend's quote for this booking; nothing in here is worked out in the
          browser, and the request is re-priced when the team picks it up. */}
        <dialog className="request-dialog" id="cancel-dialog" aria-labelledby="cancel-title" data-dialog="">
          <form className="request-dialog__body" method="post" action="/contact" noValidate data-validate="" data-request-form="" data-sent-panel="cancel-sent">
            <input type="hidden" name="booking_reference" value="IGT-BR-240918" />
            {' '}
            <input type="hidden" name="request_type" value="cancellation" />
            <div className="request-dialog__head">
              <span className="request-dialog__icon" aria-hidden="true">
                {' '}
                <svg className="icon size-6">
                  <use href="#i-info" />
                </svg>
                {' '}
              </span>
              <div>
                <h2 className="request-dialog__title" id="cancel-title">
                  Request flight cancellation
                </h2>
                <p className="m-0 mt-1 text-sm text-fg-muted md:text-base">
                  Review the policy and estimated refund before submitting.
                </p>
              </div>
              <button className="request-dialog__close" type="button" aria-label="Close" data-dialog-close="">
                {' '}
                <svg className="icon size-5" aria-hidden="true">
                  <use href="#i-close" />
                </svg>
                {' '}
              </button>
            </div>
            <div className="request-dialog__summary">
              <p className="m-0 grid gap-1 text-sm text-fg">
                <span>
                  {"Booking ID: "}
                  <strong className="text-fg-heading">
                    IGT-BR-240918
                  </strong>
                </span>
                {' '}
                <span>
                  Dhaka to Tokyo · Round trip
                </span>
                {' '}
                <span className="text-fg-muted">
                  Thu, 18 Sep 2026 – Sat, 27 Sep 2026
                </span>
              </p>
              <div className="grid justify-items-center gap-1">
                <p className="request-dialog__route">
                  {"DAC "}
                  <svg className="icon size-5 text-primary" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                  {" NRT"}
                </p>
                <span className="text-xs text-fg-muted">
                  Dhaka to Tokyo
                </span>
              </div>
              <span className="status-pill status-pill--confirmed justify-self-start md:justify-self-end">
                Confirmed
              </span>
            </div>
            <p className="m-0 flex items-start gap-3 rounded-lg bg-warning-surface p-4 text-sm leading-relaxed text-fg">
              <svg className="icon size-5 flex-none text-warning" aria-hidden="true">
                <use href="#i-info" />
              </svg>
              {' '}
              <span>
                Submitting this request will not cancel your flight immediately. Our team will confirm the applicable airline charges before cancellation.
              </span>
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <fieldset className="request-dialog__box">
                <legend className="request-dialog__box-title float-left w-full">
                  Who do you want to cancel?
                </legend>
                <div className="clear-left grid">
                  <p className="m-0 mt-1 text-xs font-semibold uppercase tracking-caps text-fg-muted">
                    Travellers
                  </p>
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="passenger_ids[]" value="pax_1" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-user" />
                    </svg>
                    {' '}
                    <span>
                      Tanvir Ahmed
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Adult
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="passenger_ids[]" value="pax_2" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-user" />
                    </svg>
                    {' '}
                    <span>
                      Samia Ahmed
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Adult
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="passenger_ids[]" value="pax_3" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-user" />
                    </svg>
                    {' '}
                    <span>
                      Rafi Ahmed
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Child
                    </span>
                    {' '}
                  </label>
                  <p className="m-0 mt-1 text-xs font-semibold uppercase tracking-caps text-fg-muted">
                    Flights
                  </p>
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="slice_ids[]" value="slc_out" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-plane" />
                    </svg>
                    {' '}
                    <span>
                      Outbound · DAC → NRT
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Thu, 18 Sep
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="request-dialog__option">
                    {' '}
                    <input type="checkbox" name="slice_ids[]" value="slc_ret" defaultChecked />
                    {' '}
                    <svg className="icon size-5 flex-none text-fg-muted" aria-hidden="true">
                      <use href="#i-plane" />
                    </svg>
                    {' '}
                    <span>
                      Inbound · NRT → DAC
                    </span>
                    {' '}
                    <span className="request-dialog__option-note">
                      Sat, 27 Sep
                    </span>
                    {' '}
                  </label>
                </div>
              </fieldset>
              <section className="request-dialog__box request-dialog__box--tint" aria-labelledby="cancel-estimate-title">
                <h3 className="request-dialog__box-title" id="cancel-estimate-title">
                  <span className="rule-icon rule-icon--brand size-9" aria-hidden="true">
                    {' '}
                    <svg className="icon size-4">
                      <use href="#i-card" />
                    </svg>
                    {' '}
                  </span>
                  {" Estimated refund"}
                </h3>
                <dl className="grid gap-3 m-0">
                  <div className="price-row">
                    <dt>
                      Ticket amount
                    </dt>
                    <dd className="m-0 price-row__value">
                      BDT 191,560
                    </dd>
                  </div>
                  <div className="price-row">
                    <dt>
                      Estimated airline fee
                    </dt>
                    <dd className="m-0 price-row__value">
                      − BDT 25,500
                    </dd>
                  </div>
                  <div className="price-row">
                    <dt>
                      Service fee
                    </dt>
                    <dd className="m-0 price-row__value">
                      − BDT 3,000
                    </dd>
                  </div>
                  <div className="price-row price-row--total">
                    <dt>
                      Estimated refund
                    </dt>
                    <dd className="m-0 price-row__value text-primary">
                      BDT 163,060
                    </dd>
                  </div>
                </dl>
                <p className="m-0 mt-3 text-xs leading-relaxed text-fg-muted">
                  Add-ons are not refundable. The final refund may change after airline review.
                </p>
              </section>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="field">
                <label className="field__label" htmlFor="cancel-reason">
                  Reason for cancellation
                </label>
                {' '}
                <span className="field__select" data-select="">
                  {' '}
                  <select className="field__control" id="cancel-reason" name="reason" required data-required="Choose a reason so the team knows how to help.">
                    <option value="">
                      Select a reason
                    </option>
                    <option value="change_of_plans">
                      Change of plans
                    </option>
                    <option value="medical">
                      Medical reason
                    </option>
                    <option value="visa">
                      Visa refused or delayed
                    </option>
                    <option value="schedule_change">
                      Airline changed the schedule
                    </option>
                    <option value="duplicate">
                      Duplicate booking
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                  {' '}
                  <svg className="icon size-4 field__chevron" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                  {' '}
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="cancel-details">
                  Additional details (optional)
                </label>
                {' '}
                <textarea className="field__control field__control--area" id="cancel-details" name="details" rows={3} maxLength={500} aria-describedby="cancel-details-hint" placeholder="Tell us more (e.g. change in plans, medical reason, etc.)" />
                {' '}
                <span className="field__hint" id="cancel-details-hint">
                  Up to 500 characters.
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
            </div>
            <details className="request-dialog__policy">
              <summary>
                <svg className="icon size-5 text-primary" aria-hidden="true">
                  <use href="#i-ticket" />
                </svg>
                {" View cancellation and no-show policy "}
                <svg className="icon size-4 request-dialog__policy-chevron" aria-hidden="true">
                  <use href="#i-chevron-down" />
                </svg>
              </summary>
              <ul className="grid gap-2 m-0 px-5 pb-5 pl-10 list-disc text-sm leading-relaxed text-fg">
                <li>
                  More than 30 days before departure: full refund of the ticket amount.
                </li>
                <li>
                  7 to 29 days before departure: 50% of the ticket amount is refunded.
                </li>
                <li>
                  Less than 7 days before departure, or a no-show: the ticket is non-refundable.
                </li>
                <li>
                  Service fees, taxes and convenience charges are not refunded. Refunds reach the original card within 7 to 10 working days.
                </li>
              </ul>
            </details>
            <div className="field">
              <label className="flex items-start gap-3 text-sm text-fg">
                {' '}
                <input type="checkbox" name="terms_accepted" value="1" required data-required="Tick the box to confirm you have read this." />
                {" I understand that cancellation is subject to airline approval and applicable charges. "}
              </label>
              {' '}
              <span className="field__error" data-field-error="" hidden />
            </div>
            <div className="request-dialog__foot">
              <p className="m-0 flex items-center gap-2 text-xs text-fg-muted">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-clock" />
                </svg>
                {" Typical review time: within 24 hours"}
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn--outline" type="button" data-dialog-close="">
                  Keep booking
                </button>
                {' '}
                <button className="btn btn--primary request-dialog__submit" type="submit">
                  Submit cancellation request
                </button>
              </div>
            </div>
          </form>
          {/* What the backend returns once the request is stored. The static page
            shows it on a valid submit; see assets/js/pages/account.js. */}
          <div className="request-dialog__body" id="cancel-sent" tabIndex={-1} hidden>
            <div className="request-dialog__head">
              <span className="request-dialog__icon request-dialog__icon--done" aria-hidden="true">
                {' '}
                <svg className="icon size-6">
                  <use href="#i-check" />
                </svg>
                {' '}
              </span>
              <div>
                <h2 className="request-dialog__title">
                  Cancellation request sent
                </h2>
                <p className="m-0 mt-1 text-sm leading-relaxed text-fg-muted md:text-base">
                  Our team will confirm the airline charges and your refund by email, usually within 24 hours. Your booking stays active until you approve it.
                </p>
              </div>
              <button className="request-dialog__close" type="button" aria-label="Close" data-dialog-close="">
                {' '}
                <svg className="icon size-5" aria-hidden="true">
                  <use href="#i-close" />
                </svg>
                {' '}
              </button>
            </div>
            <div className="request-dialog__summary">
              <p className="m-0 grid gap-1 text-sm text-fg">
                <span>
                  {"Request reference: "}
                  <strong className="text-fg-heading">
                    CXR-240918-01
                  </strong>
                </span>
                {' '}
                <span className="text-fg-muted">
                  Booking IGT-BR-240918 · DAC – NRT – DAC
                </span>
              </p>
            </div>
            <div className="flex justify-end">
              <button className="btn btn--primary" type="button" data-dialog-close="">
                Done
              </button>
            </div>
          </div>
        </dialog>
        {/* END BLADE BOUNDARY: cancellation dialog */}
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
