import runGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, operator, b) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calculate(a, operator, b).toString();
  return [question, correctAnswer];
};

const runCalcGame = () => runGame(description, generateRound);

export default runCalcGame;
