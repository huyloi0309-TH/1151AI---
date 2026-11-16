import { Stack } from '../structures/stack.js';
import { renderStack } from '../visuals/stack-view.js';
import { renderQuiz } from '../shared/quiz.js';
import { quiz } from '../../data/quizzes/stack-quiz.js';

const $ = id => document.getElementById(id);

// Runs one operation and returns the caption that explains it.
function run(stack, op, value) {
  if (op === 'push') return stack.push(value) ? `Push "${value}": it goes on top of the stack.` : 'Overflow: the stack is full (demo limit is 8).';
  if (op === 'pop') {
    if (stack.isEmpty()) return 'Underflow: nothing to pop because the stack is empty.';
    return `Pop: "${stack.pop()}" was on top, so it leaves first (LIFO).`;
  }
  if (op === 'peek') return stack.isEmpty() ? 'Peek: the stack is empty.' : `Peek: the top is "${stack.peek()}". Nothing is removed.`;
  return `isEmpty() returns ${stack.isEmpty()}.`;
}

// Section 3: scripted step-by-step demo
const script = [['push', 'A'], ['push', 'B'], ['push', 'C'], ['pop'], ['pop']];
let demo = new Stack(8), step = 0;
$('demo-next').addEventListener('click', () => {
  if (step >= script.length) { $('demo-caption').textContent = 'Demo finished. Press Reset to watch again.'; return; }
  const [op, value] = script[step++];
  $('demo-caption').textContent = `Step ${step} of ${script.length}. ` + run(demo, op, value);
  renderStack($('demo-view'), demo);
});
$('demo-reset').addEventListener('click', () => {
  demo = new Stack(8); step = 0;
  $('demo-caption').textContent = 'Press Next step to start.';
  renderStack($('demo-view'), demo);
});

// Section 4: free interactive practice
const play = new Stack(8);
const show = text => { $('play-caption').textContent = text; renderStack($('play-view'), play); };
$('btn-push').addEventListener('click', () => {
  const value = $('play-input').value.trim();
  if (!value) return show('Type a value first, then press Push.');
  show(run(play, 'push', value));
  $('play-input').value = '';
});
$('btn-pop').addEventListener('click', () => show(run(play, 'pop')));
$('btn-peek').addEventListener('click', () => show(run(play, 'peek')));
$('btn-empty').addEventListener('click', () => show(run(play, 'isEmpty')));

renderQuiz($('quiz'), quiz);
