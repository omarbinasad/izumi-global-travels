import Link from 'next/link';

/*
 * BLADE BOUNDARY: site header -> <x-layout.header />
 * One header for every page that has one. Two things vary between pages:
 *   bordered  the flight and hotel pages draw a rule under the bar.
 *   signedIn  the account pages show the account menu in place of the
 *             Login/Register button (Blade: @auth … @else … @endauth).
 */
type SiteHeaderProps = {
  bordered?: boolean;
  signedIn?: boolean;
};

export default function SiteHeader({ bordered = false, signedIn = false }: SiteHeaderProps) {
  return (
    <header
      className={bordered ? 'sticky top-0 z-(--z-header) bg-surface border-b border-line' : 'sticky top-0 z-(--z-header) bg-surface'}
      data-site-header=""
    >
      <div className="page-container flex items-center gap-4 min-h-(--header-height) lg:grid lg:grid-cols-[1fr_auto_1fr] lg:min-h-(--header-height-lg) lg:gap-8">
        {/* @brand-pending: placeholder mark. Swap for the supplied logo file. */}
        <Link className="inline-flex items-center gap-2 flex-none mr-auto no-underline text-fg-heading" href="/" aria-label="Izumi Global Travels — home">
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
        <div className="site-nav" id="site-nav" data-nav-panel="">
          <nav className="lg:justify-self-center" aria-label="Primary">
            <ul className="flex flex-col items-stretch gap-0 m-0 p-0 list-none lg:flex-row lg:items-center lg:gap-6">
              <li>
                <Link className="nav-link" href="/">
                  Flights
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div className="nav-extras lg:hidden">
            {/* BLADE BOUNDARY: locale switch -> <x-ui.locale-switch scope="nav" />
              The bar has no room for this on a phone, so the menu carries it,
              the way it carries the colour switch. Its own radio group, kept in
              step with the copy in the bar by locale.js. */}
            <details className="locale" data-locale="" data-locale-scope="nav">
              <summary className="locale__trigger">
                <span data-locale-label="">
                  EN/BDT
                </span>
                {' '}
                <svg className="icon size-4 locale__chevron" aria-hidden="true">
                  <use href="#i-chevron-down" />
                </svg>
                {' '}
                <span className="sr-only">
                  Change language and currency
                </span>
              </summary>
              <div className="locale__panel">
                {/* Radios, not buttons: the two lists swap with no JavaScript,
                  and the chosen values are real form values. */}
                <input className="locale__tab-input sr-only" type="radio" name="nav-locale-tab" id="nav-locale-tab-currency" defaultChecked />
                {' '}
                <input className="locale__tab-input sr-only" type="radio" name="nav-locale-tab" id="nav-locale-tab-language" />
                <div className="locale__tabs">
                  <label className="locale__tab" htmlFor="nav-locale-tab-currency">
                    Currency
                  </label>
                  {' '}
                  <label className="locale__tab" htmlFor="nav-locale-tab-language">
                    Language
                  </label>
                </div>
                <ul className="locale__list locale__list--currency" role="list">
                  <li>
                    <input className="locale__choice sr-only" type="radio" name="nav-currency" id="nav-currency-bdt" value="BDT" defaultChecked data-locale-currency="" />
                    {' '}
                    <label className="locale__option" htmlFor="nav-currency-bdt">
                      {' '}
                      <span className="locale__code">
                        BDT
                      </span>
                      {' '}
                      <span className="locale__name">
                        Bangladeshi Taka
                      </span>
                      {' '}
                    </label>
                  </li>
                  <li>
                    <input className="locale__choice sr-only" type="radio" name="nav-currency" id="nav-currency-usd" value="USD" data-locale-currency="" />
                    {' '}
                    <label className="locale__option" htmlFor="nav-currency-usd">
                      {' '}
                      <span className="locale__code">
                        USD
                      </span>
                      {' '}
                      <span className="locale__name">
                        US Dollar
                      </span>
                      {' '}
                    </label>
                  </li>
                  <li>
                    <input className="locale__choice sr-only" type="radio" name="nav-currency" id="nav-currency-aed" value="AED" data-locale-currency="" />
                    {' '}
                    <label className="locale__option" htmlFor="nav-currency-aed">
                      {' '}
                      <span className="locale__code">
                        AED
                      </span>
                      {' '}
                      <span className="locale__name">
                        UAE Dirham
                      </span>
                      {' '}
                    </label>
                  </li>
                  <li>
                    <input className="locale__choice sr-only" type="radio" name="nav-currency" id="nav-currency-jpy" value="JPY" data-locale-currency="" />
                    {' '}
                    <label className="locale__option" htmlFor="nav-currency-jpy">
                      {' '}
                      <span className="locale__code">
                        JPY
                      </span>
                      {' '}
                      <span className="locale__name">
                        Japanese Yen
                      </span>
                      {' '}
                    </label>
                  </li>
                </ul>
                <ul className="locale__list locale__list--language" role="list">
                  <li>
                    <input className="locale__choice sr-only" type="radio" name="nav-language" id="nav-language-en" value="EN" defaultChecked data-locale-language="" />
                    {' '}
                    <label className="locale__option" htmlFor="nav-language-en">
                      {' '}
                      <span className="locale__code">
                        EN
                      </span>
                      {' '}
                      <span className="locale__name">
                        English
                      </span>
                      {' '}
                    </label>
                  </li>
                  <li>
                    <input className="locale__choice sr-only" type="radio" name="nav-language" id="nav-language-bn" value="BN" data-locale-language="" />
                    {' '}
                    <label className="locale__option" htmlFor="nav-language-bn">
                      {' '}
                      <span className="locale__code">
                        BN
                      </span>
                      {' '}
                      <span className="locale__name">
                        বাংলা
                      </span>
                      {' '}
                    </label>
                  </li>
                  <li>
                    <input className="locale__choice sr-only" type="radio" name="nav-language" id="nav-language-ja" value="JA" data-locale-language="" />
                    {' '}
                    <label className="locale__option" htmlFor="nav-language-ja">
                      {' '}
                      <span className="locale__code">
                        JA
                      </span>
                      {' '}
                      <span className="locale__name">
                        日本語
                      </span>
                      {' '}
                    </label>
                  </li>
                </ul>
              </div>
            </details>
            {/* END BLADE BOUNDARY: locale switch */}
            {/* The colour switch travels with the menu on a phone: the bar itself
              has room for the account button and nothing else. */}
            <div className="theme-toggle" role="group" aria-label="Colour theme">
              <button type="button" className="theme-toggle__option" data-theme-option="light" aria-pressed="false" title="Light theme">
                {' '}
                <svg className="icon" aria-hidden="true">
                  <use href="#i-sun" />
                </svg>
                {' '}
                <span className="sr-only">
                  Light theme
                </span>
                {' '}
              </button>
              {' '}
              <button type="button" className="theme-toggle__option" data-theme-option="dark" aria-pressed="false" title="Dark theme">
                {' '}
                <svg className="icon" aria-hidden="true">
                  <use href="#i-moon" />
                </svg>
                {' '}
                <span className="sr-only">
                  Dark theme
                </span>
                {' '}
              </button>
            </div>
          </div>
        </div>
        {/* Outside the drawer, so the account button is in the bar at every
          width. At lg this is the third grid column; below it the locale and
          colour switches step aside and only the button is left. */}
        <div className="flex items-center gap-3 lg:justify-self-end" data-header-actions="">
          {/* BLADE BOUNDARY: locale switch -> <x-ui.locale-switch /> */}
          <details className="locale hidden lg:block" data-locale="">
            <summary className="locale__trigger">
              <span data-locale-label="">
                EN/BDT
              </span>
              {' '}
              <svg className="icon size-4 locale__chevron" aria-hidden="true">
                <use href="#i-chevron-down" />
              </svg>
              {' '}
              <span className="sr-only">
                Change language and currency
              </span>
            </summary>
            <div className="locale__panel">
              {/* Radios, not buttons: the two lists swap with no JavaScript,
                and the chosen values are real form values. */}
              <input className="locale__tab-input sr-only" type="radio" name="header-locale-tab" id="header-locale-tab-currency" defaultChecked />
              {' '}
              <input className="locale__tab-input sr-only" type="radio" name="header-locale-tab" id="header-locale-tab-language" />
              <div className="locale__tabs">
                <label className="locale__tab" htmlFor="header-locale-tab-currency">
                  Currency
                </label>
                {' '}
                <label className="locale__tab" htmlFor="header-locale-tab-language">
                  Language
                </label>
              </div>
              <ul className="locale__list locale__list--currency" role="list">
                <li>
                  <input className="locale__choice sr-only" type="radio" name="header-currency" id="header-currency-bdt" value="BDT" defaultChecked data-locale-currency="" />
                  {' '}
                  <label className="locale__option" htmlFor="header-currency-bdt">
                    {' '}
                    <span className="locale__code">
                      BDT
                    </span>
                    {' '}
                    <span className="locale__name">
                      Bangladeshi Taka
                    </span>
                    {' '}
                  </label>
                </li>
                <li>
                  <input className="locale__choice sr-only" type="radio" name="header-currency" id="header-currency-usd" value="USD" data-locale-currency="" />
                  {' '}
                  <label className="locale__option" htmlFor="header-currency-usd">
                    {' '}
                    <span className="locale__code">
                      USD
                    </span>
                    {' '}
                    <span className="locale__name">
                      US Dollar
                    </span>
                    {' '}
                  </label>
                </li>
                <li>
                  <input className="locale__choice sr-only" type="radio" name="header-currency" id="header-currency-aed" value="AED" data-locale-currency="" />
                  {' '}
                  <label className="locale__option" htmlFor="header-currency-aed">
                    {' '}
                    <span className="locale__code">
                      AED
                    </span>
                    {' '}
                    <span className="locale__name">
                      UAE Dirham
                    </span>
                    {' '}
                  </label>
                </li>
                <li>
                  <input className="locale__choice sr-only" type="radio" name="header-currency" id="header-currency-jpy" value="JPY" data-locale-currency="" />
                  {' '}
                  <label className="locale__option" htmlFor="header-currency-jpy">
                    {' '}
                    <span className="locale__code">
                      JPY
                    </span>
                    {' '}
                    <span className="locale__name">
                      Japanese Yen
                    </span>
                    {' '}
                  </label>
                </li>
              </ul>
              <ul className="locale__list locale__list--language" role="list">
                <li>
                  <input className="locale__choice sr-only" type="radio" name="header-language" id="header-language-en" value="EN" defaultChecked data-locale-language="" />
                  {' '}
                  <label className="locale__option" htmlFor="header-language-en">
                    {' '}
                    <span className="locale__code">
                      EN
                    </span>
                    {' '}
                    <span className="locale__name">
                      English
                    </span>
                    {' '}
                  </label>
                </li>
                <li>
                  <input className="locale__choice sr-only" type="radio" name="header-language" id="header-language-bn" value="BN" data-locale-language="" />
                  {' '}
                  <label className="locale__option" htmlFor="header-language-bn">
                    {' '}
                    <span className="locale__code">
                      BN
                    </span>
                    {' '}
                    <span className="locale__name">
                      বাংলা
                    </span>
                    {' '}
                  </label>
                </li>
                <li>
                  <input className="locale__choice sr-only" type="radio" name="header-language" id="header-language-ja" value="JA" data-locale-language="" />
                  {' '}
                  <label className="locale__option" htmlFor="header-language-ja">
                    {' '}
                    <span className="locale__code">
                      JA
                    </span>
                    {' '}
                    <span className="locale__name">
                      日本語
                    </span>
                    {' '}
                  </label>
                </li>
              </ul>
            </div>
          </details>
          {/* END BLADE BOUNDARY: locale switch */}
          {/* BLADE BOUNDARY: theme toggle -> <x-ui.theme-toggle /> */}
          <div className="theme-toggle hidden lg:inline-flex" role="group" aria-label="Colour theme">
            {' '}
            <button type="button" className="theme-toggle__option" data-theme-option="light" aria-pressed="false" title="Light theme">
              {' '}
              <svg className="icon" aria-hidden="true">
                <use href="#i-sun" />
              </svg>
              {' '}
              <span className="sr-only">
                Light theme
              </span>
              {' '}
            </button>
            {' '}
            <button type="button" className="theme-toggle__option" data-theme-option="dark" aria-pressed="false" title="Dark theme">
              {' '}
              <svg className="icon" aria-hidden="true">
                <use href="#i-moon" />
              </svg>
              {' '}
              <span className="sr-only">
                Dark theme
              </span>
              {' '}
            </button>
            {' '}
          </div>
      {signedIn ? (
        <>
              {/* END BLADE BOUNDARY: theme toggle */}
              {/* BLADE BOUNDARY: account menu -> <x-layout.account-menu />
                Blade renders this in place of the Login/Register button once
                someone is signed in: @auth this @else that @endauth. The initials
                stand in for a photo until the account has one. */}
              <details className="account-menu">
                <summary className="account-menu__trigger">
                  <span className="avatar" aria-hidden="true">
                    TA
                  </span>
                  {' '}
                  <span className="account-menu__name">
                    Tanvir Ahmed
                  </span>
                  {' '}
                  <svg className="icon size-4 account-menu__chevron" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                  {' '}
                  <span className="sr-only">
                    Your account
                  </span>
                </summary>
                <div className="account-menu__panel">
                  <Link className="account-menu__item" href="/account/profile">
                    {' '}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-user" />
                    </svg>
                    {"My Profile "}
                  </Link>
                  {' '}
                  <Link className="account-menu__item" href="/account/bookings">
                    {' '}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-ticket" />
                    </svg>
                    {"Bookings "}
                  </Link>
                  {' '}
                  <Link className="account-menu__item" href="/account/saved">
                    {' '}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-bookmark" />
                    </svg>
                    {"Saved "}
                  </Link>
                  {/* Signing out changes state, so it is a POST, not a link. */}
                  <form className="account-menu__form" method="post" action="/auth/login">
                    <button className="account-menu__item" type="submit">
                      {' '}
                      <svg className="icon size-4" aria-hidden="true">
                        <use href="#i-external" />
                      </svg>
                      {"Sign out "}
                    </button>
                  </form>
                </div>
              </details>
        </>
      ) : (
        <>
              {' '}
              {/* END BLADE BOUNDARY: theme toggle */}
              {' '}
              <Link className="btn btn--primary btn--sm" href="/auth/login">
                Login/Register
              </Link>
        </>
      )}
        </div>
        <button className="inline-flex items-center justify-center size-(--control-height) flex-none rounded-sm text-fg-heading hover:bg-surface-muted lg:hidden" type="button" data-nav-toggle="" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
          {' '}
          <svg className="icon size-[22px] nav-toggle__icon--open" width="22" height="22" aria-hidden="true">
            <use href="#i-menu" />
          </svg>
          {' '}
          <svg className="icon size-[22px] nav-toggle__icon--close" width="22" height="22" aria-hidden="true">
            <use href="#i-close" />
          </svg>
          {' '}
        </button>
      </div>
    </header>
  );
}
