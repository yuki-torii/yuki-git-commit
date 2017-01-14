var questions = require('./questions')

module.exports = [{
  name: 'addAllFiles',
  type: 'confirm',
  message: 'Add all files ?',
  default: true
}, {
  name: 'type',
  type: 'list',
  message: 'Select your type',
  choices: questions,
  default: 0
}, {
  name: 'title',
  type: 'input',
  message: 'Git commit message title :',
  default: 'update'
}, {
  name: 'content',
  type: 'input',
  message: 'Git commit message content :',
  default: 'update'
}, {
  name: 'pushRightNow',
  type: 'confirm',
  message: 'Push right now ?',
  default: true
}]
