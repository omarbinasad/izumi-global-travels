# Flight data contract

The shapes the frontend expects to receive. **These are illustrative mock shapes
defined by this project — they do not describe any real GDS or aggregator API.**
When a provider is confirmed, the Laravel backend maps that provider's response
into these shapes so the frontend does not change.

## Principles

- Money is always `{ amount, currency }` with `amount` as a decimal **string**,
  never a float, and never re-calculated in the browser.
- Every selectable thing carries a stable id: `offerId`, `fareId`, `segmentId`,
  `addOnId`. Submit ids, not labels.
- Times are local to the airport, ISO 8601 with an offset. Durations are ISO 8601
  (`PT7H35M`) or whole minutes.
- Anything the frontend cannot verify — availability, price, allowances, rules —
  is display-only and re-checked server-side before booking.

## Airport

```json
{
  "iata": "DAC",
  "icao": "VGHS",
  "name": "Hazrat Shahjalal International Airport",
  "city": "Dhaka",
  "countryCode": "BD",
  "timeZone": "Asia/Dhaka"
}
```

## Airline

```json
{
  "code": "BG",
  "name": "Biman Bangladesh Airlines",
  "logoUrl": "/assets/images/airlines/bg.svg"
}
```

## Flight segment

```json
{
  "segmentId": "seg_1",
  "marketingCarrier": "BG",
  "operatingCarrier": "BG",
  "flightNumber": "BG147",
  "aircraftCode": "788",
  "origin": { "iata": "DAC", "terminal": "2" },
  "destination": { "iata": "DXB", "terminal": "1" },
  "departureAt": "2026-09-14T03:30:00+06:00",
  "arrivalAt": "2026-09-14T07:05:00+04:00",
  "durationMinutes": 335,
  "cabinClass": "ECONOMY",
  "bookingClass": "T"
}
```

## Flight offer

An offer is one priced, bookable itinerary. `slices` holds one entry for a
one-way search, two for a round trip, and one per leg for multi-city.

```json
{
  "offerId": "off_9f2c",
  "expiresAt": "2026-08-29T12:20:00Z",
  "slices": [
    {
      "sliceId": "slc_1",
      "origin": "DAC",
      "destination": "DXB",
      "durationMinutes": 335,
      "stops": 0,
      "segments": ["seg_1"]
    }
  ],
  "segments": [],
  "price": { "amount": "48250.00", "currency": "BDT" },
  "fares": ["far_basic", "far_flex"],
  "refundable": false,
  "seatsRemaining": 4
}
```

`seatsRemaining` is an indicator for the UI only; the backend confirms
availability at booking time.

## Fare option

```json
{
  "fareId": "far_flex",
  "name": "Flex",
  "brandCode": "FLEX",
  "price": { "amount": "53100.00", "currency": "BDT" },
  "priceDifference": { "amount": "4850.00", "currency": "BDT" },
  "baggage": { "cabin": [], "checked": [] },
  "inclusions": [
    { "code": "SEAT_SELECTION", "label": "Free seat selection", "included": true },
    { "code": "CHANGES", "label": "Changes for a fee", "included": true },
    { "code": "REFUND", "label": "Refundable", "included": false }
  ]
}
```

## Baggage

```json
{
  "passengerType": "ADT",
  "type": "CHECKED",
  "pieces": 2,
  "weightKg": 23,
  "description": "2 x 23 kg"
}
```

## Passenger types

`ADT` adult, `CHD` child, `INF` infant on lap, `INS` infant with seat. Age
boundaries are carrier rules and are validated server-side.

## Price breakdown

```json
{
  "currency": "BDT",
  "perPassenger": [
    {
      "passengerType": "ADT",
      "count": 2,
      "baseFare": "38000.00",
      "taxes": "9250.00",
      "total": "94500.00"
    }
  ],
  "extras": [
    { "addOnId": "add_bag20", "label": "Extra bag 20 kg", "total": "3200.00" }
  ],
  "fees": [{ "code": "SERVICE", "label": "Service fee", "total": "800.00" }],
  "discounts": [],
  "grandTotal": "98500.00"
}
```

The frontend renders `grandTotal` as given. It never sums the parts.

## Booking summary

```json
{
  "bookingReference": "IZ4K9P",
  "status": "CONFIRMED",
  "ticketingStatus": "TICKETED",
  "createdAt": "2026-08-29T10:04:00Z",
  "contact": { "email": "", "phone": "" },
  "passengers": [],
  "slices": [],
  "priceBreakdown": {},
  "paymentStatus": "PAID",
  "cancellation": { "allowed": true, "feeQuoteRequired": true }
}
```

Status vocabularies (`PENDING`, `CONFIRMED`, `FAILED`, `CANCELLED`;
`UNPAID`, `PAID`, `REFUNDED`) are owned by the backend. The UI maps them to
labels and badge styles and never derives one from another.
