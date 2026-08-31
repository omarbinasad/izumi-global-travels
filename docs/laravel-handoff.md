# Laravel handoff

How this static frontend converts to Blade. Written for the backend developer;
it assumes the structure described in `project-structure.md`.

## Directory mapping

| Static | Laravel |
| --- | --- |
| `index.html` | `resources/views/home.blade.php` |
| `pages/<group>/<name>.html` | `resources/views/<group>/<name>.blade.php` |
| `components/<group>/<name>.html` | `resources/views/components/<group>/<name>.blade.php` |
| `assets/css/app.css` | `resources/css/app.css`, unchanged — only the `@source` lines change to point at `resources/views` |
| `assets/js/`, `assets/images/` | `resources/js/`, `public/assets/images/` |
| `assets/data/*.json` | Dropped once real endpoints exist. |

## Layouts

Every page repeats the same shell, marked in the HTML with
`<!-- BLADE BOUNDARY: … -->` comments. Extract it once:

- `layouts/app.blade.php` — public pages: header, `@yield('content')`, footer.
- `layouts/dashboard.blade.php` — signed-in pages: adds the sidebar.
- `layouts/minimal.blade.php` — payment, processing and error screens.

The `<head>` must keep, in this order: the synchronous `theme-boot.js` tag
(before any stylesheet, so there is no theme flash), then the compiled
stylesheet — `@vite(['resources/css/app.css'])` in Laravel. `main.js` stays a
`type="module"` tag at the end of `<body>`.

Laravel 12 already ships Vite and `@tailwindcss/vite`, so the only move is
copying `app.css` across and repointing `@source`. Every class in the markup
compiles identically. Each class in `@layer components` is one Blade component
(`.route-card` → `<x-flight.route-card>`).

## Components

Each file under `components/` becomes an anonymous Blade component. Turn every
hard-coded value into a prop, and keep the `data-*` hooks intact — the
JavaScript modules select on them.

```blade
{{-- resources/views/components/flight/flight-card.blade.php --}}
@props(['offer'])
<article class="flight-card" data-flight-card data-offer-id="{{ $offer['offerId'] }}">
  …
</article>
```

## Routes

Name every route; the frontend links by name after conversion.

| Group | Names |
| --- | --- |
| Search | `flights.search`, `flights.results`, `flights.show`, `flights.fares` |
| Booking | `booking.passengers`, `booking.addons`, `booking.review`, `booking.payment`, `booking.processing`, `booking.confirmation`, `booking.failed` |
| Manage | `manage.find`, `manage.show`, `manage.cancel` |
| Account | `dashboard.index`, `dashboard.bookings`, `dashboard.bookings.show`, `dashboard.travellers`, `dashboard.saved`, `dashboard.profile` |
| Auth | Laravel defaults: `login`, `register`, `password.request`, `password.reset` |
| Content | `flight-status`, `destinations`, `deals`, `airlines`, `about`, `contact`, `faq`, `support.*`, `legal.*` |

## Controller data

Controllers pass data already shaped as `flight-data-contract.md` describes, and
already formatted for display (money as strings with a currency, times in the
airport's local zone). Blade should not calculate totals, durations or
eligibility.

## Form requests and validation

One form request per submitted step:
`FlightSearchRequest`, `PassengerDetailsRequest`, `AddOnsRequest`,
`PaymentRequest`, `FindBookingRequest`, `CancellationRequest`.

Field names come from `form-fields.md`. Client-side validation is a convenience
and is always repeated server-side. Return errors with `withErrors()`; the
markup already exposes `aria-invalid` and an `aria-describedby` error slot per
field, so `@error` blocks drop straight in.

## Session and flow state

The booking flow is multi-step. Keep the in-progress selection
(`offer_id`, `fare_id`, passengers, add-ons) in the session or a short-lived
server record keyed by a booking draft id — never in `localStorage`, and never
in a hidden field the user could edit. Re-price and re-verify availability
before payment, and again before ticketing.

## Authentication

Standard Laravel session auth with CSRF on every form. The dashboard and
manage-booking areas sit behind `auth`; find-booking stays public but is
rate-limited. No production authentication or payment is simulated in the static
frontend.

## API integration

The Laravel backend is the only thing that talks to a flight provider. Provider
credentials live in `.env` on the server. The browser calls the app's own routes;
`assets/js/services/api-client.js` is the single place that issues those
requests, `flight-service.js` wraps the flight endpoints, and UI code never
contains a URL.

Server-owned, always: availability, seats, prices, taxes, fees, discounts,
currency conversion, fare rules, baggage allowances, booking and ticketing
status, passenger validation, payment status, refund eligibility, cancellation
fees, authorisation.
