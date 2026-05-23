import { describe, expect, it } from "vitest";

import { canFinish } from "./solution";

describe("canFinish", () => {
  it("returns true for the canonical acyclic example", () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  it("returns true for the canonical acyclic example", () => {
    expect(canFinish(2, [[0, 1]])).toBe(true);
  });

  it("returns true for the canonical acyclic example", () => {
    expect(
      canFinish(5, [
        [1, 4],
        [2, 4],
        [3, 1],
        [3, 2],
      ]),
    ).toBe(true);
  });

  it("returns false when there is a direct cycle", () => {
    expect(
      canFinish(2, [
        [1, 0],
        [0, 1],
      ]),
    ).toBe(false);
  });

  it("returns false when there is a direct cycle", () => {
    expect(
      canFinish(3, [
        [0, 2],
        [1, 2],
        [2, 0],
      ]),
    ).toBe(false);
  });

  it("returns true when there are no prerequisites", () => {
    expect(canFinish(3, [])).toBe(true);
  });

  it("returns true for a longer acyclic dependency chain", () => {
    expect(
      canFinish(4, [
        [1, 0],
        [2, 1],
        [3, 2],
      ]),
    ).toBe(true);
  });

  it("returns false for an indirect cycle", () => {
    expect(
      canFinish(3, [
        [1, 0],
        [2, 1],
        [0, 2],
      ]),
    ).toBe(false);
  });
});
