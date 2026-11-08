/*
 * What each static page put on <body>. Generated from the original pages:
 *   page      -> data-page, picks the behaviour module (lib/behaviour/registry.js)
 *   bodyClass -> class on <body>
 *   tripView  -> data-trip-view, the server-rendered default trip shape
 */
export type RouteBody = {
  page: string | null;
  bodyClass: string | null;
  tripView: string | null;
};

export const ROUTE_BODY: Record<string, RouteBody> = {
  "/": { page: "home", bodyClass: null, tripView: null },
  "/about": { page: "about", bodyClass: "results-page", tripView: null },
  "/account/booking": { page: "account-booking", bodyClass: "results-page", tripView: null },
  "/account/bookings": { page: "account-bookings", bodyClass: "results-page", tripView: null },
  "/account/profile": { page: "account-profile", bodyClass: "results-page", tripView: null },
  "/account/saved": { page: "account-saved", bodyClass: "results-page", tripView: null },
  "/auth/forgot-password": { page: "auth", bodyClass: null, tripView: null },
  "/auth/login": { page: "auth", bodyClass: null, tripView: null },
  "/auth/reset-password": { page: "auth", bodyClass: null, tripView: null },
  "/blog": { page: "blog", bodyClass: "results-page", tripView: null },
  "/blog-post": { page: "blog-post", bodyClass: "results-page", tripView: null },
  "/contact": { page: "contact", bodyClass: "results-page", tripView: null },
  "/faq": { page: "faq", bodyClass: "results-page", tripView: null },
  "/flights/add-ons": { page: "add-ons", bodyClass: "results-page", tripView: null },
  "/flights/confirm": { page: "confirm", bodyClass: "results-page", tripView: null },
  "/flights/flight-details": { page: "flight-details", bodyClass: "results-page", tripView: null },
  "/flights/flight-status": { page: "flight-status", bodyClass: null, tripView: null },
  "/flights/passengers": { page: "passengers", bodyClass: "results-page", tripView: null },
  "/flights/payment": { page: "payment", bodyClass: "results-page", tripView: null },
  "/flights/search-results": { page: "search-results", bodyClass: "results-page", tripView: "round_trip" },
  "/hotels/hotel": { page: "hotel", bodyClass: null, tripView: null },
  "/hotels/search-results": { page: "hotels", bodyClass: null, tripView: null },
  "/legal/booking-conditions": { page: "legal", bodyClass: "results-page", tripView: null },
  "/legal/privacy-policy": { page: "legal", bodyClass: "results-page", tripView: null },
  "/legal/refund-policy": { page: "legal", bodyClass: "results-page", tripView: null },
  "/legal/terms": { page: "legal", bodyClass: "results-page", tripView: null },
  "/services/halal-meal": { page: "service", bodyClass: "results-page", tripView: null },
  "/services/meet-and-greet": { page: "service", bodyClass: "results-page", tripView: null },
  "/services/window-seat": { page: "service", bodyClass: "results-page", tripView: null },
  "/support/feedback": { page: "feedback", bodyClass: "results-page", tripView: null },
  "/support/feedback-thanks": { page: null, bodyClass: "results-page", tripView: null },
};

const FALLBACK: RouteBody = { page: null, bodyClass: null, tripView: null };

export function routeBody(pathname: string): RouteBody {
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return ROUTE_BODY[key] ?? FALLBACK;
}
