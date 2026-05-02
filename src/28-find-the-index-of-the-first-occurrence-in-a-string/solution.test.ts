import { describe, expect, it } from "vitest";

import { strStr } from "./solution";

describe("coinChange", () => {
  it("example 1", () => {
    expect(strStr("sadbutsad", "sad")).toEqual(0);
  });

  it("example 1", () => {
    expect(strStr("leetcode", "leeto")).toEqual(-1);
  });
});
