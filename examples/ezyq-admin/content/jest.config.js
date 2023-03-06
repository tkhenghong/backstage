/**
 * Copyright (c) 2013-present, creativeLabs Lukasz Holeczek.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

module.exports = {
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/*index.js',
    '!src/serviceWorker.js',
    '!src/polyfill.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transform: {
    '^.+\\.(js|ts|jsx)$': 'babel-jest',
  },
}
