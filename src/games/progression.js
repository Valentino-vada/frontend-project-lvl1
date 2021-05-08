import playBrainGames from '../index.js';
import getRandomNumber from '../random.js';

const rulesOfGames = 'What number is missing in the progression?';

const isProgression = (firstNumArray, stepNumArray, lengthArray) => {
  const arr = [];
  let count = 0;
  while (lengthArray > count) {
    arr.push(firstNumArray + count * stepNumArray);
    count += 1;
  }
  return arr;
};

const getPlay = () => {
  const firstNumArray = getRandomNumber(0, 9);
  const stepNumArray = getRandomNumber(1, 5);
  const arr = isProgression(firstNumArray, stepNumArray, 10);
  const randomLocationSign = getRandomNumber(0, arr.length - 1);
  arr.splice(randomLocationSign, 1, '..');
  const arrayProgression = arr.join(' ');
  const correctValue = firstNumArray + randomLocationSign * stepNumArray;
  const question = arrayProgression;
  const correctAnswer = String(correctValue);
  return [question, correctAnswer];
};

const playBrainProgression = () => (playBrainGames(getPlay, rulesOfGames));
export default playBrainProgression;
