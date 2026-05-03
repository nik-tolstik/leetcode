import { describe, expect, it } from "vitest";

import { maxArea } from "./solution";

describe("maxArea", () => {
  it("returns the maximum area for the first official example", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("returns one for the two-line official example", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("handles the minimum input with a zero height", () => {
    expect(maxArea([0, 5])).toBe(0);
  });

  it("uses the widest matching boundary lines when optimal", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  it("handles increasing heights", () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
  });

  it("handles all zero heights", () => {
    expect(maxArea([0, 0, 0, 0])).toBe(0);
  });

  it("handles decreasing heights", () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  });

  it("handles equal plateau heights", () => {
    expect(maxArea([3, 3, 3, 3])).toBe(9);
  });

  it("finds the best container away from the outer boundaries", () => {
    expect(maxArea([1, 9, 1, 1, 9, 1])).toBe(27);
  });

  it("does not overvalue a narrow tall container", () => {
    expect(maxArea([1, 100, 100, 1])).toBe(100);
  });

  it("handles zeros between useful boundary lines", () => {
    expect(maxArea([5, 0, 0, 0, 5])).toBe(20);
  });

  it("handles maximum allowed heights without overflow", () => {
    expect(maxArea([10000, 1, 10000])).toBe(20000);
  });

  it("handles a late optimal right boundary", () => {
    expect(maxArea([2, 3, 10, 5, 7, 8, 9])).toBe(36);
  });
});
