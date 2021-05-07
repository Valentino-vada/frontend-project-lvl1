import playBrainGames from '../index.js';
import getRandomNumber from '../random.js';

const rulesOfGames = 'Find the greatest common divisor of given numbers.';

const gcdReceive = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcdReceive(num2, num1 % num2);
};

const getPlay = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  gcdReceive(num1, num2);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcdReceive(num1, num2));
  return [question, correctAnswer];
};

const playBrainGcd = () => (playBrainGames(getPlay, rulesOfGames));
export default playBrainGcd;
