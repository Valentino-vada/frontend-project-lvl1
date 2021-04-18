#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('What is the result of the expression?');
const displayResultOfQuestions = () => {
  // for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.ceil(Math.random() * 51);
    const randomNum2 = Math.ceil(Math.random() * 51);
    const randomNumSum = randomNum1 + randomNum2;
    const randomNumDif = randomNum1 - randomNum2;
    const randomNumMult = randomNum1 * randomNum2;
    console.log(`Question: ${randomNum1} + ${randomNum2}`);
    const acceptAnswer1 = readlineSync.question('Your answer: ');
    if (randomNumSum == acceptAnswer1) {
      console.log('Correct!');
    } else {
      return console.log(`'${acceptAnswer1}' is wrong answer ;(. Correct answer was '${randomNumSum}'.\nLet's try again, ${name}`);
    }
    console.log(`Question: ${randomNum1} - ${randomNum2}`);
    const acceptAnswer2 = readlineSync.question('Your answer: ');
    if (randomNumDif == acceptAnswer2) {
        console.log('Correct!');
      } else {
        return console.log(`'${acceptAnswer2}' is wrong answer ;(. Correct answer was '${randomNumDif}'.\nLet's try again, ${name}`);
    }
    console.log(`Question: ${randomNum1} * ${randomNum2}`);
    const acceptAnswer3 = readlineSync.question('Your answer: ');
    if (randomNumMult == acceptAnswer3) {
        console.log('Correct!');
      } else {
        return console.log(`'${acceptAnswer3}' is wrong answer ;(. Correct answer was '${randomNumMult}'.\nLet's try again, ${name}`);
    }
// }
  return console.log(`Congratulations, ${name}!`);
};
displayResultOfQuestions();
