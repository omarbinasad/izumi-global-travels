import Link from 'next/link';
import type { Metadata } from 'next';
import AccountNav from '@/components/account/AccountNav';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/account/profile.html. */

export const metadata: Metadata = {
  title: "My profile — Izumi Global Travels",
  description: "Your details, travel preferences and account security.",
};

export default function AccountProfilePage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader signedIn />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        <div className="page-container account-layout">
          {/* BLADE BOUNDARY: account nav -> <x-account.nav :current="$current" /> */}
          <AccountNav current="profile" />
          {/* END BLADE BOUNDARY: account nav */}
          <div className="account-main">
            <h1 className="account-title">
              My Profile
            </h1>
            {/* BLADE BOUNDARY: profile head -> <x-account.profile-head :user="$user" /> */}
            <section className="review-panel profile-head">
              <span className="avatar avatar--lg" aria-hidden="true">
                TA
              </span>
              <div className="profile-head__who">
                <p className="profile-head__name">
                  Tanvir Ahmed
                </p>
                <p className="profile-head__line">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-mail" />
                  </svg>
                  tanvir.ahmed@example.com
                </p>
                <p className="profile-head__line">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-headset" />
                  </svg>
                  +81 90-1234-5678
                </p>
              </div>
              {/* The form below is always editable, so this saves it rather than
                unlocking it: a page that needs JavaScript before it can be typed
                in is a page that fails without JavaScript. */}
              <button className="btn btn--outline profile-head__action" type="submit" form="profile-form">
                {' '}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                {"Save changes "}
              </button>
            </section>
            {/* END BLADE BOUNDARY: profile head */}
            {/* BLADE BOUNDARY: profile form -> <x-account.profile-form :user="$user" />
              Laravel validates and stores this; nothing is saved in the browser. */}
            <form className="grid gap-5 mt-5" id="profile-form" method="post" action="/account/profile" data-validate="" noValidate>
              <section className="review-panel">
                <h2 className="panel-head">
                  <svg className="icon size-5" aria-hidden="true">
                    <use href="#i-user" />
                  </svg>
                  Personal Information
                </h2>
                <div className="field-grid mt-4">
                  <div className="field">
                    <label className="field__label" htmlFor="profile-first">
                      First name
                    </label>
                    {' '}
                    <input className="field__control" type="text" id="profile-first" name="first_name" defaultValue="Tanvir" autoComplete="given-name" required data-required="Enter your first name." />
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="profile-last">
                      Last name
                    </label>
                    {' '}
                    <input className="field__control" type="text" id="profile-last" name="last_name" defaultValue="Ahmed" autoComplete="family-name" required data-required="Enter your last name." />
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="profile-email">
                      Email
                    </label>
                    {' '}
                    <input className="field__control" type="email" id="profile-email" name="email" defaultValue="tanvir.ahmed@example.com" autoComplete="email" required data-required="Enter an email address we can reach you on." />
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="profile-phone">
                      Phone number
                    </label>
                    {' '}
                    <span className="phone-field">
                      {' '}
                      <span className="phone-code" data-phone-code="">
                        {' '}
                        {/* The list the platform draws for a select cannot hold a flag
                          or take the site's styling, so phone-field.js builds one from
                          these options. The select stays: it is the value store. */}
                        {' '}
                        <select className="field__control" id="profile-phone-country" name="phone_country" aria-label="Dialling code" data-phone-country="" defaultValue="81">
                          <option value="880" data-flag="bd" data-country="Bangladesh">
                            +880
                          </option>
                          <option value="91" data-flag="in" data-country="India">
                            +91
                          </option>
                          <option value="81" data-flag="jp" data-country="Japan">
                            +81
                          </option>
                          <option value="60" data-flag="my" data-country="Malaysia">
                            +60
                          </option>
                          <option value="971" data-flag="ae" data-country="United Arab Emirates">
                            +971
                          </option>
                          <option value="44" data-flag="gb" data-country="United Kingdom">
                            +44
                          </option>
                          <option value="1" data-flag="us" data-country="United States">
                            +1
                          </option>
                        </select>
                        {' '}
                      </span>
                      {' '}
                      <input className="field__control" type="tel" id="profile-phone" name="phone" defaultValue="9012345678" autoComplete="tel-national" required inputMode="numeric" pattern="[0-9]{6,15}" maxLength={15} data-digits="" data-required="Enter a phone number." data-invalid="Enter the phone number in digits only, 6 to 15 of them." />
                      {' '}
                    </span>
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="profile-dob">
                      Date of birth
                    </label>
                    <div className="field__date" data-date-field="">
                      <input className="field__control" type="date" id="profile-dob" name="date_of_birth" defaultValue="1990-05-15" autoComplete="bday" data-min-age="12" data-max-age="120" />
                    </div>
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="profile-nationality">
                      Nationality
                    </label>
                    {' '}
                    <span className="field__select" data-select="" data-select-search="">
                      {' '}
                      <select className="field__control" id="profile-nationality" name="nationality" defaultValue="BD">
                        <option value="BD">
                          Bangladesh
                        </option>
                        <option value="IN">
                          India
                        </option>
                        <option value="JP">
                          Japan
                        </option>
                        <option value="MY">
                          Malaysia
                        </option>
                        <option value="AE">
                          United Arab Emirates
                        </option>
                        <option value="GB">
                          United Kingdom
                        </option>
                        <option value="US">
                          United States
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
                    <label className="field__label" htmlFor="profile-passport">
                      Passport number
                    </label>
                    {' '}
                    <input className="field__control" type="text" id="profile-passport" name="passport_number" placeholder="e.g. A12345678" autoComplete="off" spellCheck="false" aria-describedby="profile-passport-hint" />
                    {' '}
                    <span className="field__hint" id="profile-passport-hint">
                      Kept only to fill in the passenger step; you can leave it blank.
                    </span>
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                </div>
              </section>
              <section className="review-panel">
                <h2 className="panel-head">
                  <svg className="icon size-5" aria-hidden="true">
                    <use href="#i-plane" />
                  </svg>
                  Travel Preferences
                </h2>
                <div className="field-grid mt-4">
                  <div className="field">
                    <label className="field__label" htmlFor="profile-seat">
                      Preferred seat
                    </label>
                    {' '}
                    <span className="field__select" data-select="">
                      {' '}
                      <select className="field__control" id="profile-seat" name="seat_preference" defaultValue="window">
                        <option value="window">
                          Window seat
                        </option>
                        <option value="aisle">
                          Aisle seat
                        </option>
                        <option value="any">
                          No preference
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
                    <label className="field__label" htmlFor="profile-meal">
                      Meal preference
                    </label>
                    {' '}
                    <span className="field__select" data-select="">
                      {' '}
                      <select className="field__control" id="profile-meal" name="meal_preference" defaultValue="none">
                        <option value="none">
                          No preference
                        </option>
                        <option value="regular">
                          Regular meal
                        </option>
                        <option value="halal">
                          Halal meal
                        </option>
                        <option value="vegetarian">
                          Vegetarian meal
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
                    <label className="field__label" htmlFor="profile-destination">
                      Favourite destination
                    </label>
                    {' '}
                    <span className="field__select" data-select="">
                      {' '}
                      <select className="field__control" id="profile-destination" name="favourite_destination" defaultValue="NRT">
                        <option value="NRT">
                          Japan
                        </option>
                        <option value="DXB">
                          United Arab Emirates
                        </option>
                        <option value="KUL">
                          Malaysia
                        </option>
                        <option value="LHR">
                          United Kingdom
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
                    <label className="field__label" htmlFor="profile-locale">
                      Preferred currency and language
                    </label>
                    {' '}
                    <span className="field__select" data-select="">
                      {' '}
                      <select className="field__control" id="profile-locale" name="locale" defaultValue="ja-JPY">
                        <option value="ja-JPY">
                          Japanese (JPY) / 日本語
                        </option>
                        <option value="en-BDT">
                          English (BDT)
                        </option>
                        <option value="en-USD">
                          English (USD)
                        </option>
                        <option value="bn-BDT">
                          বাংলা (BDT)
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
                </div>
                <p className="add-ons__note mt-4">
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                  {" These fill in the booking steps for you. The airline still confirms every request."}
                </p>
              </section>
            </form>
            {/* END BLADE BOUNDARY: profile form */}
            {/* BLADE BOUNDARY: security -> <x-account.security /> */}
            {/* Both of these are the backend's: the password is checked and hashed
              there, and the second factor is enrolled there. Nothing about either
              is decided in the browser. */}
            <section className="review-panel mt-5">
              <h2 className="panel-head">
                <svg className="icon size-5" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
                Security
              </h2>
              <details className="security-row">
                <summary className="security-row__summary">
                  <span className="security-row__text">
                    {' '}
                    <span className="security-row__name">
                      Change password
                    </span>
                    {' '}
                    <span className="security-row__note">
                      Update it regularly to keep the account secure.
                    </span>
                    {' '}
                  </span>
                  {' '}
                  <span className="btn btn--outline security-row__action">
                    {' '}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-lock" />
                    </svg>
                    {"Change password "}
                  </span>
                </summary>
                <form className="field-grid mt-4" method="post" action="/account/profile" data-validate="" noValidate>
                  <div className="field">
                    <label className="field__label" htmlFor="password-current">
                      Current password
                    </label>
                    {' '}
                    <input className="field__control" type="password" id="password-current" name="current_password" autoComplete="current-password" required data-required="Enter your current password." />
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="password-new">
                      New password
                    </label>
                    {' '}
                    <input className="field__control" type="password" id="password-new" name="password" autoComplete="new-password" required minLength={8} data-required="Choose a new password." data-invalid="Use at least 8 characters." />
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="password-confirm">
                      Confirm new password
                    </label>
                    {' '}
                    <input className="field__control" type="password" id="password-confirm" name="password_confirmation" autoComplete="new-password" required data-match="password-new" data-required="Type the new password again." data-invalid="The two passwords do not match." />
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field field--wide">
                    <button className="btn btn--primary" type="submit">
                      Update password
                    </button>
                  </div>
                </form>
              </details>
              <div className="security-row security-row--plain">
                <span className="security-row__text">
                  {' '}
                  <span className="security-row__name">
                    Two-factor authentication
                  </span>
                  {' '}
                  <span className="security-row__note">
                    Ask for a code from your phone as well as the password.
                  </span>
                  {' '}
                </span>
                {' '}
                <label className="switch">
                  {' '}
                  <input className="sr-only" type="checkbox" name="two_factor" value="1" form="profile-form" defaultChecked />
                  {' '}
                  <span className="switch__track" aria-hidden="true">
                    <span className="switch__dot" />
                  </span>
                  {' '}
                  <span className="sr-only">
                    Two-factor authentication
                  </span>
                  {' '}
                </label>
              </div>
            </section>
            {/* END BLADE BOUNDARY: security */}
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
