import { describe, expect, it } from "vitest";

import { evalRPN } from "./solution";

describe("evalRPN", () => {
  it("returns the expected result for the first official example", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  });

  it("returns the expected result for the second official example", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  });

  it("supports negative results", () => {
    expect(evalRPN(["4", "-2", "/"])).toBe(-2);
  });

  it("supports subtraction order", () => {
    expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toBe(22);
  });

  it("handles unary-like chain operations", () => {
    expect(evalRPN(["1", "1", "+"])).toBe(2);
  });
});
