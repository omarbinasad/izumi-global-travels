/**
 * Trip view.
 *
 * A round-trip search shows two slices per offer and a round-trip total; a
 * one-way search shows one slice and a one-way fare. Which it is comes from
 * `trip_type`, the same field the search form submits.
 *
 * In Laravel the controller reads that value and the Blade view renders the
 * right shape; nothing needs to run in the browser at all. Here the page is
 * static, so the value is read back out of the query string and put on <body>,
 * where the same CSS picks it up.
 *
 * No price is derived from another. Both figures come from the backend.
 */

const VIEWS = { one_way: 'one_way', round_trip: 'round_trip' };

export function initTripView() {
  const asked = new URLSearchParams(window.location.search).get('trip_type');

  /* Anything unrecognised leaves the markup's own default alone. */
  if (!asked || !VIEWS[asked]) return;

  document.body.dataset.tripView = VIEWS[asked];
}
