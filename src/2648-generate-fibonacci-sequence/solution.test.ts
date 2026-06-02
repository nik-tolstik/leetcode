import { describe, expect, it } from "vitest";

import { fibGenerator } from "./solution";

const generateSequence = (count: number): number[] => {
  const gen = fibGenerator();
  const result: number[] = [];

  for (let i = 0; i < count; i++) {
    const value = gen.next().value;
    if (value !== undefined) {
      result.push(value);
    }
  }

  return result;
};

describe("fibGenerator", () => {
  it("matches the official first example", () => {
    expect(generateSequence(5)).toEqual([0, 1, 1, 2, 3]);
  });

  it("matches the official zero-call example", () => {
    expect(generateSequence(0)).toEqual([]);
  });

  it("returns only the first term when callCount is one", () => {
    expect(generateSequence(1)).toEqual([0]);
  });

  it("handles larger call counts", () => {
    expect(generateSequence(3)).toEqual([0, 1, 1]);
    expect(generateSequence(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  it("handles upper bound call count", () => {
    expect(generateSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(generateSequence(50)).toEqual([
      0,
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
      377,
      610,
      987,
      1597,
      2584,
      4181,
      6765,
      10946,
      17711,
      28657,
      46368,
      75025,
      121393,
      196418,
      317811,
      514229,
      832040,
      1346269,
      2178309,
      3524578,
      5702887,
      9227465,
      14930352,
      24157817,
      39088169,
      63245986,
      102334155,
      165580141,
      267914296,
      433494437,
      701408733,
      1134903170,
      1836311903,
      2971215073,
      4807526976,
      7778742049,
      12586269025,
      20365011074,
    ]);
  });
});
