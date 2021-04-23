#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('What is the result of the expression?');
const displayResultOfQuestions = () => {
  const shuffleOperators = () => {
    if (Math.random() > 0.5) {
      return -1;
    }
    return 1;
  };
  shuffleOperators();
  const arrSigns = ['+', '-', '*'];
  const randomArr = arrSigns.sort(shuffleOperators);
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
