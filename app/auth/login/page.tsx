import Link from 'next/link';
import type { Metadata } from 'next';

/* Converted from pages/auth/login.html. */

export const metadata: Metadata = {
  title: "Log in or create an account — Izumi Global Travels",
  description: "Log in to Izumi Global Travels or create an account to book faster and follow every request.",
};

export default function AuthLoginPage() {
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
        {/* BLADE BOUNDARY: auth panel -> <x-auth.panel :tab="$tab" /> */}
        {/* Both forms POST to Laravel, which authenticates, applies its own rate
          limiting and returns the errors. Nothing here signs anyone in: there is
          no session, no token and no credential in this page, and the static
          prototype has nothing to post to. Blade adds @csrf to each form. */}
        <section className="auth-card" aria-labelledby="auth-title">
          <h1 className="auth-card__title" id="auth-title">
            Welcome to Izumi
          </h1>
          <p className="auth-card__lead">
            Book faster and manage your travel requests in one place.
          </p>
          {/* Radios, not buttons: the two forms swap with no JavaScript, and the
            chosen tab is a real form value the backend can render back. */}
          <input className="auth-tab__input sr-only" type="radio" name="auth-tab" id="auth-tab-login" defaultChecked />
          {' '}
          <input className="auth-tab__input sr-only" type="radio" name="auth-tab" id="auth-tab-register" />
          <div className="auth-tabs">
            <label className="auth-tab" htmlFor="auth-tab-login">
              Log in
            </label>
            {' '}
            <label className="auth-tab" htmlFor="auth-tab-register">
              Create account
            </label>
          </div>
          {/* ----------------------------------------------------------- log in */}
          <form className="auth-form auth-form--login" method="post" action="/auth/login" data-validate="" noValidate>
            <div className="field-grid">
              <div className="field field--wide">
                <label className="field__label" htmlFor="login-email">
                  Email address
                </label>
                {' '}
                <input className="field__control" type="email" id="login-email" name="email" placeholder="name@example.com" autoComplete="email" required data-required="Enter the email address you signed up with." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="field__label" htmlFor="login-password">
                  Password
                </label>
                {' '}
                <span className="field__password">
                  {' '}
                  <input className="field__control" type="password" id="login-password" name="password" autoComplete="current-password" placeholder="Your password" required data-required="Enter your password." data-password="" />
                  {' '}
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
            </div>
            <div className="auth-form__row">
              <label className="auth-form__remember">
                {' '}
                <input type="checkbox" name="remember" value="1" />
                {" Keep me signed in "}
              </label>
              {' '}
              <Link className="auth-form__link" href="/auth/forgot-password">
                Forgotten your password?
              </Link>
            </div>
            <button className="btn btn--primary auth-form__submit" type="submit">
              {" Log in "}
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {' '}
            </button>
            <p className="auth-form__swap">
              {"New here? "}
              <label className="auth-form__link" htmlFor="auth-tab-register">
                Create an account
              </label>
            </p>
          </form>
          {/* --------------------------------------------------- create account */}
          <form className="auth-form auth-form--register" method="post" action="/auth/login" data-validate="" noValidate>
            <div className="field-grid">
              <div className="field">
                <label className="field__label" htmlFor="register-name">
                  Full name
                </label>
                {' '}
                <input className="field__control" type="text" id="register-name" name="name" placeholder="Your name" autoComplete="name" required data-required="Tell us what to call you." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="register-phone">
                  Phone number
                </label>
                {' '}
                <input className="field__control" type="tel" id="register-phone" name="phone" placeholder="1XXXXXXXXX" autoComplete="tel-national" required inputMode="numeric" pattern="[0-9]{6,15}" maxLength={15} data-digits="" data-required="Enter a phone number we can reach you on." data-invalid="Enter the phone number in digits only, 6 to 15 of them." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="field__label" htmlFor="register-email">
                  Email address
                </label>
                {' '}
                <input className="field__control" type="email" id="register-email" name="email" placeholder="name@example.com" autoComplete="email" required data-required="Enter an email address we can send the booking to." />
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="field__label" htmlFor="register-password">
                  Password
                </label>
                {' '}
                <span className="field__password">
                  {' '}
                  <input className="field__control" type="password" id="register-password" name="password" autoComplete="new-password" placeholder="At least 8 characters" required minLength={8} aria-describedby="register-password-hint" data-required="Choose a password." data-invalid="Use at least 8 characters." data-password="" />
                  {' '}
                </span>
                {' '}
                <span className="field__hint" id="register-password-hint">
                  Eight characters or more. The rest is checked when you submit.
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="field__label" htmlFor="register-confirm">
                  Confirm password
                </label>
                {' '}
                <span className="field__password">
                  {' '}
                  <input className="field__control" type="password" id="register-confirm" name="password_confirmation" autoComplete="new-password" placeholder="Type it again" required data-match="register-password" data-required="Type the password again." data-invalid="The two passwords do not match." data-password="" />
                  {' '}
                </span>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
              <div className="field field--wide">
                <label className="auth-form__remember auth-form__remember--top">
                  {' '}
                  <input type="checkbox" name="terms" value="1" required data-required="Accept the terms to create an account." />
                  {' '}
                  <span>
                    {" I accept the "}
                    <Link href="/legal/terms">
                      Terms &amp; Conditions
                    </Link>
                    {" and the "}
                    <Link href="/legal/privacy-policy">
                      Privacy Policy
                    </Link>
                    {". "}
                  </span>
                  {' '}
                </label>
                {' '}
                <span className="field__error" data-field-error="" hidden />
              </div>
            </div>
            <button className="btn btn--primary auth-form__submit" type="submit">
              {" Create account "}
              <svg className="icon size-4" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
              {' '}
            </button>
            <p className="auth-form__swap">
              {"Already have an account? "}
              <label className="auth-form__link" htmlFor="auth-tab-login">
                Log in
              </label>
            </p>
          </form>
        </section>
        {/* END BLADE BOUNDARY: auth panel */}
      </main>
      {/* END BLADE BOUNDARY: main content */}
      {/* A link, not a button: "#top" is the top of the document in HTML, so this
        returns there with the stylesheet's smooth scroll and nothing running. */}
    </>
  );
}
