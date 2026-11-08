import Link from 'next/link';

/*
 * BLADE BOUNDARY: account nav -> <x-account.nav :current="$current" />
 * The side navigation on every account page. `current` marks the section the
 * page belongs to; the booking detail page sits under "bookings".
 */
export type AccountSection = 'profile' | 'bookings' | 'saved';

const page = (current: AccountSection, section: AccountSection) =>
  current === section ? ('page' as const) : undefined;

export default function AccountNav({ current }: { current: AccountSection }) {
  return (
    <nav className="account-nav" aria-label="Your account">
      <Link className="account-nav__link" href="/account/profile" aria-current={page(current, 'profile')}>
        {' '}
        <svg className="icon size-5" aria-hidden="true">
          <use href="#i-user" />
        </svg>
        {'My Profile '}
      </Link>
      {' '}
      <Link className="account-nav__link" href="/account/bookings" aria-current={page(current, 'bookings')}>
        {' '}
        <svg className="icon size-5" aria-hidden="true">
          <use href="#i-ticket" />
        </svg>
        {'Bookings '}
      </Link>
      {' '}
      <Link className="account-nav__link" href="/account/saved" aria-current={page(current, 'saved')}>
        {' '}
        <svg className="icon size-5" aria-hidden="true">
          <use href="#i-bookmark" />
        </svg>
        {'Saved '}
      </Link>
      <hr className="account-nav__rule" />
      {/* Signing out changes state, so it is a POST, not a link. */}
      <form method="post" action="/auth/login">
        <button className="account-nav__link account-nav__link--out" type="submit">
          {' '}
          <svg className="icon size-5" aria-hidden="true">
            <use href="#i-external" />
          </svg>
          {'Log out '}
        </button>
      </form>
    </nav>
  );
}
