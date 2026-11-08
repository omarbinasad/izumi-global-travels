import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/contact.html. */

export const metadata: Metadata = {
  title: "Contact us — Izumi Global Travels",
  description: "Talk to the Izumi Global Travels team about a booking, a new trip, or a change to an existing one.",
};

export default function ContactPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* BLADE BOUNDARY: page head -> <x-ui.page-head /> */}
        <div className="page-container page-head">
          <p className="page-head__eyebrow">
            Contact us
          </p>
          <h1 className="page-head__title">
            Talk to someone about your trip
          </h1>
          <p className="page-head__text">
            Send us the details and we will come back to you within one working day. If your flight is today, call instead — that reaches us faster than any form.
          </p>
        </div>
        {/* END BLADE BOUNDARY: page head */}
        <div className="page-container contact-layout">
          {/* BLADE BOUNDARY: contact form -> <x-support.contact-form /> */}
          {/* Laravel routes this POST to the contact controller, which validates it,
            stores the enquiry and sends the notification. Nothing is sent from the
            browser, and the static prototype has nothing to post to. */}
          <form className="review-panel" method="post" action="/contact" data-validate="" noValidate>
            <h2 className="m-0 text-lg font-semibold text-fg-heading">
              Send us a message
            </h2>
            <p className="mt-1 mb-0 text-sm text-fg-muted">
              Fields marked with an asterisk are required.
            </p>
            <div className="field-grid mt-5">
              <div className="field">
                <label className="field__label" htmlFor="contact-name">
                  Your name *
                </label>
                {' '}
                <input className="field__control" type="text" id="contact-name" name="name" placeholder="Full name" autoComplete="name" required data-required="Tell us who we are replying to." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="contact-email">
                  Email address *
                </label>
                {' '}
                <input className="field__control" type="email" id="contact-email" name="email" placeholder="name@example.com" autoComplete="email" required data-required="Enter an email address we can reply to." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="contact-phone">
                  Phone number
                </label>
                {' '}
                <input className="field__control" type="tel" id="contact-phone" name="phone" placeholder="+880 1XXXXXXXXX" autoComplete="tel" />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="contact-subject">
                  What is it about? *
                </label>
                {' '}
                <span className="field__select">
                  {' '}
                  <select className="field__control" id="contact-subject" name="subject" required data-required="Choose what your message is about." defaultValue="">
                    <option value="">
                      Choose a subject
                    </option>
                    <option value="booking">
                      A booking I have made
                    </option>
                    <option value="new_trip">
                      Planning a new trip
                    </option>
                    <option value="group">
                      Group or corporate travel
                    </option>
                    <option value="refund">
                      Change or refund
                    </option>
                    <option value="other">
                      Something else
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
              <div className="field field--wide">
                <label className="field__label" htmlFor="contact-reference">
                  Booking reference
                </label>
                {' '}
                <input className="field__control" type="text" id="contact-reference" name="booking_reference" placeholder="IGT-BR-000000" aria-describedby="contact-reference-hint" autoComplete="off" spellCheck="false" />
                {' '}
                <span className="field__hint" id="contact-reference-hint">
                  Only if your message is about a booking you have already made.
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="field__label" htmlFor="contact-message">
                  Message *
                </label>
                {' '}
                <textarea className="field__control field__control--area" id="contact-message" name="message" rows={6} placeholder="Dates, route, number of travellers — whatever you have so far." required data-required="Tell us what you need, even briefly." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
            </div>
            <div className="field mt-5">
              <label className="flex items-start gap-3 text-sm text-fg">
                {' '}
                <input type="checkbox" name="contact_consent" value="1" required data-required="Tick the box so we can reply to your enquiry." />
                {" I agree that Izumi Global Travels may use these details to answer my enquiry. * "}
              </label>
              {' '}
              <span className="field__error" data-field-error="" hidden />
            </div>
            <div className="mt-6">
              <button className="btn btn--primary" type="submit">
                {" Send message "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </button>
            </div>
          </form>
          {/* END BLADE BOUNDARY: contact form */}
          {/* BLADE BOUNDARY: contact details -> <x-support.contact-details /> */}
          <aside className="grid gap-5">
            {/* @content-pending: placeholder address, number and inbox. Swap for
              the real ones before launch. */}
            <section className="review-panel">
              <h2 className="m-0 text-lg font-semibold text-fg-heading">
                Reach us directly
              </h2>
              <dl className="contact-details mt-4">
                <div className="contact-detail">
                  <span className="rule-icon rule-icon--brand" aria-hidden="true">
                    {' '}
                    <svg className="icon">
                      <use href="#i-pin" />
                    </svg>
                    {' '}
                  </span>
                  <div>
                    <dt className="contact-detail__label">
                      Office
                    </dt>
                    <dd className="contact-detail__value">
                      Level 4, 27 Gulshan Avenue
                      <br />
                      Gulshan 1, Dhaka 1212
                      <br />
                      Bangladesh
                    </dd>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="rule-icon rule-icon--brand" aria-hidden="true">
                    {' '}
                    <svg className="icon">
                      <use href="#i-headset" />
                    </svg>
                    {' '}
                  </span>
                  <div>
                    <dt className="contact-detail__label">
                      Phone
                    </dt>
                    <dd className="contact-detail__value">
                      <a href="tel:+8802XXXXXXXX">
                        +880 2 XXXX XXXX
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="rule-icon rule-icon--brand" aria-hidden="true">
                    {' '}
                    <svg className="icon">
                      <use href="#i-mail" />
                    </svg>
                    {' '}
                  </span>
                  <div>
                    <dt className="contact-detail__label">
                      Email
                    </dt>
                    <dd className="contact-detail__value">
                      <a href="mailto:hello@izumiglobaltravels.com">
                        hello@izumiglobaltravels.com
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="rule-icon rule-icon--brand" aria-hidden="true">
                    {' '}
                    <svg className="icon">
                      <use href="#i-clock" />
                    </svg>
                    {' '}
                  </span>
                  <div>
                    <dt className="contact-detail__label">
                      Hours
                    </dt>
                    <dd className="contact-detail__value">
                      Saturday to Thursday, 10:00 – 19:00
                      <br />
                      Closed on Friday and public holidays
                    </dd>
                  </div>
                </div>
              </dl>
            </section>
            <section className="review-panel">
              <h2 className="m-0 text-base font-semibold text-fg-heading">
                Already booked?
              </h2>
              <p className="mt-2 mb-0 text-sm text-fg-muted">
                Quote your booking reference and we can pick the enquiry up without asking you to repeat yourself.
              </p>
              <Link className="add-ons__link mt-4" href="/support/help-centre">
                {" Visit the help centre "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </Link>
            </section>
          </aside>
          {/* END BLADE BOUNDARY: contact details */}
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
