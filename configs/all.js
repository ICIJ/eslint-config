import tseslint from 'typescript-eslint'

import recommended from './recommended.js'
import withVue from './withVue.js'
import withTypescript from './withTypescript.js'

export default tseslint.config(
  ...recommended,
  ...withTypescript,
  ...withVue
)