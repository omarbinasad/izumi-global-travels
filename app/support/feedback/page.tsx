import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/support/feedback.html. */

export const metadata: Metadata = {
  title: "Feedback — Izumi Global Travels",
  description: "Tell Izumi Global Travels how a booking went, and what we should change.",
};

export default function SupportFeedbackPage() {
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
            Feedback
          </p>
          <h1 className="page-head__title">
            Tell us how we did
          </h1>
          <p className="page-head__text">
            Good or bad, we read every message. It is the fastest way to change how we book, what we quote and how we answer.
          </p>
        </div>
        {/* END BLADE BOUNDARY: page head */}
        <div className="page-container contact-layout">
          {/* BLADE BOUNDARY: feedback form -> <x-support.feedback-form /> */}
          {/* Laravel routes this POST to the feedback controller, which validates it,
            stores the message and notifies the team. Nothing is sent from the
            browser, and the static prototype has nothing to post to. */}
          <form className="review-panel" method="post" action="/support/feedback-thanks" data-validate="" noValidate>
            <h2 className="m-0 text-lg font-semibold text-fg-heading">
              Share your feedback
            </h2>
            <p className="mt-1 mb-0 text-sm text-fg-muted">
              Fields marked with an asterisk are required.
            </p>
            <fieldset className="field rating mt-5" role="radiogroup" aria-describedby="rating-hint">
              <legend className="field__label">
                How was your experience? *
              </legend>
              <p className="field__hint m-0" id="rating-hint">
                One is poor, five is excellent.
              </p>
              <div className="rating__scale">
                <label className="rating__step">
                  {' '}
                  <input className="sr-only" type="radio" name="rating" value="1" required data-required="Choose a rating from one to five." />
                  {' '}
                  <span className="rating__mark">
                    1
                  </span>
                  {' '}
                  <span className="rating__word">
                    Poor
                  </span>
                  {' '}
                </label>
                {' '}
                <label className="rating__step">
                  {' '}
                  <input className="sr-only" type="radio" name="rating" value="2" />
                  {' '}
                  <span className="rating__mark">
                    2
                  </span>
                  {' '}
                  <span className="rating__word">
                    Fair
                  </span>
                  {' '}
                </label>
                {' '}
                <label className="rating__step">
                  {' '}
                  <input className="sr-only" type="radio" name="rating" value="3" />
                  {' '}
                  <span className="rating__mark">
                    3
                  </span>
                  {' '}
                  <span className="rating__word">
                    Good
                  </span>
                  {' '}
                </label>
                {' '}
                <label className="rating__step">
                  {' '}
                  <input className="sr-only" type="radio" name="rating" value="4" />
                  {' '}
                  <span className="rating__mark">
                    4
                  </span>
                  {' '}
                  <span className="rating__word">
                    Very good
                  </span>
                  {' '}
                </label>
                {' '}
                <label className="rating__step">
                  {' '}
                  <input className="sr-only" type="radio" name="rating" value="5" />
                  {' '}
                  <span className="rating__mark">
                    5
                  </span>
                  {' '}
                  <span className="rating__word">
                    Excellent
                  </span>
                  {' '}
                </label>
              </div>
              <span className="field__error" data-field-error="" hidden />
            </fieldset>
            <div className="field-grid mt-5">
              <div className="field">
                <label className="field__label" htmlFor="feedback-name">
                  Your name *
                </label>
                {' '}
                <input className="field__control" type="text" id="feedback-name" name="name" placeholder="Full name" autoComplete="name" required data-required="Tell us who the feedback is from." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="feedback-email">
                  Email address *
                </label>
                {' '}
                <input className="field__control" type="email" id="feedback-email" name="email" placeholder="name@example.com" autoComplete="email" required data-required="Enter an email address we can reply to." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="feedback-topic">
                  What is it about? *
                </label>
                {' '}
                <span className="field__select">
                  {' '}
                  <select className="field__control" id="feedback-topic" name="topic" required data-required="Choose what your feedback is about." defaultValue="">
                    <option value="">
                      Choose a topic
                    </option>
                    <option value="booking">
                      Booking a flight
                    </option>
                    <option value="support">
                      Talking to our team
                    </option>
                    <option value="website">
                      This website
                    </option>
                    <option value="add_ons">
                      Seats, meals and extras
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
              <div className="field">
                <label className="field__label" htmlFor="feedback-reference">
                  Booking reference
                </label>
                {' '}
                <input className="field__control" type="text" id="feedback-reference" name="booking_reference" placeholder="IGT-BR-000000" aria-describedby="feedback-reference-hint" autoComplete="off" spellCheck="false" />
                {' '}
                <span className="field__hint" id="feedback-reference-hint">
                  Only if the feedback is about a trip you booked with us.
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="field__label" htmlFor="feedback-message">
                  Your feedback *
                </label>
                {' '}
                <textarea className="field__control field__control--area" id="feedback-message" name="message" rows={6} placeholder="What worked, what did not, and what you would change." required data-required="Tell us what happened." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="flex items-start gap-3 text-sm text-fg">
                  {' '}
                  <input type="checkbox" name="contact_consent" value="1" />
                  {" You may contact me about this feedback. "}
                </label>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
            </div>
            <button className="btn btn--primary mt-6" type="submit">
              {" Send feedback "}
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {' '}
            </button>
          </form>
          {/* END BLADE BOUNDARY: feedback form */}
          {/* BLADE BOUNDARY: feedback aside -> <x-support.feedback-aside /> */}
          <aside className="grid gap-5">
            <section className="review-panel">
              <h2 className="m-0 text-lg font-semibold text-fg-heading">
                Need an answer, not a comment?
              </h2>
              <p className="mt-2 mb-0 text-sm text-fg-muted">
                Feedback is read, but it is not a support queue. If something needs fixing on a live booking, the contact page reaches the team that can act on it.
              </p>
              <Link className="btn btn--outline mt-4" href="/contact">
                {" Contact us "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </Link>
            </section>
            <section className="review-panel">
              <h2 className="m-0 text-lg font-semibold text-fg-heading">
                What happens to it
              </h2>
              <ul className="grid gap-3 mt-3 m-0 p-0 list-none text-sm text-fg-muted">
                <li className="flex items-start gap-3">
                  <svg className="icon size-4 mt-1 text-primary" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  {" Every message is read by the team that handles bookings."}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="icon size-4 mt-1 text-primary" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  {" We reply when you ask us to, usually within two working days."}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="icon size-4 mt-1 text-primary" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  {" Nothing is published without your permission."}
                </li>
              </ul>
            </section>
          </aside>
          {/* END BLADE BOUNDARY: feedback aside */}
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
