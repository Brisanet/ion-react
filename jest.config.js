module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/styles/**/*.ts',
    '!src/core/**/*.ts',
  ],
  coverageReporters: ['json', 'html', 'lcov', 'text'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['src', '<rootDir>/.jest'],
  testMatch: [
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/src/**/*.spec.{ts,tsx}',
  ],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '^@ion(.*)$': '<rootDir>/src/$1',
  },
};
