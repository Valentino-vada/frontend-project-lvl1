import readlineSync from 'readline-sync';

const playBrainGames = (rulesGames, expectedAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${name}`);
  console.log(rulesGames);
  let count = 0;
  while (count < 3) {
    console.log(`Question: ${expectedAnswer}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${expectedAnswer}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default playBrainGames;
