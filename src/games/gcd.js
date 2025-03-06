import getRandomNumber from '../utils.js';

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
};

const generateQuestion = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(calculateGCD(num1, num2));
  return [question, correctAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

export { generateQuestion, rules };
