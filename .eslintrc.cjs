module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // 禁止使用未宣告的變數（如直接使用未定義的變數會報錯）
    'no-undef': 'error',

    // 禁止變數、函式、class 在宣告之前被使用（變數預設也會檢查）
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],

    // 禁止使用 var（要求使用 let 或 const）
    'no-var': 'error',

    // 如果變數沒有重新賦值，強制使用 const 而不是 let
    'prefer-const': 'error',

    // 關閉 Vue 組件名稱需為多字詞的限制（ex: Hello → OK）
    'vue/multi-word-component-names': 'off',

    // 強制使用 === 或 !==，禁止使用 == 或 !=
    eqeqeq: ['error', 'always'],

    // 警告 console 的使用（允許 console.warn 和 console.error）
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // 限制每個 function 最多 50 行（不包含空行與註解）
    'max-lines-per-function': [
      'warn',
      { max: 50, skipBlankLines: true, skipComments: true },
    ],

    // 限制巢狀結構最多 3 層（例如 if 裡面套 if）
    'max-depth': ['warn', 3],

    // 要求所有 return 要有一致性（例如不能有些分支 return，有些不 return）
    'consistent-return': 'warn',

    // Vue 中 template 裡使用的 component 名稱必須為 PascalCase
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  },
}
