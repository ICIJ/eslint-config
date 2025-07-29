import tseslint from 'typescript-eslint'

import recommended from './recommended.js'
import withTypescript from './withTypescript.js'
import withVitest from './withVitest.js'
import withVue from './withVue.js'

export default tseslint.config(
  ...recommended,
  ...withTypescript,
  ...withVitest,
  ...withVue
)