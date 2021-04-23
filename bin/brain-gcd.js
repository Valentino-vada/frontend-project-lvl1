#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('Find the greatest common divisor of given numbers.');
const displayResultOfQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const gcdReceive = (a, b) => {
      if (!b) {
        return a;
      }
      return gcdReceive(b, a % b);
    };
    const gcdResult = gcdReceive(randomNum1, randomNum2);
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const acceptAnswer = readlineSync.question('Your answer: ');
    if (gcdResult === Number(acceptAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${acceptAnswer}' is wrong answer ;(. Correct answer was '${gcdResult}'.\nLet's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
displayResultOfQuestions();
