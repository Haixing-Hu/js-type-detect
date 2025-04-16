/* eslint-env node */
module.exports = {
  root: true,
  extends: ['./.eslintrc.js'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-undef': 'off', // 允许未定义的全局变量，如 BigInt、AggregateError 等
    'import/namespace': 'off', // 禁用导入命名空间检查
    'func-names': 'off', // 允许匿名函数
    'max-classes-per-file': 'off', // 允许多个类在一个文件中
    'no-unused-vars': ['warn', { varsIgnorePattern: '.*' }], // 将未使用的变量降级为警告
    'prefer-rest-params': 'off', // 允许使用 arguments 对象
    'no-empty-function': 'off', // 允许空函数
  },
  globals: {
    BigInt: 'readonly',
    BigInt64Array: 'readonly',
    BigUint64Array: 'readonly',
    AggregateError: 'readonly',
    InternalError: 'readonly',
    SharedArrayBuffer: 'readonly',
    WeakRef: 'readonly',
    FinalizationRegistry: 'readonly',
    globalThis: 'readonly',
  }
}; 