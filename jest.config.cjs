module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // Custom transform for svg images
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/transform.cjs',
  },
};
