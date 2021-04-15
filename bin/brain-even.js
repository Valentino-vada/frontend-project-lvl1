#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const displayResultOfQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.ceil(Math.random() * 51);
    console.log(`Question: ${randomNum}`);
    const acceptAnswer = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0 && acceptAnswer === 'yes') {
      console.log('Correct!');
    } else if (randomNum % 2 === 1 && acceptAnswer === 'no') {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
displayResultOfQuestions();
