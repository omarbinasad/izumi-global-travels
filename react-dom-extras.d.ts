/*
 * Two things the markup uses that React's types do not list:
 *   - CSS custom properties in `style` (e.g. --segment-minutes on a bar).
 *   - `hidden` on <svg> (the icon sprite), a valid global HTML attribute.
 */
import 'react';

declare module 'react' {
  interface CSSProperties {
    [property: `--${string}`]: string | number | undefined;
  }

  interface SVGAttributes<T> {
    hidden?: boolean;
  }
}
