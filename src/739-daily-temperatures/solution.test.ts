import { describe, expect, it } from "vitest";

import { dailyTemperatures } from "./solution";

describe("dailyTemperatures", () => {
  it("returns expected waits for the first official example", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1,
      1,
      4,
      2,
      1,
      1,
      0,
      0,
    ]);
  });

  it("returns expected waits for the second official example", () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  });

  it("returns zeros for decreasing temperatures", () => {
    expect(dailyTemperatures([60, 59, 58, 57])).toEqual([0, 0, 0, 0]);
  });

  it("handles equal temperatures", () => {
    expect(dailyTemperatures([70, 70, 70])).toEqual([0, 0, 0]);
  });

  it("handles mixed values with early and late warmer days", () => {
    expect(dailyTemperatures([30, 40, 35, 36, 41, 38])).toEqual([1, 3, 1, 1, 0, 0]);
  });
});
