import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  // Base configuration for all JavaScript files
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        expect: 'readonly',
        test: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    plugins: {
      js,
      '@stylistic': stylistic,
      jest: 'off'
    },
    rules: {
      // Extends recommended rules with some additional best practices
      ...js.configs.recommended.rules,
      
      // Stylistic rules for consistent code formatting
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/max-len': ['warn', { code: 120 }],
      
      // Additional recommended rules
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'prefer-const': 'error'
    }
  },
  
  // Specific configuration for CommonJS files
  {
    files: ['**/*.{cjs,commonjs}'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  },
  
  // Ignore specific files or directories
  {
    ignores: [
      'dist/',
      'build/',
      'node_modules/',
      '**/*.min.js'
    ]
  }
]);