module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageReporters: ["json", "html", "lcov", "text"],
};
