module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/__tests__/*.spec.ts"],
  globalSetup: "./config/jest.js"
};
