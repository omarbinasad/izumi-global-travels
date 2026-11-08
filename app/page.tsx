import Link from 'next/link';
import { preload } from 'react-dom';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from index.html. */

export const metadata: Metadata = {
  title: "Izumi Global Travels — Find the right flight",
  description: "Search and book flights with Izumi Global Travels. Smart search, flexible choices and personal service from booking to boarding.",
};

export default function HomePage() {
  preload("/images/hero%20section.webp", { as: "image", fetchPriority: "high" });

  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* ====================================================================
          Hero + flight search
          ==================================================================== */}
        <section className="pt-4" aria-labelledby="hero-title">
          {/* max-w-none: the container supplies only the responsive side gutter.
            The band fills the rest of the viewport at any size — no cap. */}
          <div className="page-container max-w-none">
            <div className="hero-panel">
              {/* The page container: the hero copy lines up with every other
                section, while the photograph behind it runs wider. */}
              <div className="page-container flex flex-1 flex-col justify-end gap-24 md:gap-15">
                <div className="max-w-[42rem]">
                  <h1 className="hero-title animate-rise-in m-0 text-hero md:text-5xl lg:text-6xl font-bold text-brand-900" id="hero-title">
                    <span className="hero-title__line">
                      Find the right flight.
                    </span>
                    <span className="hero-title__accent">
                      Travel your way.
                    </span>
                  </h1>
                  {/* The cue and the standfirst share a row: two short stacked
                    blocks left the hero copy taller than it needed to be. */}
                  <div className="animate-rise-in [animation-delay:90ms] mt-3 md:mt-4 flex items-center gap-4">
                    {/* A real link, not decoration: it jumps to the next section. */}
                    <a className="scroll-hint" href="#explore">
                      {' '}
                      <span className="flex flex-col items-center gap-[3px]" aria-hidden="true">
                        {' '}
                        <span className="scroll-hint__dot" />
                        {' '}
                        <span className="scroll-hint__dot" />
                        {' '}
                        <span className="scroll-hint__dot" />
                        {' '}
                      </span>
                      {' '}
                      <svg className="icon--solid scroll-hint__plane" aria-hidden="true">
                        <use href="#i-plane" />
                      </svg>
                      {' '}
                      <svg className="icon scroll-hint__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                      {' '}
                      <span className="sr-only">
                        Scroll down to explore
                      </span>
                      {' '}
                    </a>
                    <p className="m-0 max-w-[30rem] text-sm md:text-base text-brand-800">
                      Smart search, flexible choices and personal service
                      <br />
                      {" from booking to boarding."}
                    </p>
                  </div>
                </div>
                {/* BLADE BOUNDARY: flight-search component -> <x-flight-search.search-form /> */}
                <div className="flex flex-col gap-3" data-flight-search="">
                  {/* The product tabs are a detached pill bar above the panel. */}
                  <div className="search-tabs" role="tablist" aria-label="What are you booking?">
                    <button className="search-tab" type="button" role="tab" id="tab-flights" aria-controls="panel-flights" aria-selected="true" data-search-tab="">
                      {' '}
                      <svg className="icon size-4 flex-none" aria-hidden="true">
                        <use href="#i-plane" />
                      </svg>
                      {" Flights "}
                    </button>
                    {' '}
                    <button className="search-tab" type="button" role="tab" id="tab-hotels" aria-controls="panel-hotels" aria-selected="false" data-search-tab="">
                      {' '}
                      <svg className="icon size-4 flex-none" aria-hidden="true">
                        <use href="#i-home" />
                      </svg>
                      {" Hotels "}
                    </button>
                    {' '}
                    <button className="search-tab" type="button" role="tab" id="tab-esim" aria-controls="panel-esim" aria-selected="false" data-search-tab="">
                      {' '}
                      <svg className="icon size-4 flex-none" aria-hidden="true">
                        <use href="#i-ticket" />
                      </svg>
                      {" eSIM "}
                    </button>
                  </div>
                  <div className="search-panel">
                    {/* Flights ------------------------------------------------- */}
                    <div id="panel-flights" role="tabpanel" aria-labelledby="tab-flights">
                      <form className="flex flex-col gap-2 lg:gap-3" action="/flights/search-results" method="get">
                        <div className="search-head">
                          {/* Radios, not buttons: the trip type still submits with
                            JavaScript off. The underline is a styled ::after. */}
                          <div className="trip-toggle" role="radiogroup" aria-label="Trip type">
                            <label className="trip-toggle__option">
                              {' '}
                              <input type="radio" name="trip_type" value="round_trip" defaultChecked data-trip-type="" />
                              {' '}
                              <span className="trip-toggle__label">
                                Round trip
                              </span>
                              {' '}
                            </label>
                            {' '}
                            <label className="trip-toggle__option">
                              {' '}
                              <input type="radio" name="trip_type" value="one_way" data-trip-type="" />
                              {' '}
                              <span className="trip-toggle__label">
                                One way
                              </span>
                              {' '}
                            </label>
                          </div>
                          <div className="search-options flex flex-wrap items-center gap-4">
                            <label className="search-option">
                              {' '}
                              <input type="checkbox" name="direct_only" value="1" />
                              {" Direct flights "}
                            </label>
                            {' '}
                            <Link className="search-option-link" href="/flights/flight-status">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-clock" />
                              </svg>
                              {" Flight status "}
                            </Link>
                          </div>
                        </div>
                        {/* Origin, flight path with the swap control, destination */}
                        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2 items-stretch lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)]">
                          <div className="search-field relative" data-airport-field="">
                            <label className="search-field__label" htmlFor="origin">
                              From
                            </label>
                            {' '}
                            <span className="search-field__line">
                              {' '}
                              <input className="search-field__control search-field__control--lg" type="text" id="origin" name="origin_display" defaultValue="" placeholder="Select" autoComplete="off" aria-expanded="false" aria-controls="origin-options" data-airport="origin" />
                              {' '}
                              <span className="search-field__code" data-airport-code="" />
                              {' '}
                            </span>
                            {' '}
                            <span className="search-field__sub" data-airport-sub="">
                              Search by city or code
                            </span>
                            {' '}
                            <input type="hidden" name="origin_iata" value="" data-airport-value="" />
                            {/* Placeholder set. The backend renders the real list; each option only
                              has to carry its IATA code, city and airport name. */}
                            <ul className="airport-list" id="origin-options" aria-label="Popular airports" data-airport-list="" hidden>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="DAC" data-city="Dhaka" data-name="Hazrat Shahjalal International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    DAC
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Dhaka
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Hazrat Shahjalal International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="NRT" data-city="Tokyo" data-name="Narita International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    NRT
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Tokyo
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Narita International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="HND" data-city="Tokyo" data-name="Haneda International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    HND
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Tokyo
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Haneda International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="DXB" data-city="Dubai" data-name="Dubai International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    DXB
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Dubai
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Dubai International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="SIN" data-city="Singapore" data-name="Changi International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    SIN
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Singapore
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Changi International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li className="airport-list__empty" role="status" data-airport-empty="" hidden>
                                No airports match that search.
                              </li>
                            </ul>
                          </div>
                          <div className="flex items-center justify-center text-glass-accent lg:flex-col lg:gap-[2px]">
                            <svg className="search-route__arc" viewBox="0 0 96 34" aria-hidden="true">
                              <path d="M6 26Q48 -2 90 26" fill="none" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 5" strokeLinecap="round" />
                              <circle cx="6" cy="26" r="2.4" fill="currentColor" />
                              <circle cx="90" cy="26" r="2.4" fill="currentColor" />
                            </svg>
                            {' '}
                            <button className="search-swap" type="button" data-swap-airports="" aria-label="Swap origin and destination">
                              {' '}
                              <svg className="icon size-4" aria-hidden="true">
                                <use href="#i-swap" />
                              </svg>
                              {' '}
                            </button>
                          </div>
                          <div className="search-field relative" data-airport-field="">
                            <label className="search-field__label" htmlFor="destination">
                              To
                            </label>
                            {' '}
                            <span className="search-field__line">
                              {' '}
                              <input className="search-field__control search-field__control--lg" type="text" id="destination" name="destination_display" defaultValue="" placeholder="Select" autoComplete="off" aria-expanded="false" aria-controls="destination-options" data-airport="destination" />
                              {' '}
                              <span className="search-field__code" data-airport-code="" />
                              {' '}
                            </span>
                            {' '}
                            <span className="search-field__sub" data-airport-sub="">
                              Search by city or code
                            </span>
                            {' '}
                            <input type="hidden" name="destination_iata" value="" data-airport-value="" />
                            {/* Placeholder set. The backend renders the real list; each option only
                              has to carry its IATA code, city and airport name. */}
                            <ul className="airport-list" id="destination-options" aria-label="Popular airports" data-airport-list="" hidden>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="DAC" data-city="Dhaka" data-name="Hazrat Shahjalal International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    DAC
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Dhaka
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Hazrat Shahjalal International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="NRT" data-city="Tokyo" data-name="Narita International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    NRT
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Tokyo
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Narita International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="HND" data-city="Tokyo" data-name="Haneda International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    HND
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Tokyo
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Haneda International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="DXB" data-city="Dubai" data-name="Dubai International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    DXB
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Dubai
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Dubai International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li>
                                <button className="airport-option" type="button" data-airport-option="" aria-current="false" data-iata="SIN" data-city="Singapore" data-name="Changi International Airport">
                                  {' '}
                                  <span className="airport-option__code">
                                    SIN
                                  </span>
                                  {' '}
                                  <span className="airport-option__text">
                                    {' '}
                                    <span className="airport-option__city">
                                      Singapore
                                    </span>
                                    {' '}
                                    <span className="airport-option__name">
                                      Changi International Airport
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </button>
                              </li>
                              <li className="airport-list__empty" role="status" data-airport-empty="" hidden>
                                No airports match that search.
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Depart, return, travellers, submit */}
                        <div className="relative grid grid-cols-2 gap-2 items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.25fr)_auto]" data-date-range="">
                          <div className="search-field">
                            <label className="search-field__label" htmlFor="departure-date">
                              Depart
                            </label>
                            {' '}
                            <span className="search-field__value">
                              {' '}
                              <input className="search-field__control search-field__control--lg" type="date" id="departure-date" name="departure_date" defaultValue="2026-09-18" required data-date-input="depart" />
                              {' '}
                              <span className="search-field__display" data-date-display="" aria-hidden="true">
                                18 Sep
                              </span>
                              {' '}
                            </span>
                          </div>
                          <div className="search-field" data-return-field="">
                            <label className="search-field__label" htmlFor="return-date">
                              Return
                            </label>
                            {' '}
                            <span className="search-field__value">
                              {' '}
                              <input className="search-field__control search-field__control--lg" type="date" id="return-date" name="return_date" defaultValue="2026-09-27" data-date-input="return" />
                              {' '}
                              <span className="search-field__display" data-date-display="" aria-hidden="true">
                                27 Sep
                              </span>
                              {' '}
                            </span>
                          </div>
                          {/* <details> so the panel opens without JavaScript, and the
                            counts are real number inputs for the same reason. */}
                          <details className="search-field relative max-lg:col-span-full" data-pax="">
                            <summary className="pax__summary">
                              <span className="search-field__label">
                                Travellers
                              </span>
                              {' '}
                              <span className="search-field__control--lg" data-pax-summary="">
                                1 adult
                              </span>
                              {' '}
                              <span className="search-field__sub" data-pax-cabin="">
                                Economy
                              </span>
                            </summary>
                            <div className="pax__panel" data-pax-panel="">
                              <div className="pax__row">
                                <span className="pax__name">
                                  {" Adults "}
                                  <span className="pax__hint">
                                    12 and over
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="stepper" data-stepper="">
                                  {' '}
                                  <button className="stepper__button" type="button" data-stepper-down="" aria-label="One fewer adult">
                                    {' '}
                                    <svg className="icon size-4" aria-hidden="true">
                                      <use href="#i-minus" />
                                    </svg>
                                    {' '}
                                  </button>
                                  {' '}
                                  <input className="stepper__value" type="number" id="pax-adults" name="adults" defaultValue="1" min="1" max="9" aria-label="Adults" data-pax-count="" />
                                  {' '}
                                  <button className="stepper__button" type="button" data-stepper-up="" aria-label="One more adult">
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
                                  {" Children "}
                                  <span className="pax__hint">
                                    2 to 11
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="stepper" data-stepper="">
                                  {' '}
                                  <button className="stepper__button" type="button" data-stepper-down="" aria-label="One fewer child">
                                    {' '}
                                    <svg className="icon size-4" aria-hidden="true">
                                      <use href="#i-minus" />
                                    </svg>
                                    {' '}
                                  </button>
                                  {' '}
                                  <input className="stepper__value" type="number" id="pax-children" name="children" defaultValue="0" min="0" max="8" aria-label="Children" data-pax-count="" />
                                  {' '}
                                  <button className="stepper__button" type="button" data-stepper-up="" aria-label="One more child">
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
                                  {" Infants "}
                                  <span className="pax__hint">
                                    Under 2, on a lap
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="stepper" data-stepper="">
                                  {' '}
                                  <button className="stepper__button" type="button" data-stepper-down="" aria-label="One fewer infant">
                                    {' '}
                                    <svg className="icon size-4" aria-hidden="true">
                                      <use href="#i-minus" />
                                    </svg>
                                    {' '}
                                  </button>
                                  {' '}
                                  <input className="stepper__value" type="number" id="pax-infants" name="infants" defaultValue="0" min="0" max="4" aria-label="Infants" data-pax-count="" />
                                  {' '}
                                  <button className="stepper__button" type="button" data-stepper-up="" aria-label="One more infant">
                                    {' '}
                                    <svg className="icon size-4" aria-hidden="true">
                                      <use href="#i-plus" />
                                    </svg>
                                    {' '}
                                  </button>
                                  {' '}
                                </span>
                              </div>
                              <fieldset className="pax__cabins">
                                <legend className="sr-only">
                                  Cabin class
                                </legend>
                                <label className="pax__cabin">
                                  {' '}
                                  <input type="radio" name="cabin_class" value="ECONOMY" defaultChecked data-pax-cabin-input="" />
                                  {' '}
                                  <span>
                                    Economy
                                  </span>
                                  {' '}
                                </label>
                                {' '}
                                <label className="pax__cabin">
                                  {' '}
                                  <input type="radio" name="cabin_class" value="PREMIUM_ECONOMY" data-pax-cabin-input="" />
                                  {' '}
                                  <span>
                                    Premium
                                  </span>
                                  {' '}
                                </label>
                                {' '}
                                <label className="pax__cabin">
                                  {' '}
                                  <input type="radio" name="cabin_class" value="BUSINESS" data-pax-cabin-input="" />
                                  {' '}
                                  <span>
                                    Business
                                  </span>
                                  {' '}
                                </label>
                                {' '}
                                <label className="pax__cabin">
                                  {' '}
                                  <input type="radio" name="cabin_class" value="FIRST" data-pax-cabin-input="" />
                                  {' '}
                                  <span>
                                    First
                                  </span>
                                  {' '}
                                </label>
                              </fieldset>
                            </div>
                          </details>
                          <button className="btn btn--primary min-h-(--search-field-height) px-6 max-lg:col-span-full" type="submit">
                            {" Search flights "}
                            <svg className="icon size-4" aria-hidden="true">
                              <use href="#i-arrow-right" />
                            </svg>
                            {' '}
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* Hotels -------------------------------------------------- */}
                    {/* The field names are the ones the hotels route reads, so Blade
                      swaps this action for that route and nothing else moves. */}
                    <div id="panel-hotels" role="tabpanel" aria-labelledby="tab-hotels" hidden>
                      <form className="flex flex-col gap-2 lg:gap-3" action="/hotels/search-results" method="get">
                        <p className="m-0 px-1 pt-2 pb-3 text-sm text-glass-muted">
                          Tell us where and when, and we come back with rooms and prices.
                        </p>
                        <div className="grid gap-2 items-stretch sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2.2fr)_minmax(0,1.2fr)_auto]">
                          <div className="search-field">
                            <label className="search-field__label" htmlFor="hotel-place">
                              Where to
                            </label>
                            {' '}
                            <input className="search-field__control search-field__control--lg" type="text" id="hotel-place" name="destination" placeholder="City, area or hotel" autoComplete="off" />
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
                    {/* eSIM ---------------------------------------------------- */}
                    <div id="panel-esim" role="tabpanel" aria-labelledby="tab-esim" hidden>
                      <div className="flex flex-col gap-2 lg:gap-3">
                        <p className="m-0 px-1 pt-2 pb-3 text-sm text-glass-muted">
                          {"Travel eSIM plans are coming soon. "}
                          <Link href="/support/help-centre">
                            Ask our team
                          </Link>
                          {" about data for your destination."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END BLADE BOUNDARY: flight-search component */}
              </div>
            </div>
          </div>
        </section>
        {/* ====================================================================
          Trusted airlines
          ==================================================================== */}
        <section className="page-container pt-5 pb-8" id="explore" aria-labelledby="airlines-title">
          <h2 className="sr-only" id="airlines-title">
            Trusted airlines
          </h2>
          {/* @brand-pending: the airline marks are the carriers' own trademarks.
            Confirm display rights with each carrier before launch. */}
          {/* BLADE BOUNDARY: airline marquee -> <x-ui.logo-marquee :logos="$airlines" /> */}
          <div className="logo-marquee">
            <div className="logo-marquee__track">
              <ul className="logo-marquee__group" role="list">
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/biman%20bangladesh.png" alt="Biman Bangladesh Airlines" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/etihad.png" alt="Etihad Airways" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/qatar.png" alt="Qatar Airways" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/singapore.png" alt="Singapore Airlines" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/malaysia.png" alt="Malaysia Airlines" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/turkish.png" alt="Turkish Airlines" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/swiss.png" alt="SWISS" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/us-bangla.png" alt="US-Bangla Airlines" width="400" height="150" decoding="async" />
                </li>
              </ul>
              {/* The second copy is what makes the loop seamless. It carries no
                information, so it is hidden from assistive technology. */}
              <ul className="logo-marquee__group logo-marquee__group--clone" aria-hidden="true">
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/biman%20bangladesh.png" alt="" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/etihad.png" alt="" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/qatar.png" alt="" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/singapore.png" alt="" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/malaysia.png" alt="" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/turkish.png" alt="" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/swiss.png" alt="" width="400" height="150" decoding="async" />
                </li>
                <li className="logo-marquee__item">
                  <img className="logo-marquee__logo" src="/images/us-bangla.png" alt="" width="400" height="150" decoding="async" />
                </li>
              </ul>
            </div>
          </div>
          {/* END BLADE BOUNDARY: airline marquee */}
        </section>
        {/* ====================================================================
          Personalise — bento grid
          ==================================================================== */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="preferences-title">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-5" data-reveal="">
            <h2 className="m-0 text-xl font-semibold text-fg-heading" id="preferences-title">
              Personalize every part of your journey
            </h2>
            <p className="w-full m-0 text-sm text-fg-muted">
              Choose the details that make your flight more comfortable.
            </p>
          </div>
          <div className="grid gap-4 mid:grid-cols-2 mid:grid-rows-2" data-reveal-group="">
            <article className="preference-card" data-reveal="zoom">
              <img className="preference-card__media" src="/images/halal%20meal.png" alt="A tray of halal meal dishes served on board" width="1774" height="887" loading="lazy" decoding="async" />
              {' '}
              <img className="preference-card__stamp" src="/images/halallogo.png" alt="Halal certified" width="1200" height="1200" loading="lazy" decoding="async" />
              {' '}
              <Link className="absolute inset-0 z-2 rounded-lg" href="/services/halal-meal" aria-labelledby="pref-halal" />
              <div className="preference-card__body">
                <div>
                  <h3 className="preference-card__title" id="pref-halal">
                    Halal Meal
                  </h3>
                  <p className="preference-card__text">
                    Request a halal meal before your flight.
                  </p>
                </div>
              </div>
            </article>
            <article className="preference-card mid:col-start-2 mid:row-span-2" data-reveal="zoom">
              <img className="preference-card__media preference-card__media--window" src="/images/window.webp" alt="Clouds and an aircraft wing seen through a cabin window" width="1448" height="1086" loading="lazy" decoding="async" />
              {' '}
              <span className="preference-card__tag">
                Your preferred view
              </span>
              {' '}
              <Link className="absolute inset-0 z-2 rounded-lg" href="/services/window-seat" aria-labelledby="pref-window" />
              <div className="preference-card__body">
                <div>
                  <h3 className="preference-card__title" id="pref-window">
                    Window Seat
                  </h3>
                  <p className="preference-card__text">
                    Choose your preferred window seat.
                  </p>
                </div>
              </div>
            </article>
            <article className="preference-card" data-reveal="zoom">
              <img className="preference-card__media" src="/images/meet-geet.png" alt="An airport host welcoming a traveller at the terminal" width="2294" height="1090" loading="lazy" decoding="async" />
              {' '}
              <span className="preference-card__badge">
                {' '}
                <svg className="icon" aria-hidden="true">
                  <use href="#i-user" />
                </svg>
                {' '}
              </span>
              {' '}
              <Link className="absolute inset-0 z-2 rounded-lg" href="/services/meet-and-greet" aria-labelledby="pref-meet" />
              <div className="preference-card__body">
                <div>
                  <h3 className="preference-card__title" id="pref-meet">
                    Meet &amp; Greet
                  </h3>
                  <p className="preference-card__text">
                    Friendly help from arrival to check-in.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* ====================================================================
          Most booked routes
          Prices and availability shown here are illustrative. The backend
          supplies and re-verifies every value before booking.
          ==================================================================== */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="routes-title">
          <div className="rounded-lg bg-surface-tint px-5 py-6 lg:p-8">
            <h2 className="m-0 mb-5 text-xl font-semibold text-primary" id="routes-title" data-reveal="">
              Most Booked Routes
            </h2>
            {/* Two up from the mid breakpoint; a swipe rail below it. */}
            <div className="route-rail grid gap-4 mid:grid-cols-2" data-reveal-group="">
              <article className="route-card" data-reveal="" data-offer-id="off_dac_nrt_bg">
                <div className="route-card__main">
                  <p className="route-card__airline">
                    <img className="route-card__logo" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                    {" Biman Bangladesh Airlines"}
                  </p>
                  <div className="route-card__route">
                    <span className="route-card__endpoint">
                      {' '}
                      <span className="route-card__iata">
                        DAC
                      </span>
                      {' '}
                      <span className="route-card__city">
                        Dhaka
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="route-card__path">
                      {' '}
                      <span className="route-card__duration">
                        7h 10m
                      </span>
                      {' '}
                      <span className="route-card__line">
                        <svg className="icon--solid" aria-hidden="true">
                          <use href="#i-plane" />
                        </svg>
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="route-card__endpoint route-card__endpoint--arrive">
                      {' '}
                      <span className="route-card__iata">
                        NRT
                      </span>
                      {' '}
                      <span className="route-card__city">
                        Tokyo
                      </span>
                      {' '}
                    </span>
                  </div>
                  <p className="route-card__meta">
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      18 Sep – 27 Sep
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      08:20 – 18:00
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-plane" />
                      </svg>
                      Direct
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      Economy
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      23 kg
                    </span>
                  </p>
                </div>
                <div className="route-card__aside">
                  <span className="route-card__from">
                    From
                  </span>
                  {' '}
                  <span className="route-card__price">
                    BDT 68,450
                  </span>
                  {' '}
                  <Link className="btn btn--primary btn--sm" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
              <article className="route-card" data-reveal="" data-offer-id="off_dac_bkk_vz">
                <div className="route-card__main">
                  <p className="route-card__airline">
                    <img className="route-card__logo" src="/images/VZ.avif" alt="" width="120" height="120" decoding="async" />
                    {" Thai Vietjet Air"}
                  </p>
                  <div className="route-card__route">
                    <span className="route-card__endpoint">
                      {' '}
                      <span className="route-card__iata">
                        DAC
                      </span>
                      {' '}
                      <span className="route-card__city">
                        Dhaka
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="route-card__path">
                      {' '}
                      <span className="route-card__duration">
                        3h 50m
                      </span>
                      {' '}
                      <span className="route-card__line">
                        <svg className="icon--solid" aria-hidden="true">
                          <use href="#i-plane" />
                        </svg>
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="route-card__endpoint route-card__endpoint--arrive">
                      {' '}
                      <span className="route-card__iata">
                        BKK
                      </span>
                      {' '}
                      <span className="route-card__city">
                        Bangkok
                      </span>
                      {' '}
                    </span>
                  </div>
                  <p className="route-card__meta">
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      18 Sep – 27 Sep
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      09:15 – 14:20
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-plane" />
                      </svg>
                      Direct
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      Economy
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      23 kg
                    </span>
                  </p>
                </div>
                <div className="route-card__aside">
                  <span className="route-card__from">
                    From
                  </span>
                  {' '}
                  <span className="route-card__price">
                    BDT 24,990
                  </span>
                  {' '}
                  <Link className="btn btn--primary btn--sm" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
              <article className="route-card" data-reveal="" data-offer-id="off_dac_cmb_ul">
                <div className="route-card__main">
                  <p className="route-card__airline">
                    <img className="route-card__logo" src="/images/UL.avif" alt="" width="120" height="120" decoding="async" />
                    {" SriLankan Airlines"}
                  </p>
                  <div className="route-card__route">
                    <span className="route-card__endpoint">
                      {' '}
                      <span className="route-card__iata">
                        DAC
                      </span>
                      {' '}
                      <span className="route-card__city">
                        Dhaka
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="route-card__path">
                      {' '}
                      <span className="route-card__duration">
                        4h 30m
                      </span>
                      {' '}
                      <span className="route-card__line">
                        <svg className="icon--solid" aria-hidden="true">
                          <use href="#i-plane" />
                        </svg>
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="route-card__endpoint route-card__endpoint--arrive">
                      {' '}
                      <span className="route-card__iata">
                        CMB
                      </span>
                      {' '}
                      <span className="route-card__city">
                        Colombo
                      </span>
                      {' '}
                    </span>
                  </div>
                  <p className="route-card__meta">
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      19 Sep – 28 Sep
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      05:30 – 14:00
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-plane" />
                      </svg>
                      Direct
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      Economy
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      23 kg
                    </span>
                  </p>
                </div>
                <div className="route-card__aside">
                  <span className="route-card__from">
                    From
                  </span>
                  {' '}
                  <span className="route-card__price">
                    BDT 26,450
                  </span>
                  {' '}
                  <Link className="btn btn--primary btn--sm" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
              <article className="route-card" data-reveal="" data-offer-id="off_dac_can_cz">
                <div className="route-card__main">
                  <p className="route-card__airline">
                    <img className="route-card__logo" src="/images/CZ.avif" alt="" width="120" height="120" decoding="async" />
                    {" China Southern"}
                  </p>
                  <div className="route-card__route">
                    <span className="route-card__endpoint">
                      {' '}
                      <span className="route-card__iata">
                        DAC
                      </span>
                      {' '}
                      <span className="route-card__city">
                        Dhaka
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="route-card__path">
                      {' '}
                      <span className="route-card__duration">
                        4h 00m
                      </span>
                      {' '}
                      <span className="route-card__line">
                        <svg className="icon--solid" aria-hidden="true">
                          <use href="#i-plane" />
                        </svg>
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="route-card__endpoint route-card__endpoint--arrive">
                      {' '}
                      <span className="route-card__iata">
                        CAN
                      </span>
                      {' '}
                      <span className="route-card__city">
                        Guangzhou
                      </span>
                      {' '}
                    </span>
                  </div>
                  <p className="route-card__meta">
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      21 Sep – 30 Sep
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      06:40 – 13:10
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-plane" />
                      </svg>
                      Direct
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      Economy
                    </span>
                    {' '}
                    <span className="route-card__meta-item">
                      <svg className="icon" aria-hidden="true">
                        <use href="#i-bag" />
                      </svg>
                      23 kg
                    </span>
                  </p>
                </div>
                <div className="route-card__aside">
                  <span className="route-card__from">
                    From
                  </span>
                  {' '}
                  <span className="route-card__price">
                    BDT 30,450
                  </span>
                  {' '}
                  <Link className="btn btn--primary btn--sm" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ====================================================================
          Popular hotels
          Rates are per night and illustrative. The team confirms the room and
          the price with the hotel before anything is held.
          ==================================================================== */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="hotels-title" data-rail-scope="">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-5" data-reveal="">
            <h2 className="m-0 text-xl font-semibold text-primary" id="hotels-title">
              Popular Hotels
            </h2>
            <div className="flex items-center gap-4">
              <Link className="section-link" href="/hotels/search-results">
                {" See all hotels "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </Link>
              {/* Shipped hidden: the track already scrolls by touch, wheel and
                keyboard, so the arrows only appear once there is a script to
                work them. */}
              <div className="rail-nav" data-rail-nav="" hidden>
                <button className="rail-nav__button" type="button" data-rail-prev="" aria-label="Previous hotels">
                  {' '}
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-arrow-left" />
                  </svg>
                  {' '}
                </button>
                {' '}
                <button className="rail-nav__button" type="button" data-rail-next="" aria-label="Next hotels">
                  {' '}
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                  {' '}
                </button>
              </div>
            </div>
          </div>
          {/* BLADE BOUNDARY: hotel list -> <x-hotels.card-list :hotels="$hotels" /> */}
          {/* @brand-pending: the photographs stand in for hotel photography, so
            they carry no alt text — the name and the place below them are what
            say which hotel this is. */}
          <div className="card-rail" role="group" aria-labelledby="hotels-title" tabIndex={0} data-rail="" data-reveal-group="">
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
          </div>
          {/* END BLADE BOUNDARY: hotel list */}
        </section>
        {/* ====================================================================
          Booking promise
          ==================================================================== */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="promise-title">
          <div className="promise-panel" data-reveal="">
            <h2 className="m-0 mb-5 text-2xl lg:text-3xl font-semibold text-on-panel" id="promise-title">
              Booking should feel simple.
            </h2>
            <div className="grid gap-3 max-w-[620px] sm:grid-cols-2" data-reveal-group="">
              <article className="feature-card" data-reveal="">
                <span className="feature-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-target" />
                  </svg>
                </span>
                <div>
                  <h3 className="feature-card__title">
                    Best Price Guarantee
                  </h3>
                  <p className="feature-card__text">
                    We match the lowest fares so you always get the best deal.
                  </p>
                </div>
              </article>
              <article className="feature-card" data-reveal="">
                <span className="feature-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                </span>
                <div>
                  <h3 className="feature-card__title">
                    Secure &amp; Trusted
                  </h3>
                  <p className="feature-card__text">
                    Your data and payments are protected with top security.
                  </p>
                </div>
              </article>
              <article className="feature-card" data-reveal="">
                <span className="feature-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-refresh" />
                  </svg>
                </span>
                <div>
                  <h3 className="feature-card__title">
                    Flexible Booking
                  </h3>
                  <p className="feature-card__text">
                    Change or cancel with ease on most flights.
                  </p>
                </div>
              </article>
              <article className="feature-card" data-reveal="">
                <span className="feature-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-headset" />
                  </svg>
                </span>
                <div>
                  <h3 className="feature-card__title">
                    Dedicated Customer Support
                  </h3>
                  <p className="feature-card__text">
                    Our team is ready to assist during business hours.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ====================================================================
          How it works
          ==================================================================== */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="how-title">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-5" data-reveal="">
            <h2 className="m-0 text-xl font-semibold text-fg-heading" id="how-title">
              How it works
            </h2>
          </div>
          <ol className="grid gap-4 items-stretch mid:grid-cols-[1fr_auto_1fr_auto_1fr] mid:gap-2" role="list" data-reveal-group="">
            <li className="step-card" data-reveal="">
              <span className="step-card__number" aria-hidden="true">
                1
              </span>
              {' '}
              <span className="flex-auto">
                {' '}
                <span className="step-card__title">
                  Search Flights
                </span>
                {' '}
                <span className="step-card__text">
                  Find the best flights that fit your plans in seconds.
                </span>
                {' '}
              </span>
              {' '}
              <span className="step-card__icon">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-search" />
                </svg>
              </span>
            </li>
            <li className="hidden text-primary mid:grid mid:place-items-center mid:min-w-[72px]" aria-hidden="true" data-reveal="fade">
              <svg className="w-full h-[26px]" viewBox="0 0 100 26" fill="none">
                <path d="M2 20 C 30 20, 40 6, 96 6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M92 2 98 6 92 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
            <li className="step-card" data-reveal="">
              <span className="step-card__number" aria-hidden="true">
                2
              </span>
              {' '}
              <span className="flex-auto">
                {' '}
                <span className="step-card__title">
                  Compare Options
                </span>
                {' '}
                <span className="step-card__text">
                  Compare prices, times and airlines to choose what is best for you.
                </span>
                {' '}
              </span>
              {' '}
              <span className="step-card__icon">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-compare" />
                </svg>
              </span>
            </li>
            <li className="hidden text-primary mid:grid mid:place-items-center mid:min-w-[72px]" aria-hidden="true" data-reveal="fade">
              <svg className="w-full h-[26px]" viewBox="0 0 100 26" fill="none">
                <path d="M2 20 C 30 20, 40 6, 96 6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M92 2 98 6 92 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
            <li className="step-card" data-reveal="">
              <span className="step-card__number" aria-hidden="true">
                3
              </span>
              {' '}
              <span className="flex-auto">
                {' '}
                <span className="step-card__title">
                  Book With Confidence
                </span>
                {' '}
                <span className="step-card__text">
                  Secure your booking and get ready for a great trip.
                </span>
                {' '}
              </span>
              {' '}
              <span className="step-card__icon">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
              </span>
            </li>
          </ol>
        </section>
        {/* ====================================================================
          After booking / app
          ==================================================================== */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="app-title">
          <div className="app-panel" data-reveal="">
            <ul className="grid gap-3 m-0 p-0 list-none" role="list" data-reveal-group="">
              <li className="feature-card" data-reveal="">
                <span className="feature-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-bell" />
                  </svg>
                </span>
                <div>
                  <h3 className="feature-card__title">
                    Live flight updates
                  </h3>
                  <p className="feature-card__text">
                    Track your flights, gate changes and alerts.
                  </p>
                </div>
              </li>
              <li className="feature-card" data-reveal="">
                <span className="feature-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-ticket" />
                  </svg>
                </span>
                <div>
                  <h3 className="feature-card__title">
                    Digital boarding pass
                  </h3>
                  <p className="feature-card__text">
                    Access your boarding pass offline, anytime.
                  </p>
                </div>
              </li>
              <li className="feature-card" data-reveal="">
                <span className="feature-card__icon">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-bookmark" />
                  </svg>
                </span>
                <div>
                  <h3 className="feature-card__title">
                    Saved trips
                  </h3>
                  <p className="feature-card__text">
                    All your trips in one place, easy to manage.
                  </p>
                </div>
              </li>
            </ul>
            {/* The phone artwork is part of the panel background image. */}
            <div className="app-panel__phone-space" aria-hidden="true" />
            <div className="flex flex-col justify-center gap-5">
              <h2 className="m-0 text-2xl lg:text-3xl font-semibold text-on-panel" id="app-title">
                Everything you
                <br />
                need after booking.
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="store-badge">
                  {' '}
                  <img className="store-badge__art" src="/images/appstore.png" alt="Download on the App Store" width="957" height="337" loading="lazy" decoding="async" />
                  {' '}
                </span>
                {' '}
                <span className="store-badge">
                  {' '}
                  <img className="store-badge__art" src="/images/playstore.png" alt="Get it on Google Play" width="957" height="334" loading="lazy" decoding="async" />
                  {' '}
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* ====================================================================
          Testimonials
          ==================================================================== */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="testimonials-title" data-rail-scope="">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-5" data-reveal="">
            <h2 className="m-0 text-xl font-semibold text-fg-heading" id="testimonials-title">
              Trusted by travelers
            </h2>
            <div className="rail-nav" data-rail-nav="" hidden>
              <button className="rail-nav__button" type="button" data-rail-prev="" aria-label="Previous reviews">
                {' '}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-left" />
                </svg>
                {' '}
              </button>
              {' '}
              <button className="rail-nav__button" type="button" data-rail-next="" aria-label="Next reviews">
                {' '}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </button>
            </div>
          </div>
          <div className="card-rail" role="group" aria-labelledby="testimonials-title" tabIndex={0} data-rail="" data-reveal-group="">
            <article className="testimonial-card" data-reveal="">
              <span className="testimonial-card__avatar" aria-hidden="true">
                NR
              </span>
              <div>
                <p className="testimonial-card__rating" aria-label="Rated 5 out of 5">
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                </p>
                <blockquote className="testimonial-card__quote">
                  “Great prices and smooth booking. The halal meal option made our trip perfect.”
                </blockquote>
                <p className="text-sm font-semibold text-fg-heading">
                  Nadia Rahman
                </p>
                <p className="text-xs text-fg-muted">
                  Dhaka, Bangladesh
                </p>
              </div>
            </article>
            <article className="testimonial-card" data-reveal="">
              <span className="testimonial-card__avatar" aria-hidden="true">
                AH
              </span>
              <div>
                <p className="testimonial-card__rating" aria-label="Rated 5 out of 5">
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                </p>
                <blockquote className="testimonial-card__quote">
                  “Customer support was super helpful when I needed to change my dates. Highly recommended.”
                </blockquote>
                <p className="text-sm font-semibold text-fg-heading">
                  Arif Hossain
                </p>
                <p className="text-xs text-fg-muted">
                  Chattogram, Bangladesh
                </p>
              </div>
            </article>
            <article className="testimonial-card" data-reveal="">
              <span className="testimonial-card__avatar" aria-hidden="true">
                MI
              </span>
              <div>
                <p className="testimonial-card__rating" aria-label="Rated 5 out of 5">
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                </p>
                <blockquote className="testimonial-card__quote">
                  “Love the app and the real-time updates. Everything I need in one place.”
                </blockquote>
                <p className="text-sm font-semibold text-fg-heading">
                  Mumtaz Islam
                </p>
                <p className="text-xs text-fg-muted">
                  Sylhet, Bangladesh
                </p>
              </div>
            </article>
            <article className="testimonial-card" data-reveal="">
              <span className="testimonial-card__avatar" aria-hidden="true">
                SK
              </span>
              <div>
                <p className="testimonial-card__rating" aria-label="Rated 5 out of 5">
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                </p>
                <blockquote className="testimonial-card__quote">
                  “Booked a multi-city trip in minutes. The fare breakdown was clear before I paid.”
                </blockquote>
                <p className="text-sm font-semibold text-fg-heading">
                  Sabbir Khan
                </p>
                <p className="text-xs text-fg-muted">
                  Khulna, Bangladesh
                </p>
              </div>
            </article>
            <article className="testimonial-card" data-reveal="">
              <span className="testimonial-card__avatar" aria-hidden="true">
                TN
              </span>
              <div>
                <p className="testimonial-card__rating" aria-label="Rated 5 out of 5">
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                </p>
                <blockquote className="testimonial-card__quote">
                  “The meet and greet at the airport was worth every taka. Made travelling with children easy.”
                </blockquote>
                <p className="text-sm font-semibold text-fg-heading">
                  Tahmina Noor
                </p>
                <p className="text-xs text-fg-muted">
                  Dhaka, Bangladesh
                </p>
              </div>
            </article>
            <article className="testimonial-card" data-reveal="">
              <span className="testimonial-card__avatar" aria-hidden="true">
                RA
              </span>
              <div>
                <p className="testimonial-card__rating" aria-label="Rated 5 out of 5">
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                  {' '}
                  <svg className="icon--solid" aria-hidden="true">
                    <use href="#i-star" />
                  </svg>
                </p>
                <blockquote className="testimonial-card__quote">
                  “Changed my return date twice and the fee was exactly what I was quoted. No surprises.”
                </blockquote>
                <p className="text-sm font-semibold text-fg-heading">
                  Rashed Ahmed
                </p>
                <p className="text-xs text-fg-muted">
                  Rajshahi, Bangladesh
                </p>
              </div>
            </article>
          </div>
        </section>
        {/* ====================================================================
          From the journal
          ==================================================================== */}
        {/* BLADE BOUNDARY: journal rail -> <x-blog.rail :posts="$posts" /> */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="journal-title" data-rail-scope="">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-5" data-reveal="">
            <div>
              <h2 className="m-0 text-xl font-semibold text-fg-heading" id="journal-title">
                From the journal
              </h2>
              <p className="mt-1 mb-0 text-sm text-fg-muted">
                Guides and flight tips from the counter.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link className="section-link" href="/blog">
                {" View all articles "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </Link>
              <div className="rail-nav" data-rail-nav="" hidden>
                <button className="rail-nav__button" type="button" data-rail-prev="" aria-label="Previous articles">
                  {' '}
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-arrow-left" />
                  </svg>
                  {' '}
                </button>
                {' '}
                <button className="rail-nav__button" type="button" data-rail-next="" aria-label="Next articles">
                  {' '}
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                  {' '}
                </button>
              </div>
            </div>
          </div>
          <div className="card-rail" role="group" aria-labelledby="journal-title" tabIndex={0} data-rail="" data-reveal-group="">
            <article className="post-card">
              <Link className="post-card__link" href="/blog-post">
                {' '}
                <img className="post-card__media" src="/images/blog1.webp" alt="Tokyo at dusk, with the tower lit and Mount Fuji on the horizon" width="1200" height="750" loading="lazy" decoding="async" />
                {' '}
                <span className="post-card__tag">
                  Travel Tips
                </span>
                {' '}
                <span className="post-card__body">
                  {' '}
                  <span className="post-card__title">
                    How to find the best-value flights to Tokyo
                  </span>
                  {' '}
                  <span className="post-card__text">
                    Smart tips to help you book cheaper flights and get more from your travel budget.
                  </span>
                  {' '}
                  <span className="post-card__meta">
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      {"Jan 28, 2026 "}
                    </span>
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      {"6 min read "}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </span>
                {' '}
              </Link>
            </article>
            <article className="post-card">
              <Link className="post-card__link" href="/blog-post">
                {' '}
                <img className="post-card__media" src="/images/blog2.webp" alt="Travellers walking towards the gates under a departures board" width="1200" height="750" loading="lazy" decoding="async" />
                {' '}
                <span className="post-card__tag">
                  Flight Guides
                </span>
                {' '}
                <span className="post-card__body">
                  {' '}
                  <span className="post-card__title">
                    What to know before choosing a connecting flight
                  </span>
                  {' '}
                  <span className="post-card__text">
                    Make your journey smoother with these essential tips for layovers and transit airports.
                  </span>
                  {' '}
                  <span className="post-card__meta">
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      {"Feb 3, 2026 "}
                    </span>
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      {"5 min read "}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </span>
                {' '}
              </Link>
            </article>
            <article className="post-card">
              <Link className="post-card__link" href="/blog-post">
                {' '}
                <img className="post-card__media" src="/images/blog3.webp" alt="A phone showing a map of Japan, held up in front of a temple gate" width="1200" height="750" loading="lazy" decoding="async" />
                {' '}
                <span className="post-card__tag">
                  eSIM &amp; Connectivity
                </span>
                {' '}
                <span className="post-card__body">
                  {' '}
                  <span className="post-card__title">
                    Stay connected in Japan with an eSIM
                  </span>
                  {' '}
                  <span className="post-card__text">
                    Find out how eSIMs work, what to consider and the best options for travellers in Japan.
                  </span>
                  {' '}
                  <span className="post-card__meta">
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      {"Feb 10, 2026 "}
                    </span>
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      {"4 min read "}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </span>
                {' '}
              </Link>
            </article>
            <article className="post-card">
              <Link className="post-card__link" href="/blog-post">
                {' '}
                <img className="post-card__media" src="/images/blog4.webp" alt="A table of Japanese dishes laid out by a window over Kyoto" width="1200" height="750" loading="lazy" decoding="async" />
                {' '}
                <span className="post-card__tag">
                  Halal Travel
                </span>
                {' '}
                <span className="post-card__body">
                  {' '}
                  <span className="post-card__title">
                    A practical halal travel guide to Japan
                  </span>
                  {' '}
                  <span className="post-card__text">
                    Where to find halal food, prayer facilities and traveller-friendly places across major cities.
                  </span>
                  {' '}
                  <span className="post-card__meta">
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      {"Feb 12, 2026 "}
                    </span>
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      {"6 min read "}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </span>
                {' '}
              </Link>
            </article>
            <article className="post-card">
              <Link className="post-card__link" href="/blog-post">
                {' '}
                <img className="post-card__media" src="/images/blog5.webp" alt="An empty row of cabin seats beside a window above the clouds" width="1200" height="750" loading="lazy" decoding="async" />
                {' '}
                <span className="post-card__tag">
                  Travel Tips
                </span>
                {' '}
                <span className="post-card__body">
                  {' '}
                  <span className="post-card__title">
                    Window, aisle or middle: choosing the right seat
                  </span>
                  {' '}
                  <span className="post-card__text">
                    Discover the pros and cons of each seat type to make your next flight more comfortable.
                  </span>
                  {' '}
                  <span className="post-card__meta">
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      {"Feb 18, 2026 "}
                    </span>
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      {"4 min read "}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </span>
                {' '}
              </Link>
            </article>
            <article className="post-card">
              <Link className="post-card__link" href="/blog-post">
                {' '}
                <img className="post-card__media" src="/images/blog6.webp" alt="Three suitcases standing beside a baggage scale in a terminal" width="1200" height="750" loading="lazy" decoding="async" />
                {' '}
                <span className="post-card__tag">
                  Flight Guides
                </span>
                {' '}
                <span className="post-card__body">
                  {' '}
                  <span className="post-card__title">
                    Understanding baggage allowances before you fly
                  </span>
                  {' '}
                  <span className="post-card__text">
                    A clear guide to cabin and checked baggage rules, so you can avoid extra fees at the airport.
                  </span>
                  {' '}
                  <span className="post-card__meta">
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-calendar" />
                      </svg>
                      {"Feb 20, 2026 "}
                    </span>
                    {' '}
                    <span className="post-card__fact">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-clock" />
                      </svg>
                      {"5 min read "}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </span>
                {' '}
              </Link>
            </article>
          </div>
        </section>
        {/* END BLADE BOUNDARY: journal rail */}
        {/* ====================================================================
          Closing call to action
          ==================================================================== */}
        <section className="page-container py-8 lg:py-10" aria-labelledby="cta-title">
          <div className="cta-panel" data-reveal="zoom">
            <div className="cta-panel__card">
              <p className="cta-panel__eyebrow">
                Your next journey
              </p>
              <h2 className="cta-panel__title" id="cta-title">
                Ready to plan a better flight?
              </h2>
              <p className="cta-panel__text">
                Smart search, flexible options and personal service you can trust.
              </p>
              <a className="btn btn--primary cta-panel__action" href="#main-content">
                {" Search Flights "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </a>
            </div>
          </div>
        </section>
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
