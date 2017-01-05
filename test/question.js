import test from 'ava'
import questions from '../questions'

test('questions is array', t => {
  t.is(questions.length > 0, true)
})
