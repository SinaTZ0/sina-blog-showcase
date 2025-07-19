function formatter(inputResults) {
  // Ensure 'list' is always an array, even if inputResults or inputResults.results is null/undefined
  const list = inputResults?.results ?? [];

  const outputs = [];

  // Define constants for repeated strings to improve readability and maintainability
  const SECTION_SEPARATOR =
    "------------------------------------------------------------------";
  const SYNTAX_GUIDE_LINES = [
    "", // Empty line after problems found
    "🟦 Follow this syntax:",
    "", // Empty line before standard warnings
    "⚠️  Following [Conventional Commits](https://www.conventionalcommits.org/) standard",
    "⚠️  Full rules in docs/standards/git-naming",
    "🟣 Format `<type>(<scope>): <subject>`",
    "🟣 Examples:",
    "- ✅ `feat(auth): add JWT token validation`",
    "- ✅ `fix(login): resolve redirect loop on mobile`",
    SECTION_SEPARATOR,
  ];

  for (const result of list) {
    // Only process invalid commit messages
    if (result.valid) {
      continue;
    }

    outputs.push(SECTION_SEPARATOR);
    outputs.push(`❌  Commit message: "${result.input.trim()}"`);
    outputs.push("   Problems found:");

    // Add each error message
    for (const err of result.errors) {
      outputs.push(`  • ${err.message}`);
    }

    // Add the common syntax guide
    outputs.push(...SYNTAX_GUIDE_LINES);
  }

  // Join all collected lines with newline characters
  // If 'outputs' is empty (meaning all commits were valid), it will return an empty string,
  // mimicking the behavior where no output means no errors.
  return outputs.join("\n");
}

// Use CommonJS export syntax
module.exports = formatter;
