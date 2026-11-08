/*
 * BLADE BOUNDARY: itinerary slice -> <x-booking.itinerary :slice="$slice" />
 * One slice of the itinerary: segments, layover, baggage and the fare rules
 * link. The same placeholder slice on flight details and the account booking
 * page; Blade fills it from the offer the backend returns.
 */
export default function ItinerarySlice() {
  return (
    <section className="review-panel itinerary" data-slice-id="slc_out">
      <div className="itinerary__head">
        <h2 className="itinerary__when">
          <span className="itinerary__kind">
            Outbound
          </span>
          {' '}
          <span className="itinerary__date">
            Thu, 18 Sep
          </span>
        </h2>
        <p className="itinerary__airline">
          <img className="itinerary__logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
          {' '}
          <span className="itinerary__names">
            {' '}
            <span className="itinerary__carrier">
              Cathay Pacific
            </span>
            {' '}
            <span className="itinerary__flight">
              CX 750 / CX 520
            </span>
            {' '}
          </span>
        </p>
      </div>
      <div className="itinerary__leg">
        <p className="itinerary__point">
          <span className="itinerary__clock">
            02:00
          </span>
          {' '}
          <span className="itinerary__where">
            <span className="itinerary__iata">
              DAC
            </span>
            <span aria-hidden="true">
              ·
            </span>
            <span className="itinerary__city">
              Dhaka
            </span>
          </span>
          {' '}
          <span className="itinerary__point-date">
            Thu, 18 Sep
          </span>
        </p>
        <div className="itinerary__path">
          <span className="itinerary__duration">
            10h 45m · 1 stop
          </span>
          {' '}
          <span className="route">
            {' '}
            <span className="route__line" aria-hidden="true" />
            {' '}
            <svg className="route__plane icon--solid" aria-hidden="true">
              <use href="#i-plane" />
            </svg>
            {' '}
            <span className="route__line" aria-hidden="true" />
            {' '}
            <span className="route__stop">
              {' '}
              <span className="route__dot" aria-hidden="true" />
              {' '}
              <span className="route__labels">
                {' '}
                <span className="route__code">
                  HKG
                </span>
                {' '}
                <span className="route__wait">
                  2h 10m
                  <span className="sr-only">
                    {" transit"}
                  </span>
                </span>
                {' '}
                <span className="route__place">
                  Hong Kong
                </span>
                <span className="route__airport">
                  Hong Kong International Airport
                </span>
                {' '}
              </span>
              {' '}
            </span>
            {' '}
            <span className="route__line" aria-hidden="true" />
            {' '}
            <svg className="route__plane icon--solid" aria-hidden="true">
              <use href="#i-plane" />
            </svg>
            {' '}
            <span className="route__line" aria-hidden="true" />
            {' '}
          </span>
        </div>
        <p className="itinerary__point itinerary__point--arrive">
          <span className="itinerary__clock">
            15:45
          </span>
          {' '}
          <span className="itinerary__where">
            <span className="itinerary__iata">
              NRT
            </span>
            <span aria-hidden="true">
              ·
            </span>
            <span className="itinerary__city">
              Tokyo
            </span>
          </span>
          {' '}
          <span className="itinerary__point-date">
            Thu, 18 Sep
          </span>
        </p>
      </div>
      <details className="itinerary__more">
        <summary className="itinerary__summary">
          <span className="itinerary__cabin">
            {' '}
            <svg className="icon size-4" aria-hidden="true">
              <use href="#i-seat" />
            </svg>
            {"Economy · 23 kg baggage "}
          </span>
          {' '}
          <span className="itinerary__toggle">
            {" Flight details "}
            <svg className="icon size-4 itinerary__chevron" aria-hidden="true">
              <use href="#i-chevron-down" />
            </svg>
            {' '}
          </span>
        </summary>
        <ol className="itinerary__segments">
          <li className="itinerary__segment" data-segment-id="seg_out_1">
            <p className="itinerary__segment-index">
              <span className="itinerary__segment-dot" aria-hidden="true" />
              {" Flight 1"}
            </p>
            <div className="itinerary__segment-body">
              <p className="itinerary__segment-head">
                <span className="itinerary__segment-route">
                  {' '}
                  <span className="itinerary__segment-flight">
                    CX 750
                  </span>
                  {' '}
                  <span aria-hidden="true">
                    ·
                  </span>
                  {" DAC → HKG "}
                </span>
                {' '}
                <span className="itinerary__segment-carrier">
                  {' '}
                  <img className="itinerary__segment-logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
                  {" Cathay Pacific "}
                </span>
              </p>
              <div className="itinerary__hop">
                <p className="itinerary__stop">
                  <span className="itinerary__stop-label sr-only lg:not-sr-only">
                    From
                  </span>
                  {' '}
                  <span className="itinerary__stop-code">
                    DAC
                  </span>
                  {' '}
                  <span className="itinerary__stop-name">
                    Hazrat Shahjalal · T2
                  </span>
                </p>
                <p className="itinerary__hop-path">
                  <span className="itinerary__line" aria-hidden="true">
                    {' '}
                    <svg className="icon--solid">
                      <use href="#i-plane" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                  <span className="itinerary__hop-time">
                    4h 15m
                    <span className="sr-only">
                      {" flight time"}
                    </span>
                  </span>
                </p>
                <p className="itinerary__stop itinerary__stop--arrive">
                  <span className="itinerary__stop-label sr-only lg:not-sr-only">
                    To
                  </span>
                  {' '}
                  <span className="itinerary__stop-code">
                    HKG
                  </span>
                  {' '}
                  <span className="itinerary__stop-name">
                    Hong Kong Intl · T1
                  </span>
                </p>
              </div>
              <p className="itinerary__segment-meta">
                <span>
                  Airbus A330-300
                </span>
                {' '}
                <span>
                  Economy
                </span>
                {' '}
                <span>
                  Operated by Cathay Pacific
                </span>
              </p>
              <p className="itinerary__layover">
                <svg className="icon size-4" aria-hidden="true">
                  <use href="#i-clock" />
                </svg>
                {' '}
                <span className="itinerary__layover-wait">
                  2h 10m layover in Hong Kong
                </span>
                {' '}
                <span className="itinerary__layover-note">
                  Change aircraft
                </span>
              </p>
            </div>
          </li>
          <li className="itinerary__segment" data-segment-id="seg_out_2">
            <p className="itinerary__segment-index">
              <span className="itinerary__segment-dot" aria-hidden="true" />
              {" Flight 2"}
            </p>
            <div className="itinerary__segment-body">
              <p className="itinerary__segment-head">
                <span className="itinerary__segment-route">
                  {' '}
                  <span className="itinerary__segment-flight">
                    CX 520
                  </span>
                  {' '}
                  <span aria-hidden="true">
                    ·
                  </span>
                  {" HKG → NRT "}
                </span>
                {' '}
                <span className="itinerary__segment-carrier">
                  {' '}
                  <img className="itinerary__segment-logo" src="/images/CX.avif" alt="" width="120" height="120" decoding="async" />
                  {" Cathay Pacific "}
                </span>
              </p>
              <div className="itinerary__hop">
                <p className="itinerary__stop">
                  <span className="itinerary__stop-label sr-only lg:not-sr-only">
                    From
                  </span>
                  {' '}
                  <span className="itinerary__stop-code">
                    HKG
                  </span>
                  {' '}
                  <span className="itinerary__stop-name">
                    Hong Kong Intl · T1
                  </span>
                </p>
                <p className="itinerary__hop-path">
                  <span className="itinerary__line" aria-hidden="true">
                    {' '}
                    <svg className="icon--solid">
                      <use href="#i-plane" />
                    </svg>
                    {' '}
                  </span>
                  {' '}
                  <span className="itinerary__hop-time">
                    4h 20m
                    <span className="sr-only">
                      {" flight time"}
                    </span>
                  </span>
                </p>
                <p className="itinerary__stop itinerary__stop--arrive">
                  <span className="itinerary__stop-label sr-only lg:not-sr-only">
                    To
                  </span>
                  {' '}
                  <span className="itinerary__stop-code">
                    NRT
                  </span>
                  {' '}
                  <span className="itinerary__stop-name">
                    Narita Intl · T1
                  </span>
                </p>
              </div>
              <p className="itinerary__segment-meta">
                <span>
                  Boeing 777-300ER
                </span>
                {' '}
                <span>
                  Economy
                </span>
                {' '}
                <span>
                  Operated by Cathay Pacific
                </span>
              </p>
            </div>
          </li>
        </ol>
      </details>
    </section>
  );
}
