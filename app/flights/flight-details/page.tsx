import Link from 'next/link';
import type { Metadata } from 'next';
import BookingSteps from '@/components/booking/BookingSteps';
import ItinerarySlice from '@/components/booking/ItinerarySlice';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/flights/flight-details.html. */

export const metadata: Metadata = {
  title: "Review your flight — Izumi Global Travels",
  description: "Review the flight you selected — times, baggage, fare rules and the total price before you enter passenger details.",
  robots: { index: false },
};

export default function FlightsFlightDetailsPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* ====================================================================
          Review of one offer. data-offer-id is the only thing the next step
          submits; every figure on this page is a redisplay of what the backend
          returned and is re-priced and re-checked server-side before booking.
          ==================================================================== */}
        <div className="page-container pt-6" data-offer-id="off_1">
          <Link className="review-back" href="/flights/search-results">
            {' '}
            <svg className="icon size-4" aria-hidden="true">
              <use href="#i-arrow-left" />
            </svg>
            {" Back to flight results "}
          </Link>
          <h1 className="mt-4 mb-0 text-3xl font-bold tracking-tight text-fg-heading">
            Review your flight
          </h1>
          <p className="mt-2 mb-0 text-sm text-fg-muted">
            Round trip · 3 travellers · Economy
          </p>
          {/* BLADE BOUNDARY: booking steps -> <x-booking.steps current="1" /> */}
          <BookingSteps current={1} />
          {/* END BLADE BOUNDARY: booking steps */}
        </div>
        <div className="page-container review-layout">
          <div className="grid gap-5">
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
            {/* BLADE BOUNDARY: fare family -> <x-booking.fare-family :fares="$fares" /> */}
            {/* Radios, so the choice is part of the form and needs nothing running to
              be made. Every figure here is the backend's: each card carries the
              trip total at that fare, and each radio the difference per traveller
              it was worked out from. Picking one moves the summary beside it, but
              that is a readback of those figures — the booking is re-priced
              server-side when the step is submitted. */}
            <section className="review-panel fare-family" aria-labelledby="fare-family-title">
              <div className="fare-family__head">
                <div>
                  <h2 className="fare-family__title" id="fare-family-title">
                    Choose your Economy fare
                  </h2>
                  <p className="fare-family__lead">
                    Select one fare type for all passengers on this itinerary.
                  </p>
                </div>
                <p className="fare-family__cabin">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-seat" />
                  </svg>
                  Economy cabin
                </p>
              </div>
              <div className="fare-grid" role="radiogroup" aria-labelledby="fare-family-title">
                <label className="fare-card">
                  {' '}
                  <input className="fare-card__input" type="radio" name="fare_id" value="far_saver" defaultChecked data-fare-delta="0" data-fare-name="Economy Saver" />
                  {' '}
                  <span className="fare-card__badge">
                    Recommended
                  </span>
                  {' '}
                  <span className="fare-card__name">
                    Economy Saver
                  </span>
                  {' '}
                  <span className="fare-card__price">
                    BDT 130,510
                    <span className="fare-card__per">
                      Lowest fare · included
                    </span>
                  </span>
                  {' '}
                  <span className="fare-card__points">
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Cabin
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Economy
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Baggage
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          23 kg
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-refresh" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Refund
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Non-refundable
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-swap" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Change
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Fee applies
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </label>
                {' '}
                <label className="fare-card">
                  {' '}
                  <input className="fare-card__input" type="radio" name="fare_id" value="far_standard" data-fare-delta="3500" data-fare-name="Economy Standard" />
                  {' '}
                  <span className="fare-card__name">
                    Economy Standard
                  </span>
                  {' '}
                  <span className="fare-card__price">
                    BDT 141,010
                    <span className="fare-card__per">
                      + BDT 3,500 per traveller
                    </span>
                  </span>
                  {' '}
                  <span className="fare-card__points">
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Cabin
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Economy
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Baggage
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          30 kg
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-refresh" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Refund
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Partially refundable
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-swap" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Change
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Lower fee
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </label>
                {' '}
                <label className="fare-card">
                  {' '}
                  <input className="fare-card__input" type="radio" name="fare_id" value="far_flex" data-fare-delta="7900" data-fare-name="Economy Flex" />
                  {' '}
                  <span className="fare-card__name">
                    Economy Flex
                  </span>
                  {' '}
                  <span className="fare-card__price">
                    BDT 154,210
                    <span className="fare-card__per">
                      + BDT 7,900 per traveller
                    </span>
                  </span>
                  {' '}
                  <span className="fare-card__points">
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Cabin
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Economy
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Baggage
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          35 kg
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-refresh" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Refund
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Partially refundable
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="fare-fact">
                      {' '}
                      <svg className="icon size-5 fare-fact__icon" aria-hidden="true">
                        <use href="#i-swap" />
                      </svg>
                      {' '}
                      <span className="fare-fact__text">
                        {' '}
                        <span className="fare-fact__label">
                          Change
                        </span>
                        {' '}
                        <span className="fare-fact__value">
                          Depends on supplier
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </label>
              </div>
            </section>
            {/* END BLADE BOUNDARY: fare family */}
            {/* The conditions behind the summary above. They are the carrier rules
              the backend returned; the amounts are quoted again before any
              change or refund is taken. */}
            <section className="review-panel" id="full-fare-rules">
              <h2 className="m-0 text-base font-semibold text-fg-heading">
                Full fare rules
              </h2>
              <dl className="grid gap-4 sm:grid-cols-2 mt-4 m-0">
                <div>
                  <dt className="text-2xs uppercase tracking-caps text-fg-muted">
                    Changes
                  </dt>
                  <dd className="mt-1 mb-0 text-sm text-fg">
                    Permitted up to 24 hours before departure. Change fee plus any fare difference.
                  </dd>
                </div>
                <div>
                  <dt className="text-2xs uppercase tracking-caps text-fg-muted">
                    Cancellation
                  </dt>
                  <dd className="mt-1 mb-0 text-sm text-fg">
                    Refundable to the original payment method, less the carrier cancellation fee.
                  </dd>
                </div>
                <div>
                  <dt className="text-2xs uppercase tracking-caps text-fg-muted">
                    No-show
                  </dt>
                  <dd className="mt-1 mb-0 text-sm text-fg">
                    The fare is forfeited if the flight is missed without notice. Taxes stay refundable.
                  </dd>
                </div>
                <div>
                  <dt className="text-2xs uppercase tracking-caps text-fg-muted">
                    Name changes
                  </dt>
                  <dd className="mt-1 mb-0 text-sm text-fg">
                    Not permitted. The passenger name must match the travel document exactly.
                  </dd>
                </div>
              </dl>
            </section>
            <p className="m-0 text-xs text-fg-muted">
              Fares and seat availability are confirmed again before payment.
            </p>
            {/* BLADE BOUNDARY: step actions -> <x-booking.step-actions /> */}
            {/* Every step of the booking flow ends with this bar. From step two on it
              also carries the way back, as the first child:
              <a class="btn btn--outline" href="flight-details.html">Back</a>
              Step one omits it: there is nothing behind this page but the results
              list, which the link at the top of the page already offers. */}
            <div className="step-actions">
              <Link className="btn btn--primary step-actions__next" href="/flights/passengers">
                Continue to passenger details
              </Link>
            </div>
            {/* END BLADE BOUNDARY: step actions */}
          </div>
          {/* BLADE BOUNDARY: price summary -> <x-booking.price-summary /> */}
          <aside className="review-aside grid gap-5">
            <section className="review-panel">
              <h2 className="m-0 text-lg font-semibold text-fg-heading">
                Price summary
              </h2>
              {/* data-amount is the figure the backend priced, in minor-free whole
                currency; the total is those added to whatever fare was chosen. The
                markup already shows the total for the fare that is selected, so
                with no JavaScript the summary is still right. */}
              <dl className="grid gap-3 mt-4 m-0" data-price-summary="" data-currency="BDT" data-travellers="3">
                <div className="price-row">
                  <dt>
                    Adult × 1
                  </dt>
                  <dd className="m-0 price-row__value" data-amount="61900">
                    BDT 61,900
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Child × 1
                  </dt>
                  <dd className="m-0 price-row__value" data-amount="49600">
                    BDT 49,600
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Infant × 1
                  </dt>
                  <dd className="m-0 price-row__value" data-amount="6200">
                    BDT 6,200
                  </dd>
                </div>
                {/* Blade renders this row only when the chosen fare costs more
                  than the lowest one. */}
                <div className="price-row" data-fare-upgrade-row="" hidden>
                  <dt data-fare-upgrade-label="">
                    Fare upgrade
                  </dt>
                  <dd className="m-0 price-row__value" data-fare-upgrade="">
                    BDT 0
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Taxes &amp; fees
                  </dt>
                  <dd className="m-0 price-row__value" data-amount="12810">
                    BDT 12,810
                  </dd>
                </div>
                <div className="price-row price-row--total">
                  <dt>
                    Total
                  </dt>
                  <dd className="m-0 price-row__value" data-grand-total="">
                    BDT 130,510
                  </dd>
                </div>
              </dl>
              <p className="mt-2 mb-0 text-xs text-fg-muted">
                Round-trip total
              </p>
              <ul className="grid gap-3 mt-5 m-0 p-0 list-none">
                <li className="price-assurance">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                  {" Secure booking"}
                </li>
                <li className="price-assurance">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-tag" />
                  </svg>
                  {" No hidden fees"}
                </li>
              </ul>
            </section>
            {/* END BLADE BOUNDARY: price summary */}
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
                    Our support team is ready to assist.
                  </p>
                </div>
              </div>
              <Link className="btn btn--secondary w-full mt-4" href="/contact">
                Contact support
              </Link>
            </section>
          </aside>
        </div>
      </main>
      {/* END BLADE BOUNDARY: main content */}
      {/* BLADE BOUNDARY: site footer -> <x-layout.footer /> */}
      <SiteFooter />
      {/* END BLADE BOUNDARY: site footer */}
      {/* A link, not a button: "#top" is the top of the document in HTML, so this
        returns there with the stylesheet's smooth scroll and nothing running. */}
      {/* BLADE BOUNDARY: price notice -> <x-booking.price-toast :hold="$offer->hold_seconds" /> */}
      {/* The fare was held for a while, and this is what happens when that runs out.
        A <dialog> opened with showModal(): the dim and the blur behind it are the
        browser's ::backdrop, the focus stays inside it, and Escape closes it — none
        of which has to be written or trapped by hand. It has no `open` attribute,
        so it starts closed; Blade renders it open when it already knows the price
        moved.
        The refresh is a link because it asks for this offer again:
        route('flights.details', $offer). The new price comes from the backend,
        and no figure in this box is worked out here. */}
      <dialog className="toast" aria-labelledby="price-toast-title" data-price-toast="" data-price-toast-delay="30000">
        <p className="toast__head">
          <span className="toast__icon" aria-hidden="true">
            {' '}
            <svg className="icon size-5">
              <use href="#i-info" />
            </svg>
            {' '}
          </span>
          {' '}
          <span className="toast__text">
            {' '}
            <span className="toast__title" id="price-toast-title">
              The price for this flight has changed
            </span>
            {' '}
            <span className="toast__note">
              Airlines re-price while you decide. Refresh to see what this fare costs now.
            </span>
            {' '}
          </span>
          {' '}
          <button className="toast__close" type="button" data-toast-close="">
            {' '}
            <svg className="icon size-4" aria-hidden="true">
              <use href="#i-close" />
            </svg>
            {' '}
            <span className="sr-only">
              Dismiss
            </span>
            {' '}
          </button>
        </p>
        <Link className="btn btn--primary toast__action" href="/flights/flight-details">
          {" Refresh price "}
          <svg className="icon size-4" aria-hidden="true">
            <use href="#i-refresh" />
          </svg>
          {' '}
        </Link>
      </dialog>
      {/* END BLADE BOUNDARY: price notice */}
    </>
  );
}
