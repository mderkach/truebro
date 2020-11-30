module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['babel', 'import', 'prettier', 'react', 'react-hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: './build/webpack.base.conf.js',
      },
    },
    'import/extensions': ['.js', '.jsx', '.scss'],
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    semi: 1,
    eqeqeq: 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'global-require': 'off',
    'react/jsx-max-props-per-line': [
      0,
      {
        maximum: 1,
      },
    ],
    'jsx-a11y/tabindex-no-positive': 'off',
  },
};
