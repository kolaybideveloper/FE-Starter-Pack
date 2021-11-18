module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'arrow-parens': ['error', 'always'],
    'implicit-arrow-linebreak': 'off',
    'max-len': ['error', { code: 120 }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['if', 'case']
      }
    ],
    'no-undef': 'off',
    'no-prototype-builtins': 'off',
    'comma-dangle': ['error', 'never'],
    'no-console': 'error',
    'no-case-declarations': 'off',
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-trailing-spaces': 'error',
    curly: 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/no-deprecated': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-state': 'error',
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
    /*'array-bracket-spacing': [
      'error',
      'always',
      { objectsInArrays: true, arraysInArrays: false }
    ],*/
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    // Disable Return Type
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },

  // overrides: [
  //   {
  //     files: ['src/components/Icons/*.js'],
  //     rules: {
  //       'max-len': 'off' // disables line length check
  //     }
  //   }
  // ],

  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};

// module.exports = {
//   root: true,
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
//   rules: {
//     'comma-dangle': ['error', 'never'],
//     'no-use-before-define': [2, { functions: true }],
//     'object-curly-spacing': [0]
//     // 'react/jsx-max-props-per-line': [2, { maximum: 1 }]
//   }
// };
