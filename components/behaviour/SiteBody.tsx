'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { routeBody } from '@/lib/routes';
import { setNavigator } from '@/lib/behaviour/core/navigate';

/*
 * <body>, with the attributes each static page put on it, and the bridge to
 * the vanilla behaviours in lib/behaviour.
 *
 * The pages are server-rendered markup; behaviour is progressive enhancement
 * on top, exactly as in the static build. After every route change this
 * starts the behaviours for the new page and tears down the old page's
 * listeners, timers and observers.
 */
export default function SiteBody({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const body = routeBody(pathname);

  useEffect(() => {
    /* A behaviour that moves on (a stand-in submit) stays a client navigation. */
    setNavigator((url: string) => router.push(url));
  }, [router]);

  useEffect(() => {
    /* trip-view.js writes data-trip-view from the query string; each route
       starts again from the server-rendered default. */
    const { dataset } = document.body;
    if (body.tripView) dataset.tripView = body.tripView;
    else delete dataset.tripView;

    /* Loaded in the browser only: the behaviours touch `document` as they
       load, and the server has nothing for them to do. */
    let stop: (() => void) | undefined;
    let cancelled = false;

    import('@/lib/behaviour/registry').then(({ startBehaviours }) => {
      if (!cancelled) stop = startBehaviours();
    });

    return () => {
      cancelled = true;
      stop?.();
    };
  }, [pathname, body.tripView]);

  return (
    /* suppressHydrationWarning: browser extensions (Grammarly, password
       managers) add their own attributes to <body> before React loads. It
       covers this element's attributes only, not its children. */
    <body
      suppressHydrationWarning
      className={body.bodyClass ?? undefined}
      data-page={body.page ?? undefined}
      data-trip-view={body.tripView ?? undefined}
    >
      {children}
    </body>
  );
}
