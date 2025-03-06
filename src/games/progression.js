import getRandomNumber from '../utils.js';

const generateProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const generateQuestion = () => {
  const start = getRandomNumber(1, 50);
  const diff = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = generateProgression(start, diff, length);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const rules = 'What number is missing in the progression?';

export { generateQuestion, rules };
