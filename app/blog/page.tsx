import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/blog.html. */

export const metadata: Metadata = {
  title: "Blog — Izumi Global Travels",
  description: "Routes, fare rules and airport know-how from the Izumi Global Travels team.",
};

export default function BlogPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* BLADE BOUNDARY: blog banner -> <x-blog.banner /> */}
        {/* The photograph is decorative; everything readable sits in the markup
          over it, and the tint below it is what keeps the text legible. */}
        <section className="blog-banner" aria-labelledby="blog-title">
          <img className="blog-banner__media" src="/images/banner.webp" alt="" width="2172" height="724" fetchPriority="high" decoding="async" />
          <div className="page-container blog-banner__body">
            <p className="blog-banner__eyebrow">
              Izumi Travel Journal
            </p>
            <h1 className="blog-banner__title" id="blog-title">
              Travel smarter. Explore further.
            </h1>
            <p className="blog-banner__text">
              Practical guides, destination ideas and flight tips for a smoother journey.
            </p>
          </div>
        </section>
        {/* END BLADE BOUNDARY: blog banner */}
        <div className="page-container pb-10">
          {/* BLADE BOUNDARY: post filters -> <x-blog.filters :categories="$categories" /> */}
          {/* Every post is in the markup below; these only narrow what is shown.
            With no JavaScript the whole journal is simply on display. */}
          <div className="post-filters" role="group" aria-label="Filter articles by category">
            <button className="post-filter" type="button" data-post-filter="all" aria-pressed="true">
              All
            </button>
            {' '}
            <button className="post-filter" type="button" data-post-filter="japan" aria-pressed="false">
              Japan
            </button>
            {' '}
            <button className="post-filter" type="button" data-post-filter="travel-tips" aria-pressed="false">
              Travel Tips
            </button>
            {' '}
            <button className="post-filter" type="button" data-post-filter="flight-guides" aria-pressed="false">
              Flight Guides
            </button>
            {' '}
            <button className="post-filter" type="button" data-post-filter="esim" aria-pressed="false">
              eSIM &amp; Connectivity
            </button>
            {' '}
            <button className="post-filter" type="button" data-post-filter="halal-travel" aria-pressed="false">
              Halal Travel
            </button>
          </div>
          {/* END BLADE BOUNDARY: post filters */}
          {/* BLADE BOUNDARY: featured post -> <x-blog.featured :post="$featured" /> */}
          {/* @content-pending: placeholder copy. Every card points at the same
            article until the backend renders one page per post. */}
          <section className="mt-8" aria-labelledby="featured-title" data-post-category="japan">
            <h2 className="section-title" id="featured-title">
              Featured story
            </h2>
            <article className="feature-post">
              <p className="feature-post__figure">
                <img className="feature-post__media" src="/images/blogbig.webp" alt="A train passing Mount Fuji under cherry blossom" width="1664" height="936" loading="lazy" decoding="async" />
                {' '}
                <span className="post-card__tag">
                  Japan Guide
                </span>
              </p>
              <div className="feature-post__body">
                <h3 className="feature-post__title">
                  Your complete guide to visiting Japan in every season
                </h3>
                <p className="feature-post__text">
                  From cherry blossoms to autumn leaves, discover the best times to visit, what to see and how to make the most of your trip.
                </p>
                <p className="feature-post__meta">
                  <span className="post-card__fact">
                    {' '}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-clock" />
                    </svg>
                    {"8 min read "}
                  </span>
                  {' '}
                  <span className="post-card__fact">
                    {' '}
                    <svg className="icon size-4" aria-hidden="true">
                      <use href="#i-calendar" />
                    </svg>
                    {"Feb 15, 2026 "}
                  </span>
                </p>
                <Link className="btn btn--primary feature-post__action" href="/blog-post">
                  {" Read article "}
                  <svg className="icon size-4" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                  {' '}
                </Link>
              </div>
            </article>
          </section>
          {/* END BLADE BOUNDARY: featured post */}
          {/* BLADE BOUNDARY: post list -> <x-blog.post-list :posts="$posts" /> */}
          <section className="mt-10" aria-labelledby="latest-title">
            <div className="section-head">
              <h2 className="section-title" id="latest-title">
                Latest travel insights
              </h2>
              <Link className="section-link" href="/blog">
                {" View all articles "}
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
                {' '}
              </Link>
            </div>
            <div className="post-grid" data-post-list="">
              <article className="post-card" data-post-category="travel-tips japan">
                <Link className="post-card__link" href="/blog-post">
                  {' '}
                  <img className="post-card__media" src="/images/blog1.webp" alt="Tokyo at dusk, with the tower lit and Mount Fuji on the horizon" width="1200" height="750" loading="lazy" decoding="async" />
                  {' '}
                  <span className="post-card__tag">
                    Travel Tips
                  </span>
                  {' '}
                  <span className="post-card__body">
                    {' '}
                    <span className="post-card__title">
                      How to find the best-value flights to Tokyo
                    </span>
                    {' '}
                    <span className="post-card__text">
                      Smart tips to help you book cheaper flights and get more from your travel budget.
                    </span>
                    {' '}
                    <span className="post-card__meta">
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-calendar" />
                        </svg>
                        {"Jan 28, 2026 "}
                      </span>
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-clock" />
                        </svg>
                        {"6 min read "}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </Link>
              </article>
              <article className="post-card" data-post-category="flight-guides">
                <Link className="post-card__link" href="/blog-post">
                  {' '}
                  <img className="post-card__media" src="/images/blog2.webp" alt="Travellers walking towards the gates under a departures board" width="1200" height="750" loading="lazy" decoding="async" />
                  {' '}
                  <span className="post-card__tag">
                    Flight Guides
                  </span>
                  {' '}
                  <span className="post-card__body">
                    {' '}
                    <span className="post-card__title">
                      What to know before choosing a connecting flight
                    </span>
                    {' '}
                    <span className="post-card__text">
                      Make your journey smoother with these essential tips for layovers and transit airports.
                    </span>
                    {' '}
                    <span className="post-card__meta">
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-calendar" />
                        </svg>
                        {"Feb 3, 2026 "}
                      </span>
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-clock" />
                        </svg>
                        {"5 min read "}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </Link>
              </article>
              <article className="post-card" data-post-category="esim japan">
                <Link className="post-card__link" href="/blog-post">
                  {' '}
                  <img className="post-card__media" src="/images/blog3.webp" alt="A phone showing a map of Japan, held up in front of a temple gate" width="1200" height="750" loading="lazy" decoding="async" />
                  {' '}
                  <span className="post-card__tag">
                    eSIM &amp; Connectivity
                  </span>
                  {' '}
                  <span className="post-card__body">
                    {' '}
                    <span className="post-card__title">
                      Stay connected in Japan with an eSIM
                    </span>
                    {' '}
                    <span className="post-card__text">
                      Find out how eSIMs work, what to consider and the best options for travellers in Japan.
                    </span>
                    {' '}
                    <span className="post-card__meta">
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-calendar" />
                        </svg>
                        {"Feb 10, 2026 "}
                      </span>
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-clock" />
                        </svg>
                        {"4 min read "}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </Link>
              </article>
              <article className="post-card" data-post-category="halal-travel japan">
                <Link className="post-card__link" href="/blog-post">
                  {' '}
                  <img className="post-card__media" src="/images/blog4.webp" alt="A table of Japanese dishes laid out by a window over Kyoto" width="1200" height="750" loading="lazy" decoding="async" />
                  {' '}
                  <span className="post-card__tag">
                    Halal Travel
                  </span>
                  {' '}
                  <span className="post-card__body">
                    {' '}
                    <span className="post-card__title">
                      A practical halal travel guide to Japan
                    </span>
                    {' '}
                    <span className="post-card__text">
                      Where to find halal food, prayer facilities and traveller-friendly places across major cities.
                    </span>
                    {' '}
                    <span className="post-card__meta">
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-calendar" />
                        </svg>
                        {"Feb 12, 2026 "}
                      </span>
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-clock" />
                        </svg>
                        {"6 min read "}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </Link>
              </article>
              <article className="post-card" data-post-category="travel-tips">
                <Link className="post-card__link" href="/blog-post">
                  {' '}
                  <img className="post-card__media" src="/images/blog5.webp" alt="An empty row of cabin seats beside a window above the clouds" width="1200" height="750" loading="lazy" decoding="async" />
                  {' '}
                  <span className="post-card__tag">
                    Travel Tips
                  </span>
                  {' '}
                  <span className="post-card__body">
                    {' '}
                    <span className="post-card__title">
                      Window, aisle or middle: choosing the right seat
                    </span>
                    {' '}
                    <span className="post-card__text">
                      Discover the pros and cons of each seat type to make your next flight more comfortable.
                    </span>
                    {' '}
                    <span className="post-card__meta">
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-calendar" />
                        </svg>
                        {"Feb 18, 2026 "}
                      </span>
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-clock" />
                        </svg>
                        {"4 min read "}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </Link>
              </article>
              <article className="post-card" data-post-category="flight-guides">
                <Link className="post-card__link" href="/blog-post">
                  {' '}
                  <img className="post-card__media" src="/images/blog6.webp" alt="Three suitcases standing beside a baggage scale in a terminal" width="1200" height="750" loading="lazy" decoding="async" />
                  {' '}
                  <span className="post-card__tag">
                    Flight Guides
                  </span>
                  {' '}
                  <span className="post-card__body">
                    {' '}
                    <span className="post-card__title">
                      Understanding baggage allowances before you fly
                    </span>
                    {' '}
                    <span className="post-card__text">
                      A clear guide to cabin and checked baggage rules, so you can avoid extra fees at the airport.
                    </span>
                    {' '}
                    <span className="post-card__meta">
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-calendar" />
                        </svg>
                        {"Feb 20, 2026 "}
                      </span>
                      {' '}
                      <span className="post-card__fact">
                        {' '}
                        <svg className="icon size-4" aria-hidden="true">
                          <use href="#i-clock" />
                        </svg>
                        {"5 min read "}
                      </span>
                      {' '}
                    </span>
                    {' '}
                  </span>
                  {' '}
                </Link>
              </article>
            </div>
            <p className="post-empty" hidden data-post-empty="">
              No articles in that category yet.
            </p>
          </section>
          {/* END BLADE BOUNDARY: post list */}
        </div>
      </main>
      {/* END BLADE BOUNDARY: main content */}
      {/* BLADE BOUNDARY: site footer -> <x-layout.footer /> */}
      <SiteFooter />
      {/* END BLADE BOUNDARY: site footer */}
      {/* A link, not a button: "#top" is the top of the document in HTML, so this
        returns there with the stylesheet's smooth scroll and nothing running. */}
    </>
  );
}
