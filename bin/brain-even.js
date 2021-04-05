#!/usr/bin/env node

import name from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log(`Hello! ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(`Question: ${Math.floor(Math.random() * 100)}`);
const ansver = readlineSync.question('Your answer: ');
if ((Math.floor(Math.random() * 100)) / 2 === 0 && ansver === 'yes') {
	return true;
	console.log('Correct!');
}
