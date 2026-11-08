import Link from 'next/link';
import type { Metadata } from 'next';

/* Converted from pages/auth/reset-password.html. */

export const metadata: Metadata = {
  title: "Set a new password — Izumi Global Travels",
  description: "Choose a new password for your Izumi Global Travels account.",
};

export default function AuthResetPasswordPage() {
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
        {/* BLADE BOUNDARY: new password panel -> <x-auth.new-password-panel /> */}
        {/* Where the link in the reset email lands. Laravel owns every part of the
          security here: it signs the link, checks the token has not been used or
          expired, and applies its own password rules to what is typed. The two
          checks below only stop the obvious before a round trip.
          The token and the address ride in hidden fields because they identify the
          request, not the person: whoever holds the link can set the password,
          which is why the link is single-use and short-lived. */}
        <section className="auth-card" aria-labelledby="new-password-title">
          <h1 className="auth-card__title" id="new-password-title">
            Set a new password
          </h1>
          <p className="auth-card__lead">
            {"For "}
            <b>
              tanvir.ahmed@example.com
            </b>
            . Choose something you have not used here before.
          </p>
          <form className="auth-form" method="post" action="/auth/login" data-validate="" noValidate>
            {/* Blade: $token and $email from the signed route. */}
            <input type="hidden" name="token" value="SIGNED-TOKEN" />
            {' '}
            <input type="hidden" name="email" value="tanvir.ahmed@example.com" />
            <div className="field-grid">
              <div className="field field--wide">
                <label className="field__label" htmlFor="new-password">
                  New password
                </label>
                {' '}
                <span className="field__password">
                  {' '}
                  <input className="field__control" type="password" id="new-password" name="password" autoComplete="new-password" placeholder="At least 8 characters" required minLength={8} aria-describedby="new-password-hint" data-required="Choose a password." data-invalid="Use at least 8 characters." data-password="" />
                  {' '}
                </span>
                {' '}
                <span className="field__hint" id="new-password-hint">
                  Eight characters or more. The rest is checked when you submit.
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="field__label" htmlFor="new-password-confirm">
                  Confirm new password
                </label>
                {' '}
                <span className="field__password">
                  {' '}
                  <input className="field__control" type="password" id="new-password-confirm" name="password_confirmation" autoComplete="new-password" placeholder="Type it again" required data-match="new-password" data-required="Type the password again." data-invalid="The two passwords do not match." data-password="" />
                  {' '}
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
            </div>
            <button className="btn btn--primary auth-form__submit" type="submit">
              {" Save new password "}
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {' '}
            </button>
            <p className="auth-form__swap">
              <Link className="auth-form__link" href="/auth/login">
                Back to log in
              </Link>
            </p>
          </form>
        </section>
        {/* END BLADE BOUNDARY: new password panel */}
      </main>
      {/* END BLADE BOUNDARY: main content */}
      {/* A link, not a button: "#top" is the top of the document in HTML, so this
        returns there with the stylesheet's smooth scroll and nothing running. */}
    </>
  );
}
