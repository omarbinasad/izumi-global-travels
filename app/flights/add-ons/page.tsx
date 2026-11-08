import Link from 'next/link';
import type { Metadata } from 'next';
import BookingSteps from '@/components/booking/BookingSteps';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/flights/add-ons.html. */

export const metadata: Metadata = {
  title: "Choose your add-ons — Izumi Global Travels",
  description: "Choose seats, meals and travel insurance for each traveller on your booking.",
  robots: { index: false },
};

export default function FlightsAddOnsPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* ====================================================================
          Step three. Every option on this page is an add-on the backend offered
          for this offer, and the value submitted is its id. The money shown is
          what the backend quoted; nothing here is added up in the browser.
          ==================================================================== */}
        <div className="page-container pt-6" data-offer-id="off_1">
          <Link className="review-back" href="/flights/passengers">
            {' '}
            <svg className="icon size-4" aria-hidden="true">
              <use href="#i-arrow-left" />
            </svg>
            {" Back to passenger details "}
          </Link>
          {/* BLADE BOUNDARY: booking steps -> <x-booking.steps current="3" /> */}
          <BookingSteps current={3} />
          {/* END BLADE BOUNDARY: booking steps */}
        </div>
        <div className="page-container review-layout">
          <form className="grid gap-5" action="/flights/confirm" data-add-ons="">
            <section className="review-panel">
              <h1 className="m-0 text-2xl font-bold tracking-tight text-fg-heading">
                Choose your add-ons
              </h1>
              <p className="mt-1 mb-0 text-sm text-fg-muted">
                Personalise your journey with optional services
              </p>
              {/* BLADE BOUNDARY: passenger switcher -> <x-booking.passenger-tabs /> */}
              <div className="pax-tabs mt-5" role="tablist" aria-label="Passengers">
                <button className="pax-tab" type="button" role="tab" id="add-ons-tab-0" aria-controls="add-ons-panel-0" aria-selected="true" tabIndex={0} data-add-ons-tab="">
                  {' '}
                  <span className="pax-tab__text">
                    {' '}
                    <span className="pax-tab__name">
                      {"Passenger 1 "}
                      <span aria-hidden="true">
                        ·
                      </span>
                      {" Adult"}
                    </span>
                    {' '}
                    <span className="pax-tab__summary" data-pax-tab-summary="">
                      Window · Halal · Standard
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="pax-tab__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon">
                      <use href="#i-check" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                </button>
                {' '}
                <button className="pax-tab" type="button" role="tab" id="add-ons-tab-1" aria-controls="add-ons-panel-1" aria-selected="false" tabIndex={-1} data-add-ons-tab="">
                  {' '}
                  <span className="pax-tab__text">
                    {' '}
                    <span className="pax-tab__name">
                      {"Passenger 2 "}
                      <span aria-hidden="true">
                        ·
                      </span>
                      {" Child"}
                    </span>
                    {' '}
                    <span className="pax-tab__summary" data-pax-tab-summary="">
                      Aisle · Regular · Premium
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="pax-tab__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon">
                      <use href="#i-check" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                </button>
                {' '}
                <button className="pax-tab" type="button" role="tab" id="add-ons-tab-2" aria-controls="add-ons-panel-2" aria-selected="false" tabIndex={-1} data-add-ons-tab="">
                  {' '}
                  <span className="pax-tab__text">
                    {' '}
                    <span className="pax-tab__name">
                      {"Passenger 3 "}
                      <span aria-hidden="true">
                        ·
                      </span>
                      {" Infant"}
                    </span>
                    {' '}
                    <span className="pax-tab__summary" data-pax-tab-summary="">
                      No preference · Vegetarian · No insurance
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="pax-tab__mark" aria-hidden="true">
                    {' '}
                    <svg className="icon">
                      <use href="#i-check" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                </button>
              </div>
              {/* END BLADE BOUNDARY: passenger switcher */}
              <p className="add-ons__note">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                {" All choices below apply only to the selected passenger."}
              </p>
            </section>
            <div className="grid gap-5" id="add-ons-panel-0" role="tabpanel" aria-labelledby="add-ons-tab-0" data-add-ons-panel="">
              {/* BLADE BOUNDARY: seat preference -> <x-booking.seat-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Seat preference "}
                  <span className="add-ons__for">
                    · Passenger 1
                  </span>
                </h2>
                <div className="slice-choice">
                  <p className="slice-choice__head">
                    <span className="slice-choice__kind">
                      Outbound
                    </span>
                    {' '}
                    <span className="slice-choice__route">
                      {"DAC "}
                      <span aria-hidden="true">
                        →
                      </span>
                      {" NRT"}
                    </span>
                    {' '}
                    <span className="slice-choice__date">
                      Thu, 18 Sep
                    </span>
                  </p>
                  <div className="choice-grid" role="group" aria-label="Outbound seat preference for Passenger 1">
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[0][seat_out]" value="add_seat_any" data-label="No seat preference" data-price="0" data-price-label="Free" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        No preference
                      </span>
                      {' '}
                      <span className="choice__price">
                        Free
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[0][seat_out]" value="add_seat_window" defaultChecked data-label="Window seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Window
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[0][seat_out]" value="add_seat_aisle" data-label="Aisle seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Aisle
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                  </div>
                </div>
                <div className="slice-choice">
                  <p className="slice-choice__head">
                    <span className="slice-choice__kind">
                      Inbound
                    </span>
                    {' '}
                    <span className="slice-choice__route">
                      {"NRT "}
                      <span aria-hidden="true">
                        →
                      </span>
                      {" DAC"}
                    </span>
                    {' '}
                    <span className="slice-choice__date">
                      Sat, 27 Sep
                    </span>
                  </p>
                  <div className="choice-grid" role="group" aria-label="Inbound seat preference for Passenger 1">
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[0][seat_ret]" value="add_seat_any" data-label="No seat preference" data-price="0" data-price-label="Free" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        No preference
                      </span>
                      {' '}
                      <span className="choice__price">
                        Free
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[0][seat_ret]" value="add_seat_window" defaultChecked data-label="Window seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Window
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[0][seat_ret]" value="add_seat_aisle" data-label="Aisle seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Aisle
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                  </div>
                </div>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Seat requests are subject to airline confirmation."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: seat preference */}
              {/* BLADE BOUNDARY: meal preference -> <x-booking.meal-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Meal preference "}
                  <span className="add-ons__for">
                    · Passenger 1
                  </span>
                </h2>
                <div className="meal-grid" role="group" aria-label="Meal preference for Passenger 1">
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[0][meal]" value="add_meal_none" data-label="No meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media meal-card__media--icon" src="/images/nomeal.webp" alt="An empty meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          No meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[0][meal]" value="add_meal_regular" data-label="Regular meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/reg.webp" alt="A regular in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Regular meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[0][meal]" value="add_meal_halal" defaultChecked data-label="Halal meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/halalmeal.webp" alt="A halal in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Halal meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[0][meal]" value="add_meal_vegetarian" data-label="Vegetarian" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/veg.webp" alt="A vegetarian in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Vegetarian
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                </div>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Meal availability may vary by airline and route."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: meal preference */}
              {/* BLADE BOUNDARY: travel insurance -> <x-booking.insurance-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Travel insurance "}
                  <span className="add-ons__for">
                    · Passenger 1
                  </span>
                </h2>
                <p className="add-ons__lead">
                  Choose insurance for this passenger.
                </p>
                <div className="cover-grid" role="group" aria-label="Travel insurance for Passenger 1">
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[0][insurance]" value="add_ins_none" data-label="No insurance" data-price="0" data-price-label="BDT 0" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        No insurance
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 0
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"No coverage "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="cover-card__note">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-info" />
                      </svg>
                      {" Any unexpected travel costs will be your responsibility. "}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[0][insurance]" value="add_ins_standard" defaultChecked data-label="Standard cover" data-price="1250" data-price-label="BDT 1,250" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        Standard cover
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 1,250
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Medical emergencies "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Trip cancellation "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Baggage delay "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[0][insurance]" value="add_ins_premium" data-label="Premium cover" data-price="2450" data-price-label="BDT 2,450" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        Premium cover
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 2,450
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Higher limits "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Travel delay "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Lost baggage "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </label>
                </div>
                <p className="add-ons__foot">
                  <Link className="add-ons__link" href="/support/insurance">
                    {" View coverage details "}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-external" />
                    </svg>
                    {' '}
                  </Link>
                </p>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Coverage is subject to policy terms and eligibility."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: travel insurance */}
            </div>
            <div className="grid gap-5" id="add-ons-panel-1" role="tabpanel" aria-labelledby="add-ons-tab-1" data-add-ons-panel="" hidden>
              {/* BLADE BOUNDARY: seat preference -> <x-booking.seat-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Seat preference "}
                  <span className="add-ons__for">
                    · Passenger 2
                  </span>
                </h2>
                <div className="slice-choice">
                  <p className="slice-choice__head">
                    <span className="slice-choice__kind">
                      Outbound
                    </span>
                    {' '}
                    <span className="slice-choice__route">
                      {"DAC "}
                      <span aria-hidden="true">
                        →
                      </span>
                      {" NRT"}
                    </span>
                    {' '}
                    <span className="slice-choice__date">
                      Thu, 18 Sep
                    </span>
                  </p>
                  <div className="choice-grid" role="group" aria-label="Outbound seat preference for Passenger 2">
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[1][seat_out]" value="add_seat_any" data-label="No seat preference" data-price="0" data-price-label="Free" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        No preference
                      </span>
                      {' '}
                      <span className="choice__price">
                        Free
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[1][seat_out]" value="add_seat_window" data-label="Window seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Window
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[1][seat_out]" value="add_seat_aisle" defaultChecked data-label="Aisle seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Aisle
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                  </div>
                </div>
                <div className="slice-choice">
                  <p className="slice-choice__head">
                    <span className="slice-choice__kind">
                      Inbound
                    </span>
                    {' '}
                    <span className="slice-choice__route">
                      {"NRT "}
                      <span aria-hidden="true">
                        →
                      </span>
                      {" DAC"}
                    </span>
                    {' '}
                    <span className="slice-choice__date">
                      Sat, 27 Sep
                    </span>
                  </p>
                  <div className="choice-grid" role="group" aria-label="Inbound seat preference for Passenger 2">
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[1][seat_ret]" value="add_seat_any" data-label="No seat preference" data-price="0" data-price-label="Free" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        No preference
                      </span>
                      {' '}
                      <span className="choice__price">
                        Free
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[1][seat_ret]" value="add_seat_window" data-label="Window seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Window
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[1][seat_ret]" value="add_seat_aisle" defaultChecked data-label="Aisle seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Aisle
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                  </div>
                </div>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Seat requests are subject to airline confirmation."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: seat preference */}
              {/* BLADE BOUNDARY: meal preference -> <x-booking.meal-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Meal preference "}
                  <span className="add-ons__for">
                    · Passenger 2
                  </span>
                </h2>
                <div className="meal-grid" role="group" aria-label="Meal preference for Passenger 2">
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[1][meal]" value="add_meal_none" data-label="No meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media meal-card__media--icon" src="/images/nomeal.webp" alt="An empty meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          No meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[1][meal]" value="add_meal_regular" defaultChecked data-label="Regular meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/reg.webp" alt="A regular in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Regular meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[1][meal]" value="add_meal_halal" data-label="Halal meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/halalmeal.webp" alt="A halal in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Halal meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[1][meal]" value="add_meal_vegetarian" data-label="Vegetarian" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/veg.webp" alt="A vegetarian in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Vegetarian
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                </div>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Meal availability may vary by airline and route."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: meal preference */}
              {/* BLADE BOUNDARY: travel insurance -> <x-booking.insurance-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Travel insurance "}
                  <span className="add-ons__for">
                    · Passenger 2
                  </span>
                </h2>
                <p className="add-ons__lead">
                  Choose insurance for this passenger.
                </p>
                <div className="cover-grid" role="group" aria-label="Travel insurance for Passenger 2">
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[1][insurance]" value="add_ins_none" data-label="No insurance" data-price="0" data-price-label="BDT 0" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        No insurance
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 0
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"No coverage "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="cover-card__note">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-info" />
                      </svg>
                      {" Any unexpected travel costs will be your responsibility. "}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[1][insurance]" value="add_ins_standard" data-label="Standard cover" data-price="1250" data-price-label="BDT 1,250" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        Standard cover
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 1,250
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Medical emergencies "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Trip cancellation "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Baggage delay "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[1][insurance]" value="add_ins_premium" defaultChecked data-label="Premium cover" data-price="2450" data-price-label="BDT 2,450" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        Premium cover
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 2,450
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Higher limits "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Travel delay "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Lost baggage "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </label>
                </div>
                <p className="add-ons__foot">
                  <Link className="add-ons__link" href="/support/insurance">
                    {" View coverage details "}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-external" />
                    </svg>
                    {' '}
                  </Link>
                </p>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Coverage is subject to policy terms and eligibility."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: travel insurance */}
            </div>
            <div className="grid gap-5" id="add-ons-panel-2" role="tabpanel" aria-labelledby="add-ons-tab-2" data-add-ons-panel="" hidden>
              {/* BLADE BOUNDARY: seat preference -> <x-booking.seat-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Seat preference "}
                  <span className="add-ons__for">
                    · Passenger 3
                  </span>
                </h2>
                <div className="slice-choice">
                  <p className="slice-choice__head">
                    <span className="slice-choice__kind">
                      Outbound
                    </span>
                    {' '}
                    <span className="slice-choice__route">
                      {"DAC "}
                      <span aria-hidden="true">
                        →
                      </span>
                      {" NRT"}
                    </span>
                    {' '}
                    <span className="slice-choice__date">
                      Thu, 18 Sep
                    </span>
                  </p>
                  <div className="choice-grid" role="group" aria-label="Outbound seat preference for Passenger 3">
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[2][seat_out]" value="add_seat_any" defaultChecked data-label="No seat preference" data-price="0" data-price-label="Free" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        No preference
                      </span>
                      {' '}
                      <span className="choice__price">
                        Free
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[2][seat_out]" value="add_seat_window" data-label="Window seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Window
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[2][seat_out]" value="add_seat_aisle" data-label="Aisle seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_out" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Aisle
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                  </div>
                </div>
                <div className="slice-choice">
                  <p className="slice-choice__head">
                    <span className="slice-choice__kind">
                      Inbound
                    </span>
                    {' '}
                    <span className="slice-choice__route">
                      {"NRT "}
                      <span aria-hidden="true">
                        →
                      </span>
                      {" DAC"}
                    </span>
                    {' '}
                    <span className="slice-choice__date">
                      Sat, 27 Sep
                    </span>
                  </p>
                  <div className="choice-grid" role="group" aria-label="Inbound seat preference for Passenger 3">
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[2][seat_ret]" value="add_seat_any" defaultChecked data-label="No seat preference" data-price="0" data-price-label="Free" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        No preference
                      </span>
                      {' '}
                      <span className="choice__price">
                        Free
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[2][seat_ret]" value="add_seat_window" data-label="Window seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Window
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                    {' '}
                    <label className="choice">
                      {' '}
                      <input type="radio" name="add_ons[2][seat_ret]" value="add_seat_aisle" data-label="Aisle seat" data-price="1200" data-price-label="BDT 1,200" data-add-on="seat_ret" />
                      {' '}
                      <svg className="icon size-5 choice__icon" aria-hidden="true">
                        <use href="#i-seat" />
                      </svg>
                      {' '}
                      <span className="choice__label">
                        Aisle
                      </span>
                      {' '}
                      <span className="choice__price">
                        BDT 1,200
                      </span>
                      {' '}
                    </label>
                  </div>
                </div>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Seat requests are subject to airline confirmation."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: seat preference */}
              {/* BLADE BOUNDARY: meal preference -> <x-booking.meal-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Meal preference "}
                  <span className="add-ons__for">
                    · Passenger 3
                  </span>
                </h2>
                <div className="meal-grid" role="group" aria-label="Meal preference for Passenger 3">
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[2][meal]" value="add_meal_none" data-label="No meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media meal-card__media--icon" src="/images/nomeal.webp" alt="An empty meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          No meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[2][meal]" value="add_meal_regular" data-label="Regular meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/reg.webp" alt="A regular in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Regular meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[2][meal]" value="add_meal_halal" data-label="Halal meal" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/halalmeal.webp" alt="A halal in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Halal meal
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="meal-card">
                    {' '}
                    <input className="sr-only" type="radio" name="add_ons[2][meal]" value="add_meal_vegetarian" defaultChecked data-label="Vegetarian" data-price="0" data-price-label="Included" data-add-on="meal" />
                    {' '}
                    <img className="meal-card__media" src="/images/veg.webp" alt="A vegetarian in-flight meal tray" width="640" height="400" />
                    {' '}
                    <span className="meal-card__body">
                      {' '}
                      <span className="meal-card__dot" aria-hidden="true" />
                      {' '}
                      <span className="meal-card__text">
                        {' '}
                        <span className="meal-card__name">
                          Vegetarian
                        </span>
                        {' '}
                        <span className="meal-card__note">
                          Included
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="meal-card__mark" aria-hidden="true">
                      {' '}
                      <svg className="icon">
                        <use href="#i-check" />
                      </svg>
                      {' '}
                    </span>
                    {' '}
                  </label>
                </div>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Meal availability may vary by airline and route."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: meal preference */}
              {/* BLADE BOUNDARY: travel insurance -> <x-booking.insurance-choice /> */}
              <section className="review-panel">
                <h2 className="add-ons__title">
                  {"Travel insurance "}
                  <span className="add-ons__for">
                    · Passenger 3
                  </span>
                </h2>
                <p className="add-ons__lead">
                  Choose insurance for this passenger.
                </p>
                <div className="cover-grid" role="group" aria-label="Travel insurance for Passenger 3">
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[2][insurance]" value="add_ins_none" defaultChecked data-label="No insurance" data-price="0" data-price-label="BDT 0" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        No insurance
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 0
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"No coverage "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                    <span className="cover-card__note">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-info" />
                      </svg>
                      {" Any unexpected travel costs will be your responsibility. "}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[2][insurance]" value="add_ins_standard" data-label="Standard cover" data-price="1250" data-price-label="BDT 1,250" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        Standard cover
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 1,250
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Medical emergencies "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Trip cancellation "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Baggage delay "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </label>
                  {' '}
                  <label className="cover-card">
                    {' '}
                    <input className="cover-card__input" type="radio" name="add_ons[2][insurance]" value="add_ins_premium" data-label="Premium cover" data-price="2450" data-price-label="BDT 2,450" data-add-on="insurance" />
                    {' '}
                    <svg className="icon size-6 cover-card__icon" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                    {' '}
                    <span className="cover-card__body">
                      {' '}
                      <span className="cover-card__name">
                        Premium cover
                      </span>
                      {' '}
                      <span className="cover-card__price">
                        BDT 2,450
                      </span>
                      {' '}
                      <span className="cover-card__points">
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Higher limits "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Travel delay "}
                        </span>
                        {' '}
                        <span className="cover-card__point">
                          {' '}
                          <svg className="icon size-3" aria-hidden="true">
                            <use href="#i-check" />
                          </svg>
                          {"Lost baggage "}
                        </span>
                        {' '}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </label>
                </div>
                <p className="add-ons__foot">
                  <Link className="add-ons__link" href="/support/insurance">
                    {" View coverage details "}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-external" />
                    </svg>
                    {' '}
                  </Link>
                </p>
                <p className="add-ons__note">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" Coverage is subject to policy terms and eligibility."}
                </p>
              </section>
              {/* END BLADE BOUNDARY: travel insurance */}
            </div>
            {/* BLADE BOUNDARY: step actions -> <x-booking.step-actions /> */}
            <div className="step-actions">
              <Link className="btn btn--outline" href="/flights/passengers">
                Back
              </Link>
              {' '}
              <Link className="btn btn--primary step-actions__next" href="/flights/payment">
                Continue to payment
              </Link>
            </div>
            {/* END BLADE BOUNDARY: step actions */}
          </form>
          {/* BLADE BOUNDARY: trip summary -> <x-booking.trip-summary /> */}
          <aside className="review-aside grid gap-5">
            <section className="review-panel">
              <h2 className="m-0 text-lg font-semibold text-fg-heading">
                Trip Summary
              </h2>
              <p className="itinerary__airline mt-4" data-segment-id="seg_out_1">
                <img className="itinerary__logo size-7" src="/images/BG.avif" alt="" width="120" height="120" decoding="async" />
                {' '}
                <span className="min-w-0 flex-1">
                  {' '}
                  <span className="itinerary__carrier text-xs">
                    Biman Bangladesh Airlines
                  </span>
                  {' '}
                  <span className="itinerary__flight text-2xs">
                    BG 376
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="tag-pill">
                  Non-stop
                </span>
              </p>
              <div className="trip-summary__route mt-5">
                <span className="trip-summary__end">
                  {' '}
                  <span className="trip-summary__clock">
                    02:20
                  </span>
                  {' '}
                  <span className="trip-summary__iata">
                    DAC
                  </span>
                  {' '}
                  <span className="trip-summary__city">
                    Dhaka (DAC)
                  </span>
                  {' '}
                  <span className="trip-summary__date">
                    18 Sep 2026
                  </span>
                  {' '}
                </span>
                {' '}
                <span className="itinerary__path">
                  {' '}
                  <span className="itinerary__duration">
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
                </span>
                {' '}
                <span className="trip-summary__end trip-summary__end--arrive">
                  {' '}
                  <span className="trip-summary__clock">
                    10:05
                  </span>
                  {' '}
                  <span className="trip-summary__iata">
                    NRT
                  </span>
                  {' '}
                  <span className="trip-summary__city">
                    Tokyo (NRT)
                  </span>
                  {' '}
                  <span className="trip-summary__date">
                    27 Sep 2026
                  </span>
                  {' '}
                </span>
              </div>
              <hr className="trip-summary__rule mt-5" />
              <p className="flex items-center gap-2 mt-4 mb-0 text-sm text-fg">
                <svg className="icon size-4 text-fg-muted" aria-hidden="true">
                  <use href="#i-user" />
                </svg>
                {" 1 Adult, 1 Child, 1 Infant · Economy"}
              </p>
              <hr className="trip-summary__rule mt-4" />
              {/* BLADE BOUNDARY: add-ons summary -> <x-booking.add-ons-summary :selection="$selection" /> */}
              {/* The selection as it stands, priced from the options themselves:
                every figure here was rendered onto the option it belongs to, and
                assets/js/components/add-ons.js only re-reads them as the choices
                change. The backend prices the request again when it is sent. */}
              <div className="addon-summary" data-addon-summary="" data-currency="BDT">
                <h3 className="addon-summary__title">
                  Selected add-ons
                </h3>
                <div className="addon-summary__body" data-addon-summary-body="">
                  <div className="addon-summary__group">
                    <p className="addon-summary__who">
                      Passenger 1 · Adult
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
                      Passenger 2 · Child
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
                      Passenger 3 · Infant
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
              {/* END BLADE BOUNDARY: add-ons summary */}
              <hr className="trip-summary__rule mt-4" />
              <dl className="grid gap-3 mt-4 m-0">
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
                <div className="price-row">
                  <dt>
                    Taxes &amp; Fees
                  </dt>
                  <dd className="m-0 price-row__value" data-amount="12810">
                    BDT 12,810
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Add-ons
                  </dt>
                  <dd className="m-0 price-row__value" data-addon-total="">
                    BDT 8,500
                  </dd>
                </div>
                <div className="price-row price-row--total">
                  <dt>
                    Total
                  </dt>
                  <dd className="m-0 price-row__value" data-grand-total="">
                    BDT 139,010
                  </dd>
                </div>
              </dl>
              {/* The figures are the backend's own; the browser only adds up the
                ones that were chosen. The request is priced again on submit. */}
              <p className="mt-2 mb-0 text-xs text-fg-muted">
                Our team confirms the final fare before ticketing.
              </p>
            </section>
          </aside>
          {/* END BLADE BOUNDARY: trip summary */}
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
