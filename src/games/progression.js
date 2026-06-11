import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5; // от 5 до 10
  const progression = generateProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex].toString();
  const questionArray = progression.map((num, index) => (index === hiddenIndex ? '..' : num.toString()));
  const question = questionArray.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(description, generateRound);

export default runProgressionGame;
