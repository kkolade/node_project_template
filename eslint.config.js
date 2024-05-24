import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // Corrected rule name
      indent: ['error', 2],
      quotes: ['error', 'single'],
    },
  },
];
