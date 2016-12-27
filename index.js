const clear = require('clear')
const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')
const program = require('commander')
const questions = require('./questions')
const spawn = require('child_process').spawn
const ora = require('ora')
require('shelljs/global')
require('console.table')

console.log(
  chalk.green(
    figlet.textSync('YukiGitCommit', { horizontalLayout: 'full' })
  )
)

program
  .version('0.0.1')
  .option('-p, --no-content', 'No content')
  .parse(process.argv)

inquirer.prompt(questions).then((res) => {
  console.log('\n')
  console.table(res)

  console.log(`${res.messageTitle}\n${res.messageContent}`)

  if (res.addAllFiles) {
    exec('git add --all')
  }

  if (res.pushRightNow) {
    const spinner = ora('Push Push Push ... ').start()

    exec('git push', () => {
      spinner.stop()
    })
  }
})
