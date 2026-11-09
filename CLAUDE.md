# Claude Code instructions

Static flight-booking frontend, later converted to Laravel Blade.
Stack: semantic HTML5, **Tailwind CSS v4** compiled with the Tailwind CLI, and
vanilla ES modules. No framework, no UI or component library, and no
dependencies beyond Tailwind and its CLI.

Details live in `README.md` and `docs/`. Read a doc only when the task needs it.

## Build

```
npm install
npm run dev     # watch  -> assets/css/build.css
npm run build   # minify -> assets/css/build.css
```

`assets/css/app.css` is the source. `assets/css/build.css` is generated and
gitignored — never edit or commit it. The page links the build output.

## Workflow

1. Identify the smallest relevant file set.
2. Inspect only those files before editing.
3. Reuse existing tokens, components and conventions.
4. Make the smallest complete change.
5. Rebuild and run only the verification relevant to that change.
6. Report changed files and results concisely.

Do not re-analyse the repository for every task, read every doc for a small
edit, restate the folder structure, rewrite unchanged files, explain simple
changes at length, duplicate an existing style or component, add speculative
features or dependencies, or run broad checks when a focused one is enough.

## File safety

- Do not delete, move or replace files without approval.
- Do not modify unrelated files, and preserve the user's own changes.
- Never create a nested project root; this directory is the root.
- Do not commit unless explicitly asked.
- `node_modules/` and the generated CSS are gitignored, never committed.
- No temporary output or machine-specific absolute paths.
- Never put secrets or API credentials in a frontend file.

## Styling

- **Tailwind utilities in the markup are the default.** Reach for a component
  class only when a pattern repeats and its utility list would drown the HTML.
- `app.css` has one order: `@import` → `@source` → `@custom-variant` → `@theme`
  → runtime `:root` vars → `@layer base` → `@layer components`. No page styles
  in it.
- Tokens live in `@theme`. Add one there rather than repeating a raw value;
  never introduce a colour or size that is not a token.
- Avoid arbitrary values (`[13px]`). If a value is needed twice, it is a token.
- Light and dark differ **only** through the `light-dark()` semantic colours in
  `@theme`. Do not scatter `dark:` variants — they are for the rare non-colour
  difference only.
- On the hero glass use `--color-glass-*`, never `--color-fg` / `--color-primary`.
- Custom CSS is allowed for keyframes, `backdrop-filter` fallbacks, `::-webkit-`
  pseudo-elements and pseudo-element decoration. Keep it small and comment why.
- No inline CSS. No `!important` without a comment justifying it.
- Do not add Tailwind plugins, a UI kit, or CDN Tailwind.

## HTML and accessibility

- Semantic HTML5 and a logical heading order.
- Every control has a label (`<label for>` or `aria-label`); hints and errors are
  linked with `aria-describedby`.
- `<button>` for actions, `<a>` for navigation.
- Keyboard operable with a visible focus state; keep ARIA states correct.
- Essential content must exist in the HTML, not be produced by JavaScript.
- Entrance animations put their hidden state **only inside `@keyframes`**, never
  on the element, so content survives with no JavaScript.
- Do not load `components/*.html` at runtime — they are reference markup for the
  Blade conversion, not a client-side templating system.

## JavaScript

- ES modules everywhere except `core/theme-boot.js`, which must stay a small
  synchronous non-module script.
- Select elements with `data-*` hooks, never styling classes — a Tailwind class
  can change at any time.
- Never build a utility class name from string fragments; Tailwind cannot see it.
- No global variables.
- Component behaviour in `js/components/`, page behaviour in `js/pages/`,
  backend access only in `js/services/`. No endpoint appears in UI code.
- Never rely on JavaScript alone for security-sensitive validation.

## Laravel handoff

- `app.css` moves to `resources/css/app.css` unchanged; only `@source` changes.
- Keep `<!-- BLADE BOUNDARY: … -->` markers accurate around reusable regions.
- A component class in `@layer components` is one Blade component.
- Pricing, availability, fare rules, booking, ticketing and payment stay
  server-owned; the frontend only displays what the backend returns.
- Use stable ids and codes (IATA, airline code, `offerId`, `fareId`,
  `segmentId`, `addOnId`, ISO currency), never visible labels.
- Never expose API credentials; never simulate production auth or payment.

## Response style

Report only what changed, which files, which checks were run, and any remaining
placeholders or blockers. Do not paste large unchanged files.
