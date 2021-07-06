export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  },
  coverageProvider: 'babel',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/cypress/'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ],
  testEnvironment: 'jsdom'
}
