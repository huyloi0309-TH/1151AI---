// Adds the shared header, footer, and (on lesson pages) Previous/Next links.
// Each page sets <body data-root="../"> so paths stay relative.
import { lessons } from '../../data/lessons.js';

const root = document.body.dataset.root || './';
const el = (tag, text, cls) => { const n = document.createElement(tag); if (text) n.textContent = text; if (cls) n.className = cls; return n; };
const link = (text, href, cls) => { const a = el('a', text, cls); a.href = href; return a; };

const pages = [['Home', 'index.html'], ['Modules', 'modules/index.html'], ['Playground', 'playground/index.html'], ['Practice', 'practice/index.html'], ['Glossary', 'glossary/index.html']];
const nav = el('nav');
nav.setAttribute('aria-label', 'Main');
nav.append(link('Data Structures Learning Hub', root + 'index.html', 'brand'), ...pages.map(([t, h]) => link(t, root + h)));
const header = el('header', '', 'site-header');
header.append(nav);
document.body.prepend(header);
document.body.append(el('footer', 'Data Structures Learning Hub. A student learning project.', 'site-footer'));

const slug = document.body.dataset.lesson;
const slot = document.getElementById('lesson-nav');
if (slug && slot) {
  const ready = lessons.filter(l => l.status === 'done');
  const i = ready.findIndex(l => l.slug === slug);
  const prev = ready[i - 1], next = ready[i + 1];
  slot.append(
    prev ? link('Previous: ' + prev.title, prev.slug + '.html') : el('span'),
    link('Back to Modules', root + 'modules/index.html'),
    next ? link('Next: ' + next.title, next.slug + '.html') : el('span'));
}
