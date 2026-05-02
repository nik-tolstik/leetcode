import { describe, expect, it } from "vitest";

import { search } from "./solution";

describe("search", () => {
  it("returns the index of the target when it exists in the array", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  });

  it("returns -1 when the target does not exist in the array", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });
});
