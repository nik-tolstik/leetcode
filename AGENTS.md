# Project Instructions

- Prefer `pnpm` for dependency management and commands.
- Do not use `corepack`.
- Write all comments in English.
- Use interactive `zsh` for shell commands.
- Use the Context7 MCP server for library and framework documentation when it is relevant.
- Always create worktrees inside the current repository.

## LeetCode Task Scaffolding

When the user provides a LeetCode problem statement, URL, title, or number and asks to prepare a task in this project, create only the task scaffold. Do not implement the algorithmic solution.

### Workflow

1. Parse the problem number, title, URL, function/class signature, examples, constraints, and special data structures from the user's statement.
2. If the statement is incomplete and the missing detail affects file names, exported API, or test expectations, ask one concise question. If only a URL is provided, try to retrieve the public problem details; if unavailable, ask the user to paste the statement.
3. Create `src/<number>-<slug>/`, where `<slug>` is the lowercase English title with non-alphanumeric runs collapsed to hyphens. Match existing examples such as `src/1-two-sum/`.
4. Create `solution.ts` with the LeetCode URL comment when available, imports/types needed by the signature, and exported stubs only.
5. Create `solution.test.ts` with Vitest tests based on the official examples plus representative edge cases from constraints.
6. Run targeted validation that does not require the algorithm to be implemented, usually `pnpm exec eslint src/<dir>/solution.ts src/<dir>/solution.test.ts`.
7. Report the created files and note that tests are expected to fail until the solution is implemented.

### `solution.ts` Rules

- Export the exact function or class API expected by LeetCode.
- Do not implement the algorithm, even if it is trivial.
- Use a throwing stub and mark unused parameters with `void <param>;` so linting stays clean.
- Prefer only the URL comment unless an unusual local type needs a short explanation.
- For linked list problems, use the existing helpers: `import { ListNode } from "../helpers";`
- For other LeetCode helper types that do not exist in `src/helpers.ts`, define the smallest local exported type/class needed for tests and the signature. Avoid broad helper refactors unless the user asks.

Function stub pattern:

```ts
// https://leetcode.com/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
  void nums;
  void target;

  throw new Error("Not implemented");
}
```

Class stub pattern:

```ts
export class MinStack {
  push(val: number): void {
    void val;

    throw new Error("Not implemented");
  }

  pop(): void {
    throw new Error("Not implemented");
  }
}
```

### Test Rules

- Use Vitest imports exactly as the project does:

```ts
import { describe, expect, it } from "vitest";

import { twoSum } from "./solution";
```

- Name `describe` after the exported function/class.
- Include all official examples and add focused edge cases for empty/minimal inputs, duplicates, negative values, boundary sizes, impossible cases, or in-place mutation behavior when relevant.
- Keep `it` names meaningful; do not leave empty descriptions.
- For linked lists, import converters from `../helpers` in the test: `createNodesFromArray`, `createArrayFromNodes`, and `ListNode` when needed.
- For output where any order is valid, normalize before asserting, or assert as a set/multiset.
- For floating-point answers, use `toBeCloseTo`.
- For in-place problems, assert both the return value and the mutated input shape required by LeetCode.
- Do not weaken tests to accommodate the stub. The tests should express the problem contract and may fail with `Not implemented`.

### Validation Notes

- Avoid running the new test file as a success check unless the user asks; `solution.ts` is intentionally unimplemented.
- If a validation command reports unrelated existing project errors, do not fix unrelated tasks. Report that targeted files were created and name the unrelated blocker.
