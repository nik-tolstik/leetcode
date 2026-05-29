import { describe, expect, it } from "vitest";

import { numberOfWays } from "./solution";

describe("numberOfWays", () => {
  it("returns the expected count for the first official example", () => {
    expect(numberOfWays(10, 2)).toBe(1);
  });

  it("returns the expected count for the second official example", () => {
    expect(numberOfWays(4, 1)).toBe(2);
  });

  it("returns 1 when n itself can be expressed as one power", () => {
    expect(numberOfWays(8, 3)).toBe(1);
  });

  it("returns 0 when no unique powers can sum to n", () => {
    expect(numberOfWays(3, 2)).toBe(0);
  });

  it("handles x=1 with multiple unique-sum combinations", () => {
    expect(numberOfWays(5, 1)).toBe(3);
  });
});
