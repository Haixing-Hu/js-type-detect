////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: [
    '@qubit-ltd/eslint-config',
  ],
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
  },
};
