import { lessons } from '../../data/lessons.js';

const root = document.getElementById('module-list');
const groups = new Map();
lessons.forEach(l => groups.set(l.module, [...(groups.get(l.module) || []), l]));
groups.forEach((items, name) => {
  const section = document.createElement('section');
  section.className = 'lesson-section';
  const h2 = document.createElement('h2');
  h2.textContent = name;
  const grid = document.createElement('div');
  grid.className = 'grid';
  items.forEach(l => {
    const card = document.createElement('div');
    card.className = 'card' + (l.status === 'done' ? '' : ' is-planned');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    p.textContent = l.summary;
    if (l.status === 'done') {
      const a = document.createElement('a');
      a.href = `../lessons/${l.slug}.html`;
      a.textContent = l.title;
      h3.append(a);
    } else {
      h3.textContent = l.title + ' (coming soon)';
    }
    card.append(h3, p);
    grid.append(card);
  });
  section.append(h2, grid);
  root.append(section);
});
