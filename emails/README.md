# Email templates

Reference markup for the Laravel mail views. Like the rest of `components/`,
these are not loaded at runtime — open one in a browser to see it, and move it
to `resources/views/emails/` on handoff.

## Why these do not look like the rest of the project

Email is not the web. These files deliberately break the house style:

- **Table layout, not flex or grid.** Outlook renders with Word's engine and
  has no reliable flexbox.
- **Inline styles, not `app.css`.** Many clients strip `<style>` and none of
  them fetch an external stylesheet, so every rule that must survive is inline
  on the element it applies to. The `<style>` block only carries the
  progressive extras (dark scheme, the one media query) that are safe to lose.
- **Raw hex, not tokens.** Custom properties are unsupported in Outlook and
  patchy elsewhere. The brand values are copied in literally; the comment
  beside each block says which token in `@theme` it came from, so a palette
  change can be traced here.
- **Fixed 600px width** with a fluid fallback, which is the width every client
  handles.
- **The logo is a remote PNG**, `assets/images/logo-mark.png`, because the site
  draws its mark as inline SVG and Gmail strips that. The name and tagline are
  live text beside it, so a client that blocks images still says who sent this.
  The `src` must be absolute and publicly reachable — a relative path resolves
  to nothing in a mail client.

## The five templates

| File | Goes to | Sent when |
| --- | --- | --- |
| `booking-request.html` | the traveller | a request is submitted |
| `booking-request-internal.html` | the ops inbox | the same moment |
| `password-reset.html` | the account holder | a reset is asked for |
| `password-changed.html` | the account holder | the new password is saved |
| `esim-order.html` | the traveller | an eSIM order is confirmed |

The two booking emails describe one event to two audiences and must not be
confused: the traveller's says what happens next, the internal one carries the
detail needed to act and is banded INTERNAL at the top.

`password-changed.html` is a notice, not an action. It carries no token and
no link that can change anything, so forwarding it grants nothing — which is
why it can say plainly what happened and when.

`esim-order.html` carries the QR and the SM-DP+ pair, which together are
the credential: whoever installs the profile first gets the data. It says so
on the face of the email, and the same details sit behind login on the
bookings page. The manual pair is not decoration — clients block remote
images by default, so a QR on its own is unusable for many people.

The internal one shows only the last four digits of each passport. Mail sits in
inboxes, on phones and in backups outside our control, and the team can open the
record for the rest.

## Filling them in

Each file opens with a comment listing the values Blade injects. The sample
data in the markup is there so the file renders on its own — replace it with
those variables, nothing else.

## Sending

Subject lines, the from address, the reply-to and the plain-text alternative
are Laravel's `Mailable`, not this markup. Always send a text part alongside
the HTML.
