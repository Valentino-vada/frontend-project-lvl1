#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNum = Math.ceil(Math.random() * 51);
console.log(`Question: ${randomNum}`);
const displayResultOfQuestions = () => {
  let i = 0;
  for (; i < 3; i += 1) {
	  // const randomNum = Math.ceil(Math.random() * 51);
    const acceptAnswer = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0 && acceptAnswer === 'yes') {
      console.log('Correct!');
      if (i === 2) {
        continue;
      }
      console.log(`Question: ${randomNum}`);
    } else if (randomNum % 2 === 1 && acceptAnswer === 'no') {
      console.log('Correct!');
      if (i === 2) {
        continue;
      }
      console.log(`Question: ${randomNum}`);
    } else {
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`;
    }
  }
  return `Congratulations, ${name}!`;
};
console.log(displayResultOfQuestions());
