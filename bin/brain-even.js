#!/usr/bin/env node

import name from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log(`Hello! ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNum = Math.floor(Math.random() * 100);
console.log(`Question: ${randomNum}`);	
const displayResultOfQuestions = (answ1, answ2) => {

	for (let i = 0; i < 3; i++) {
		
	const acceptAnswer = readlineSync.question('Your answer: ');
	
	if (randomNum % 2 === 0 && acceptAnswer === 'yes') {
		console.log('Correct!');
		console.log(`Question: ${randomNum}`);
	} else if (randomNum % 2 === 1 && acceptAnswer === 'no') {
		console.log('Correct!');
		console.log(`Question: ${randomNum}`);
	} else {
		return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`;
	}
	
}
return`Congratulations, ${name}`;
	}
	
console.log(displayResultOfQuestions('yes', 'no'));
