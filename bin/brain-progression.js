#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('What number is missing in the progression?');
const displayResultOfQuestions = () => {
  for (let i = 0; i < 3; i += 1) {
    const arr = [];
    let numberArray = Math.floor(Math.random() * 9); //  first
    const firstRandomArray = numberArray;
    const stepArray = Math.ceil(Math.random() * 4);
    let count = 0;
    while (count < 10) {
      arr.push(numberArray);
      numberArray += stepArray;
      count += 1;
    }
    const randomLocationSign = Math.floor(Math.random() * arr.length);
    arr.splice(randomLocationSign, 1, '..');
    const arrayProgression = arr.join(' ');
    const correctValue = firstRandomArray + randomLocationSign * stepArray;
    console.log(`Question: ${arrayProgression}`);
    const acceptAnswer = readlineSync.question('Your answer: ');
    if (Number(acceptAnswer) === correctValue) {
      console.log('Correct!');
    } else {
      return console.log(`'${acceptAnswer}' is wrong answer ;(. Correct answer was '${correctValue}'.\nLet's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
displayResultOfQuestions();
