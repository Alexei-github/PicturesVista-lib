import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import React from 'react';
import tseslint from 'typescript-eslint';

const hi = 'test';

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
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { args: 'after-used', argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  eslintConfigPrettier,
]);

// const importRules = eslintPluginImport.configs.recommended.rules;
// const importRules = {
// 'import/no-unused-modules': [2],
// 'import/no-unresolved': [2],
// 'import/order': [
//   'error',
//   {
//     'newlines-between': 'always',
//     groups: ['builtin', 'external', 'internal'],
//     pathGroups: [
//       {
//         pattern: '@/**',
//         group: 'external',
//         position: 'before',
//       },
//     ],
//     pathGroupsExcludedImportTypes: ['react'],
//     'newlines-between': 'off',
//     alphabetize: {
//       order: 'asc',
//       caseInsensitive: true,
//     },
//   },
// ],
// };
//   'import/no-unused-modules': ['error'],
//   // "import/no-unresolved": ["error"],
//   'import/named': ['error'],
//   'import/namespace': ['error'],
//   'import/default': ['error'],
//   'import/export': ['error'],
//   'import/no-named-as-default': ['error'],
//   'import/no-named-as-default-member': ['error'],
//   'import/no-deprecated': ['error'],
//   'import/no-extraneous-dependencies': ['error'],
//   'import/no-mutable-exports': ['error'],
//   'import/unambiguous': ['error'],
// };
