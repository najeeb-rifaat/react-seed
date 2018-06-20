module.exports = {
  bail: true,
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './build/coverage',
  moduleNameMapper: {
    // mock style imports
    '\\.(s?)css$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    '**/src/**.js',
    '!**/dist/**',
    '!**/build/**',
    '!**/src/**.spec.js', // ignore test files
    '!**/src/**/index.js', // ignore index files
    '!**/node_modules/**' // ignore node modules
  ],
  coverageThreshold: {
    lines: 75,
    branches: 75,
    functions: 75,
    statements: 75
  }
}

