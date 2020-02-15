module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  testEnvironment: "node"
};
