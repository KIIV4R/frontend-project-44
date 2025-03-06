import getRandomNumber from '../utils.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateQuestion = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const rules = 'What is the result of the expression?';

export { generateQuestion, rules };
