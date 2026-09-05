import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const BASE = 'http://127.0.0.1:5173';
const PAGE = 'd:/alamin files/alamin files/Omar vai Projects/IZUMI GLOBAL TRAVELS/pages/flights/flight-details.html';

function cut(html, a, b) {
  const i = html.indexOf(a);
  const j = html.indexOf(b, i);
  if (i === -1 || j === -1) throw new Error('slice miss: ' + a.slice(0, 30));
  return html.slice(i, j + b.length);
}

createServer(async (req, res) => {
  const u = new URL(req.url, 'http://x');
  const theme = u.searchParams.get('theme') ?? 'light';
  const html = await readFile(PAGE, 'utf8');
  const sprite = cut(html, '<svg xmlns="http://www.w3.org/2000/svg" hidden', '</svg>');
  const card = cut(html, '<article class="itinerary"', '</article>')
    .replace(/\.\.\/\.\.\/assets\//g, `${BASE}/assets/`);

  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><html lang="en" data-theme="${theme}"><head>
<meta charset="utf-8"><link rel="stylesheet" href="${BASE}/assets/css/build.css">
<style>body{background-color:var(--color-surface);margin:0;padding:12px}</style>
</head><body>${sprite}${card}</body></html>`);
}).listen(5178, '127.0.0.1', () => console.log('detail preview on 5178'));
