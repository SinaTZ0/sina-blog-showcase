#!/usr/bin/env bash

# Get the current branch name
branch_name=$(git symbolic-ref --short HEAD)

# Define the regex for the branch name format: <type>/<issue-number>-<brief-description>
# Types: feature, bugfix, hotfix, chore, docs, test, build
# Issue number: one or more digits
# Brief description: kebab-case (lowercase letters, numbers, hyphens)
# New, corrected regex
regex="^(feature|bugfix|hotfix|chore|docs|test|build)\/([0-9]+)-([a-z0-9]+(-[a-z0-9]+)*)$"

# Check if the branch name matches the regex
if [ "$branch_name" = "main" ] || [[ "$branch_name" =~ $regex ]]; then
  echo "Branch name '$branch_name' is valid."
  exit 0
else
  echo "------------------------------------------------------------------"
  echo "Error: Invalid branch name: '$branch_name'"
  echo "Branch names must follow the pattern: <type>/<issue-number>-<brief-description>"
  echo "Allowed types: feature, bugfix, hotfix, chore, docs, test, build"
  echo "Example: feature/123-add-login-page"
  echo "Your branch name parts:"
  echo "  Full name: $branch_name"
  echo "  Expected format: type/issue-description (e.g. feature/123-new-button)"
  echo "------------------------------------------------------------------"
  exit 1
fi
