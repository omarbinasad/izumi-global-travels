'use client';

import { useEffect, useState } from 'react';
import { NAVIGATION_START } from '@/lib/behaviour/core/navigate';

/*
 * BLADE BOUNDARY: preloader -> <x-layout.preloader />
 * Decorative, and never in the way for long: it fades out on its own after a
 * moment even with no JavaScript (see .preloader in styles/app.css). This
 * component makes it leave sooner — as soon as the page has loaded — and
 * takes it out of the document once it has faded.
 *
 * The static build showed it on every page, because every link was a full
 * page load. Next.js moves between pages without one, so the overlay is
 * brought back for each client navigation (a link click or a behaviour's
 * navigate()) and leaves once the new page is in place and its images have
 * loaded, the same moment `load` marked before.
 */

type Run = { id: number; state: 'loading' | 'done' | 'gone' };

/* How long to wait for a navigation to land before giving up on it; the
   stylesheet's own exit has taken the overlay away well before this. */
const GIVE_UP_MS = 10000;

const whenImagesLoaded = () =>
  Promise.all(
    [...document.images]
      .filter((img) => !img.complete && img.loading !== 'lazy')
      .map(
        (img) =>
          new Promise<void>((done) => {
            img.addEventListener('load', () => done(), { once: true });
            img.addEventListener('error', () => done(), { once: true });
          }),
      ),
  );

export default function Preloader() {
  const [run, setRun] = useState<Run>({ id: 0, state: 'loading' });

  /* First load: leave on `load`, as preloader.js did. */
  useEffect(() => {
    const leave = () => setRun((r) => (r.id === 0 && r.state === 'loading' ? { ...r, state: 'done' } : r));

    /* Hydration can come after `load` on a fast or cached page. */
    if (document.readyState === 'complete') {
      leave();
      return;
    }

    window.addEventListener('load', leave, { once: true });
    return () => window.removeEventListener('load', leave);
  }, []);

  /* Every client navigation afterwards. */
  useEffect(() => {
    let token = 0;
    let frame = 0;

    const start = (url: URL) => {
      const mine = ++token;
      const target = url.pathname + url.search;
      const deadline = performance.now() + GIVE_UP_MS;

      setRun((r) => ({ id: r.id + 1, state: 'loading' }));

      const finish = () => {
        if (mine === token) setRun((r) => (r.state === 'loading' ? { ...r, state: 'done' } : r));
      };

      /* The router writes the new URL once the new page is committed. Then
         let it paint, and wait for its images as `load` would have. */
      const settle = () => {
        if (mine !== token || performance.now() > deadline) return;
        if (location.pathname + location.search !== target) {
          frame = requestAnimationFrame(settle);
          return;
        }
        frame = requestAnimationFrame(() => {
          frame = requestAnimationFrame(() => {
            if (mine === token) whenImagesLoaded().then(finish);
          });
        });
      };

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(settle);
    };

    /* Capture phase: seen before next/link cancels the click's default. */
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.('a[href]');
      if (!(link instanceof HTMLAnchorElement)) return;
      if ((link.target && link.target !== '_self') || link.hasAttribute('download')) return;

      const url = new URL(link.href);
      if (url.origin !== location.origin) return;

      /* A jump within the same page was never a page load. */
      if (url.pathname === location.pathname && url.search === location.search && url.hash) return;

      start(url);
    };

    const onNavigate = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (typeof detail === 'string') start(new URL(detail, location.href));
    };

    document.addEventListener('click', onClick, true);
    window.addEventListener(NAVIGATION_START, onNavigate);

    return () => {
      token++;
      cancelAnimationFrame(frame);
      document.removeEventListener('click', onClick, true);
      window.removeEventListener(NAVIGATION_START, onNavigate);
    };
  }, []);

  if (run.state === 'gone') return null;

  return (
    <div
      /* A new key per navigation restarts the stylesheet's animations. */
      key={run.id}
      className="preloader"
      aria-hidden="true"
      data-preloader=""
      data-state={run.state === 'done' ? 'done' : undefined}
      onAnimationEnd={(event) => {
        /* Gone either way: after the early exit, or after the stylesheet's own. */
        if (event.target === event.currentTarget) setRun((r) => ({ ...r, state: 'gone' }));
      }}
    >
      <div className="preloader__mark">
        <span className="preloader__track" />{' '}
        <span className="preloader__orbit">
          {' '}
          <svg className="icon icon--solid preloader__plane">
            <use href="#i-plane" />
          </svg>{' '}
        </span>{' '}
        {/* @brand-pending: the same placeholder mark as the header. */}{' '}
        <svg className="preloader__logo" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="20" fill="#1668e0" />
          <path d="M9 25c6-1 11-4 15-8 1.5-1.5 3-3.4 4-5.6-.6 4.6-2.6 8.4-5.6 11.1-3.3 3-8 4.4-13.4 2.5z" fill="#fff" />
          <path d="M13 30c8 1 15-2 19-8-1 6.5-6 11-13 11-2.2 0-4.3-1-6-3z" fill="#bfd7fe" />
        </svg>
      </div>
      <p className="preloader__brand">
        <span className="site-logo__name">Izumi</span>{' '}
        <span className="site-logo__tagline">Global Travels</span>
      </p>
      <span className="preloader__bar" />
    </div>
  );
}
