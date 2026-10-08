# Code Formatting Rules

## Principle

Preserve semantic units. Optimize for scanning. Use line breaks only when they add information.

## Rules

- Keep assignments and assigned expressions together where practical.
- Keep simple function calls, parameter lists, returns, and concatenations together.
- Prefer semantic cohesion over arbitrary historical line limits.
- Use structured expansion for meaningful logical clauses, constructors, pipelines, object definitions, and component hierarchies.
- Keep opening braces or block delimiters with their initiating statement where repository tooling permits.
- Keep closing boundaries visible.
- Use one statement per line.
- Use blank lines between concepts, not between closely related statements.
- Comment intent, constraints, and risk rather than restating mechanics.
- Respect repository formatters and avoid unrelated reformatting.
- SQL is out of scope and requires a separate standard.

## Compact example

```typescript
const response = buildResponse(customer, orders, contacts);
```

## Structured example

```typescript
const isEligible =
    customer !== undefined
    && customer.isEnabled
    && customer.creditStatus === CreditStatus.Approved
    && hasRequiredPermissions(customer);
```

## React and TSX

Arrange hooks and context, derived state, handlers, effects, conditional rendering, and the returned component tree in a readable narrative. Keep small elements compact and expand JSX when props or hierarchy carry meaningful behaviour.
