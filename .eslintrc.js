module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    "no-bitwise": ["off"],
    "import/no-unresolved": ["off"],
    "import/extensions": ["off"],
    "import/prefer-default-export": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"]
  },
  overrides: [
    {
      files: ["src/**/*.spec.ts"],
      rules: {
        "no-undef": ["off"],
        "import/first": ["off"]
      }
    },
    {
      files: ["config/**.js"],
      env: {
        es6: false
      }
    }
  ]
};
