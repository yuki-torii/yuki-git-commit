#!/usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk')
const program = require('commander')
const questions = require('./questions')
require('shelljs/global')
require('console.table')

program
  .version('0.0.1')
  .option('-nc, --no-content', 'No content')
  .parse(process.argv)

inquirer.prompt(questions).then((res) => {
  console.log('\n')
  console.table(res)

  const commitMessage = `${res.commitType.split('-')[0]} - ${res.messageTitle}\n${res.messageContent}`

  if (res.addAllFiles) {
    exec('git add --all')
  }

  exec(`git commit -m "${commitMessage}"`)

  if (res.pushRightNow) {
    console.log(chalk.green('\nPush Push Push ... \n'))
    exec('git push')
  }
})
