/**
 * How figures are written on screen.
 *
 * One place, so a price reads the same in every panel that shows one. Nothing
 * here decides what a thing costs — the amounts come from the backend.
 */

/** `money('BDT', 130510)` -> `BDT 130,510`. */
export function money(currency, value) {
  return `${currency} ${value.toLocaleString('en-US')}`;
}
