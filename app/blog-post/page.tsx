import Link from 'next/link';
import type { Metadata } from 'next';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/* Converted from pages/blog-post.html. */

export const metadata: Metadata = {
  title: "Dhaka to Tokyo: which connection is actually worth it — Izumi Global Travels",
  description: "Comparing the Dhaka to Tokyo non-stop against one-stop routings on price, total time and how much of your first day you lose.",
};

export default function BlogPostPage() {
  return (
    <>
      {/* BLADE BOUNDARY: site header -> <x-layout.header /> */}
      <SiteHeader />
      {/* END BLADE BOUNDARY: site header */}
      {/* BLADE BOUNDARY: main content -> @yield('content') */}
      <main id="main-content">
        {/* BLADE BOUNDARY: post -> <x-blog.post :post="$post" /> */}
        {/* @content-pending: the template one post is rendered into. The backend
          gives each post its own page; this stands in for all of them. */}
        <article className="page-container post">
          <Link className="review-back" href="/blog">
            {' '}
            <svg className="icon size-4" aria-hidden="true">
              <use href="#i-arrow-left" />
            </svg>
            {" Back to the blog "}
          </Link>
          <div className="post__card">
            <p className="post__meta">
              <span className="post-card__tag">
                Routes
              </span>
              {' '}
              <span>
                12 August 2026
              </span>
              {' '}
              <span aria-hidden="true">
                ·
              </span>
              {' '}
              <span>
                6 min read
              </span>
            </p>
            <h1 className="post__title">
              Dhaka to Tokyo: which connection is actually worth it
            </h1>
            <img className="post__media" src="/images/hero%20section.webp" alt="An aircraft climbing away through cloud" width="1600" height="900" decoding="async" />
            <div className="post__body">
              <p>
                There is one non-stop between Dhaka and Tokyo, and a dozen ways to do it with a change. The non-stop is not always the right answer, and the cheapest one-stop is almost never the one you want. Here is how we weigh them up when someone asks.
              </p>
              <h2>
                Total time is not flight time
              </h2>
              <p>
                A six-hour flight with a two-hour connection is not eight hours of travel. Add the walk between terminals, the second security queue, and the hour you spend not daring to leave the gate area. A connection under ninety minutes at an unfamiliar airport is a gamble; over five hours and you have lost a day.
              </p>
              <h2>
                Where the change happens matters
              </h2>
              <p>
                Hong Kong and Bangkok are easy: one terminal, clear signage, and enough flights that a missed connection is rebooked the same day. Guangzhou is cheaper and slower. If the two legs are on one ticket the airline owns the problem when the first runs late — on separate tickets, you do.
              </p>
              <h2>
                What it costs to arrive tired
              </h2>
              <p>
                The overnight one-stop that saves BDT 8,000 lands you in Narita at breakfast with no sleep, and you spend the saving on a hotel you check into at noon. Worth it on a two-week trip; not worth it on a three-day one.
              </p>
              <h2>
                What we would book
              </h2>
              <p>
                For a short trip, the non-stop, every time. For a longer one, the Hong Kong routing: it is reliably cheaper, the transit is short enough to stay airside, and the arrival still gives you an afternoon. Ask us and we will price both against your dates before you decide.
              </p>
            </div>
          </div>
        </article>
        {/* END BLADE BOUNDARY: post */}
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
