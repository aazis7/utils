# Contributing to @aazis7/utils

Thank you for your interest in contributing to @aazis7/utils! This document provides guidelines and instructions for contributors.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/): see specific version in [package.json](./package.json)
- [npm](https://www.npmjs.com/)

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/aazis7/utils.git
   cd utils
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development Workflow

### Building

Before you start development, make sure to build @aazis7/utils so that the code can be run properly:

```bash
npm run build
```

### Development Mode

For active development with file watching:

```bash
npm run dev
```

### Testing

We use Vitest for unit testing. Run tests with:

```bash
# Run all tests
npm run test

# Run tests in watch mode during development
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Type Checking

Ensure your code passes TypeScript type checking:

```bash
npm run type-check
# or
pnpm run type-check
```

### Linting and Formatting

Make sure your code follows the project's style guidelines:

```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code
npm run format
```

## Project Structure

```
src/
├── index.ts          # Main entry point
├── types/            # Type definitions
├── utils/            # Utility functions
└── __tests__/        # Test files
```

## Adding New Utilities

1. Create your utility function in the appropriate directory under `src/`
2. Add the JSDoc comments
3. Export the function from `src/index.ts`
4. Add unit tests in `src/__tests__/`
5. Update type definitions if necessary

### Example Utility Function

```typescript
/**
 * Calculates the sum of two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 * @example
 * ```typescript
 * const result = add(2, 3); // 5
 * ```
 */
export function add(a: number, b: number): number {
  return a + b;
}
```

### Example Test

```typescript
import { describe, it, expect } from 'vitest';
import { add } from '../index';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add(-2, 3)).toBe(1);
  });
});
```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `test:` for test-related changes
- `refactor:` for code refactoring
- `chore:` for maintenance tasks

Examples:
```
feat: add debounce utility function
fix: handle edge case in deepClone function
docs: update README with new utility examples
test: add tests for arrayUtils module
```

## Pull Request Process

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Make your changes following the guidelines above
3. Run the full test suite and ensure all tests pass
4. Run linting and fix any issues
5. Update documentation if necessary
6. Commit your changes with conventional commit messages
7. Push to your fork and create a Pull Request

### Pull Request Checklist

- [ ] Tests pass (`npm run test`)
- [ ] Code is properly typed (`npm run type-check`)
- [ ] Code follows style guidelines (`npm run lint`)
- [ ] Documentation is updated if needed
- [ ] Commit messages follow conventional commits
- [ ] PR has a clear description of changes

## Experimental Versions

To try the library with experimental changes, you can install directly from a Git reference:

```json
{
  "dependencies": {
    "@aazis7/utils": "github:aazis7/utils#your-branch"
  }
}
```

## Questions or Issues?

- Check existing [issues](https://github.com/aazis7/utils/issues)
- Create a new issue if you find a bug or have a feature request
- Start a [discussion](https://github.com/aazis7/utils/discussions) for questions

## Code of Conduct

Please note that this project follows a [CODE_OF_CONDUCT](https://github.com/aazis7/utils/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code and treat all contributors with respect.

---

Thank you for contributing to @aazis7/utils!
