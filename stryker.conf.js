module.exports = function stryker(config) {
  config.set({
    mutator: "typescript",
    mutate: ["src/linked_node/check_cross/*.ts"],
    packageManager: "yarn",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    transpilers: ["typescript"]
  });
};
