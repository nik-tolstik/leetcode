import { describe, expect, it } from "vitest";

import { isPalindrome } from "./solution";
import { createNodesFromArray } from "../helpers";

describe("coinChange", () => {
  it("example 1", () => {
    const input = [1, 2, 2, 1];
    const output = true;

    expect(isPalindrome(createNodesFromArray(input))).toEqual(output);
  });

  it("example 2", () => {
    const input = [1, 2];
    const output = false;

    expect(isPalindrome(createNodesFromArray(input))).toEqual(output);
  });

  it("example 3", () => {
    const input = [1, 2, 3, 3, 2, 1, 5];
    const output = false;

    expect(isPalindrome(createNodesFromArray(input))).toEqual(output);
  });

  it("example 4", () => {
    const input = [1, 2, 3, 3, 2, 1];
    const output = true;

    expect(isPalindrome(createNodesFromArray(input))).toEqual(output);
  });
});
