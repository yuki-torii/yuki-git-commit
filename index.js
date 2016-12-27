const clear = require('clear')
const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')
const program = require('commander')

clear()

console.log(
  chalk.green(
    figlet.textSync('Yuki Git Commit', { horizontalLayout: 'full' })
  )
)

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

var questions = [
  {
    name: 'username',
    type: 'input',
    message: 'Enter your Github username or e-mail address:',
    validate: function( value ) {
      if (value.length) {
        return true;
      } else {
        return 'Please enter your username or e-mail address';
      }
    }
  },
  {
    name: 'test',
    type: 'rawlist',
    message: 'type-list',
    choices: ['a', 'b', 'c'],
    default: 1
  }
];

inquirer.prompt(questions).then((res) => {
  console.log('⛩')
  console.log(res)
});
