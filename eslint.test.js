/* eslint-disable no-undef */
import { spawnSync } from 'node:child_process'

const EXPECTED = '9 problems (8 errors, 1 warning)'

// Run ESLint and capture output
const result = spawnSync('yarn', ['eslint', './tests', '--color'], {
  encoding: 'utf8',
  shell: true
})

const output = result.stdout + result.stderr
// Check if expected summary is present
if (!output.includes(EXPECTED)) {
  console.error('❌ ESLint did not print expected summary:\n')
  // Print ESLint output with colors preserved
  process.stdout.write(output)
  process.exit(1)
}

console.log('✅ ESLint exited with errors and printed expected summary.')
