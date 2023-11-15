module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended', './.eslintrc-auto-import.json'],
  rules: {
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    'vue/multi-word-component-names': 'off',
  },
};
