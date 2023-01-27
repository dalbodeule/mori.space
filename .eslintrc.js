module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ["node_modules/*", "dist/*", "!.prettierrc.js", ".nuxt/", ".output/", ".vscode/", ".npmrc", ".nvmrc"],
  extends: ["eslint:recommended", "plugin:nuxt/recommended", "plugin:vue/vue3-recommended", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "prettier/prettier": ["error", {}],
    "vue/multi-word-component-names": 0
  }
}
