// Renders multiple-choice questions with instant feedback.
export function renderQuiz(root, questions) {
  questions.forEach((item, qi) => {
    const box = document.createElement('div');
    box.className = 'card quiz-question';
    const title = document.createElement('h3');
    title.textContent = `${qi + 1}. ${item.question}`;
    const feedback = document.createElement('p');
    feedback.className = 'quiz-feedback';
    feedback.setAttribute('aria-live', 'polite');
    box.append(title);
    item.options.forEach((text, oi) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.textContent = text;
      btn.addEventListener('click', () => {
        const ok = oi === item.answer;
        feedback.textContent = (ok ? 'Correct. ' : 'Not quite. ') + item.explanation;
        feedback.className = 'quiz-feedback ' + (ok ? 'is-correct' : 'is-wrong');
      });
      box.append(btn);
    });
    box.append(feedback);
    root.append(box);
  });
}
