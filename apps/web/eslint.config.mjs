import defaultConfig from '@illuwa/eslint'

export default [
  ...defaultConfig,
  {
    ignores: ['build/**', 'node_modules/**', '.react-router']
  }
]
