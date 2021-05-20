module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        jest: true,

    },
    "extends": [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'prettier'
    ],
    rules: {
        'prettier/prettier': [
          'error',
          {
            semi: true,
          },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    
        semi: ['error', 'always'],
      },
};
