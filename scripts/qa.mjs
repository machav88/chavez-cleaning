#!/usr/bin/env node
/**
 * Static SEO / link QA over the built site (dist/). No dependencies.
 * Usage: npm run build && npm run qa
 * Checks: lang, title/description presence + uniqueness + length, single H1,
 * canonical (absolute, self-referencing path), robots meta, OG tags, JSON-LD
 * parse, img alt attributes, internal links resolving to built pages/files,
 * heading order jumps, sitemap URLs exist and exclude noindex pages.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

import { fileURLToPath } from 'node:url';
const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : files.push(p); });
walk(DIST);

const html = files.filter((f) => f.endsWith('.html'));
const urlOf = (f) => '/' + relative(DIST, f).split(sep).join('/').replace(/index\.html$/, '').replace(/\.html$/, '/');
const exists = (path) => {
  const clean = decodeURI(path.split('#')[0].split('?')[0]);
  if (clean === '/') return true;
  const p = join(DIST, clean);
  return existsSync(p) && (statSync(p).isFile() || existsSync(join(p, 'index.html')));
};

const errors = [];
const warns = [];
const titles = new Map();
const descs = new Map();
const pages = [];
const get = (s, re) => (s.match(re) || [])[1];

for (const f of html) {
  const s = readFileSync(f, 'utf8');
  const url = urlOf(f);
  const E = (m) => errors.push(`${url}: ${m}`);
  const W = (m) => warns.push(`${url}: ${m}`);
  const robots = get(s, /<meta name="robots" content="([^"]+)"/) || '';
  const noindex = robots.includes('noindex');
  const title = get(s, /<title>([^<]*)<\/title>/);
  const desc = get(s, /<meta name="description" content="([^"]*)"/);
  const canonical = get(s, /<link rel="canonical" href="([^"]+)"/);
  const lang = get(s, /<html lang="([^"]+)"/);
  const h1s = (s.match(/<h1[\s>]/g) || []).length;

  if (lang !== 'en-US') E(`lang="${lang}"`);
  if (!title) E('missing <title>');
  else {
    if (title.length > 65) W(`title ${title.length} chars`);
    titles.set(title, [...(titles.get(title) || []), url]);
  }
  if (!desc) E('missing meta description');
  else {
    if (desc.length < 70 || desc.length > 165) W(`description ${desc.length} chars`);
    descs.set(desc, [...(descs.get(desc) || []), url]);
  }
  if (h1s !== 1) E(`${h1s} <h1> elements`);
  if (!canonical || !/^https?:\/\//.test(canonical)) E('canonical missing or not absolute');
  else if (!url.startsWith('/404') && new URL(canonical).pathname !== url) E(`canonical path ${new URL(canonical).pathname} != ${url}`);
  for (const p of ['og:title', 'og:description', 'og:url', 'og:image']) if (!s.includes(`property="${p}"`)) E(`missing ${p}`);
  if (/hreflang=/.test(s)) E('hreflang present but no translations exist');

  for (const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { E(`invalid JSON-LD: ${e.message}`); }
  }
  for (const m of s.matchAll(/<img\b[^>]*>/g)) if (!/\balt(=|\s|>)/.test(m[0])) E(`img without alt: ${m[0].slice(0, 80)}`);
  for (const m of s.matchAll(/\shref="(\/[^"]*)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (href.startsWith('//')) continue;
    if (!exists(href)) E(`broken internal link ${href}`);
    else if (!/\.[a-z0-9]+$/i.test(href.split(/[?#]/)[0]) && !href.split(/[?#]/)[0].endsWith('/')) W(`link without trailing slash ${href}`);
  }
  // heading order: no jumps greater than one level
  let prev = 0;
  for (const m of s.matchAll(/<h([1-6])[\s>]/g)) {
    const lvl = Number(m[1]);
    if (prev && lvl > prev + 1) W(`heading jump h${prev} -> h${lvl}`);
    prev = lvl;
  }
  pages.push({ url, noindex, title });
}

for (const [t, u] of titles) if (u.length > 1) errors.push(`duplicate title "${t}" on ${u.join(', ')}`);
for (const [, u] of descs) if (u.length > 1) errors.push(`duplicate description on ${u.join(', ')}`);

// Sitemap
const smFiles = files.filter((f) => /sitemap-\d+\.xml$/.test(f));
const smUrls = smFiles.flatMap((f) => [...readFileSync(f, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname));
for (const u of smUrls) {
  const p = pages.find((x) => x.url === u);
  if (!p) errors.push(`sitemap URL not built: ${u}`);
  else if (p.noindex && process.env.SITE_INDEXABLE === 'true') errors.push(`sitemap contains noindex page: ${u}`);
}
for (const p of pages) if (!p.noindex && !smUrls.includes(p.url) && !p.url.startsWith('/404')) warns.push(`indexable page not in sitemap: ${p.url}`);
if (smUrls.includes('/404/') || smUrls.includes('/thank-you/')) errors.push('sitemap contains 404 or thank-you');

const robots = existsSync(join(DIST, 'robots.txt')) ? readFileSync(join(DIST, 'robots.txt'), 'utf8') : '';
if (!robots) errors.push('robots.txt missing');

console.log(`Pages: ${pages.length} | sitemap URLs: ${smUrls.length} | indexable build: ${process.env.SITE_INDEXABLE === 'true'}`);
console.log(`robots.txt:\n  ${robots.trim().split('\n').join('\n  ')}`);
pages.sort((a, b) => a.url.localeCompare(b.url)).forEach((p) => console.log(`  ${p.noindex ? '[noindex]' : '         '} ${p.url}  —  ${p.title}`));
if (warns.length) console.log(`\nWarnings (${warns.length}):\n  ` + warns.join('\n  '));
if (errors.length) {
  console.log(`\nErrors (${errors.length}):\n  ` + errors.join('\n  '));
  process.exit(1);
}
console.log('\nQA passed: no errors.');
