/*
 * BLADE BOUNDARY: back to top -> <x-layout.to-top />
 * Works with no JavaScript ("#top" is the top of the document); the
 * behaviour in lib/behaviour/components/to-top.js only hides it near the top.
 */
export default function ToTop() {
  return (
    <a className="to-top" href="#top" data-to-top="">
      {' '}
      <svg className="icon size-5" aria-hidden="true">
        <use href="#i-chevron-down" />
      </svg>
      {' '}
      <span className="sr-only">Back to top</span>{' '}
    </a>
  );
}
