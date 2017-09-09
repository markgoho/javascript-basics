const questions = [
  {
    question: 'How many states are in the United States?',
    answer: 50
  },
  {
    question: 'How many continents are there?',
    answer: 7
  },
  {
    question: 'How many legs does an insect have?',
    answer: 6
  }
];

const summaryEl = document.querySelector('.summary');

let correct = 0;

const print = message => {};

for (const q of questions) {
  const response = parseInt(prompt(q.question));
  if (response === q.answer) {
    correct++;
  }
}

summaryEl.innerHTML = `You got ${correct} correct. That is a ${Math.round(
  correct / questions.length * 100
)}%`;
