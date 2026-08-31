# Project structure

Responsibility of each directory. Nothing here repeats the README.

## Root

| Path | Responsibility |
| --- | --- |
| `index.html` | Foundation verification page. Replaced by the real landing page once the approved UI reference is supplied. |
| `CLAUDE.md` | Working instructions for Claude Code. |
| `README.md` | How to run the project and the conventions to follow. |

## `pages/`

One static HTML file per screen, grouped by workflow so the Blade conversion
maps folder to view directory.

| Folder | Screens |
| --- | --- |
| `flights/` | Search results, flight details, fare selection, price breakdown. |
| `booking/` | Passenger details, add-ons, review, payment, processing, confirmation, failure. |
| `manage-booking/` | Find a booking, booking details, cancellation request. |
| `auth/` | Login, register, forgot and reset password. |
| `dashboard/` | Signed-in area: bookings, travellers, saved flights, profile. |
| `support/`, `legal/`, `errors/` | Help centre and support request, policy pages, 404 and 500. |
| (root of `pages/`) | Standalone pages: flight status, destinations, deals, airlines, about, contact, FAQ. |

## `components/`

Reference markup for reusable blocks, grouped by domain (`layout`,
`flight-search`, `flight`, `booking`, `cards`, `forms`, `ui`). These are **not**
loaded at runtime — no client-side templating. They exist so markup stays
consistent across pages and so each file becomes a Blade component later.

## `assets/css/`

Folders are numbered in load order, so a bigger number can override a smaller
one. That is the whole cascade rule.

| Folder | Contains |
| --- | --- |
| `1-settings/` | Variables only. `tokens.css` (raw values) and `themes.css` (semantic light/dark). Paints nothing. |
| `2-base/` | Bare HTML elements: `reset.css`, then `typography.css` (text, links, page background, focus ring). No class names. |
| `3-layout/` | Page structure: container, header, navigation, footer, dashboard shell. |
| `4-components/` | One file per reusable component. Most work happens here. |
| `5-pages/` | Styles used by exactly one page. Prefer a component first. |
| `6-utilities/` | Small single-purpose helpers, including the accessibility ones. Imported last. |

`main.css` is the only stylesheet a page links, and holds imports only. To add a
stylesheet: create the file in the right numbered folder, add one `@import` line
to `main.css`. `assets/css/README.md` repeats this for anyone opening the folder
directly.

## `assets/js/`

| Folder | Contains |
| --- | --- |
| `core/` | Cross-cutting modules: config, DOM helpers, theme. `theme-boot.js` is the one non-module script. |
| `components/` | Behaviour for one UI component, initialised from `data-*` hooks. |
| `pages/` | Behaviour for one page, loaded from the `pageModules` registry in `main.js` via `<body data-page="...">`. |
| `services/` | The only place that talks to the backend or to mock data. UI code never contains an endpoint. |

## `assets/data/`

Static JSON used for design and demos only: airports, airlines, flights,
destinations. Never a source of truth — see `flight-data-contract.md`.

## `assets/images/` and `assets/fonts/`

`brand/`, `hero/`, `backgrounds/`, `destinations/`, `airlines/`, `icons/`,
`illustrations/`. Prefer SVG for icons and logos. No fonts are self-hosted yet.

## `docs/`

| File | Purpose |
| --- | --- |
| `project-structure.md` | This file. |
| `design-system.md` | Tokens, themes, scales, breakpoints. |
| `component-list.md` | Planned components and their responsibilities. |
| `form-fields.md` | Field names, types, validation ownership, accessibility. |
| `flight-data-contract.md` | Expected data shapes. |
| `laravel-handoff.md` | Static structure to Blade mapping. |
