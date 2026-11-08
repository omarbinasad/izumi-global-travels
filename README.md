# Izumi Global Travels — Next.js frontend (v2)

The static flight-booking frontend from the parent folder, converted to
**Next.js 16 (App Router) + React 19 + TypeScript**, still styled with
**Tailwind CSS v4**. It looks and behaves the same as the static build: every
page renders the same DOM, every screen is pixel-identical in light and dark
at desktop and mobile widths, and every interactive behaviour is kept.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static prerender of every route
npm run start      # serve the production build
npm run typecheck
```

All 31 routes are prerendered as static HTML (`○ Static` in the build output).

## How it is put together

```
app/                    one route per static page (page.tsx), plus layout.tsx
components/
  layout/               SiteHeader, SiteFooter, Preloader, IconSprite, ToTop
  account/AccountNav    side nav of the account pages (current = section)
  booking/              BookingSteps (current = step), ItinerarySlice
  behaviour/SiteBody    <body> + the bridge that runs lib/behaviour
lib/
  behaviour/            the vanilla ES-module behaviours, ported as-is
    core/ components/ pages/   same split as assets/js/
    registry.js         replaces main.js: starts behaviours, returns teardown
  routes.ts             per-route <body> attributes (data-page, class, …)
  theme-boot.ts         the pre-paint theme script, inlined into <head>
styles/app.css          the Tailwind source (was assets/css/app.css)
public/images/          was assets/images/
emails/                 reference email templates (for the backend mailer)
docs/                   design system, data contract, forms, handoff notes
```

### Markup: server components

Each page is a server component holding the page's markup as JSX, so all
content is in the HTML before any JavaScript runs, as it was before. The
markup is the original markup, attribute for attribute:

- `class` became `className` and `for` became `htmlFor`. Form defaults became
  `defaultValue` / `defaultChecked`.
- Internal `*.html` links became Next `<Link>` routes. Asset URLs moved to
  `/images/…`.
- `<!-- BLADE BOUNDARY -->` comments are kept as JSX comments.

Repeated chrome is one component each. The preloader, skip link, icon sprite
and back-to-top link live in `app/layout.tsx`. The header and footer are
rendered by each page, because the auth pages have neither and the header has
two variants (`bordered`, `signedIn`).

### Behaviour: progressive enhancement, unchanged

The 36 component and 13 page behaviour modules (search form, date pickers, airport field, select
and phone fields, filters, sort tabs, add-ons, validation, dialogs, saved
list, …) are the original vanilla modules in `lib/behaviour/`. Only their
wiring changed:

- `components/behaviour/SiteBody.tsx` loads `registry.js` in the browser after
  each route change, and it starts the same site-wide and per-page modules
  `main.js` started, chosen by `<body data-page>`.
- Every listener goes through `on()` in `core/dom.js`, which now records it in
  a per-route scope. Changing route removes the old page's listeners, timers
  and observers before the new page starts, so client-side navigation never
  stacks handlers.
- The stand-in submits that walked to the next page (passengers → add-ons,
  payment → confirm, login → profile, feedback → thanks) go through
  `core/navigate.js`, which uses the Next router.
- The preloader is a small React component (`Preloader.tsx`) because it
  removes itself from the document. The static build showed it on every page
  because every link was a full page load, so it is shown again on each client
  navigation (a link click or `navigate()`). It leaves once the new page is in
  place and its images have loaded.

### Styles

`styles/app.css` is the original stylesheet. Only two things changed: the
`@source` paths, and image `url()`s now point at `/images/`. Tailwind is
pinned to the same version as the static build (4.3.3).

`browserslist` in `package.json` names the browsers that support
`light-dark()`, which the theme system needs. Without it, Next's CSS pass would
replace `light-dark()` with a variable-based polyfill and stop matching the
original output.

## Route map

| Static page | Route | File |
| --- | --- | --- |
| `index.html` | `/` | `app/page.tsx` |
| `pages/about.html` | `/about` | `app/about/page.tsx` |
| `pages/blog.html` | `/blog` | `app/blog/page.tsx` |
| `pages/blog-post.html` | `/blog-post` | `app/blog-post/page.tsx` |
| `pages/contact.html` | `/contact` | `app/contact/page.tsx` |
| `pages/faq.html` | `/faq` | `app/faq/page.tsx` |
| `pages/account/booking.html` | `/account/booking` | `app/account/booking/page.tsx` |
| `pages/account/bookings.html` | `/account/bookings` | `app/account/bookings/page.tsx` |
| `pages/account/profile.html` | `/account/profile` | `app/account/profile/page.tsx` |
| `pages/account/saved.html` | `/account/saved` | `app/account/saved/page.tsx` |
| `pages/auth/forgot-password.html` | `/auth/forgot-password` | `app/auth/forgot-password/page.tsx` |
| `pages/auth/login.html` | `/auth/login` | `app/auth/login/page.tsx` |
| `pages/auth/reset-password.html` | `/auth/reset-password` | `app/auth/reset-password/page.tsx` |
| `pages/flights/add-ons.html` | `/flights/add-ons` | `app/flights/add-ons/page.tsx` |
| `pages/flights/confirm.html` | `/flights/confirm` | `app/flights/confirm/page.tsx` |
| `pages/flights/flight-details.html` | `/flights/flight-details` | `app/flights/flight-details/page.tsx` |
| `pages/flights/flight-status.html` | `/flights/flight-status` | `app/flights/flight-status/page.tsx` |
| `pages/flights/passengers.html` | `/flights/passengers` | `app/flights/passengers/page.tsx` |
| `pages/flights/payment.html` | `/flights/payment` | `app/flights/payment/page.tsx` |
| `pages/flights/search-results.html` | `/flights/search-results` | `app/flights/search-results/page.tsx` |
| `pages/hotels/hotel.html` | `/hotels/hotel` | `app/hotels/hotel/page.tsx` |
| `pages/hotels/search-results.html` | `/hotels/search-results` | `app/hotels/search-results/page.tsx` |
| `pages/legal/booking-conditions.html` | `/legal/booking-conditions` | `app/legal/booking-conditions/page.tsx` |
| `pages/legal/privacy-policy.html` | `/legal/privacy-policy` | `app/legal/privacy-policy/page.tsx` |
| `pages/legal/refund-policy.html` | `/legal/refund-policy` | `app/legal/refund-policy/page.tsx` |
| `pages/legal/terms.html` | `/legal/terms` | `app/legal/terms/page.tsx` |
| `pages/services/halal-meal.html` | `/services/halal-meal` | `app/services/halal-meal/page.tsx` |
| `pages/services/meet-and-greet.html` | `/services/meet-and-greet` | `app/services/meet-and-greet/page.tsx` |
| `pages/services/window-seat.html` | `/services/window-seat` | `app/services/window-seat/page.tsx` |
| `pages/support/feedback.html` | `/support/feedback` | `app/support/feedback/page.tsx` |
| `pages/support/feedback-thanks.html` | `/support/feedback-thanks` | `app/support/feedback-thanks/page.tsx` |

Path names in `docs/` refer to the static build. Read `assets/js/` as
`lib/behaviour/`, `assets/css/app.css` as `styles/app.css`, and
`assets/images/` as `public/images/`.

## Deliberate choices

- **`reactStrictMode: false`.** Some behaviours add their own controls to the
  DOM once (select, phone and date fields). Strict mode's dev-only double
  mount would add them twice. Production is unaffected.
- **Plain `<img>`, not `next/image`.** `next/image` adds wrappers, `srcset` and
  inline styles, which would change the markup and the layout.
- **Server-owned data stays server-owned.** Prices, availability, fare rules,
  booking, ticketing and payment are still placeholders that the backend will
  render. No API routes, credentials or simulated auth/payment were added.

## Known placeholders carried over from the static build

- `/contact` links to `/support/help-centre`, which does not exist in the
  static build either.
- "Sign out" / "Log out" POST to `/auth/login`, and the forms post to their
  static `action`s. These need real backend routes.
