import tseslint from 'typescript-eslint'

import recommended from './configs/recommended.js'
import withVue from './configs/withVue.js'
import withTypescript from './configs/withTypescript.js'
import all from './configs/all.js'

export const configs = {
  recommended,
  withVue: tseslint.config(...recommended, ...withVue),
  withTypescript: tseslint.config(...recommended, ...withTypescript),
  all
}

export default all
