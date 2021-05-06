import playBrainGames from '../index.js';
import getRandomNumber from '../random.js';

const rulesOfGames = 'What is the result of the expression?';

const getShuffleOperators = () => {
  if (Math.random() > 0.5) {
    return -1;
  }
  return 1;
};

const isCalc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getPlay = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operatorShuffl = operators.sort(getShuffleOperators);
  const operatorRandom = operatorShuffl[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operatorRandom} ${num2}`;
  const correctAnswer = String(isCalc(num1, num2, operatorRandom));
  return [question, correctAnswer];
};

const playBrainCalc = () => (playBrainGames(getPlay, rulesOfGames));
export default playBrainCalc;
