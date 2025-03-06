#!/usr/bin/env node

import {
  greetUser,
  askQuestion,
  checkAnswer,
  congratulate,
} from '../src/games/even.js';

const name = greetUser();
let count = 0;

while (count < 3) {
  const number = askQuestion();
  const isCorrect = checkAnswer(name, number);

  if (!isCorrect) {
    break;
  }
  count += 1;
}

if (count === 3) {
  congratulate(name);
}
