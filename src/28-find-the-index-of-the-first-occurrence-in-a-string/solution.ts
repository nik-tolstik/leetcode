// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;

    while (needle[i] === haystack[i + j] && j < needle.length) {
      j++;
    }

    if (j === needle.length) return i;
  }

  return -1;
}
