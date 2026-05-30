import { describe, expect, it } from "vitest";

import { MapSum } from "./solution";

describe("MapSum", () => {
  it("returns the expected sum for the first official example", () => {
    const mapSum = new MapSum();
    mapSum.insert("apple", 3);

    expect(mapSum.sum("ap")).toBe(3);
  });

  it("returns the expected sum after inserting another matching key", () => {
    const mapSum = new MapSum();
    mapSum.insert("apple", 3);
    mapSum.insert("app", 2);

    expect(mapSum.sum("ap")).toBe(5);
  });

  it("replaces an existing key value instead of adding to it", () => {
    const mapSum = new MapSum();
    mapSum.insert("apple", 3);
    mapSum.insert("apple", 2);

    expect(mapSum.sum("ap")).toBe(2);
  });

  it("returns 0 when no keys match the prefix", () => {
    const mapSum = new MapSum();
    mapSum.insert("apple", 3);

    expect(mapSum.sum("ba")).toBe(0);
  });

  it("sums all keys for an empty prefix", () => {
    const mapSum = new MapSum();
    mapSum.insert("apple", 3);
    mapSum.insert("banana", 4);

    expect(mapSum.sum("")).toBe(7);
  });
});
