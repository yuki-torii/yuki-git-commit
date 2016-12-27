#!/usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk')
const program = require('commander')
const questions = require('./questions')
const package = require('./package.json')
require('shelljs/global')
require('console.table')

function optionslist(val) {
  var options = {}
  val.split(',').forEach((item) => {
    options[item] = true
  })
  return options
}

program
  .version(package.version)
  .option('-n, --no <items>', 'No <items>', optionslist)
  .option('-t, --show-info-table', 'Show options infomation table')
  .parse(process.argv)

var questionsFilted = []

questions.forEach((question) => {
  if (!program.no[question.name] || question.name === 'type') {
    questionsFilted.push(question)
  }
})

inquirer.prompt(questionsFilted).then((res) => {

  if (program.showInfoTable) {
    console.log('\n')
    console.table(res)
  }

  console.log(res)

  const title = res.title
  const content = res.content

  let commitMessage = ''

  if (content && title) {
    commitMessage = `${res.type.split('-')[0]} - ${title}\n${content}`
  } else if (content) {
    commitMessage = `${res.type}\n${res.content}`
  } else if (title) {
    commitMessage = `${res.type.split('-')[0]} - ${title}`
  } else {
    commitMessage = res.type
  }

  console.log('commitMessage',commitMessage)

  if (res.addAllFiles) {
    exec('git add --all')
  }

  exec(`git commit -m "${commitMessage}"`)

  if (res.pushRightNow) {
    console.log(chalk.green('\nPush Push Push ... \n'))
    // exec('git push')
  }
})
