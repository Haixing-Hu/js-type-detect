////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  verbose: true,
  testMatch: ['**/test/**/*.test.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js'],
  transform: {
    '\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  testPathIgnorePatterns: ['<rootDir>/test/index-exports.test.js'],
  setupFilesAfterEnv: [
    'jest-extended/all',
  ],
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.js'],
  // Ignore certain files from code coverage collection
  coveragePathIgnorePatterns: [
    'src/impl/',
    'src/index.js',
    // ignore the coverage of the following files:
    'src/builtin-prototype.js',
    'src/feature-detect.js',
    // Ignoring global-object.js due to testing limitations:
    // 1. It's difficult to test the entire fallback mechanism reliably in a Jest environment
    // 2. Some parts involve runtime evaluation of undefined variables which can't be properly
    //    mocked without significantly altering the production code
    // 3. The actual fallback functionality is already thoroughly tested through the wrapper functions
    'src/global-object.js',
  ],
};
