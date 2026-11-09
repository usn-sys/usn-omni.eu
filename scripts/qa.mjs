// QA: serve dist, screenshot key pages (desktop + mobile), check internal links, console errors.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node-tools/node_modules/playwright')); }
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = 'dist';
const OUT = process.argv[2] || 'qa-shots';
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json' };
const resolve = (url) => {
  let p = decodeURIComponent(url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  let f = join(DIST, p);
  if (existsSync(f + '.html')) f = f + '.html';
  else if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  return existsSync(f) ? f : null;
};
const server = createServer((req, res) => {
  const f = resolve(req.url);
  if (!f) { res.writeHead(404, { 'content-type': 'text/html' }); res.end(readFileSync(join(DIST, '404.html'))); return; }
  res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream' }); res.end(readFileSync(f));
}).listen(4321);

const pages = ['/', '/services', '/services/ecommerce-operations', '/about', '/founder', '/how-we-work', '/pricing', '/faq', '/contact', '/legal/terms', '/legal/refunds', '/legal/company-information', '/nope-404'];
const browser = await chromium.launch();
const errors = [];
const broken = new Set();
const seen = new Set();
for (const vp of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${vp.name} ${page.url()}: ${m.text()}`); });
  page.on('pageerror', (e) => errors.push(`${vp.name} ${page.url()}: ${e.message}`));
  for (const p of pages) {
    const r = await page.goto('http://localhost:4321' + p, { waitUntil: 'networkidle' });
    if (p !== '/nope-404' && r.status() !== 200) errors.push(`status ${r.status()} for ${p}`);
    // reveal everything for the screenshot
    await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-visible')));
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `${OUT}/${vp.name}${p === '/' ? '-home' : p.replace(/\//g, '-')}.png`, fullPage: true });
    if (vp.name === 'desktop') {
      const hrefs = await page.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href')));
      for (const h of hrefs) {
        if (!h || h.startsWith('http') || h.startsWith('mailto:') || h.startsWith('tel:') || h.startsWith('#')) continue;
        const clean = h.split('#')[0];
        if (seen.has(clean)) continue; seen.add(clean);
        if (!resolve(clean)) broken.add(`${clean} (on ${p})`);
      }
    }
  }
  await ctx.close();
}
await browser.close();
server.close();
console.log('internal links checked:', seen.size, 'broken:', [...broken]);
console.log('console/page errors:', errors.length ? errors : 'none');
