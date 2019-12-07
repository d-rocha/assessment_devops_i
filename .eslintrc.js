module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedBuffer: 'readonly'
  },
  parseOptions: {
    ecmaVersion: 2018
  }
}
