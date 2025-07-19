// commitlint.config.ts
import { RuleConfigSeverity } from "@commitlint/types";

import type { UserConfig } from "@commitlint/types";

// type(scope): subject
const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "feat", // A new feature
        "fix", // A bug fix
        "docs", // Documentation only changes
        "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        "refactor", // A code change that neither fixes a bug nor adds a feature
        "perf", // A code change that improves performance
        "test", // Adding missing tests or correcting existing tests
        "chore", // Changes to the build process or auxiliary tools and libraries such as documentation generation
        "ci", // Changes to our CI configuration files and scripts
        "build", // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        "revert", // Reverts a previous commit
      ],
    ],
    "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "scope-empty": [RuleConfigSeverity.Error, "never"],
    "subject-empty": [RuleConfigSeverity.Error, "never"],
    "subject-full-stop": [RuleConfigSeverity.Error, "never", "."],
    "header-max-length": [RuleConfigSeverity.Error, "always", 100],
  },
  formatter: "./scripts/commitlint-formatter.js",
};

export default Configuration;
