import { describe, expect, it } from "vitest";

import { groupAnagrams } from "./solution";

function normalizeGroups(groups: string[][]): string[][] {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => a.join(",").localeCompare(b.join(",")));
}

describe("groupAnagrams", () => {
  it("groups the first official example", () => {
    expect(normalizeGroups(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))).toEqual(
      normalizeGroups([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]),
    );
  });

  it("handles an empty string from the second official example", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });

  it("handles a single string from the third official example", () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });

  it("keeps non-anagrams in separate groups", () => {
    expect(normalizeGroups(groupAnagrams(["abc", "def", "ghi"]))).toEqual(
      normalizeGroups([["abc"], ["def"], ["ghi"]]),
    );
  });

  it("groups repeated-letter anagrams", () => {
    expect(normalizeGroups(groupAnagrams(["aab", "aba", "baa", "abb"]))).toEqual(
      normalizeGroups([["aab", "aba", "baa"], ["abb"]]),
    );
  });
});
