import Link from 'next/link';

/*
 * BLADE BOUNDARY: site footer -> <x-layout.footer />
 * The same footer on every page that has one.
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer mt-12 pt-10 pb-8 lg:pt-12 text-on-panel-muted rounded-t-lg">
      <div className="page-container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 mid:grid-cols-3 lg:grid-cols-[1.4fr_repeat(3,1fr)_auto] lg:gap-6">
          <div className="flex items-center gap-4 col-span-2 mid:flex-col mid:items-start mid:col-span-1">
            <Link className="footer-logo" href="/" aria-label="Izumi Global Travels — home">
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
            <p className="max-w-[34ch] text-sm leading-snug">
              Your trusted travel partner for flawless journeys worldwide.
            </p>
          </div>
          <nav className="" aria-labelledby="footer-support">
            <h2 className="mb-3 text-sm font-semibold text-on-panel" id="footer-support">
              Support
            </h2>
            <ul className="grid gap-2 m-0 p-0 list-none">
              <li>
                <Link className="footer-nav__link" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="footer-nav__link" href="/account/bookings">
                  Manage Booking
                </Link>
              </li>
              <li>
                <Link className="footer-nav__link" href="/faq">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="footer-nav__link" href="/support/feedback">
                  Feedback
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="" aria-labelledby="footer-legal">
            <h2 className="mb-3 text-sm font-semibold text-on-panel" id="footer-legal">
              Legal
            </h2>
            <ul className="grid gap-2 m-0 p-0 list-none">
              <li>
                <Link className="footer-nav__link" href="/legal/terms">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="footer-nav__link" href="/legal/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="footer-nav__link" href="/legal/refund-policy">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link className="footer-nav__link" href="/legal/booking-conditions">
                  Booking Conditions
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="" aria-labelledby="footer-company">
            <h2 className="mb-3 text-sm font-semibold text-on-panel" id="footer-company">
              Company
            </h2>
            <ul className="grid gap-2 m-0 p-0 list-none">
              <li>
                <Link className="footer-nav__link" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="footer-nav__link" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-3">
              <span className="store-badge">
                {' '}
                <img className="store-badge__art" src="/images/appstore.png" alt="Download on the App Store" width="957" height="337" loading="lazy" decoding="async" />
                {' '}
              </span>
              {' '}
              <span className="store-badge">
                {' '}
                <img className="store-badge__art" src="/images/playstore.png" alt="Get it on Google Play" width="957" height="334" loading="lazy" decoding="async" />
                {' '}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-panel-line">
          <ul className="flex items-center gap-2 m-0 p-0 list-none" role="list">
            <li>
              <Link className="social-link" href="/contact" aria-label="Izumi Global Travels on Facebook">
                <svg className="icon icon--solid" aria-hidden="true">
                  <use href="#i-facebook" />
                </svg>
              </Link>
            </li>
            <li>
              <Link className="social-link" href="/contact" aria-label="Izumi Global Travels on Instagram">
                <svg className="icon icon--solid" aria-hidden="true">
                  <use href="#i-instagram" />
                </svg>
              </Link>
            </li>
            <li>
              <Link className="social-link" href="/contact" aria-label="Izumi Global Travels on LinkedIn">
                <svg className="icon icon--solid" aria-hidden="true">
                  <use href="#i-linkedin" />
                </svg>
              </Link>
            </li>
          </ul>
          {/* @brand-pending: text marks stand in for the licensed payment
            scheme artwork. */}
          <ul className="flex flex-wrap items-center gap-2 m-0 p-0 list-none" role="list" aria-label="Accepted payment methods">
            <li className="payment-mark">
              Visa
            </li>
            <li className="payment-mark">
              Mastercard
            </li>
            <li className="payment-mark">
              Amex
            </li>
            <li className="payment-mark">
              bKash
            </li>
            <li className="payment-mark">
              Nagad
            </li>
            <li className="payment-mark">
              Rocket
            </li>
          </ul>
          <p className="w-full text-xs">
            © 2026 Izumi Global Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
