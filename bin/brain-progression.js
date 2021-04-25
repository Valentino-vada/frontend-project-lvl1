#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('What number is missing in the progression?');
const displayResultOfQuestions = () => {
    const displayArrayOfProgression = () => {
      const arr = [];
      let numberArray = 5;  //  first
      const stepArray = 2;
      let count = 0;
      while(count !== 10) {
          arr.push(numberArray);
          numberArray += stepArray;
          count += 1;
      }
      const randomLocationSign = Math.floor(Math.random() * arr.length - 1);
      arr.splice(randomLocationSign, 1, '..');
      console.log(randomLocationSign)
      return arr.join(' ');
    }
    const arrayProgression = displayArrayOfProgression();
    console.log(`Question: ${arrayProgression}`)
    const acceptAnswer = readlineSync.question('Your answer: ');
    if (Number(acceptAnswer) === 5 + randomLocationSign * 2) {
      console.log('Correct!');
    } else {
      return console.log(`'${acceptAnswer}' is wrong answer ;(. Correct answer was '${gcdResult}'.\nLet's try again, ${name}`);
    }
  return console.log(`Congratulations, ${name}!`);
};
displayResultOfQuestions();