import Link from 'next/link';
import type { Metadata } from 'next';
import BookingSteps from '@/components/booking/BookingSteps';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/flights/passengers.html. */

export const metadata: Metadata = {
  title: "Passenger details — Izumi Global Travels",
  description: "Enter the traveller details for your booking — name, document and contact information.",
  robots: { index: false },
};

export default function FlightsPassengersPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader bordered />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* ====================================================================
          Step two. The offer is already chosen; this page only collects the
          people travelling on it. Nothing here is validated for real: Laravel
          form requests are the authority, and the passport number is never
          logged or kept in the browser.
          ==================================================================== */}
        <div className="page-container pt-6" data-offer-id="off_1">
          <Link className="review-back" href="/flights/flight-details">
            {' '}
            <svg className="icon size-4" aria-hidden="true">
              <use href="#i-arrow-left" />
            </svg>
            {" Back to flight details "}
          </Link>
          {/* BLADE BOUNDARY: booking steps -> <x-booking.steps current="2" /> */}
          <BookingSteps current={2} />
          {/* END BLADE BOUNDARY: booking steps */}
        </div>
        <div className="page-container review-layout">
          <div className="grid gap-5">
            {/* BLADE BOUNDARY: passenger form -> <x-booking.passenger-form /> */}
            {/* Blade replaces this with a POST to the passengers route and turns the
              Continue link at the foot of the page into its submit button. It stays
              a plain anchor here so the static prototype can be clicked through. */}
            <form className="review-panel" id="passenger-form" action="/flights/add-ons" data-validate="" noValidate>
              {/* BLADE BOUNDARY: contact details -> <x-booking.contact-details /> */}
              {/* One set of details for the whole booking, not one per traveller:
                this is the address and number the airline and we write to. */}
              <section aria-labelledby="contact-title">
                <h1 className="m-0 text-2xl font-bold tracking-tight text-fg-heading" id="contact-title">
                  Contact Details
                </h1>
                <p className="mt-1 mb-0 text-sm text-fg-muted">
                  Where the confirmation goes, and how we reach you if the flight changes.
                </p>
                <div className="field-grid mt-5">
                  <div className="field">
                    <label className="field__label" htmlFor="contact-email">
                      Email Address
                    </label>
                    {' '}
                    <input className="field__control" type="email" id="contact-email" name="contact_email" placeholder="name@example.com" autoComplete="email" required data-required="Enter an email address we can reach you on." />
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="contact-phone-number">
                      Phone Number
                    </label>
                    {' '}
                    <span className="phone-field">
                      {' '}
                      <span className="phone-code" data-phone-code="">
                        {' '}
                        {/* The list the platform draws for a select cannot hold a flag
                          or take the site's styling, so phone-field.js builds one from
                          these options. The select stays: it is the value store, and
                          it is what works with no JavaScript. */}
                        {' '}
                        <select className="field__control" id="contact-phone-country" name="contact_phone_country" aria-label="Dialling code" data-phone-country="" defaultValue="880">
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
                      <input className="field__control" type="tel" id="contact-phone-number" name="contact_phone_number" placeholder="1XXXXXXXXX" autoComplete="tel-national" required inputMode="numeric" pattern="[0-9]{6,15}" maxLength={15} data-digits="" data-required="Enter a phone number." data-invalid="Enter the phone number in digits only, 6 to 15 of them." />
                      {' '}
                    </span>
                    {' '}
                    <span className="field__hint">
                      Choose a country code, then enter the local number.
                    </span>
                    {' '}
                    <span className="field__error" data-field-error="" hidden />
                  </div>
                </div>
              </section>
              {/* END BLADE BOUNDARY: contact details */}
              <hr className="pax-rule" />
              {/* BLADE BOUNDARY: passenger list -> <x-booking.passenger-list :party="$party" /> */}
              {/* One panel per traveller. They are details elements, so the party
                folds down to a readable list and opens with nothing running. */}
              <section aria-labelledby="passengers-title">
                <h2 className="m-0 text-xl font-bold tracking-tight text-fg-heading" id="passengers-title">
                  Passenger Details
                </h2>
                <p className="mt-1 mb-0 text-sm text-fg-muted">
                  1 Adult, 1 Child, 1 Infant
                </p>
                <div className="pax-list">
                  <details className="pax-card" open>
                    <summary className="pax-card__head">
                      <span className="pax-card__who">
                        {' '}
                        <span className="pax-card__name">
                          Passenger 1
                        </span>
                        {' '}
                        <span className="pax-card__type">
                          Adult
                        </span>
                        {' '}
                      </span>
                      {' '}
                      <svg className="icon size-5 pax-card__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                    </summary>
                    <fieldset className="pax-card__body">
                      <legend className="sr-only">
                        Passenger 1, adult
                      </legend>
                      {/* The passenger type is a code the backend set, not something
                        the traveller picks on this page. */}
                      <input type="hidden" name="passengers[0][type]" value="ADT" />
                      <div className="field-grid">
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="given-name-0">
                              First Name/Given Name
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="given-name-0">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="How to enter a given name">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="given-name-guidance-0">
                                {' '}
                                <span className="hint__title">
                                  Passenger Name Guidelines
                                </span>
                                {' '}
                                <span className="hint__example">
                                  {' '}
                                  <span className="hint__photo" aria-hidden="true">
                                    {' '}
                                    <svg className="icon size-6">
                                      <use href="#i-user" />
                                    </svg>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Given names
                                      </span>
                                      {' '}
                                      <span className="hint__value hint__value--boxed">
                                        MARY ISABELLE
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Surname
                                      </span>
                                      {' '}
                                      <span className="hint__value">
                                        SMITH
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Enter every given name shown on your passport, in the same order. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          <input className="field__control" type="text" id="given-name-0" name="passengers[0][given_name]" placeholder="Enter given name" autoComplete="given-name" aria-describedby="given-name-guidance-0" required autoCapitalize="characters" spellCheck="false" data-uppercase="" data-allow="name" pattern="[A-Za-z]+(?:(?:[' ]|\. ?)[A-Za-z]+)*" data-required="Enter the given name exactly as it appears on the travel document." data-invalid="A name holds letters, with a space, a dot or an apostrophe between them." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="family-name-0">
                              Last Name/Surname
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="family-name-0">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="How to enter a surname">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="family-name-guidance-0">
                                {' '}
                                <span className="hint__title">
                                  Passenger Name Guidelines
                                </span>
                                {' '}
                                <span className="hint__example">
                                  {' '}
                                  <span className="hint__photo" aria-hidden="true">
                                    {' '}
                                    <svg className="icon size-6">
                                      <use href="#i-user" />
                                    </svg>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Given names
                                      </span>
                                      {' '}
                                      <span className="hint__value">
                                        MARY ISABELLE
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Surname
                                      </span>
                                      {' '}
                                      <span className="hint__value hint__value--boxed">
                                        SMITH
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Please enter your surname exactly as it appears on your passport or travel document. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          <input className="field__control" type="text" id="family-name-0" name="passengers[0][family_name]" placeholder="Enter surname" autoComplete="family-name" aria-describedby="family-name-guidance-0" required autoCapitalize="characters" spellCheck="false" data-uppercase="" data-allow="name" pattern="[A-Za-z]+(?:(?:[' ]|\. ?)[A-Za-z]+)*" data-required="Enter the surname exactly as it appears on the travel document." data-invalid="A name holds letters, with a space, a dot or an apostrophe between them." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="gender-0">
                            Gender
                          </label>
                          {' '}
                          <span className="field__select" data-select="">
                            {' '}
                            <select className="field__control" id="gender-0" name="passengers[0][gender]" required data-required="Choose a gender." defaultValue="">
                              <option value="">
                                Select gender
                              </option>
                              <option value="M">
                                Male
                              </option>
                              <option value="F">
                                Female
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
                          <label className="field__label" htmlFor="dob-0">
                            Date of Birth
                          </label>
                          {/* The ages this passenger type allows, which is what limits
                            the years the picker offers. Blade renders these from the
                            type above; the form request is what enforces the policy. */}
                          <div className="field__date" data-date-field="">
                            <input className="field__control" type="date" id="dob-0" name="passengers[0][date_of_birth]" autoComplete="bday" required data-min-age="12" data-max-age="120" data-required="Enter the date of birth." data-invalid="Enter a date of birth for an adult passenger." />
                          </div>
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="nationality-0">
                            Nationality
                          </label>
                          {' '}
                          <span className="field__select" data-select="" data-select-search="">
                            {' '}
                            {/* A short list stands in for the full ISO 3166-1 set the
                              backend renders. The value submitted is the alpha-2 code. */}
                            {' '}
                            <select className="field__control" id="nationality-0" name="passengers[0][nationality]" autoComplete="country" required data-required="Choose a nationality." defaultValue="">
                              <option value="">
                                Select nationality
                              </option>
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
                        <div className="field">
                          <label className="field__label" htmlFor="document-number-0">
                            Passport Number
                          </label>
                          {' '}
                          <input className="field__control" type="text" id="document-number-0" name="passengers[0][document_number]" placeholder="Enter passport number" autoComplete="off" spellCheck="false" required autoCapitalize="characters" data-uppercase="" data-allow="document" pattern="[A-Za-z0-9]{5,15}" maxLength={15} data-required="Enter the passport number." data-invalid="A passport number is 5 to 15 letters and digits, nothing else." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="document-expiry-0">
                              Passport Expiry Date
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="document-expiry-0">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="About passport expiry">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="document-expiry-guidance-0">
                                {' '}
                                <span className="hint__title">
                                  Passport validity
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Many destinations require a passport valid for six months beyond your return date. The airline checks this at the airport. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          {/* A passport that expires today cannot be travelled on, so
                            the earliest date on offer is tomorrow. */}
                          <div className="field__date" data-date-field="">
                            <input className="field__control" type="date" id="document-expiry-0" name="passengers[0][document_expiry]" aria-describedby="document-expiry-guidance-0" required data-min-days="1" data-required="Enter the passport expiry date." data-invalid="The passport must be valid beyond today." />
                          </div>
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="document-photo-0">
                            {" Upload Passport Photo "}
                            <span className="field__optional">
                              (Optional)
                            </span>
                            {' '}
                          </label>
                          {' '}
                          <label className="field__control field__file" data-file-field="">
                            {' '}
                            <span className="field__file-name" data-file-name="">
                              Upload file (JPG, PNG)
                            </span>
                            {' '}
                            <svg className="icon size-5" aria-hidden="true">
                              <use href="#i-image" />
                            </svg>
                            {' '}
                            <input className="sr-only" type="file" id="document-photo-0" name="passengers[0][document_photo]" accept="image/jpeg,image/png" />
                            {' '}
                          </label>
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                      </div>
                    </fieldset>
                  </details>
                  <details className="pax-card">
                    <summary className="pax-card__head">
                      <span className="pax-card__who">
                        {' '}
                        <span className="pax-card__name">
                          Passenger 2
                        </span>
                        {' '}
                        <span className="pax-card__type">
                          Child
                        </span>
                        {' '}
                      </span>
                      {' '}
                      <svg className="icon size-5 pax-card__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                    </summary>
                    <fieldset className="pax-card__body">
                      <legend className="sr-only">
                        Passenger 2, child
                      </legend>
                      {/* The passenger type is a code the backend set, not something
                        the traveller picks on this page. */}
                      <input type="hidden" name="passengers[1][type]" value="CHD" />
                      <div className="field-grid">
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="given-name-1">
                              First Name/Given Name
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="given-name-1">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="How to enter a given name">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="given-name-guidance-1">
                                {' '}
                                <span className="hint__title">
                                  Passenger Name Guidelines
                                </span>
                                {' '}
                                <span className="hint__example">
                                  {' '}
                                  <span className="hint__photo" aria-hidden="true">
                                    {' '}
                                    <svg className="icon size-6">
                                      <use href="#i-user" />
                                    </svg>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Given names
                                      </span>
                                      {' '}
                                      <span className="hint__value hint__value--boxed">
                                        MARY ISABELLE
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Surname
                                      </span>
                                      {' '}
                                      <span className="hint__value">
                                        SMITH
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Enter every given name shown on your passport, in the same order. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          <input className="field__control" type="text" id="given-name-1" name="passengers[1][given_name]" placeholder="Enter given name" autoComplete="given-name" aria-describedby="given-name-guidance-1" required autoCapitalize="characters" spellCheck="false" data-uppercase="" data-allow="name" pattern="[A-Za-z]+(?:(?:[' ]|\. ?)[A-Za-z]+)*" data-required="Enter the given name exactly as it appears on the travel document." data-invalid="A name holds letters, with a space, a dot or an apostrophe between them." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="family-name-1">
                              Last Name/Surname
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="family-name-1">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="How to enter a surname">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="family-name-guidance-1">
                                {' '}
                                <span className="hint__title">
                                  Passenger Name Guidelines
                                </span>
                                {' '}
                                <span className="hint__example">
                                  {' '}
                                  <span className="hint__photo" aria-hidden="true">
                                    {' '}
                                    <svg className="icon size-6">
                                      <use href="#i-user" />
                                    </svg>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Given names
                                      </span>
                                      {' '}
                                      <span className="hint__value">
                                        MARY ISABELLE
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Surname
                                      </span>
                                      {' '}
                                      <span className="hint__value hint__value--boxed">
                                        SMITH
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Please enter your surname exactly as it appears on your passport or travel document. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          <input className="field__control" type="text" id="family-name-1" name="passengers[1][family_name]" placeholder="Enter surname" autoComplete="family-name" aria-describedby="family-name-guidance-1" required autoCapitalize="characters" spellCheck="false" data-uppercase="" data-allow="name" pattern="[A-Za-z]+(?:(?:[' ]|\. ?)[A-Za-z]+)*" data-required="Enter the surname exactly as it appears on the travel document." data-invalid="A name holds letters, with a space, a dot or an apostrophe between them." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="gender-1">
                            Gender
                          </label>
                          {' '}
                          <span className="field__select" data-select="">
                            {' '}
                            <select className="field__control" id="gender-1" name="passengers[1][gender]" required data-required="Choose a gender." defaultValue="">
                              <option value="">
                                Select gender
                              </option>
                              <option value="M">
                                Male
                              </option>
                              <option value="F">
                                Female
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
                          <label className="field__label" htmlFor="dob-1">
                            Date of Birth
                          </label>
                          {/* The ages this passenger type allows, which is what limits
                            the years the picker offers. Blade renders these from the
                            type above; the form request is what enforces the policy. */}
                          <div className="field__date" data-date-field="">
                            <input className="field__control" type="date" id="dob-1" name="passengers[1][date_of_birth]" autoComplete="bday" required data-min-age="2" data-max-age="11" data-required="Enter the date of birth." data-invalid="A child is 2 to 11 years old on the day of travel." />
                          </div>
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="nationality-1">
                            Nationality
                          </label>
                          {' '}
                          <span className="field__select" data-select="" data-select-search="">
                            {' '}
                            {/* A short list stands in for the full ISO 3166-1 set the
                              backend renders. The value submitted is the alpha-2 code. */}
                            {' '}
                            <select className="field__control" id="nationality-1" name="passengers[1][nationality]" autoComplete="country" required data-required="Choose a nationality." defaultValue="">
                              <option value="">
                                Select nationality
                              </option>
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
                        <div className="field">
                          <label className="field__label" htmlFor="document-number-1">
                            Passport Number
                          </label>
                          {' '}
                          <input className="field__control" type="text" id="document-number-1" name="passengers[1][document_number]" placeholder="Enter passport number" autoComplete="off" spellCheck="false" required autoCapitalize="characters" data-uppercase="" data-allow="document" pattern="[A-Za-z0-9]{5,15}" maxLength={15} data-required="Enter the passport number." data-invalid="A passport number is 5 to 15 letters and digits, nothing else." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="document-expiry-1">
                              Passport Expiry Date
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="document-expiry-1">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="About passport expiry">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="document-expiry-guidance-1">
                                {' '}
                                <span className="hint__title">
                                  Passport validity
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Many destinations require a passport valid for six months beyond your return date. The airline checks this at the airport. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          {/* A passport that expires today cannot be travelled on, so
                            the earliest date on offer is tomorrow. */}
                          <div className="field__date" data-date-field="">
                            <input className="field__control" type="date" id="document-expiry-1" name="passengers[1][document_expiry]" aria-describedby="document-expiry-guidance-1" required data-min-days="1" data-required="Enter the passport expiry date." data-invalid="The passport must be valid beyond today." />
                          </div>
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="document-photo-1">
                            {" Upload Passport Photo "}
                            <span className="field__optional">
                              (Optional)
                            </span>
                            {' '}
                          </label>
                          {' '}
                          <label className="field__control field__file" data-file-field="">
                            {' '}
                            <span className="field__file-name" data-file-name="">
                              Upload file (JPG, PNG)
                            </span>
                            {' '}
                            <svg className="icon size-5" aria-hidden="true">
                              <use href="#i-image" />
                            </svg>
                            {' '}
                            <input className="sr-only" type="file" id="document-photo-1" name="passengers[1][document_photo]" accept="image/jpeg,image/png" />
                            {' '}
                          </label>
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                      </div>
                    </fieldset>
                  </details>
                  <details className="pax-card">
                    <summary className="pax-card__head">
                      <span className="pax-card__who">
                        {' '}
                        <span className="pax-card__name">
                          Passenger 3
                        </span>
                        {' '}
                        <span className="pax-card__type">
                          Infant
                        </span>
                        {' '}
                      </span>
                      {' '}
                      <svg className="icon size-5 pax-card__chevron" aria-hidden="true">
                        <use href="#i-chevron-down" />
                      </svg>
                    </summary>
                    <fieldset className="pax-card__body">
                      <legend className="sr-only">
                        Passenger 3, infant
                      </legend>
                      {/* The passenger type is a code the backend set, not something
                        the traveller picks on this page. */}
                      <input type="hidden" name="passengers[2][type]" value="INF" />
                      <div className="field-grid">
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="given-name-2">
                              First Name/Given Name
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="given-name-2">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="How to enter a given name">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="given-name-guidance-2">
                                {' '}
                                <span className="hint__title">
                                  Passenger Name Guidelines
                                </span>
                                {' '}
                                <span className="hint__example">
                                  {' '}
                                  <span className="hint__photo" aria-hidden="true">
                                    {' '}
                                    <svg className="icon size-6">
                                      <use href="#i-user" />
                                    </svg>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Given names
                                      </span>
                                      {' '}
                                      <span className="hint__value hint__value--boxed">
                                        MARY ISABELLE
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Surname
                                      </span>
                                      {' '}
                                      <span className="hint__value">
                                        SMITH
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Enter every given name shown on your passport, in the same order. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          <input className="field__control" type="text" id="given-name-2" name="passengers[2][given_name]" placeholder="Enter given name" autoComplete="given-name" aria-describedby="given-name-guidance-2" required autoCapitalize="characters" spellCheck="false" data-uppercase="" data-allow="name" pattern="[A-Za-z]+(?:(?:[' ]|\. ?)[A-Za-z]+)*" data-required="Enter the given name exactly as it appears on the travel document." data-invalid="A name holds letters, with a space, a dot or an apostrophe between them." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="family-name-2">
                              Last Name/Surname
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="family-name-2">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="How to enter a surname">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="family-name-guidance-2">
                                {' '}
                                <span className="hint__title">
                                  Passenger Name Guidelines
                                </span>
                                {' '}
                                <span className="hint__example">
                                  {' '}
                                  <span className="hint__photo" aria-hidden="true">
                                    {' '}
                                    <svg className="icon size-6">
                                      <use href="#i-user" />
                                    </svg>
                                    {' '}
                                  </span>
                                  {' '}
                                  <span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Given names
                                      </span>
                                      {' '}
                                      <span className="hint__value">
                                        MARY ISABELLE
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                    <span className="hint__row">
                                      {' '}
                                      <span className="hint__key">
                                        Surname
                                      </span>
                                      {' '}
                                      <span className="hint__value hint__value--boxed">
                                        SMITH
                                      </span>
                                      {' '}
                                    </span>
                                    {' '}
                                  </span>
                                  {' '}
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Please enter your surname exactly as it appears on your passport or travel document. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          <input className="field__control" type="text" id="family-name-2" name="passengers[2][family_name]" placeholder="Enter surname" autoComplete="family-name" aria-describedby="family-name-guidance-2" required autoCapitalize="characters" spellCheck="false" data-uppercase="" data-allow="name" pattern="[A-Za-z]+(?:(?:[' ]|\. ?)[A-Za-z]+)*" data-required="Enter the surname exactly as it appears on the travel document." data-invalid="A name holds letters, with a space, a dot or an apostrophe between them." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="gender-2">
                            Gender
                          </label>
                          {' '}
                          <span className="field__select" data-select="">
                            {' '}
                            <select className="field__control" id="gender-2" name="passengers[2][gender]" required data-required="Choose a gender." defaultValue="">
                              <option value="">
                                Select gender
                              </option>
                              <option value="M">
                                Male
                              </option>
                              <option value="F">
                                Female
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
                          <label className="field__label" htmlFor="dob-2">
                            Date of Birth
                          </label>
                          {/* The ages this passenger type allows, which is what limits
                            the years the picker offers. Blade renders these from the
                            type above; the form request is what enforces the policy. */}
                          <div className="field__date" data-date-field="">
                            <input className="field__control" type="date" id="dob-2" name="passengers[2][date_of_birth]" autoComplete="bday" required data-min-age="0" data-max-age="1" data-required="Enter the date of birth." data-invalid="An infant is under 2 years old on the day of travel." />
                          </div>
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="nationality-2">
                            Nationality
                          </label>
                          {' '}
                          <span className="field__select" data-select="" data-select-search="">
                            {' '}
                            {/* A short list stands in for the full ISO 3166-1 set the
                              backend renders. The value submitted is the alpha-2 code. */}
                            {' '}
                            <select className="field__control" id="nationality-2" name="passengers[2][nationality]" autoComplete="country" required data-required="Choose a nationality." defaultValue="">
                              <option value="">
                                Select nationality
                              </option>
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
                        <div className="field">
                          <label className="field__label" htmlFor="document-number-2">
                            Passport Number
                          </label>
                          {' '}
                          <input className="field__control" type="text" id="document-number-2" name="passengers[2][document_number]" placeholder="Enter passport number" autoComplete="off" spellCheck="false" required autoCapitalize="characters" data-uppercase="" data-allow="document" pattern="[A-Za-z0-9]{5,15}" maxLength={15} data-required="Enter the passport number." data-invalid="A passport number is 5 to 15 letters and digits, nothing else." />
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <div className="field__label">
                            <label htmlFor="document-expiry-2">
                              Passport Expiry Date
                            </label>
                            {' '}
                            <span className="hint" data-hint-for="document-expiry-2">
                              {' '}
                              <button className="hint__trigger" type="button" aria-label="About passport expiry">
                                {' '}
                                <svg className="icon size-[18px]" aria-hidden="true">
                                  <use href="#i-info" />
                                </svg>
                                {' '}
                              </button>
                              {' '}
                              <span className="hint__pop" role="tooltip" id="document-expiry-guidance-2">
                                {' '}
                                <span className="hint__title">
                                  Passport validity
                                </span>
                                {' '}
                                <span className="hint__note">
                                  {' '}
                                  <svg className="icon size-4" aria-hidden="true">
                                    <use href="#i-info" />
                                  </svg>
                                  {" Many destinations require a passport valid for six months beyond your return date. The airline checks this at the airport. "}
                                </span>
                                {' '}
                              </span>
                              {' '}
                            </span>
                          </div>
                          {/* A passport that expires today cannot be travelled on, so
                            the earliest date on offer is tomorrow. */}
                          <div className="field__date" data-date-field="">
                            <input className="field__control" type="date" id="document-expiry-2" name="passengers[2][document_expiry]" aria-describedby="document-expiry-guidance-2" required data-min-days="1" data-required="Enter the passport expiry date." data-invalid="The passport must be valid beyond today." />
                          </div>
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="document-photo-2">
                            {" Upload Passport Photo "}
                            <span className="field__optional">
                              (Optional)
                            </span>
                            {' '}
                          </label>
                          {' '}
                          <label className="field__control field__file" data-file-field="">
                            {' '}
                            <span className="field__file-name" data-file-name="">
                              Upload file (JPG, PNG)
                            </span>
                            {' '}
                            <svg className="icon size-5" aria-hidden="true">
                              <use href="#i-image" />
                            </svg>
                            {' '}
                            <input className="sr-only" type="file" id="document-photo-2" name="passengers[2][document_photo]" accept="image/jpeg,image/png" />
                            {' '}
                          </label>
                          {' '}
                          <span className="field__error" data-field-error="" hidden />
                        </div>
                      </div>
                    </fieldset>
                  </details>
                </div>
              </section>
              {/* END BLADE BOUNDARY: passenger list */}
              <label className="flex items-center gap-3 mt-6 text-sm text-fg">
                {' '}
                <input type="checkbox" name="save_passenger_details" value="1" />
                {" Save passenger details for next time "}
              </label>
            </form>
            {/* END BLADE BOUNDARY: passenger form */}
            {/* BLADE BOUNDARY: step actions -> <x-booking.step-actions /> */}
            {/* The bar sits outside the form, so the button names the form it
              submits. Blade keeps this exactly as it is. */}
            <div className="step-actions">
              <Link className="btn btn--outline" href="/flights/flight-details">
                Back
              </Link>
              {' '}
              <button className="btn btn--primary step-actions__next" type="submit" form="passenger-form">
                Continue to add-ons
              </button>
            </div>
            {/* END BLADE BOUNDARY: step actions */}
          </div>
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
              <dl className="grid gap-3 mt-4 m-0">
                <div className="price-row">
                  <dt>
                    Adult × 1
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 61,900
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Child × 1
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 49,600
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Infant × 1
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 6,200
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Taxes &amp; Fees
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 12,810
                  </dd>
                </div>
                <div className="price-row">
                  <dt>
                    Add-ons
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 0
                  </dd>
                </div>
                <div className="price-row price-row--total">
                  <dt>
                    Total
                  </dt>
                  <dd className="m-0 price-row__value">
                    BDT 130,510
                  </dd>
                </div>
              </dl>
              <p className="mt-2 mb-0 text-xs text-fg-muted">
                Round-trip total
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
