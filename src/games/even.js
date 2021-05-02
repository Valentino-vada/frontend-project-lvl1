import playBrainGames from '../index.js';

const rulesGames = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNum = Math.floor(Math.random() * 51);
const isEven = (num) => num % 2 === 0;
const getPlay = () => {
  const question = randomNum;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const playBrainEven = () => (playBrainGames(getPlay, rulesGames));
export default playBrainEven;
