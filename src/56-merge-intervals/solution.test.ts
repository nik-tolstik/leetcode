import { describe, expect, it } from "vitest";

import { merge } from "./solution";

describe("merge", () => {
  it("merges the official overlapping intervals example", () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
  // it("merges intervals that touch at an endpoint", () => {
  //   expect(
  //     merge([
  //       [1, 4],
  //       [4, 5],
  //     ]),
  //   ).toEqual([[1, 5]]);
  // });
  // it("merges intervals that touch at an endpoint", () => {
  //   expect(
  //     merge([
  //       [1, 4],
  //       [5, 6],
  //     ]),
  //   ).toEqual([
  //     [1, 4],
  //     [5, 6],
  //   ]);
  // });
  // it("merges intervals contained inside another interval", () => {
  //   expect(
  //     merge([
  //       [1, 4],
  //       [2, 3],
  //     ]),
  //   ).toEqual([[1, 4]]);
  // });
  // it("[[1,4],[0,0]]", () => {
  //   expect(
  //     merge([
  //       [1, 4],
  //       [0, 0],
  //     ]),
  //   ).toEqual([
  //     [0, 0],
  //     [1, 4],
  //   ]);
  // });
  // it("[[2,3],[4,5],[6,7],[8,9],[1,10]]", () => {
  //   expect(
  //     merge([
  //       [2, 3],
  //       [4, 5],
  //       [6, 7],
  //       [8, 9],
  //       [1, 10],
  //     ]),
  //   ).toEqual([[1, 10]]);
  // });

  // it("[[2,4],[5,5]]", () => {
  //   expect(
  //     merge([
  //       [2, 3],
  //       [5, 5],
  //       [2, 2],
  //       [3, 4],
  //       [3, 4],
  //     ]),
  //   ).toEqual([
  //     [2, 4],
  //     [5, 5],
  //   ]);
  // });

  // it("[[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]", () => {
  //   expect(
  //     merge([
  //       [2, 3],
  //       [2, 2],
  //       [3, 3],
  //       [1, 3],
  //       [5, 7],
  //       [2, 2],
  //       [4, 6],
  //     ]),
  //   ).toEqual([
  //     [1, 3],
  //     [4, 7],
  //   ]);
  // });
});
