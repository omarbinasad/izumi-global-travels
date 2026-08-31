# CSS

One stylesheet is linked by the page: **`main.css`**. It contains `@import`
lines only. Everything else lives in a numbered folder.

## The folders load in number order

| Folder | What goes in it |
| --- | --- |
| `1-settings/` | Variables only. `tokens.css` = raw values, `themes.css` = light/dark colours. Paints nothing. |
| `2-base/` | Bare HTML elements: `reset.css`, then `typography.css` (text, links, page background, focus ring). No class names. |
| `3-layout/` | Page structure: container width, header, navigation, footer, dashboard shell. |
| `4-components/` | One file per reusable block — a button, a form field, a flight card. Most work happens here. |
| `5-pages/` | Styles needed by exactly one page. Try to make a component first. |
| `6-utilities/` | Small single-purpose helpers. Loaded last so they can override a component. |

**A bigger number can override a smaller one.** That is the only cascade rule
you need to remember.

## Adding a style

1. Pick the folder from the table above.
2. Create `<name>.css` there.
3. Add one `@import` line to `main.css`, in that folder's section.

## Three rules

- **Use variables, not raw values.** Never write a hex colour or a pixel
  spacing in a component. Use the semantic names from `1-settings/themes.css`
  (`--color-primary`, `--color-surface`, `--color-text-muted`) and the scales
  from `tokens.css` (`--space-4`, `--radius-md`).
- **Never write a dark-theme rule outside `1-settings/themes.css`.** Colours
  switch themselves. If a colour you need is missing, add it to `themes.css`
  first.
- **No inline `style=` attributes** and no `!important` without a comment
  saying why.

Full reference: `docs/design-system.md`.
