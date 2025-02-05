import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  {
    ignores: ['dist', 'node_modules', '!.storybook'],
  },
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    extends: [...storybook.configs['flat/recommended']],
    rules: {
      // example of overriding a rule
      'storybook/hierarchy-separator': 'error',
      // example of disabling a rule
      'storybook/default-exports': 'error',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      storybook: storybook,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      semi: ['warn', 'always'],
      // "unused-vars": "on",
    },
  },
  eslintConfigPrettier,
]);
