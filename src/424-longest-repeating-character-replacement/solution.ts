// https://leetcode.com/problems/longest-repeating-character-replacement/

export function characterReplacement(s: string, k: number): number {
  const count: Record<string, number> = {};

  let maxFreq = 0;
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    count[rightChar] = (count[rightChar] ?? 0) + 1;
    maxFreq = Math.max(count[rightChar], maxFreq);

    while (right - left + 1 - maxFreq > k) {
      const leftChar = s[left];
      count[leftChar]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}
