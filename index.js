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
  if (!program.no[question.name]) {
    questionsFilted.push(question)
  }
})

inquirer.prompt(questionsFilted).then((res) => {

  if (program.showInfoTable) {
    console.log('\n')
    console.table(res)
  }

  res.title = res.title || res.type
  res.content = res.content || ''

  const commitMessage = `${res.type.split('-')[0]} - ${res.title}\n${res.content}`

  if (res.addAllFiles) {
    exec('git add --all')
  }

  exec(`git commit -m "${commitMessage}"`)

  if (res.pushRightNow) {
    console.log(chalk.green('\nPush Push Push ... \n'))
    exec('git push')
  }
})
