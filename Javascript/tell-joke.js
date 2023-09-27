import chalk from 'chalk';
import oneLinerJoke from 'one-liner-joke';

var getRandomJoke = oneLinerJoke.getRandomJokeWithTag("IT");
console.log(chalk.italic.greenBright(getRandomJoke.body));