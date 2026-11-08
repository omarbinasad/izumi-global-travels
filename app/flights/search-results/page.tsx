import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/flights/search-results.html. */

export const metadata: Metadata = {
  title: "Flights from Dhaka to Tokyo — Izumi Global Travels",
  description: "Flight search results from Dhaka to Tokyo — compare fares, times and baggage across airlines.",
};

export default function FlightsSearchResultsPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* ====================================================================
          Search summary. Everything here is the query the backend received;
          the frontend only redisplays it.
          ==================================================================== */}
        {/* BLADE BOUNDARY: search summary -> <x-flight-search.summary /> */}
        <section className="search-summary" aria-label="Your search">
          <div className="page-container">
            {/* A disclosure, not a form: the bar shows the search that produced
              these results, and opening it reveals the same search form the
              landing page uses, pre-filled and editable. Native details, so it
              opens and submits with no JavaScript. */}
            <details className="summary-edit" id="search-summary" data-summary-edit="">
              <summary className="summary-bar">
                <span className="summary-bar__route">
                  {' '}
                  <span className="summary-bar__field">
                    {' '}
                    <span className="summary-bar__label">
                      From
                    </span>
                    {' '}
                    <span className="summary-bar__value">
                      Dhaka (DAC)
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="summary-bar__rail" aria-hidden="true">
                    {' '}
                    <svg className="icon--solid summary-bar__plane">
                      <use href="#i-plane" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                  <span className="summary-bar__field">
                    {' '}
                    <span className="summary-bar__label">
                      To
                    </span>
                    {' '}
                    <span className="summary-bar__value">
                      Tokyo (NRT)
                    </span>
                    {' '}
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="summary-bar__cell">
                  {' '}
                  <svg className="icon summary-bar__icon" aria-hidden="true">
                    <use href="#i-calendar" />
                  </svg>
                  {' '}
                  <span data-trip-only="round">
                    18 Sep – 27 Sep
                  </span>
                  {' '}
                  <span data-trip-only="one">
                    18 Sep
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="summary-bar__cell">
                  {' '}
                  <svg className="icon summary-bar__icon" aria-hidden="true">
                    <use href="#i-user" />
                  </svg>
                  {" 1 traveller "}
                </span>
                {' '}
                <span className="summary-bar__cell">
                  {' '}
                  <svg className="icon summary-bar__icon" aria-hidden="true">
                    <use href="#i-seat" />
                  </svg>
                  {" Economy "}
                </span>
                {' '}
                {/* A span, not a button: the summary is already the control, and
                  a button inside it would be an interactive descendant. */}
                {' '}
                <span className="btn btn--primary summary-bar__submit">
                  {" Modify search "}
                  <svg className="icon size-4 summary-edit__chevron" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                  {' '}
                </span>
              </summary>
              {/* BLADE BOUNDARY: flight-search component -> <x-flight-search.search-form /> */}
              <div className="summary-edit__panel" data-flight-search="">
                <div className="search-panel">
                  <form className="flex flex-col gap-2 lg:gap-3" action="/flights/search-results" method="get">
                    <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 px-1 pb-2">
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
                      <div className="flex flex-wrap items-center gap-4">
                        <label className="search-option">
                          {' '}
                          <input type="checkbox" name="direct_only" value="1" />
                          {" Direct flights "}
                        </label>
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
                          <input className="search-field__control search-field__control--lg" type="text" id="origin" name="origin_display" defaultValue="Dhaka" autoComplete="off" aria-expanded="false" aria-controls="origin-options" data-airport="origin" />
                          {' '}
                          <span className="search-field__code" data-airport-code="">
                            DAC
                          </span>
                          {' '}
                        </span>
                        {' '}
                        <span className="search-field__sub" data-airport-sub="">
                          Hazrat Shahjalal International Airport
                        </span>
                        {' '}
                        <input type="hidden" name="origin_iata" value="DAC" data-airport-value="" />
                        {/* Placeholder set. The backend renders the real list; each option only
                          has to carry its IATA code, city and airport name. */}
                        <ul className="airport-list" id="origin-options" aria-label="Popular airports" data-airport-list="" hidden>
                          <li>
                            <button className="airport-option" type="button" data-airport-option="" aria-current="true" data-iata="DAC" data-city="Dhaka" data-name="Hazrat Shahjalal International Airport">
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
                          <input className="search-field__control search-field__control--lg" type="text" id="destination" name="destination_display" defaultValue="Tokyo" autoComplete="off" aria-expanded="false" aria-controls="destination-options" data-airport="destination" />
                          {' '}
                          <span className="search-field__code" data-airport-code="">
                            NRT
                          </span>
                          {' '}
                        </span>
                        {' '}
                        <span className="search-field__sub" data-airport-sub="">
                          Narita International Airport
                        </span>
                        {' '}
                        <input type="hidden" name="destination_iata" value="NRT" data-airport-value="" />
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
                            <button className="airport-option" type="button" data-airport-option="" aria-current="true" data-iata="NRT" data-city="Tokyo" data-name="Narita International Airport">
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
              </div>
              {/* END BLADE BOUNDARY: flight-search component */}
            </details>
          </div>
        </section>
        {/* END BLADE BOUNDARY: search summary */}
        <div className="page-container results-layout">
          {/* ==================================================================
            Filters. Counts come from the backend facet response; nothing here
            filters client-side.
            ================================================================== */}
          {/* BLADE BOUNDARY: results bar -> <x-flights.results-bar /> */}
          {/* One box on a phone: the three controls in a row with the heading
            under them, held at the top of the results while they scroll. From
            the sidebar breakpoint up it is display:contents and each part goes
            back to its own place in the layout. */}
          <div className="results-bar" data-results-bar="">
            {/* BLADE BOUNDARY: filters -> <x-flights.filter-panel /> */}
            {/* One markup for both layouts. At the sidebar breakpoint this is the
              static column on the left; below it the panel becomes a sheet opened
              from the trigger. Open in the HTML, so with no JavaScript the filters
              are simply present and inline at every width. */}
            <details className="filter-drawer" data-filter-drawer="" open>
              <summary className="filter-drawer__trigger" data-filter-trigger="">
                <svg className="icon filter-drawer__trigger-icon" aria-hidden="true">
                  <use href="#i-sliders" />
                </svg>
                {" Filters"}
              </summary>
              <div className="filter-drawer__sheet">
                <form className="filter-panel" action="/flights/search-results" method="get" aria-labelledby="filters-title">
                  <div className="filter-panel__head">
                    <h2 className="filter-panel__title" id="filters-title">
                      Filter flights
                    </h2>
                    <svg className="icon size-5 text-primary filter-panel__mark" aria-hidden="true">
                      <use href="#i-sliders" />
                    </svg>
                    {' '}
                    <button className="filter-drawer__close" type="button" data-filter-close="">
                      {' '}
                      <svg className="icon size-5" aria-hidden="true">
                        <use href="#i-close" />
                      </svg>
                      {' '}
                      <span className="sr-only">
                        Close filters
                      </span>
                      {' '}
                    </button>
                  </div>
                  <details className="filter-group" open>
                    <summary className="filter-group__summary">
                      {"Stops "}
                      <svg className="icon filter-group__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                    </summary>
                    <div className="filter-group__body">
                      <label className="filter-option" htmlFor="stops-direct">
                        {' '}
                        <input type="checkbox" id="stops-direct" name="stops[]" value="0" defaultChecked />
                        {' '}
                        <span className="filter-option__label">
                          Direct
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          12
                        </span>
                        {' '}
                      </label>
                      {' '}
                      <label className="filter-option" htmlFor="stops-one">
                        {' '}
                        <input type="checkbox" id="stops-one" name="stops[]" value="1" defaultChecked />
                        {' '}
                        <span className="filter-option__label">
                          1 stop
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          22
                        </span>
                        {' '}
                      </label>
                      {' '}
                      <label className="filter-option" htmlFor="stops-more">
                        {' '}
                        <input type="checkbox" id="stops-more" name="stops[]" value="2" defaultChecked />
                        {' '}
                        <span className="filter-option__label">
                          2+ stops
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          8
                        </span>
                        {' '}
                      </label>
                    </div>
                  </details>
                  <details className="filter-group" open>
                    <summary className="filter-group__summary">
                      {"Departure time "}
                      <svg className="icon filter-group__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                    </summary>
                    <div className="filter-group__body">
                      <p className="range__bounds">
                        <span>
                          00:00
                        </span>
                        {' '}
                        <span>
                          23:59
                        </span>
                      </p>
                      {/* Two real inputs stacked on one track: dual-handle sliders have
                        no native control, and this still submits without JavaScript. */}
                      <div className="range">
                        <label className="sr-only" htmlFor="depart-from">
                          Earliest departure hour
                        </label>
                        {' '}
                        <input className="range__input" type="range" id="depart-from" name="depart_from" min="0" max="23" defaultValue="0" />
                        {' '}
                        <label className="sr-only" htmlFor="depart-to">
                          Latest departure hour
                        </label>
                        {' '}
                        <input className="range__input" type="range" id="depart-to" name="depart_to" min="0" max="23" defaultValue="23" />
                      </div>
                    </div>
                  </details>
                  <details className="filter-group" open>
                    <summary className="filter-group__summary">
                      {"Airlines "}
                      <svg className="icon filter-group__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                    </summary>
                    <div className="filter-group__body">
                      <label className="filter-option" htmlFor="airline-biman">
                        {' '}
                        <input type="checkbox" id="airline-biman" name="airlines[]" value="biman" defaultChecked />
                        {' '}
                        <img className="filter-option__logo" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                        {' '}
                        <span className="filter-option__label">
                          Biman Bangladesh
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          8
                        </span>
                        {' '}
                      </label>
                      {' '}
                      <label className="filter-option" htmlFor="airline-cathay">
                        {' '}
                        <input type="checkbox" id="airline-cathay" name="airlines[]" value="cathay" defaultChecked />
                        {' '}
                        <img className="filter-option__logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
                        {' '}
                        <span className="filter-option__label">
                          Cathay Pacific
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          10
                        </span>
                        {' '}
                      </label>
                      {' '}
                      <label className="filter-option" htmlFor="airline-srilankan">
                        {' '}
                        <input type="checkbox" id="airline-srilankan" name="airlines[]" value="srilankan" defaultChecked />
                        {' '}
                        <img className="filter-option__logo" src="/images/UL.avif" alt="" width="120" height="120" decoding="async" />
                        {' '}
                        <span className="filter-option__label">
                          SriLankan Airlines
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          10
                        </span>
                        {' '}
                      </label>
                      {' '}
                      <label className="filter-option" htmlFor="airline-china-southern">
                        {' '}
                        <input type="checkbox" id="airline-china-southern" name="airlines[]" value="china-southern" defaultChecked />
                        {' '}
                        <img className="filter-option__logo" src="/images/CZ.avif" alt="" width="120" height="120" decoding="async" />
                        {' '}
                        <span className="filter-option__label">
                          China Southern
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          6
                        </span>
                        {' '}
                      </label>
                      {' '}
                      <label className="filter-option" htmlFor="airline-china-eastern">
                        {' '}
                        <input type="checkbox" id="airline-china-eastern" name="airlines[]" value="china-eastern" defaultChecked />
                        {' '}
                        <img className="filter-option__logo" src="/images/MU.avif" alt="" width="120" height="120" decoding="async" />
                        {' '}
                        <span className="filter-option__label">
                          China Eastern
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          4
                        </span>
                        {' '}
                      </label>
                      {' '}
                      <label className="filter-option" htmlFor="airline-air-china">
                        {' '}
                        <input type="checkbox" id="airline-air-china" name="airlines[]" value="air-china" defaultChecked />
                        {' '}
                        <img className="filter-option__logo" src="/images/CA.avif" alt="" width="120" height="120" decoding="async" />
                        {' '}
                        <span className="filter-option__label">
                          Air China
                        </span>
                        {' '}
                        <span className="filter-option__count">
                          4
                        </span>
                        {' '}
                      </label>
                    </div>
                  </details>
                  <details className="filter-group" open>
                    <summary className="filter-group__summary">
                      {"Baggage "}
                      <svg className="icon filter-group__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                    </summary>
                    <div className="filter-group__body">
                      <label className="filter-option" htmlFor="bag-cabin">
                        {' '}
                        <input type="checkbox" id="bag-cabin" name="baggage[]" value="CABIN" defaultChecked />
                        {' '}
                        <span className="filter-option__label">
                          Cabin bag included
                        </span>
                        {' '}
                      </label>
                      {' '}
                      <label className="filter-option" htmlFor="bag-checked">
                        {' '}
                        <input type="checkbox" id="bag-checked" name="baggage[]" value="CHECKED_23" defaultChecked />
                        {' '}
                        <span className="filter-option__label">
                          23 kg checked bag
                        </span>
                        {' '}
                      </label>
                    </div>
                  </details>
                  <details className="filter-group" open>
                    <summary className="filter-group__summary">
                      {"Price range (BDT) "}
                      <svg className="icon filter-group__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                    </summary>
                    <div className="filter-group__body">
                      <p className="range__bounds">
                        <span>
                          15,000
                        </span>
                        {' '}
                        <span>
                          120,000
                        </span>
                      </p>
                      <div className="range">
                        <label className="sr-only" htmlFor="price-min">
                          Lowest price
                        </label>
                        {' '}
                        <input className="range__input" type="range" id="price-min" name="price_min" min="15000" max="120000" step="1000" defaultValue="15000" />
                        {' '}
                        <label className="sr-only" htmlFor="price-max">
                          Highest price
                        </label>
                        {' '}
                        <input className="range__input" type="range" id="price-max" name="price_max" min="15000" max="120000" step="1000" defaultValue="120000" />
                      </div>
                    </div>
                  </details>
                  <button className="filter-panel__clear" type="reset">
                    Clear all
                  </button>
                </form>
              </div>
            </details>
            {/* END BLADE BOUNDARY: filters */}
            {/* ==================================================================
              Results. Prices, durations and availability are exactly what the
              backend returned; nothing is recalculated here.
              ================================================================== */}
            {/* BLADE BOUNDARY: sort tabs -> <x-flights.sort-tabs /> */}
            {/* A menu on a phone, where it shares a row with the filter button, and the
              strip it has always been from the sidebar breakpoint up. Open in the
              HTML, so with no JavaScript the three choices are simply present. */}
            <details className="sort-menu" data-sort-menu="" open>
              <summary className="sort-menu__trigger" data-sort-trigger="">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-swap" />
                </svg>
                {" Sort "}
                <span className="sr-only">
                  {", currently "}
                  <span data-sort-current="">
                    Recommended
                  </span>
                </span>
              </summary>
              <div className="sort-tabs" role="tablist" aria-label="Sort results">
                <button className="sort-tab" type="button" role="tab" id="sort-recommended" aria-controls="results-list" aria-selected="true" data-sort-tab="">
                  Recommended
                </button>
                {' '}
                <button className="sort-tab" type="button" role="tab" id="sort-cheapest" aria-controls="results-list" aria-selected="false" data-sort-tab="">
                  Cheapest
                </button>
                {' '}
                <button className="sort-tab" type="button" role="tab" id="sort-fastest" aria-controls="results-list" aria-selected="false" data-sort-tab="">
                  Fastest
                </button>
              </div>
            </details>
            {/* END BLADE BOUNDARY: sort tabs */}
            {/* BLADE BOUNDARY: modify search -> <x-flights.modify-link /> */}
            <a className="results-bar__button" href="#search-summary" data-modify-search="">
              {' '}
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-sliders" />
              </svg>
              {" Modify search "}
            </a>
            {/* END BLADE BOUNDARY: modify search */}
            {/* The heading names the section below it, which is why the id stays
              with the heading and the section points at it. */}
            <div className="results__head">
              <h1 className="results__title" id="results-title">
                Flights from Dhaka to Tokyo
              </h1>
              <p className="results__count">
                <span data-trip-only="round">
                  42 flights found · Round trip
                </span>
                {' '}
                <span data-trip-only="one">
                  61 flights found · One way
                </span>
              </p>
            </div>
          </div>
          {/* END BLADE BOUNDARY: results bar */}
          <section className="results" aria-labelledby="results-title">
            {/* BLADE BOUNDARY: result card -> <x-flights.result-card /> */}
            <div className="results__list" id="results-list" role="tabpanel" aria-labelledby="sort-recommended">
              <article className="result-card" data-offer-id="off_1" data-sort-price="68450" data-sort-duration="840" data-sort-price-one="39900" data-sort-duration-one="405">
                <div className="result-card__main">
                  <div className="result-card__slice" data-slice-id="slc_out">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Outbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                        {" Biman Bangladesh Airlines "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          BG 378
                        </span>
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
                          <span className="result-card__city">
                            Dhaka
                          </span>
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
                          <span className="result-card__city">
                            Tokyo
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Thu, 18 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"23 kg baggage "}
                      </span>
                    </p>
                  </div>
                  <div className="result-card__slice" data-slice-id="slc_ret" data-trip-only="round">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Inbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                        {" Biman Bangladesh Airlines "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          BG 379
                        </span>
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
                          <span className="result-card__city">
                            Tokyo
                          </span>
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
                          <span className="result-card__city">
                            Dhaka
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Sat, 27 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"23 kg baggage "}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="result-card__badges">
                  {' '}
                  <span className="result-badge" data-kind="recommended" data-result-badge="">
                    Recommended
                  </span>
                  {' '}
                </span>
                <div className="result-card__aside">
                  <span className="result-card__trip">
                    {' '}
                    <span data-trip-only="round">
                      Round-trip total
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      One-way total
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="result-card__price">
                    {' '}
                    <span data-trip-only="round">
                      BDT 68,450
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      BDT 39,900
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <Link className="btn btn--primary md:w-full md:mt-3" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
              <article className="result-card" data-offer-id="off_2" data-sort-price="72900" data-sort-duration="1230" data-sort-price-one="42500" data-sort-duration-one="645">
                <div className="result-card__main">
                  <div className="result-card__slice" data-slice-id="slc_out">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Outbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
                        {" Cathay Pacific "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          {"CX 750 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" CX 520"}
                        </span>
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
                          <span className="result-card__city">
                            Dhaka
                          </span>
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
                            <span className="journey__layover" style={{ "--segment-minutes": "155" }} role="img" tabIndex={0} aria-label="Layover at Hong Kong International, 2h 35m">
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
                          <span className="result-card__city">
                            Tokyo
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Thu, 18 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"23 kg baggage "}
                      </span>
                    </p>
                  </div>
                  <div className="result-card__slice" data-slice-id="slc_ret" data-trip-only="round">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Inbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
                        {" Cathay Pacific "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          {"CX 521 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" CX 751"}
                        </span>
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
                          <span className="result-card__city">
                            Tokyo
                          </span>
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
                            <span className="journey__layover" style={{ "--segment-minutes": "95" }} role="img" tabIndex={0} aria-label="Layover at Hong Kong International, 1h 35m">
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
                          <span className="result-card__city">
                            Dhaka
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Sun, 28 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"23 kg baggage "}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="result-card__badges">
                  {' '}
                  <span className="result-badge" data-kind="recommended" data-result-badge="">
                    Recommended
                  </span>
                  {' '}
                </span>
                <div className="result-card__aside">
                  <span className="result-card__trip">
                    {' '}
                    <span data-trip-only="round">
                      Round-trip total
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      One-way total
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="result-card__price">
                    {' '}
                    <span data-trip-only="round">
                      BDT 72,900
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      BDT 42,500
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <Link className="btn btn--primary md:w-full md:mt-3" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
              <article className="result-card" data-offer-id="off_3" data-sort-price="78200" data-sort-duration="1710" data-sort-price-one="45800" data-sort-duration-one="875">
                <div className="result-card__main">
                  <div className="result-card__slice" data-slice-id="slc_out">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Outbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/UL.avif" alt="" width="120" height="120" decoding="async" />
                        {" SriLankan Airlines "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          {"UL 190 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" UL 454"}
                        </span>
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
                          <span className="result-card__city">
                            Dhaka
                          </span>
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
                            <span className="journey__layover" style={{ "--segment-minutes": "205" }} role="img" tabIndex={0} aria-label="Layover at Bandaranaike International, Colombo, 3h 25m">
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
                          <span className="result-card__city">
                            Tokyo
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Fri, 19 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"25 kg baggage "}
                      </span>
                    </p>
                  </div>
                  <div className="result-card__slice" data-slice-id="slc_ret" data-trip-only="round">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Inbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/UL.avif" alt="" width="120" height="120" decoding="async" />
                        {" SriLankan Airlines "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          {"UL 455 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" UL 189"}
                        </span>
                      </p>
                    </div>
                    <div className="result-card__leg">
                      <span className="result-card__time">
                        {' '}
                        <span className="result-card__clock">
                          11:20
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          NRT
                          <span className="result-card__city">
                            Tokyo
                          </span>
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
                          13h 55m · 1 stop in CMB
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
                            <span className="journey__leg" style={{ "--segment-minutes": "545" }} role="img" tabIndex={0} aria-label="Flight NRT to CMB, 9h 05m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                NRT – CMB
                                <br />
                                Flight time 9h 05m
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__layover" style={{ "--segment-minutes": "90" }} role="img" tabIndex={0} aria-label="Layover at Bandaranaike International, Colombo, 1h 30m">
                              {' '}
                              <span className="journey__code" aria-hidden="true">
                                CMB
                              </span>
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                Layover in CMB
                                <br />
                                1h 30m on the ground
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__leg" style={{ "--segment-minutes": "200" }} role="img" tabIndex={0} aria-label="Flight CMB to DAC, 3h 20m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                CMB – DAC
                                <br />
                                Flight time 3h 20m
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
                          22:15
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          DAC
                          <span className="result-card__city">
                            Dhaka
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Sat, 27 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"25 kg baggage "}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="result-card__badges">
                  {' '}
                  <span className="result-badge" data-kind="recommended" data-result-badge="">
                    Recommended
                  </span>
                  {' '}
                </span>
                <div className="result-card__aside">
                  <span className="result-card__trip">
                    {' '}
                    <span data-trip-only="round">
                      Round-trip total
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      One-way total
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="result-card__price">
                    {' '}
                    <span data-trip-only="round">
                      BDT 78,200
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      BDT 45,800
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <Link className="btn btn--primary md:w-full md:mt-3" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
              <article className="result-card" data-offer-id="off_4" data-sort-price="74650" data-sort-duration="1935" data-sort-price-one="43200" data-sort-duration-one="985">
                <div className="result-card__main">
                  <div className="result-card__slice" data-slice-id="slc_out">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Outbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/CZ.avif" alt="" width="120" height="120" decoding="async" />
                        {" China Southern "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          {"CZ 392 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" CZ 3085"}
                        </span>
                      </p>
                    </div>
                    <div className="result-card__leg">
                      <span className="result-card__time">
                        {' '}
                        <span className="result-card__clock">
                          12:15
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          DAC
                          <span className="result-card__city">
                            Dhaka
                          </span>
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
                          16h 25m · 1 stop in CAN
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
                            <span className="journey__leg" style={{ "--segment-minutes": "255" }} role="img" tabIndex={0} aria-label="Flight DAC to CAN, 4h 15m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                DAC – CAN
                                <br />
                                Flight time 4h 15m
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__layover" style={{ "--segment-minutes": "320" }} role="img" tabIndex={0} aria-label="Layover at Baiyun International, Guangzhou, 5h 20m">
                              {' '}
                              <span className="journey__code" aria-hidden="true">
                                CAN
                              </span>
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                Layover in CAN
                                <br />
                                5h 20m on the ground
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__leg" style={{ "--segment-minutes": "410" }} role="img" tabIndex={0} aria-label="Flight CAN to NRT, 6h 50m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                CAN – NRT
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
                          07:40
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
                          <span className="result-card__city">
                            Tokyo
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Fri, 19 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"20 kg baggage "}
                      </span>
                    </p>
                  </div>
                  <div className="result-card__slice" data-slice-id="slc_ret" data-trip-only="round">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Inbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/MU.avif" alt="" width="120" height="120" decoding="async" />
                        {" China Eastern "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          {"MU 272 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" MU 2931"}
                        </span>
                      </p>
                    </div>
                    <div className="result-card__leg">
                      <span className="result-card__time">
                        {' '}
                        <span className="result-card__clock">
                          09:30
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          NRT
                          <span className="result-card__city">
                            Tokyo
                          </span>
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
                          15h 50m · 1 stop in PVG
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
                            <span className="journey__leg" style={{ "--segment-minutes": "185" }} role="img" tabIndex={0} aria-label="Flight NRT to PVG, 3h 05m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                NRT – PVG
                                <br />
                                Flight time 3h 05m
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__layover" style={{ "--segment-minutes": "485" }} role="img" tabIndex={0} aria-label="Layover at Pudong International, Shanghai, 8h 05m">
                              {' '}
                              <span className="journey__code" aria-hidden="true">
                                PVG
                              </span>
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                Layover in PVG
                                <br />
                                8h 05m on the ground
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__leg" style={{ "--segment-minutes": "280" }} role="img" tabIndex={0} aria-label="Flight PVG to DAC, 4h 40m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                PVG – DAC
                                <br />
                                Flight time 4h 40m
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
                          22:20
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          DAC
                          <span className="result-card__city">
                            Dhaka
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Sat, 27 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"20 kg baggage "}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="result-card__badges">
                  {' '}
                  <span className="result-badge" data-kind="recommended" data-result-badge="">
                    Recommended
                  </span>
                  {' '}
                </span>
                <div className="result-card__aside">
                  <span className="result-card__trip">
                    {' '}
                    <span data-trip-only="round">
                      Round-trip total
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      One-way total
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="result-card__price">
                    {' '}
                    <span data-trip-only="round">
                      BDT 74,650
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      BDT 43,200
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <Link className="btn btn--primary md:w-full md:mt-3" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
              {/* Two stops each way: the track holds a layover per connection,
                each sized by its minutes like the flights either side. */}
              <article className="result-card" data-offer-id="off_5" data-sort-price="64900" data-sort-duration="1730" data-sort-price-one="36500" data-sort-duration-one="835">
                <div className="result-card__main">
                  <div className="result-card__slice" data-slice-id="slc_out">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Outbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/CA.avif" alt="" width="120" height="120" decoding="async" />
                        {" Air China "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          {"CA 432 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" CA 1432 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" CA 925"}
                        </span>
                      </p>
                    </div>
                    <div className="result-card__leg">
                      <span className="result-card__time">
                        {' '}
                        <span className="result-card__clock">
                          01:30
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          DAC
                          <span className="result-card__city">
                            Dhaka
                          </span>
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
                          13h 55m · 2 stops in KMG, PEK
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
                            <span className="journey__leg" style={{ "--segment-minutes": "160" }} role="img" tabIndex={0} aria-label="Flight DAC to KMG, 2h 40m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                DAC – KMG
                                <br />
                                Flight time 2h 40m
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__layover" style={{ "--segment-minutes": "130" }} role="img" tabIndex={0} aria-label="Layover at Kunming Changshui International, 2h 10m">
                              {' '}
                              <span className="journey__code" aria-hidden="true">
                                KMG
                              </span>
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                Layover in KMG
                                <br />
                                2h 10m on the ground
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__leg" style={{ "--segment-minutes": "195" }} role="img" tabIndex={0} aria-label="Flight KMG to PEK, 3h 15m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                KMG – PEK
                                <br />
                                Flight time 3h 15m
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__layover" style={{ "--segment-minutes": "125" }} role="img" tabIndex={0} aria-label="Layover at Beijing Capital International, 2h 05m">
                              {' '}
                              <span className="journey__code" aria-hidden="true">
                                PEK
                              </span>
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                Layover in PEK
                                <br />
                                2h 05m on the ground
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__leg" style={{ "--segment-minutes": "225" }} role="img" tabIndex={0} aria-label="Flight PEK to NRT, 3h 45m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                PEK – NRT
                                <br />
                                Flight time 3h 45m
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
                          18:25
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          NRT
                          <span className="result-card__city">
                            Tokyo
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Thu, 18 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"23 kg baggage "}
                      </span>
                    </p>
                  </div>
                  <div className="result-card__slice" data-slice-id="slc_ret" data-trip-only="round">
                    <div className="result-card__slice-head">
                      <p className="result-card__slice-label">
                        <span className="result-card__slice-kind">
                          Inbound
                        </span>
                      </p>
                      <p className="result-card__slice-carrier">
                        <img className="result-card__slice-logo" src="/images/CA.avif" alt="" width="120" height="120" decoding="async" />
                        {" Air China "}
                        <span className="text-xs font-normal text-fg-muted whitespace-nowrap">
                          {"CA 926 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" CA 1431 "}
                          <span className="text-fg-heading" aria-hidden="true">
                            •
                          </span>
                          {" CA 431"}
                        </span>
                      </p>
                    </div>
                    <div className="result-card__leg">
                      <span className="result-card__time">
                        {' '}
                        <span className="result-card__clock">
                          09:15
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          NRT
                          <span className="result-card__city">
                            Tokyo
                          </span>
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
                          14h 55m · 2 stops in PEK, KMG
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
                            <span className="journey__leg" style={{ "--segment-minutes": "245" }} role="img" tabIndex={0} aria-label="Flight NRT to PEK, 4h 05m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                NRT – PEK
                                <br />
                                Flight time 4h 05m
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__layover" style={{ "--segment-minutes": "110" }} role="img" tabIndex={0} aria-label="Layover at Beijing Capital International, 1h 50m">
                              {' '}
                              <span className="journey__code" aria-hidden="true">
                                PEK
                              </span>
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                Layover in PEK
                                <br />
                                1h 50m on the ground
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__leg" style={{ "--segment-minutes": "210" }} role="img" tabIndex={0} aria-label="Flight PEK to KMG, 3h 30m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                PEK – KMG
                                <br />
                                Flight time 3h 30m
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__layover" style={{ "--segment-minutes": "160" }} role="img" tabIndex={0} aria-label="Layover at Kunming Changshui International, 2h 40m">
                              {' '}
                              <span className="journey__code" aria-hidden="true">
                                KMG
                              </span>
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                Layover in KMG
                                <br />
                                2h 40m on the ground
                              </span>
                              {' '}
                            </span>
                            {' '}
                            <span className="journey__leg" style={{ "--segment-minutes": "170" }} role="img" tabIndex={0} aria-label="Flight KMG to DAC, 2h 50m">
                              {' '}
                              <span className="journey__tip" aria-hidden="true">
                                KMG – DAC
                                <br />
                                Flight time 2h 50m
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
                          21:10
                        </span>
                        {' '}
                        <span className="result-card__iata">
                          DAC
                          <span className="result-card__city">
                            Dhaka
                          </span>
                        </span>
                        {' '}
                        <span className="result-card__date">
                          Sat, 27 Sep
                        </span>
                        {' '}
                      </span>
                    </div>
                    <p className="result-card__meta mt-3">
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-seat" />
                        </svg>
                        {"Economy "}
                      </span>
                      {' '}
                      <span className="result-card__meta-item">
                        {' '}
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-bag" />
                        </svg>
                        {"23 kg baggage "}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="result-card__badges">
                  {' '}
                  <span className="result-badge" data-kind="recommended" data-result-badge="">
                    Recommended
                  </span>
                  {' '}
                </span>
                <div className="result-card__aside">
                  <span className="result-card__trip">
                    {' '}
                    <span data-trip-only="round">
                      Round-trip total
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      One-way total
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="result-card__price">
                    {' '}
                    <span data-trip-only="round">
                      BDT 64,900
                    </span>
                    {' '}
                    <span data-trip-only="one">
                      BDT 36,500
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <Link className="btn btn--primary md:w-full md:mt-3" href="/flights/flight-details">
                    Select
                  </Link>
                </div>
              </article>
            </div>
            {/* END BLADE BOUNDARY: result card */}
            <p className="results__more">
              <button className="btn btn--secondary results__more-button" type="button">
                {" Show more flights "}
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
      {/* BLADE BOUNDARY: price notice -> <x-booking.price-toast :hold="$offer->hold_seconds" /> */}
      {/* The fare was held for a while, and this is what happens when that runs out.
        A <dialog> opened with showModal(): the dim and the blur behind it are the
        browser's ::backdrop, the focus stays inside it, and Escape closes it — none
        of which has to be written or trapped by hand. It has no `open` attribute,
        so it starts closed; Blade renders it open when it already knows the price
        moved.
        The refresh is a link because it runs the same search again:
        route('flights.search', request()->query()). Every price on the page
        comes back from the backend with it. */}
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
              These prices may have changed
            </span>
            {' '}
            <span className="toast__note">
              Airlines re-price while you browse. Refresh to search again and see what these fares cost now.
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
        <Link className="btn btn--primary toast__action" href="/flights/search-results">
          {" Refresh results "}
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
