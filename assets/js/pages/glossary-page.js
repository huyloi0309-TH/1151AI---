import { glossary } from '../../data/glossary.js';

const list = document.getElementById('glossary-list');
glossary.forEach(({ term, meaning }) => {
  const dt = document.createElement('dt');
  dt.textContent = term;
  const dd = document.createElement('dd');
  dd.textContent = meaning;
  list.append(dt, dd);
});
