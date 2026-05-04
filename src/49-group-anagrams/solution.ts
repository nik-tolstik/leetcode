// https://leetcode.com/problems/group-anagrams/

export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const counts = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      const code = str[i].charCodeAt(0);
      counts[code - 97]++;
    }

    const groupKey = counts.join(",");
    const group = groups.get(groupKey);

    if (group) {
      group.push(str);
    } else {
      groups.set(groupKey, [str]);
    }
  }

  return Array.from(groups.values());
}
