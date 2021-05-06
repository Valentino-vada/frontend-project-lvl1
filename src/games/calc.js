import playBrainGames from '../index.js';
import getRandomNumber from '../random.js';

const rulesGames = 'What is the result of the expression?';

const getShuffleOperators = () => {
  if (Math.random() > 0.5) {
    return -1;
  }
  return 1;
};
getShuffleOperators();
const isCalc = (num1, num2, operator) => {
  if (operator[0] === '+') {
    return num1 + num2;
  }
  if (operator[1] === '-') {
    return num1 - num2;
  }
  if (operator[2] === '*') {
    return num1 * num2;
  }
  return false;
};
const getPlay = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operatorRandom = operators.sort(getShuffleOperators);
  const question = `${num1} ${operatorRandom} ${num2}`;
  const correctAnswer = String(isCalc(num1, num2, operatorRandom));
  return [question, correctAnswer];
};
const playBrainCalc = () => (playBrainGames(getPlay, rulesGames));
export default playBrainCalc;

/* const displayResultOfQuestions = () => {
  const getShuffleOperators = () => {
    if (Math.random() > 0.5) {
      return -1;
    }
    return 1;
  };
  getShuffleOperators();
  const arrSigns = ['+', '-', '*'];
  const randomArr = arrSigns.sort(getShuffleOperators);
  if (arrSigns[0] === randomArr[0]) {
    const randomNum1 = Math.floor(Math.random() * 51);
    const randomNum2 = Math.floor(Math.random() * 51);
    const randomResultFirst = eval(`${randomNum1} ${randomArr[0]} ${randomNum2}`);
    console.log(`Question: ${randomNum1} ${randomArr[0]} ${randomNum2}`);
    const acceptAnswer1 = readlineSync.question('Your answer: ');
    if (randomResultFirst === Number(acceptAnswer1)) {
      console.log('Correct!');
    } else {
      return console.log(`'${acceptAnswer1}' is wrong answer ;(. Correct answer was '${randomResultFirst}'.\nLet's try again, ${name}`);
    }
  }
  if (arrSigns[1] === randomArr[1]) {
    const randomNum1 = Math.floor(Math.random() * 51);
    const randomNum2 = Math.floor(Math.random() * 51);
    const randomResultSecond = eval(`${randomNum1} ${randomArr[1]} ${randomNum2}`);
    console.log(`Question: ${randomNum1} ${randomArr[1]} ${randomNum2}`);
    const acceptAnswer2 = readlineSync.question('Your answer: ');
    if (randomResultSecond === Number(acceptAnswer2)) {
      console.log('Correct!');
    } else {
      return console.log(`'${acceptAnswer2}' is wrong answer ;(. Correct answer was '${randomResultSecond}'.\nLet's try again, ${name}`);
    }
  }
  if (arrSigns[2] === randomArr[2]) {
    const randomNum1 = Math.floor(Math.random() * 51);
    const randomNum2 = Math.floor(Math.random() * 51);
    const randomResultThird = eval(`${randomNum1} ${randomArr[2]} ${randomNum2}`);
    console.log(`Question: ${randomNum1} ${randomArr[2]} ${randomNum2}`);
    const acceptAnswer3 = readlineSync.question('Your answer: ');
    if (randomResultThird === Number(acceptAnswer3)) {
      console.log('Correct!');
    } else {
      return console.log(`'${acceptAnswer3}' is wrong answer ;(. Correct answer was '${randomResultThird}'.\nLet's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
displayResultOfQuestions();
*/
