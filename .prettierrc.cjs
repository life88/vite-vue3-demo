module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  endOfLine: 'auto',
  importOrder: ['^@/(.*)$', '^[./]'],
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
};
