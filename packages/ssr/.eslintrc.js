module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',

    /**
      Bug fix with throwing error about 2 space indentation 
    */
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2]
  }
};
