import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "semi": "off",
      "@typescript-eslint/semi": "off",
      "react/react-in-jsx-scope": "off",
      "camelcase": "error",
      "spaced-comment": "error",
      "quotes": [
        "error",
        "single"
      ],
      "no-duplicate-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/promise-function-async": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/prefer-ts-expect-error": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "prefer-promise-reject-errors": "off",
      'react-refresh/only-export-components': 'warn',
      "multiline-ternary": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "no-empty-function": "on",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-explicit-any": "off",
      
    },
  },
)
