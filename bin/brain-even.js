#!/usr/bin/env node

import name from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log(`Hello! ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNum = Math.floor(Math.random() * 100);
console.log(`Question: ${randomNum}`);
const acceptAnswer = readlineSync.question('Your answer: ');
console.log(`${acceptAnswer}`);
const otr = () => {
	const answer = ['yes', 'no'];
if (randomNum % 2 === 0 && answer === answer[0]) {
	  return 'Correct!';
}
}
