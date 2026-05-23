import { describe, expect, it } from "vitest";

import { MinStack } from "./solution";

describe("MinStack", () => {
  it("supports push and top", () => {
    const stack = new MinStack();
    stack.push(2);

    expect(stack.top()).toBe(2);
    expect(stack.getMin()).toBe(2);
  });

  it("tracks the minimum while pushing values", () => {
    const stack = new MinStack();
    stack.push(3);
    stack.push(1);
    stack.push(5);

    expect(stack.getMin()).toBe(1);
  });

  it("updates the minimum after popping", () => {
    const stack = new MinStack();
    stack.push(2);
    stack.push(0);
    stack.pop();

    expect(stack.getMin()).toBe(2);
  });

  it("handles negative values and order correctly", () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);

    expect(stack.getMin()).toBe(-3);
    stack.pop();

    expect(stack.getMin()).toBe(-2);
  });

  it("returns the top element after multiple operations", () => {
    const stack = new MinStack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.push(0);

    expect(stack.top()).toBe(0);
  });
});
