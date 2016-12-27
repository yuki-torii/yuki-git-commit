module.exports = [{
  name: 'addAllFiles',
  type: 'confirm',
  message: 'Add all files ?',
  default: true
}, {
  name: 'commitType',
  type: 'list',
  message: 'Select your type',
  choices: [
    'Upgrading dependencies',
    'Initial commit',
    'Improving performance',
    'Fixing a bug',
    'Removing code or files',
    'Improving structure',
    'format of the code',
    'Critical hotfix'
  ],
  default: 0
}, {
  name: 'messageTitle',
  type: 'input',
  message: 'Git commit message title :',
  default: 'update'
}, {
  name: 'messageContent',
  type: 'input',
  message: 'Git commit message content:',
  default: 'update'
}, {
  name: 'pushRightNow',
  type: 'confirm',
  message: 'Push right now ?',
  default: true
}];
