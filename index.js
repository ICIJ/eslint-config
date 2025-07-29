import tseslint from 'typescript-eslint'

import recommended from './configs/recommended.js'
import withTypescript from './configs/withTypescript.js'
import withVue from './configs/withVue.js'
import withVitest from './configs/withVitest.js'
import all from './configs/all.js'

export const configs = {
  recommended,
  withTypescript: tseslint.config(...recommended, ...withTypescript),
  withVue: tseslint.config(...recommended, ...withVue),
  withVitest: tseslint.config(...recommended, ...withVitest),
  all
}

export default { configs }
