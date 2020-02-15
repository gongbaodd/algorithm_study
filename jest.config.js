module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  testEnvironment: "node",
  rootDir: "src"
};
