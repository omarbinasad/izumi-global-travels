/*
 * BLADE BOUNDARY: booking steps -> <x-booking.steps current="N" />
 * The five-step progress bar over the booking flow. Steps before `current`
 * are done (tick + "— completed" for screen readers), `current` is the page
 * the traveller is on, and later steps are plain numbers.
 */
const STEPS = ['Flight Details', 'Passenger', 'Add-ons', 'Payment', 'Confirm'];

export default function BookingSteps({ current }: { current: number }) {
  return (
    <nav aria-label="Booking progress">
      <ol className="booking-steps">
        {STEPS.map((label, index) => {
          const step = index + 1;

          if (step < current) {
            return (
              <li key={label} className="booking-steps__item" data-state="done">
                <span className="booking-steps__dot" aria-hidden="true">
                  {' '}
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  {' '}
                </span>
                {' '}
                <span className="booking-steps__label">
                  {label}
                  <span className="sr-only">{' — completed'}</span>
                </span>
              </li>
            );
          }

          return (
            <li
              key={label}
              className="booking-steps__item"
              data-state={step === current ? 'current' : undefined}
              aria-current={step === current ? 'step' : undefined}
            >
              <span className="booking-steps__dot" aria-hidden="true">
                {step}
              </span>
              {' '}
              <span className="booking-steps__label">{label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
