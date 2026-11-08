import Link from 'next/link';
import type { Metadata } from 'next';
import AccountNav from '@/components/account/AccountNav';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/account/bookings.html. */

export const metadata: Metadata = {
  title: "Your bookings — Izumi Global Travels",
  description: "Every booking request you have sent to Izumi Global Travels.",
};

export default function AccountBookingsPage() {
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
            <h1 className="account-title">
              Bookings
            </h1>
            <p className="account-lead">
              Every request you have sent us, and what happened to it.
            </p>
            {/* BLADE BOUNDARY: bookings tabs -> <x-account.bookings-tabs /> */}
            {/* Radios, not buttons: the three lists swap with no JavaScript, and
              the chosen tab is a real form value the backend can render back. */}
            <div className="booking-tabs-wrap">
              <input className="booking-tab__input sr-only" type="radio" name="bookings-tab" id="bookings-tab-flights" defaultChecked />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="bookings-tab" id="bookings-tab-hotels" />
              {' '}
              <input className="booking-tab__input sr-only" type="radio" name="bookings-tab" id="bookings-tab-esim" />
              <div className="booking-tabs">
                <label className="booking-tab" htmlFor="bookings-tab-flights">
                  Flights
                </label>
                {' '}
                <label className="booking-tab" htmlFor="bookings-tab-hotels">
                  Hotels
                </label>
                {' '}
                <label className="booking-tab" htmlFor="bookings-tab-esim">
                  eSIM
                </label>
              </div>
              <div className="booking-panels">
                <div className="booking-panel">
                  {/* BLADE BOUNDARY: booking list -> <x-account.booking-list :bookings="$bookings" /> */}
                  <div className="booking-list">
                    <article className="result-card" data-booking-id="IGT-BR-240918">
                      <div className="result-card__main">
                        {/* The airline heads each leg below, so the card head carries what
                          only a booking has: its reference and where it stands. */}
                        <p className="booking-ticket__head">
                          <span className="booking-ticket__who">
                            {' '}
                            <span className="booking-card__airline">
                              IGT-BR-240918
                            </span>
                            {' '}
                            <span className="booking-card__code">
                              Round trip · requested 5 Sep 2026
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="status-pill status-pill--confirmed">
                            Confirmed
                          </span>
                        </p>
                        <div className="result-card__slice">
                          <div className="result-card__slice-head">
                            <p className="result-card__slice-label">
                              <span className="result-card__slice-kind">
                                Outbound
                              </span>
                            </p>
                            <p className="result-card__slice-carrier">
                              <img className="result-card__slice-logo" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                              {" Biman Bangladesh Airlines"}
                            </p>
                          </div>
                          <div className="result-card__leg">
                            <span className="result-card__time">
                              {' '}
                              <span className="result-card__clock">
                                02:20
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                DAC
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Thu, 18 Sep
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__path">
                              {' '}
                              <span className="result-card__duration">
                                6h 45m · Direct
                              </span>
                              {' '}
                              <span className="journey">
                                {' '}
                                <svg className="icon--solid journey__mark" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                                <span className="journey__track">
                                  {' '}
                                  <span className="journey__leg" style={{ "--segment-minutes": "405" }} role="img" tabIndex={0} aria-label="Flight DAC to NRT, 6h 45m">
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      DAC – NRT
                                      <br />
                                      Flight time 6h 45m
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <svg className="icon--solid journey__mark journey__mark--arrive" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__time result-card__time--arrive">
                              {' '}
                              <span className="result-card__clock">
                                10:05
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                NRT
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Thu, 18 Sep
                              </span>
                              {' '}
                            </span>
                          </div>
                        </div>
                        <div className="result-card__slice">
                          <div className="result-card__slice-head">
                            <p className="result-card__slice-label">
                              <span className="result-card__slice-kind">
                                Inbound
                              </span>
                            </p>
                            <p className="result-card__slice-carrier">
                              <img className="result-card__slice-logo" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                              {" Biman Bangladesh Airlines"}
                            </p>
                          </div>
                          <div className="result-card__leg">
                            <span className="result-card__time">
                              {' '}
                              <span className="result-card__clock">
                                11:00
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                NRT
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Sat, 27 Sep
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__path">
                              {' '}
                              <span className="result-card__duration">
                                7h 15m · Direct
                              </span>
                              {' '}
                              <span className="journey">
                                {' '}
                                <svg className="icon--solid journey__mark" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                                <span className="journey__track">
                                  {' '}
                                  <span className="journey__leg" style={{ "--segment-minutes": "435" }} role="img" tabIndex={0} aria-label="Flight NRT to DAC, 7h 15m">
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      NRT – DAC
                                      <br />
                                      Flight time 7h 15m
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <svg className="icon--solid journey__mark journey__mark--arrive" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__time result-card__time--arrive">
                              {' '}
                              <span className="result-card__clock">
                                15:15
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                DAC
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Sat, 27 Sep
                              </span>
                              {' '}
                            </span>
                          </div>
                        </div>
                        <p className="result-card__meta">
                          <span className="result-card__meta-item">
                            {' '}
                            <svg className="icon" aria-hidden="true">
                              <use href="#i-seat" />
                            </svg>
                            {"Economy · 23 kg baggage "}
                          </span>
                          {' '}
                          <span className="result-card__meta-item">
                            {' '}
                            <svg className="icon" aria-hidden="true">
                              <use href="#i-user" />
                            </svg>
                            {"2 Adults · 1 Child "}
                          </span>
                        </p>
                      </div>
                      <div className="result-card__aside">
                        <span className="result-card__trip">
                          Total paid
                        </span>
                        {' '}
                        <span className="result-card__price">
                          BDT 200,060
                        </span>
                        {' '}
                        <Link className="btn btn--primary md:w-full md:mt-3" href="/account/booking">
                          View details
                        </Link>
                      </div>
                    </article>
                    <article className="result-card" data-booking-id="IGT-BR-240902">
                      <div className="result-card__main">
                        {/* The airline heads each leg below, so the card head carries what
                          only a booking has: its reference and where it stands. */}
                        <p className="booking-ticket__head">
                          <span className="booking-ticket__who">
                            {' '}
                            <span className="booking-card__airline">
                              IGT-BR-240902
                            </span>
                            {' '}
                            <span className="booking-card__code">
                              Round trip · requested 20 Aug 2026
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="status-pill status-pill--pending">
                            Pending review
                          </span>
                        </p>
                        <div className="result-card__slice">
                          <div className="result-card__slice-head">
                            <p className="result-card__slice-label">
                              <span className="result-card__slice-kind">
                                Outbound
                              </span>
                            </p>
                            <p className="result-card__slice-carrier">
                              <img className="result-card__slice-logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
                              {" Cathay Pacific"}
                            </p>
                          </div>
                          <div className="result-card__leg">
                            <span className="result-card__time">
                              {' '}
                              <span className="result-card__clock">
                                02:00
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                DAC
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Fri, 02 Oct
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__path">
                              {' '}
                              <span className="result-card__duration">
                                10h 45m · 1 stop in HKG
                              </span>
                              {' '}
                              <span className="journey">
                                {' '}
                                <svg className="icon--solid journey__mark" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                                <span className="journey__track">
                                  {' '}
                                  <span className="journey__leg" style={{ "--segment-minutes": "165" }} role="img" tabIndex={0} aria-label="Flight DAC to HKG, 2h 45m">
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      DAC – HKG
                                      <br />
                                      Flight time 2h 45m
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span className="journey__layover" style={{ "--segment-minutes": "155" }} role="img" tabIndex={0} aria-label="Layover at Hong Kong International Airport, 2h 35m">
                                    {' '}
                                    <span className="journey__code" aria-hidden="true">
                                      HKG
                                    </span>
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      Layover in HKG
                                      <br />
                                      2h 35m on the ground
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span className="journey__leg" style={{ "--segment-minutes": "325" }} role="img" tabIndex={0} aria-label="Flight HKG to NRT, 5h 25m">
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      HKG – NRT
                                      <br />
                                      Flight time 5h 25m
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <svg className="icon--solid journey__mark journey__mark--arrive" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__time result-card__time--arrive">
                              {' '}
                              <span className="result-card__clock">
                                15:45
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                NRT
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Fri, 02 Oct
                              </span>
                              {' '}
                            </span>
                          </div>
                        </div>
                        <div className="result-card__slice">
                          <div className="result-card__slice-head">
                            <p className="result-card__slice-label">
                              <span className="result-card__slice-kind">
                                Inbound
                              </span>
                            </p>
                            <p className="result-card__slice-carrier">
                              <img className="result-card__slice-logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
                              {" Cathay Pacific"}
                            </p>
                          </div>
                          <div className="result-card__leg">
                            <span className="result-card__time">
                              {' '}
                              <span className="result-card__clock">
                                18:30
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                NRT
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Mon, 12 Oct
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__path">
                              {' '}
                              <span className="result-card__duration">
                                9h 45m · 1 stop in HKG
                              </span>
                              {' '}
                              <span className="journey">
                                {' '}
                                <svg className="icon--solid journey__mark" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                                <span className="journey__track">
                                  {' '}
                                  <span className="journey__leg" style={{ "--segment-minutes": "270" }} role="img" tabIndex={0} aria-label="Flight NRT to HKG, 4h 30m">
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      NRT – HKG
                                      <br />
                                      Flight time 4h 30m
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span className="journey__layover" style={{ "--segment-minutes": "95" }} role="img" tabIndex={0} aria-label="Layover at Hong Kong International Airport, 1h 35m">
                                    {' '}
                                    <span className="journey__code" aria-hidden="true">
                                      HKG
                                    </span>
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      Layover in HKG
                                      <br />
                                      1h 35m on the ground
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span className="journey__leg" style={{ "--segment-minutes": "220" }} role="img" tabIndex={0} aria-label="Flight HKG to DAC, 3h 40m">
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      HKG – DAC
                                      <br />
                                      Flight time 3h 40m
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <svg className="icon--solid journey__mark journey__mark--arrive" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__time result-card__time--arrive">
                              {' '}
                              <span className="result-card__clock">
                                01:15
                                <sup className="result-card__day">
                                  +1
                                  <span className="sr-only">
                                    {" day later"}
                                  </span>
                                </sup>
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                DAC
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Tue, 13 Oct
                              </span>
                              {' '}
                            </span>
                          </div>
                        </div>
                        <p className="result-card__meta">
                          <span className="result-card__meta-item">
                            {' '}
                            <svg className="icon" aria-hidden="true">
                              <use href="#i-seat" />
                            </svg>
                            {"Economy · 23 kg baggage "}
                          </span>
                          {' '}
                          <span className="result-card__meta-item">
                            {' '}
                            <svg className="icon" aria-hidden="true">
                              <use href="#i-user" />
                            </svg>
                            {"1 Adult "}
                          </span>
                        </p>
                      </div>
                      <div className="result-card__aside">
                        <span className="result-card__trip">
                          Estimated total
                        </span>
                        {' '}
                        <span className="result-card__price">
                          BDT 72,900
                        </span>
                        {' '}
                        <Link className="btn btn--primary md:w-full md:mt-3" href="/account/booking">
                          View details
                        </Link>
                      </div>
                    </article>
                    <article className="result-card" data-booking-id="IGT-BR-240715">
                      <div className="result-card__main">
                        {/* The airline heads each leg below, so the card head carries what
                          only a booking has: its reference and where it stands. */}
                        <p className="booking-ticket__head">
                          <span className="booking-ticket__who">
                            {' '}
                            <span className="booking-card__airline">
                              IGT-BR-240715
                            </span>
                            {' '}
                            <span className="booking-card__code">
                              One way · requested 12 Jun 2026
                            </span>
                            {' '}
                          </span>
                          {' '}
                          <span className="status-pill status-pill--cancelled">
                            Cancelled
                          </span>
                        </p>
                        <div className="result-card__slice">
                          <div className="result-card__slice-head">
                            <p className="result-card__slice-label">
                              <span className="result-card__slice-kind">
                                Outbound
                              </span>
                            </p>
                            <p className="result-card__slice-carrier">
                              <img className="result-card__slice-logo" src="/images/UL.avif" alt="" width="120" height="120" decoding="async" />
                              {" SriLankan Airlines"}
                            </p>
                          </div>
                          <div className="result-card__leg">
                            <span className="result-card__time">
                              {' '}
                              <span className="result-card__clock">
                                23:55
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                DAC
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Wed, 15 Jul
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__path">
                              {' '}
                              <span className="result-card__duration">
                                14h 35m · 1 stop in CMB
                              </span>
                              {' '}
                              <span className="journey">
                                {' '}
                                <svg className="icon--solid journey__mark" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                                <span className="journey__track">
                                  {' '}
                                  <span className="journey__leg" style={{ "--segment-minutes": "260" }} role="img" tabIndex={0} aria-label="Flight DAC to CMB, 4h 20m">
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      DAC – CMB
                                      <br />
                                      Flight time 4h 20m
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span className="journey__layover" style={{ "--segment-minutes": "205" }} role="img" tabIndex={0} aria-label="Layover at Bandaranaike International Airport, Colombo, 3h 25m">
                                    {' '}
                                    <span className="journey__code" aria-hidden="true">
                                      CMB
                                    </span>
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      Layover in CMB
                                      <br />
                                      3h 25m on the ground
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span className="journey__leg" style={{ "--segment-minutes": "410" }} role="img" tabIndex={0} aria-label="Flight CMB to NRT, 6h 50m">
                                    {' '}
                                    <span className="journey__tip" aria-hidden="true">
                                      CMB – NRT
                                      <br />
                                      Flight time 6h 50m
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <svg className="icon--solid journey__mark journey__mark--arrive" aria-hidden="true">
                                  <use href="#i-plane" />
                                </svg>
                                {' '}
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="result-card__time result-card__time--arrive">
                              {' '}
                              <span className="result-card__clock">
                                17:30
                                <sup className="result-card__day">
                                  +1
                                  <span className="sr-only">
                                    {" day later"}
                                  </span>
                                </sup>
                              </span>
                              {' '}
                              <span className="result-card__iata">
                                NRT
                              </span>
                              {' '}
                              <span className="result-card__date">
                                Thu, 16 Jul
                              </span>
                              {' '}
                            </span>
                          </div>
                        </div>
                        <p className="result-card__meta">
                          <span className="result-card__meta-item">
                            {' '}
                            <svg className="icon" aria-hidden="true">
                              <use href="#i-seat" />
                            </svg>
                            {"Economy · 25 kg baggage "}
                          </span>
                          {' '}
                          <span className="result-card__meta-item">
                            {' '}
                            <svg className="icon" aria-hidden="true">
                              <use href="#i-user" />
                            </svg>
                            {"1 Adult "}
                          </span>
                        </p>
                      </div>
                      <div className="result-card__aside">
                        <span className="result-card__trip">
                          Refunded
                        </span>
                        {' '}
                        <span className="result-card__price">
                          BDT 45,800
                        </span>
                        {' '}
                        <Link className="btn btn--primary md:w-full md:mt-3" href="/account/booking">
                          View details
                        </Link>
                      </div>
                    </article>
                  </div>
                  {/* END BLADE BOUNDARY: booking list */}
                </div>
                <div className="booking-panel">
                  {/* BLADE BOUNDARY: hotel booking list -> <x-account.hotel-list :bookings="$hotelBookings" /> */}
                  <div className="order-list">
                    <article className="order-card" data-booking-id="IGT-HT-240921">
                      <span className="order-card__media">
                        {' '}
                        <img className="order-card__art" src="/images/hotel1.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                        {' '}
                      </span>
                      <div className="order-card__id">
                        <h3 className="order-card__name">
                          Hotel Gracery Shinjuku
                        </h3>
                        <p className="order-card__where">
                          Shinjuku, Tokyo
                        </p>
                        <p className="order-card__ref">
                          <span className="order-card__ref-label">
                            Booking ID
                          </span>
                          {' '}
                          <span className="order-card__ref-row">
                            {' '}
                            <span className="order-card__ref-code" id="ref-IGT-HT-240921">
                              IGT-HT-240921
                            </span>
                            {' '}
                            <button className="order-card__copy" type="button" data-copy="ref-IGT-HT-240921">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-copy" />
                              </svg>
                              {' '}
                              <span className="sr-only">
                                Copy booking ID IGT-HT-240921
                              </span>
                              {' '}
                            </button>
                            {' '}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__detail">
                        <dl className="order-facts">
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Check-in
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-calendar" />
                              </svg>
                              Thu, 18 Sep
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Check-out
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-calendar" />
                              </svg>
                              Sat, 27 Sep
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Nights
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-clock" />
                              </svg>
                              9 nights
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Total paid
                            </dt>
                            <dd className="order-fact__value order-fact__value--ok">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-tag" />
                              </svg>
                              BDT 186,400
                            </dd>
                          </div>
                        </dl>
                        <p className="order-card__traits">
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-user" />
                            </svg>
                            {"2 Adults · 1 Child "}
                          </span>
                          {' '}
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-home" />
                            </svg>
                            {"Deluxe twin "}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__actions">
                        <span className="status-pill status-pill--confirmed">
                          Confirmed
                        </span>
                      </div>
                      <details className="order-card__more">
                        <summary className="btn btn--primary order-card__more-trigger">
                          {"View details "}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-chevron-down" />
                          </svg>
                        </summary>
                        <div className="order-card__panel">
                          <dl className="order-panel__rows">
                            <div className="order-panel__row">
                              <dt>
                                Address
                              </dt>
                              <dd className="order-panel__text">
                                1-19-1 Kabukicho, Shinjuku, Tokyo 160-8466, Japan
                              </dd>
                            </div>
                            <div className="order-panel__row">
                              <dt>
                                Cancellation
                              </dt>
                              <dd className="order-panel__text">
                                Free until 11 Sep 2026
                              </dd>
                            </div>
                          </dl>
                          <p className="order-panel__note">
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-info" />
                            </svg>
                            {' '}
                            <span>
                              {"Check-in from 15:00, check-out by 11:00. Bring this booking ID and a passport for every guest. "}
                              <Link href="/contact">
                                Ask about this stay
                              </Link>
                              .
                            </span>
                          </p>
                        </div>
                      </details>
                    </article>
                    <article className="order-card" data-booking-id="IGT-HT-240808">
                      <span className="order-card__media">
                        {' '}
                        <img className="order-card__art" src="/images/hotel2.webp" alt="" width="1200" height="900" loading="lazy" decoding="async" />
                        {' '}
                      </span>
                      <div className="order-card__id">
                        <h3 className="order-card__name">
                          Sakura Ryokan Asakusa
                        </h3>
                        <p className="order-card__where">
                          Asakusa, Tokyo
                        </p>
                        <p className="order-card__ref">
                          <span className="order-card__ref-label">
                            Booking ID
                          </span>
                          {' '}
                          <span className="order-card__ref-row">
                            {' '}
                            <span className="order-card__ref-code" id="ref-IGT-HT-240808">
                              IGT-HT-240808
                            </span>
                            {' '}
                            <button className="order-card__copy" type="button" data-copy="ref-IGT-HT-240808">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-copy" />
                              </svg>
                              {' '}
                              <span className="sr-only">
                                Copy booking ID IGT-HT-240808
                              </span>
                              {' '}
                            </button>
                            {' '}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__detail">
                        <dl className="order-facts">
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Check-in
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-calendar" />
                              </svg>
                              Fri, 02 Oct
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Check-out
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-calendar" />
                              </svg>
                              Mon, 05 Oct
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Nights
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-clock" />
                              </svg>
                              3 nights
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Estimated
                            </dt>
                            <dd className="order-fact__value order-fact__value--wait">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-tag" />
                              </svg>
                              BDT 41,200
                            </dd>
                          </div>
                        </dl>
                        <p className="order-card__traits">
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-user" />
                            </svg>
                            {"2 Adults "}
                          </span>
                          {' '}
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-home" />
                            </svg>
                            {"Japanese-style room "}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__actions">
                        <span className="status-pill status-pill--pending">
                          Pending review
                        </span>
                      </div>
                      <details className="order-card__more">
                        <summary className="btn btn--primary order-card__more-trigger">
                          {"View details "}
                          <svg className="icon size-4" aria-hidden="true">
                            <use href="#i-chevron-down" />
                          </svg>
                        </summary>
                        <div className="order-card__panel">
                          <dl className="order-panel__rows">
                            <div className="order-panel__row">
                              <dt>
                                Address
                              </dt>
                              <dd className="order-panel__text">
                                2-6-2 Asakusa, Taito, Tokyo 111-0032, Japan
                              </dd>
                            </div>
                            <div className="order-panel__row">
                              <dt>
                                Cancellation
                              </dt>
                              <dd className="order-panel__text">
                                Set once the room is confirmed
                              </dd>
                            </div>
                          </dl>
                          <p className="order-panel__note">
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-info" />
                            </svg>
                            {' '}
                            <span>
                              {"Nothing is charged yet — we are confirming the room and the rate with the hotel and will come back to you. "}
                              <Link href="/contact">
                                Ask about this stay
                              </Link>
                              .
                            </span>
                          </p>
                        </div>
                      </details>
                    </article>
                  </div>
                  {/* END BLADE BOUNDARY: hotel booking list */}
                </div>
                <div className="booking-panel">
                  {/* BLADE BOUNDARY: esim order list -> <x-account.order-list :orders="$esimOrders" /> */}
                  <div className="order-list">
                    <article className="order-card" data-booking-id="IGT-ES-240918">
                      <span className="order-card__media">
                        {' '}
                        <img className="order-card__art" src="/images/ukesim.webp" alt="" width="800" height="800" loading="lazy" decoding="async" />
                        {' '}
                      </span>
                      <div className="order-card__id">
                        <h3 className="order-card__name">
                          United Kingdom 5G eSIM
                        </h3>
                        <p className="order-card__where">
                          United Kingdom
                        </p>
                        <p className="order-card__ref">
                          <span className="order-card__ref-label">
                            Order ID
                          </span>
                          {' '}
                          <span className="order-card__ref-row">
                            {' '}
                            <span className="order-card__ref-code" id="order-IGT-ES-240918">
                              IGT-ES-240918
                            </span>
                            {' '}
                            <button className="order-card__copy" type="button" data-copy="order-IGT-ES-240918">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-copy" />
                              </svg>
                              {' '}
                              <span className="sr-only">
                                Copy order ID IGT-ES-240918
                              </span>
                              {' '}
                            </button>
                            {' '}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__detail">
                        <dl className="order-facts">
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Purchase Date
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-calendar" />
                              </svg>
                              20 Jun 2026
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Validity
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-clock" />
                              </svg>
                              7 Days
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Data Package
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-signal" />
                              </svg>
                              10 GB
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Activation
                            </dt>
                            <dd className="order-fact__value order-fact__value--ok">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-phone" />
                              </svg>
                              Activated
                            </dd>
                          </div>
                        </dl>
                        <p className="order-card__traits">
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-phone" />
                            </svg>
                            {"1 Device "}
                          </span>
                          {' '}
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-qr" />
                            </svg>
                            {"QR Ready "}
                          </span>
                          {' '}
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-signal" />
                            </svg>
                            {"5G Network "}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__actions">
                        <span className="status-pill status-pill--confirmed">
                          Confirmed
                        </span>
                      </div>
                      {/* A disclosure, not a link: there is no separate page for an
                        eSIM, and what someone opens this for — the profile, or why an
                        order stopped — is short enough to sit in the card. display:
                        contents puts the summary in the actions column and the panel
                        on its own row beneath. */}
                      {/* The profile and everything about it live with the provider,
                        so this leaves the site. Blade puts the order's own URL
                        here; # until there is one. */}
                      <a className="btn btn--primary order-card__action" href="#">
                        {" View details "}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-external" />
                        </svg>
                        {' '}
                      </a>
                    </article>
                    <article className="order-card" data-booking-id="IGT-ES-240925">
                      <span className="order-card__media">
                        {' '}
                        <img className="order-card__art" src="/images/jpesim.webp" alt="" width="800" height="800" loading="lazy" decoding="async" />
                        {' '}
                      </span>
                      <div className="order-card__id">
                        <h3 className="order-card__name">
                          Japan Travel eSIM
                        </h3>
                        <p className="order-card__where">
                          Japan
                        </p>
                        <p className="order-card__ref">
                          <span className="order-card__ref-label">
                            Order ID
                          </span>
                          {' '}
                          <span className="order-card__ref-row">
                            {' '}
                            <span className="order-card__ref-code" id="order-IGT-ES-240925">
                              IGT-ES-240925
                            </span>
                            {' '}
                            <button className="order-card__copy" type="button" data-copy="order-IGT-ES-240925">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-copy" />
                              </svg>
                              {' '}
                              <span className="sr-only">
                                Copy order ID IGT-ES-240925
                              </span>
                              {' '}
                            </button>
                            {' '}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__detail">
                        <dl className="order-facts">
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Purchase Date
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-calendar" />
                              </svg>
                              05 Sep 2026
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Validity
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-clock" />
                              </svg>
                              15 Days
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Data Package
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-signal" />
                              </svg>
                              20 GB
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Activation
                            </dt>
                            <dd className="order-fact__value order-fact__value--wait">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-phone" />
                              </svg>
                              Preparing
                            </dd>
                          </div>
                        </dl>
                        <p className="order-card__traits">
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-phone" />
                            </svg>
                            {"1 Device "}
                          </span>
                          {' '}
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-qr" />
                            </svg>
                            {"QR to follow "}
                          </span>
                          {' '}
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-signal" />
                            </svg>
                            {"5G Network "}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__actions">
                        <span className="status-pill status-pill--pending">
                          Processing
                        </span>
                      </div>
                      {/* A disclosure, not a link: there is no separate page for an
                        eSIM, and what someone opens this for — the profile, or why an
                        order stopped — is short enough to sit in the card. display:
                        contents puts the summary in the actions column and the panel
                        on its own row beneath. */}
                      {/* The profile and everything about it live with the provider,
                        so this leaves the site. Blade puts the order's own URL
                        here; # until there is one. */}
                      <a className="btn btn--primary order-card__action" href="#">
                        {" View details "}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-external" />
                        </svg>
                        {' '}
                      </a>
                    </article>
                    <article className="order-card" data-booking-id="IGT-ES-240712">
                      <span className="order-card__media">
                        {' '}
                        <img className="order-card__art" src="/images/lobalesim.webp" alt="" width="800" height="800" loading="lazy" decoding="async" />
                        {' '}
                      </span>
                      <div className="order-card__id">
                        <h3 className="order-card__name">
                          Global Explorer eSIM
                        </h3>
                        <p className="order-card__where">
                          Global
                        </p>
                        <p className="order-card__ref">
                          <span className="order-card__ref-label">
                            Order ID
                          </span>
                          {' '}
                          <span className="order-card__ref-row">
                            {' '}
                            <span className="order-card__ref-code" id="order-IGT-ES-240712">
                              IGT-ES-240712
                            </span>
                            {' '}
                            <button className="order-card__copy" type="button" data-copy="order-IGT-ES-240712">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-copy" />
                              </svg>
                              {' '}
                              <span className="sr-only">
                                Copy order ID IGT-ES-240712
                              </span>
                              {' '}
                            </button>
                            {' '}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__detail">
                        <dl className="order-facts">
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Purchase Date
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-calendar" />
                              </svg>
                              12 Jul 2026
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Validity
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-clock" />
                              </svg>
                              30 Days
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Data Package
                            </dt>
                            <dd className="order-fact__value">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-signal" />
                              </svg>
                              5 GB
                            </dd>
                          </div>
                          <div className="order-fact">
                            <dt className="order-fact__label">
                              Activation
                            </dt>
                            <dd className="order-fact__value order-fact__value--off">
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-phone" />
                              </svg>
                              Not activated
                            </dd>
                          </div>
                        </dl>
                        <p className="order-card__traits">
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-phone" />
                            </svg>
                            {"1 Device "}
                          </span>
                          {' '}
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-qr" />
                            </svg>
                            {"QR cancelled "}
                          </span>
                          {' '}
                          <span className="order-card__trait">
                            {' '}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-pin" />
                            </svg>
                            {"Multi-country "}
                          </span>
                        </p>
                      </div>
                      <div className="order-card__actions">
                        <span className="status-pill status-pill--cancelled">
                          Cancelled
                        </span>
                      </div>
                      {/* A disclosure, not a link: there is no separate page for an
                        eSIM, and what someone opens this for — the profile, or why an
                        order stopped — is short enough to sit in the card. display:
                        contents puts the summary in the actions column and the panel
                        on its own row beneath. */}
                      {/* The profile and everything about it live with the provider,
                        so this leaves the site. Blade puts the order's own URL
                        here; # until there is one. */}
                      <a className="btn btn--primary order-card__action" href="#">
                        {" View details "}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-external" />
                        </svg>
                        {' '}
                      </a>
                    </article>
                  </div>
                  {/* END BLADE BOUNDARY: esim order list */}
                </div>
              </div>
            </div>
            {/* END BLADE BOUNDARY: bookings tabs */}
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
