# Git Naming Conventions - Best Practices

## Issue Naming

**Format**: `kebab-case` (lowercase with hyphens)

- ✅ `add-user-authentication`
- ✅ `fix-mobile-responsive-layout`
- ✅ `update-payment-gateway-integration`

## Branch Naming

**Format**: `<type>/<issue-number>-<brief-description>`

**Types**:

- `feature/` - New features or enhancements
- `bugfix/` - Bug fixes
- `hotfix/` - Critical production fixes
- `chore/` - Maintenance tasks, tooling, refactoring
- `docs/` - Documentation updates
- `test/` - Adding or updating tests
- `build/` - Build related changes

**Examples**:

- ✅ `feature/123-user-authentication`
- ✅ `bugfix/456-fix-login-redirect`
- ✅ `hotfix/789-security-patch`
- ✅ `chore/321-update-dependencies`

### Branches Without GitHub Issues

Use `000` as the issue number when the branch is not linked to any GitHub issue.

**Examples**:

- ✅ `chore/000-eslint-autofix`
- ✅ `docs/000-readme-update`
- ✅ `refactor/000-cleanup-legacy-code`

## Commit Messages

**Format**: `<type>(<scope>): <issue-task-name> || <description>`

Following [Conventional Commits](https://www.conventionalcommits.org/) standard:

**Examples**:

- ✅ `feat(auth): add JWT token validation`
- ✅ `fix(login): resolve redirect loop on mobile`
- ✅ `docs(readme): update installation instructions`
- ✅ `chore(deps): update react to v18.2.0`
- ✅ `refactor(utils): simplify date formatting function`

## Pull Request Naming(remember to mention the closed issues in description like: - closed #1 )

**Format**: `<type>: <brief description>`

**Examples**:

- ✅ `feat: Add user authentication system`
- ✅ `fix: Resolve mobile login redirect issue`
- ✅ `chore: Update project dependencies`
- ✅ `docs: Improve API documentation`

**Types**:

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style/formatting (no logic changes)
- `refactor` - Code refactoring (no feature/bug changes)
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `perf` - Performance improvements
- `ci` - CI/CD related changes
- `build` - Build related changes
