import type { Config } from 'prettier'

export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-sort-json',
    'prettier-plugin-organize-imports',
  ],
  organizeImportsSkipDestructiveCodeActions: true,
} satisfies Config
