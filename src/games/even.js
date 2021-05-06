import playBrainGames from '../index.js';
import getRandomNumber from '../random.js';

const rulesGames = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getPlay = () => {
  const randomNum = getRandomNumber(1, 100);
  const question = randomNum;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const playBrainEven = () => (playBrainGames(getPlay, rulesGames));
export default playBrainEven;
