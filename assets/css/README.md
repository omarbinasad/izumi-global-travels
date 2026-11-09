# CSS

One source file: **`app.css`**. One generated file: **`build.css`**, which is
what the page links and what `.gitignore` excludes. Never edit `build.css`.

```
npm install
npm run dev     # watch, rebuilds on every save
npm run build   # minified, for handoff
```

## What is in app.css, in order

| Block | Holds |
| --- | --- |
| `@import "tailwindcss"` | Tailwind itself |
| `@source` | which files to scan for class names |
| `@custom-variant dark` | binds `dark:` to `[data-theme="dark"]`, not the OS |
| `@theme static` | every design token; the ones in a Tailwind namespace also generate utilities |
| `:root` | tokens that should not generate utilities — z-index layers, control heights, blur |
| `@layer base` | bare HTML elements: body, headings, links, focus ring, reduced motion |
| `@layer components` | patterns repeated often enough that inlining them would drown the markup |

## Where does my style go?

1. **A Tailwind utility in the markup.** This is the default and covers most
   layout, spacing and type.
2. **A token in `@theme`** if you are about to write the same raw value twice.
3. **A class in `@layer components`** only when a pattern repeats *and* its
   utility list would make the HTML unreadable. Each one becomes a Blade
   component, so name it after the thing, not the styling.
4. **Plain CSS** for the few things utilities cannot express: `@keyframes`, the
   `backdrop-filter` fallback, `::-webkit-` pseudo-elements, and pseudo-element
   decoration like the ticket notches. Comment why.

## Three rules

- **Never write a raw colour or a bare pixel value.** Use a token:
  `bg-surface`, `text-fg-muted`, `rounded-md`, `p-4`.
- **Light and dark differ only in `@theme`,** through `light-dark()`. Do not
  scatter `dark:` variants; a semantic colour already flips itself.
- **On the hero glass use the `--color-glass-*` family.** `--color-fg` turns
  white in dark mode and vanishes against pale glass.

Full reference: `docs/design-system.md`.
