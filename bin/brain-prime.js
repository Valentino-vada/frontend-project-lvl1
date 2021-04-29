#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const displayResultOfQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 101);
    const getIsPrime = (num) => {
      if (num === 1) {
        return 'no';
      }
      for (let j = 2; j * j <= num; j += 1) {
        if (num % j === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    const resultAnswer = getIsPrime(randomNum);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (resultAnswer === 'yes' && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (resultAnswer === 'no' && userAnswer === 'no') {
      console.log('Correct!');
    } else {
      if (resultAnswer === 'yes') {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`);
      }
      if (resultAnswer === 'no') {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
      }
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
displayResultOfQuestions();
