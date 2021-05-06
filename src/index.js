import readlineSync from 'readline-sync';

const playBrainGames = (playGames, rulesOfGames) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${name}`);
  console.log(rulesOfGames);
  let count = 0;
  while (count < 3) {
    const [question, correctAnswer] = playGames();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default playBrainGames;
