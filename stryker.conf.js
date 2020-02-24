module.exports = function stryker(config) {
  config.set({
    mutator: "typescript",
    mutate: ["src/linked_node/**/*.ts", "!src/**/*.spec.ts"],
    packageManager: "yarn",
    reporters: ["clear-text", "dashboard", "progress", "html"],
    testRunner: "jest",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    dashboard: {
      reportType: "full"
    }
  });
};
