```markdown
# Online-Games Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and conventions used in the **Online-Games** JavaScript codebase. You'll learn how to structure files, write and organize code, follow commit conventions, and implement and run tests in a style consistent with this repository.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `gameLogic.js`, `playerStats.js`

### Import Style
- Use **relative imports** for modules.
  ```js
  import { calculateScore } from './scoreUtils.js';
  ```

### Export Style
- Use **named exports**.
  ```js
  // In scoreUtils.js
  export function calculateScore(player) { ... }
  ```

### Commit Messages
- Follow **conventional commit** format.
- Use prefixes like `refactor`.
- Keep commit messages descriptive (average ~100 characters).
  - Example:  
    ```
    refactor: update game loop to improve performance and readability in multiplayer mode
    ```

## Workflows

### Refactoring Code
**Trigger:** When improving code structure or readability without changing external behavior  
**Command:** `/refactor`

1. Identify code that can be improved (e.g., simplify logic, rename variables for clarity).
2. Make changes following the coding conventions above.
3. Write a commit message using the `refactor:` prefix.
4. Ensure all tests pass before pushing changes.

### Adding a New Module
**Trigger:** When introducing new functionality  
**Command:** `/add-module`

1. Create a new file using camelCase naming.
2. Implement functionality using named exports.
3. Import the module using a relative path where needed.
4. Write or update tests for the new module.
5. Commit changes with a descriptive message.

### Writing and Running Tests
**Trigger:** When adding or updating features  
**Command:** `/test`

1. Create a test file named with the pattern `*.test.*` (e.g., `gameLogic.test.js`).
2. Write tests covering the new or updated functionality.
3. Run tests using the project's test runner (framework unknown; check project scripts or documentation).
4. Ensure all tests pass before merging or deploying.

## Testing Patterns

- Test files follow the `*.test.*` naming convention.
  - Example: `playerStats.test.js`
- The specific testing framework is unknown; refer to project scripts or documentation for details.
- Place test files alongside the modules they test or in a dedicated test directory.

## Commands
| Command      | Purpose                                                  |
|--------------|----------------------------------------------------------|
| /refactor    | Refactor code for clarity or performance                 |
| /add-module  | Add a new module following repository conventions        |
| /test        | Write and run tests for new or updated functionality     |
```