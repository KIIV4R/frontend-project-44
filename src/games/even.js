import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
};

export const askQuestion = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  return number;
};

export const checkAnswer = (name, number) => {
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};
