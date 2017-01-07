import test from 'ava'
import prompts from '../prompts'

test('prompts is array', t => {
  t.is(prompts.length > 0, true)
})
