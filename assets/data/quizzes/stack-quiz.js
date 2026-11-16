// answer = index of the correct option (starts at 0)
export const quiz = [
  { question: 'You push A, then B, then C. Which item does pop() remove?',
    options: ['A', 'B', 'C'], answer: 2,
    explanation: 'A stack is LIFO, so the last item pushed (C) leaves first.' },
  { question: 'What does peek() do?',
    options: ['Removes the top item', 'Shows the top item without removing it', 'Adds a new item'], answer: 1,
    explanation: 'peek() only reads the top item. The stack does not change.' },
  { question: 'What happens if you pop() an empty stack?',
    options: ['Underflow: there is nothing to remove', 'It returns the first item pushed', 'The stack doubles in size'], answer: 0,
    explanation: 'An empty stack has no top item. A correct program must check isEmpty() first.' }
];
