#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

console.log(`Hello! ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNum = Math.floor(Math.random() * 10); 
console.log(`Question: ${randomNum}`);

const displayResultOfQuestions = (answ1, answ2) => {
	
for (let i = 0; i < 3; i += 1) { 
	const m = console.count('Correct!');
	const randomNum1 = [20, 33];
const acceptAnswer = readlineSync.question('Your answer: ');
if (randomNum1[0] % 2 === 0 && acceptAnswer === 'yes') {
//console.count('Correct!');
m;
console.log(`Question: ${randomNum1[0]}`);
} else if (randomNum1[1] % 2 === 1 && acceptAnswer === 'no') {
	//console.count('Correct!');
	m;
console.log(`Question: ${randomNum1[1]}`);
} else {
return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`;
} 
}
return `Congratulations, ${name}!`;
}
console.log(displayResultOfQuestions('yes', 'no'));