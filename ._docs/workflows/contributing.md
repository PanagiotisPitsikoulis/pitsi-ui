# Contributing to pitsi/ui

> Guidelines for contributing to the project

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a branch for your changes
4. Make your changes
5. Submit a pull request

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ui.git pitsi-ui
cd pitsi-ui

# Add upstream remote
git remote add upstream https://github.com/pitsi/ui.git

# Create feature branch
git checkout -b feat/my-feature
```

---

## Development Setup

See [Development Workflow](./development.md) for full setup instructions.

Quick start:

```bash
bun install
bun run v4:dev
```

---

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Export types for public APIs
- Use `interface` for objects, `type` for unions/primitives

```typescript
// Good
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive"
}

// Good
export type ButtonVariant = "default" | "destructive"
```

### React Components

- Use `React.forwardRef` for DOM-wrapping components
- Set `displayName` for debugging
- Use `cn()` for class merging

```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  )
)
Button.displayName = "Button"
```

### Styling

- Use Tailwind CSS classes
- Use CSS variables for theming
- Support dark mode via `.dark` class

```tsx
// Good - uses CSS variables
className="bg-primary text-primary-foreground"

// Good - supports dark mode
className="bg-white dark:bg-slate-950"
```

### Import Order

Enforced by Prettier:

1. React imports
2. Next.js imports
3. Third-party modules
4. Workspace packages
5. Types
6. Config
7. Lib/utils
8. Hooks
9. UI components
10. Components
11. Registry
12. Styles
13. Relative imports

---

## Commit Messages

Use conventional commits:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

| Type | Use |
|------|-----|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting (no code change) |
| `refactor` | Code change (no feature/fix) |
| `perf` | Performance improvement |
| `test` | Adding tests |
| `chore` | Maintenance |

### Scopes

| Scope | Area |
|-------|------|
| `ui` | UI components |
| `blocks` | Block components |
| `cli` | CLI tool |
| `docs` | Documentation |
| `registry` | Registry system |

### Examples

```
feat(ui): add Combobox component

- Add multi-select support
- Support custom filtering
- Add keyboard navigation

Closes #123
```

```
fix(cli): handle missing config gracefully

Previously crashed when components.json was missing.
Now prompts user to run init.
```

---

## Pull Request Process

### 1. Before Submitting

```bash
# Run all checks
bun run check

# Run tests
bun run test
```

### 2. PR Title

Use same format as commit messages:

```
feat(ui): add Combobox component
```

### 3. PR Description

Include:
- **What** - Brief description of changes
- **Why** - Motivation/context
- **How** - Technical approach (if complex)
- **Testing** - How you tested the changes

### 4. PR Checklist

- [ ] Code follows project style
- [ ] All checks pass
- [ ] Documentation updated (if needed)
- [ ] Tested locally
- [ ] No breaking changes (or documented)

---

## Types of Contributions

### Adding a New Component

See [Adding a Component](./adding-component.md).

### Fixing a Bug

1. Create an issue describing the bug (if not exists)
2. Create a branch: `fix/issue-123-description`
3. Write a test that fails without the fix
4. Implement the fix
5. Verify test passes
6. Submit PR referencing the issue

### Improving Documentation

- Fix typos directly in PRs
- For larger changes, open an issue first
- Documentation files are in:
  - `apps/v4/content/docs/` (MDX)
  - `._docs/` (internal docs)

### Suggesting Features

1. Open a GitHub Discussion
2. Describe the use case
3. Wait for feedback before implementing

---

## Component Guidelines

### Accessibility

- Use semantic HTML
- Support keyboard navigation
- Include ARIA attributes where needed
- Test with screen readers

### Performance

- Lazy load heavy dependencies
- Avoid unnecessary re-renders
- Use `React.memo` when beneficial

### Dependencies

- Prefer Radix UI for primitives
- Minimize external dependencies
- Document all dependencies in registry entry

### File Size

- Keep components focused and small
- Split large components into smaller pieces
- Avoid bundling unnecessary code

---

## Review Process

1. **Automated checks** - CI runs lint, typecheck, tests
2. **Code review** - Maintainer reviews code quality
3. **Design review** - For UI changes, visual review
4. **Merge** - Squash and merge to main

### Review Criteria

- Code quality and readability
- Test coverage
- Documentation
- Breaking changes
- Performance implications

---

## Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Open a GitHub Issue
- **Security**: Email security@pitsiui.com

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
