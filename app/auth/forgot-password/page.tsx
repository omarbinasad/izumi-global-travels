import Link from 'next/link';
import type { Metadata } from 'next';

/* Converted from pages/auth/forgot-password.html. */

export const metadata: Metadata = {
  title: "Reset your password — Izumi Global Travels",
  description: "Ask for a link to set a new password on your Izumi Global Travels account.",
};

export default function AuthForgotPasswordPage() {
  return (
    <>
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      {/* A page of its own: the photograph is the page, and the card sits on it.
        The image is decorative — everything readable is in the markup over it. */}
      <main className="auth-screen" id="main-content">
        <img className="auth-screen__media" src="/images/loginbg.webp" alt="" width="1664" height="936" fetchPriority="high" decoding="async" />
        {' '}
        <Link className="auth-screen__logo" href="/" aria-label="Izumi Global Travels — home">
          {' '}
          <svg className="size-[34px] flex-none icon--solid" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#1668e0" />
            <path d="M9 25c6-1 11-4 15-8 1.5-1.5 3-3.4 4-5.6-.6 4.6-2.6 8.4-5.6 11.1-3.3 3-8 4.4-13.4 2.5z" fill="#fff" />
            <path d="M13 30c8 1 15-2 19-8-1 6.5-6 11-13 11-2.2 0-4.3-1-6-3z" fill="#bfd7fe" />
          </svg>
          {' '}
          <span>
            {' '}
            <span className="site-logo__name">
              Izumi
            </span>
            {' '}
            <span className="site-logo__tagline">
              Global Travels
            </span>
            {' '}
          </span>
          {' '}
        </Link>
        {/* BLADE BOUNDARY: reset panel -> <x-auth.reset-panel /> */}
        {/* The form POSTs to Laravel, which owns the whole of this: whether the
          address is on an account, the signed link, how long it lasts and how
          often one can be asked for. Nothing here sends anything, and the reply
          below is the shape of the page Laravel returns, not proof of an email. */}
        <section className="auth-card" aria-labelledby="reset-title">
          <h1 className="auth-card__title" id="reset-title">
            Reset your password
          </h1>
          <p className="auth-card__lead">
            Tell us the email address on your account and we will send you a link to set a new one.
          </p>
          <form className="auth-form" method="post" action="/auth/login" data-validate="" noValidate data-sent-panel="reset-sent">
            <div className="field-grid">
              <div className="field field--wide">
                <label className="field__label" htmlFor="reset-email">
                  Email address
                </label>
                {' '}
                <input className="field__control" type="email" id="reset-email" name="email" placeholder="name@example.com" autoComplete="email" required aria-describedby="reset-email-hint" data-required="Enter the email address you signed up with." />
                {' '}
                <span className="field__hint" id="reset-email-hint">
                  The one you use to sign in. We reply to it either way, so nothing here says whether an account exists.
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
            </div>
            <button className="btn btn--primary auth-form__submit" type="submit">
              {" Send reset link "}
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {' '}
            </button>
            <p className="auth-form__swap">
              {"Remembered it? "}
              <Link className="auth-form__link" href="/auth/login">
                Back to log in
              </Link>
            </p>
          </form>
          {/* In the markup rather than built on the fly, so the reply exists with
            or without JavaScript: Laravel answers a real POST with its own
            page, and here the card simply turns over to this one. */}
          <div className="auth-sent" id="reset-sent" tabIndex={-1} hidden>
            <span className="auth-sent__icon" aria-hidden="true">
              {' '}
              <svg className="icon size-6">
                <use href="#i-mail" />
              </svg>
              {' '}
            </span>
            <h2 className="auth-sent__title">
              Check your inbox
            </h2>
            <p className="auth-sent__text">
              If that address is on an account, a link to set a new password is on its way. It stops working an hour after it is sent.
            </p>
            <Link className="btn btn--primary auth-form__submit" href="/auth/login">
              {" Back to log in "}
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {' '}
            </Link>
          </div>
        </section>
        {/* END BLADE BOUNDARY: reset panel */}
      </main>
      {/* END BLADE BOUNDARY: main content */}
      {/* A link, not a button: "#top" is the top of the document in HTML, so this
        returns there with the stylesheet's smooth scroll and nothing running. */}
    </>
  );
}
