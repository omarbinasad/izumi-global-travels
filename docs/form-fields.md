# Form fields

Field names, ownership and accessibility rules. Names are the contract with
Laravel — keep them stable and identical across pages.

## Rules

- **Validation ownership.** JavaScript validation is a convenience only. Laravel
  form requests validate everything again, and are the only authority for
  availability, price, fare rules, eligibility and payment.
- **Submit codes, not labels.** Never send `"Dubai International"`; send `DXB`.
- **Accessibility.** Every control has a `<label for>` (or an `aria-label`),
  hints and errors are linked with `aria-describedby`, invalid controls get
  `aria-invalid="true"`, and the error message carries `role="alert"`. Focus
  moves to the first invalid control on a failed submit.
- **Naming.** `snake_case`, singular for single values, `array[index][field]`
  for repeated groups.

## Flight search

| Name | Type | Notes |
| --- | --- | --- |
| `trip_type` | `one_way` \| `round_trip` \| `multi_city` | Drives which fields are required. |
| `origin_iata`, `destination_iata` | 3-letter IATA | From `airport-field`; must differ. |
| `departure_date`, `return_date` | `YYYY-MM-DD` | Return required only for `round_trip`. |
| `segments[i][origin_iata]`, `[destination_iata]`, `[departure_date]` | as above | Multi-city only. |
| `adults`, `children`, `infants` | integer | Infants ≤ adults. Server re-checks. |
| `cabin_class` | `ECONOMY` \| `PREMIUM_ECONOMY` \| `BUSINESS` \| `FIRST` | |
| `direct_only` | boolean | Preference, not a guarantee. |
| `currency` | ISO 4217 | Display only; the server prices the offer. |

## Selection

| Name | Type | Notes |
| --- | --- | --- |
| `offer_id` | opaque string | Identifies the chosen offer. |
| `outbound_offer_id`, `return_offer_id` | opaque string | Split round-trip selection. |
| `fare_id` | opaque string | Chosen fare family. |
| `add_ons[]` | array of `add_on_id` | Prices come from the server. |

## Passengers — `passengers[i][...]`

| Name | Type | Notes |
| --- | --- | --- |
| `type` | `ADT` \| `CHD` \| `INF` | Passenger type code. |
| `title` | `MR` \| `MRS` \| `MS` \| `MSTR` \| `MISS` | |
| `given_name`, `family_name` | text | Must match travel document. |
| `date_of_birth` | `YYYY-MM-DD` | Age band validated server-side. |
| `gender` | `M` \| `F` \| `X` \| `U` | Carrier-dependent. |
| `nationality`, `document_issuing_country` | ISO 3166-1 alpha-2 | |
| `document_type` | `PASSPORT` \| `NATIONAL_ID` | |
| `document_number` | text | Never logged client-side. |
| `document_expiry` | `YYYY-MM-DD` | |
| `frequent_flyer_airline`, `frequent_flyer_number` | text | Optional. |

## Contact

`contact_email`, `contact_phone_country` (dialling code), `contact_phone_number`,
`contact_country`. One contact per booking.

## Payment

The frontend collects no raw card data. Payment runs through the provider's
hosted or tokenised widget; the form submits only `payment_method`,
`payment_intent_id` / provider token, and `terms_accepted`. Payment status is
read from the backend, never inferred in the browser.

## Manage booking and auth

| Name | Notes |
| --- | --- |
| `booking_reference`, `last_name` | Find-booking lookup. |
| `email`, `password`, `password_confirmation`, `remember`, `token` | Standard Laravel auth field names. |

Autocomplete hints: `given-name`, `family-name`, `bday`, `email`, `tel-national`,
`country`, `current-password`, `new-password`.
