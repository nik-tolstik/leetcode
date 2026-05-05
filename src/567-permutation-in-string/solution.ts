// https://leetcode.com/problems/permutation-in-string/

export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const needed: Record<string, number> = {};
  const window: Record<string, number> = {};
  let missing = s1.length;

  for (const char of s1) {
    needed[char] = (needed[char] || 0) + 1;
    window[char] = 0;
  }

  const add = (char: string) => {
    if (char in needed) {
      if (window[char] < needed[char]) missing--;
      window[char]++;
    }
  };

  const remove = (char: string) => {
    if (char in needed) {
      if (window[char] <= needed[char]) missing++;
      window[char]--;
    }
  };

  for (let i = 0; i < s1.length; i++) add(s2[i]);

  for (let right = s1.length; right < s2.length; right++) {
    if (missing === 0) return true;

    remove(s2[right - s1.length]);
    add(s2[right]);
  }

  return missing === 0;
}
