import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import SiteBody from '@/components/behaviour/SiteBody';
import Preloader from '@/components/layout/Preloader';
import IconSprite from '@/components/layout/IconSprite';
import ToTop from '@/components/layout/ToTop';
import { THEME_BOOT_SCRIPT } from '@/lib/theme-boot';
import '@/styles/app.css';

/* Blade: resources/views/layouts/app.blade.php */

export const metadata: Metadata = {
  title: 'Izumi Global Travels',
  description:
    'Search and book flights with Izumi Global Travels. Smart search, flexible choices and personal service from booking to boarding.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  /* theme.js keeps this in step with the painted background. */
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    /* data-theme is written by the boot script before paint, so React must
       not treat it as a hydration mismatch. */
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint so the dark theme never flashes light.
            Must stay synchronous and inline. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <SiteBody>
        <Preloader />
        <a className="sr-only skip-link" href="#main-content">
          Skip to main content
        </a>
        <IconSprite />
        {children}
        <ToTop />
      </SiteBody>
    </html>
  );
}
