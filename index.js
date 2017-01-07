#!/usr/bin/env node

/* global exec */

const inquirer = require('inquirer')
const chalk = require('chalk')
const program = require('commander')
const prompts = require('./prompts')
require('shelljs/global')
require('console.table')

function optionslist (val) {
  var options = {}
  val.split(',').forEach((item) => {
    options[item] = true
  })
  return options
}

program
  .version(require('./package').version)
  .option('-n, --no <items>', 'no <items>', optionslist)
  .option('-t, --show-info-table', 'Show options infomation table')
  .parse(process.argv)

var promptsFilted = []

if (program.no) {
  prompts.forEach((prompt) => {
    if (!program.no[prompt.name] || prompt.name === 'type') {
      promptsFilted.push(prompt)
    }
  })
} else {
  promptsFilted = prompts
}

inquirer.prompt(promptsFilted).then((res) => {
  if (program.showInfoTable) {
    console.log('\n')
    console.table(res)
  }

  const { title, content } = res

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

  if (res.addAllFiles) {
    exec('git add --all')
  }

  exec(`git commit -m "${commitMessage}"`)

  if (res.pushRightNow) {
    console.log(chalk.green('\nPush Push Push ... \n'))
    exec('git push')
  }

  process.exitCode = 0
})
