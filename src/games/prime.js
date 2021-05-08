import playBrainGames from '../index.js';
import getRandomNumber from '../random.js';

const rulesOfGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getIsPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getPlay = () => {
  const randomNum = getRandomNumber(1, 100);
  const question = randomNum;
  const correctAnswer = getIsPrime(question);
  return [question, correctAnswer];
};
const playBrainPrime = () => (playBrainGames(getPlay, rulesOfGames));
export default playBrainPrime;
