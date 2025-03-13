module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 2 means error
    "type-enum": [2, "always", ["feat", "fix", "revert"]],
    // 1 means warning
    "subject-max-length": [1, "always", 30],
  },
};