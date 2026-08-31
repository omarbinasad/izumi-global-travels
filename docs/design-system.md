# Design system

Every token lives in the `@theme static` block of `assets/css/app.css`. This
file explains how to use them — it does not restate every value.

## How @theme works

A variable in `@theme` is a real CSS custom property **and** generates Tailwind
utilities when its name sits in a Tailwind namespace:

| Namespace | Example | Generates |
| --- | --- | --- |
| `--color-*` | `--color-primary` | `bg-primary`, `text-primary`, `border-primary` |
| `--text-*` | `--text-2xs` | `text-2xs` |
| `--radius-*` | `--radius-md` | `rounded-md` |
| `--shadow-*` | `--shadow-lg` | `shadow-lg` |
| `--container-*` | `--container-page` | `max-w-page` |
| `--breakpoint-*` | `--breakpoint-mid` | `mid:` variant |
| `--ease-*`, `--animate-*` | `--animate-rise-in` | `ease-entrance`, `animate-rise-in` |
| `--spacing` | one base value | the whole `p-*` / `gap-*` scale, 4px per step |

Names outside those namespaces (`--z-*`, `--control-height`, `--glass-blur`) are
declared in the `:root` block instead: they are for the component layer to read,
not for generating utilities.

`static` emits every variable even when this page does not use it, so the token
layer stays complete for the pages still to be built and for Laravel.

**Two layers, as before:** primitives (`--color-brand-600`, `--color-neutral-200`)
and semantic names built from them (`--color-primary`, `--color-surface`). Use
the semantic ones in markup and components; reach for a primitive only when
defining a semantic token.

> The brand and neutral palettes come from the approved UI reference. What is
> still marked `@brand-pending` in `tokens.css`: the typeface (a system stack
> stands in until the licensed font file arrives) and the accent scale, which
> the reference does not yet use.

## Semantic colours

Renamed during the Tailwind conversion so each one reads correctly as a utility
(`text-fg-muted` rather than `text-text-muted`):

| Group | Variables | Utility example |
| --- | --- | --- |
| Brand | `--color-primary`, `-hover`, `-active`, `--color-on-primary`, `--color-secondary`, `--color-accent`, `--color-on-accent`, `--color-link` | `bg-primary` |
| Surfaces | `--color-page`, `--color-surface`, `--color-surface-raised`, `--color-surface-muted`, `--color-surface-tint` | `bg-surface` |
| Text | `--color-fg`, `--color-fg-heading`, `--color-fg-muted`, `--color-fg-inverse` | `text-fg-muted` |
| Lines | `--color-line`, `--color-line-strong`, `--color-ring`, `--color-overlay` | `border-line` |
| Navy bands | `--color-panel`, `--color-panel-raised`, `--color-on-panel`, `--color-on-panel-muted`, `--color-panel-line` | `bg-panel` |
| Glass | `--color-glass`, `-raised`, `-hover`, `-line`, `-fg`, `-muted`, `-accent` | `bg-glass-raised` |
| Status | `--color-success`, `--color-warning`, `--color-error`, `--color-info`, each with a `-surface` pair | `text-error` |

Always pair a background with its matching text token (`--color-primary` with
`--color-on-primary`). Body and heading text against `--color-background` and
`--color-surface` meet WCAG AA in both themes; re-check contrast whenever the
brand palette is replaced.

## Light and dark

Each semantic token is declared once using `light-dark(light, dark)`, and
`color-scheme` on `:root` decides which half resolves:

- Light is the base, so the page is light with no attribute and with no
  JavaScript. The site never follows the operating system.
- `data-theme="dark"` is the only switch. `theme-boot.js` writes it before
  first paint, so there is no flash.

There is no second copy of the palette to keep in sync, and **no component may
declare its own `[data-theme="dark"]` rule**. If a component needs a themed
value that does not exist, add the token to `@theme` first.

`dark:` is registered (`@custom-variant dark`, bound to `[data-theme="dark"]`,
never to `prefers-color-scheme`) but should stay unused for colour: a semantic
token already flips itself. Reach for it only for a non-colour difference.

## Typography

`--font-size-xs` … `--font-size-5xl` on a 1.200 ratio from a 16px root.
Weights `regular` / `medium` / `semibold` / `bold`; line heights `heading`,
`snug`, `base`, `relaxed`; letter spacing `tight` and
`caps`. Families are system stacks (`--font-family-base`, `-heading`, `-mono`) —
no web fonts until the design is approved.

## Spacing

`--space-1` … `--space-24` on a 4px base (`--space-4` = 16px). Use the scale for
padding, margins and gaps. One-off values are acceptable inside a component when
they are genuinely unique; do not invent a token for them.

## Layout

Containers `--container-page` (1280 — the page width, shared by the header,
the hero copy and every section) and `--container-narrow` (960); prose measure
`--container-prose`. The hero photograph has no width cap: it fills the page
container, so it scales with the viewport while keeping the side gutter.
Padding steps `--container-padding` / `-md` / `-lg`. Control heights
`--control-height-sm` (36), `--control-height` (44, the touch-target minimum),
`--control-height-lg` (52), `--search-field-height` (56). Also `--header-height` (64) and `--sidebar-width` (260).

## Radius and shadow

Radii `xs` 4 → `xl` 20, plus `--radius-pill`.
Shadows `--shadow-xs`, `-sm`, `-md`, `-lg`, and `--shadow-focus` for the focus
ring. Shadows are theme-aware and therefore live in `themes.css`.

## Breakpoints

Declared as `--breakpoint-*` in `@theme`, which both sets the media query and
generates the variant prefix. Mirrored in `assets/js/core/config.js` as
`BREAKPOINTS`.

| Name | `min-width` | Verify at |
| --- | --- | --- |
| sm | 480px | 375px, 420px |
| md | 768px | 768px |
| lg | 1024px | 1024px |
| xl | 1280px | 1280px |
| 2xl | 1440px | 1440px |

Plus `mid` at 900px, where the bento grid, the route cards and the how-it-works
row all turn two-up. It exists so those three do not need `min-[900px]:`.

Mobile first: write the small-screen rule, then add `min-width` queries. Layouts
must reflow — a search form becomes stacked full-width fields on mobile, not a
shrunken desktop row. Check for horizontal overflow at 375px after any layout
change.

## Z-index

Use the named layers rather than inventing a number: `--z-sticky` 100,
`--z-header` 200, `--z-dropdown` 300, `--z-overlay` 400, `--z-modal` 500,
`--z-toast` 600, `--z-skip-link` 700.

## How components consume tokens

- Use semantic colour variables; never a primitive and never a hex value.
- Use scale variables for spacing, radius, shadow, z-index and transitions.
- Put theme differences in `themes.css`, never in the component file.
- Add a token only when at least two places need it.
- No inline styles and no `!important` without a comment explaining why.

## Adding tokens as the project grows

The token list is deliberately small — it covers what the built components
actually use, plus complete scales so there are no confusing gaps. Speculative
values were removed. Add them back when the component that needs them is built,
and only if the value is used in more than one place. Expected additions:

| When you build | Likely tokens |
| --- | --- |
| Flight card and itinerary timeline | timeline rail colour, airline logo size, card padding |
| Fare selection | fare card width |
| Booking flow | booking summary panel width, step indicator size |
| Dashboard | collapsed sidebar width |

Put layout sizes in `tokens.css` and anything that differs between light and
dark in `themes.css`.

## Glass surfaces

The hero search panel and the scroll indicator are translucent glass sitting on
the hero photograph.

The glass follows the theme: frosted white over the photograph in light mode,
smoked navy in dark. One thing to know if you add another glass surface:

- **Paint text with `--glass-text` / `--glass-text-muted` and accents with
  `--glass-accent`, never `--color-text` / `--color-primary`.** The glass and
  its text have to flip together, and a value pulled from the ordinary theme
  scale will not be paired correctly against it.

A solid surface *inside* the glass — the travellers pop-out, for instance — is
the exception: it goes back to the ordinary `--color-*` tokens.

The tokens are `--glass-surface`, `--glass-surface-raised`,
`--glass-surface-hover`, `--glass-border`, `--glass-text`,
`--glass-text-muted`, `--glass-accent` and `--glass-blur`, all in
`themes.css` beside `--color-panel`. Every `backdrop-filter` needs its
`-webkit-` twin and an `@supports not` fallback to a solid surface, or the
labels become unreadable where the filter is unsupported.

## Motion

Entrance animations live in `6-utilities/animations.css`, driven by
`--duration-entrance` and `--ease-entrance`.

**The one rule that matters:** the hidden state belongs inside a `@keyframes`
`from` block and nowhere else. Never put `opacity: 0` on an element and rely on
script to remove it — with no JavaScript, an unsupported browser, or a failed
request, that content would be gone. Because the element's own style is the
visible one, every failure mode degrades to "no animation", never to "no
content".

The hero animates on load with staggered delays. Everything below the fold is
revealed by `assets/js/components/reveal.js`, which only ever *adds*
`data-revealed="true"` as an element scrolls in. Elements already on screen at
load are left alone, so nothing appears, hides and reappears.

Reduced motion is handled once, in `2-base/reset.css`, which flattens every
duration and delay so each element lands on its final visible frame immediately.
