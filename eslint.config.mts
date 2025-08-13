import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist', 'node_modules', '__tests__']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {},
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tseslint.configs.recommended,
])
