# Component list

Planned reusable components under `components/`. Each becomes a Blade component
at handoff. Only components that exist today are marked **built**.

Convention: `components/<group>/<name>.html` pairs with
`assets/css/4-components/<name>.css` and, when it needs behaviour,
`assets/js/components/<name>.js`. JavaScript finds its root element through a
`data-*` hook, never a styling class.

## layout

| Component | Responsibility |
| --- | --- |
| `header` **(built)** | Brand, primary navigation, currency/language, account entry. Collapses to a drawer below 1024px. |
| `mobile-navigation` **(built, in `header.css`)** | Collapsed nav panel; `aria-expanded`, Escape and outside click close it. |
| `footer` **(built)** | Site links, legal links, app badges, social and payment marks, theme toggle. |
| `dashboard-sidebar` | Signed-in navigation with a current-page `aria-current`. |

## flight-search

| Component | Responsibility |
| --- | --- |
| `search-form` **(built)** | Detached product tabs, underlined trip type, a From/path/To route row and a Depart/Return/Travellers/Search row. Submits stable codes, not labels. Multi-city still to come. |
| `airport-field` | Origin/destination lookup; combobox pattern; emits an IATA code. |
| `date-picker` | Departure and return dates; ISO `YYYY-MM-DD` values; keyboard operable. |
| `passenger-selector` **(built, as `.pax`)** | Adults, children, infants and cabin in one `<details>` pop-out, so it opens and submits without JavaScript. Limits are enforced again server-side. |
| `cabin-selector` **(built, inside `.pax`)** | Cabin class as a code (`ECONOMY`, `PREMIUM_ECONOMY`, `BUSINESS`, `FIRST`). |

## flight

| Component | Responsibility |
| --- | --- |
| `flight-card` | One offer in results: airline, times, duration, stops, price, select action. Carries `offerId`. The landing page uses a lighter `route-card` variant in `cards.css`. |
| `flight-leg` | One segment or leg of an itinerary with the timeline rail. |
| `airline-info` | Airline logo, name and marketing/operating carrier codes. |
| `baggage-info` | Cabin and checked allowance as returned by the backend. |
| `fare-option` | One fare family: name, inclusions, price difference, `fareId`. |
| `price-summary` | Displays a server-calculated total; never computes one. |

## booking

| Component | Responsibility |
| --- | --- |
| `booking-steps` | Progress indicator across passenger → add-ons → review → payment. |
| `passenger-form` | One passenger's fields, indexed for array submission. |
| `add-on-card` | Optional extra with an `addOnId` and a server-supplied price. |
| `booking-summary` | Sticky itinerary and price panel shown through the booking flow. |

## cards

`destination-card`, `deal-card`, `booking-card` — presentation blocks for
marketing pages and the dashboard booking list.

## forms

| Component | Responsibility |
| --- | --- |
| `form-field` | Label, control, hint and error wired with `for` and `aria-describedby`. |
| `phone-field` | Dialling code plus national number, submitted as separate values. |
| `document-field` | Passport/ID number, issuing country and expiry. |

## ui

`button` **(built)**, `alert`, `badge`, `accordion`, `modal`, `dropdown`,
`tooltip`, `skeleton`, `empty-state`, `toast`, plus the theme toggle **(built)**
and an inline SVG icon sprite **(built, in `index.html`)**.

The landing page also ships `preference-card`, `feature-card`, `route-card`,
`step-card` and `testimonial-card` in `4-components/cards.css`.

Behaviour expectations for the interactive ones:

- **modal** — focus trap, restore focus on close, Escape closes, `aria-modal`.
- **dropdown** — `aria-expanded` on the trigger, arrow-key navigation, Escape closes.
- **accordion** — real `<button>` headers with `aria-expanded` and `aria-controls`.
- **toast / alert** — `role="status"` for information, `role="alert"` for errors.
- **skeleton** — reserves the final height so nothing shifts when data arrives.
