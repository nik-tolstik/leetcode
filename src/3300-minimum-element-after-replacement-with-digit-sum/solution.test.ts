import { describe, expect, it } from "vitest";

import { minElement } from "./solution";

describe("minElement", () => {
  it("returns the expected result for the first official example", () => {
    expect(minElement([10, 12, 13, 14])).toBe(1);
  });

  it("returns the expected result for the second official example", () => {
    expect(minElement([1, 2, 3, 4])).toBe(1);
  });

  it("returns the expected result for the third official example", () => {
    expect(minElement([999, 19, 199])).toBe(10);
  });

  it("handles a single number", () => {
    expect(minElement([1234])).toBe(10);
  });

  it("handles numbers with zero digits", () => {
    expect(minElement([1000, 909, 505])).toBe(1);
  });
});
