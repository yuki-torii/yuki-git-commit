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
    '🎨  - Improving structure / format of the code.',
    '⚡️  - Improving performance.',
    '🔥  - Removing code or files.',
    '🐛  - Fixing a bug.',
    '🚑  - Critical hotfix.',
    '✨  - Introducing new features.',
    '📝  - Writing docs.',
    '🚀  - Deploying stuff.',
    '💄  - Updating the UI and style files.',
    '🎉  - Initial commit.',
    '✅  - Adding tests.',
    '🔒  - Fixing security issues.',
    '🍎  - Fixing something on macOS.',
    '🐧  - Fixing something on Linux.',
    '🏁  - Fixing something on Windows.',
    '🔖  - Releasing / Version tags.',
    '🚨  - Removing linter warnings.',
    '🚧  - Work in progress.',
    '💚  - Fixing CI Build.',
    '⬇️  - Downgrading dependencies.',
    '⬆️  - Upgrading dependencies.',
    '👷  - Adding CI build system.',
    '📈  - Adding analytics or tracking code.',
    '🔨  - Heavy refactoring.',
    '➖  - Removing a dependency.',
    '🐳  - Work about Docker.',
    '➕  - Adding a dependency.',
    '🔧  - Changing configuration files.',
    '🌐  - Internationalization and localization.',
    '✏️  - Fixing typos.',
    '💩  - Writing bad code that needs to be improved.',
    '⏪  - Reverting changes.',
    '🔀  - Merging branches.',
    '📦  - Updating compiled files or packages.',
    '👽  - Updating code due to external API changes.',
    '🚚  - Moving or renaming files.',
    '📄  - Adding or updating license.'
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
