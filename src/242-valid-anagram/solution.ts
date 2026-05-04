// https://leetcode.com/problems/valid-anagram/

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const n = s.length;
  const map = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const tc = t[i];
    const sc = s[i];

    if (tc === sc) continue;

    let newCount: number;

    newCount = (map.get(tc) ?? 0) + 1;
    map.set(tc, newCount);

    if (newCount === 0) {
      map.delete(tc);
    }

    newCount = (map.get(sc) ?? 0) - 1;
    map.set(sc, newCount);

    if (newCount === 0) {
      map.delete(sc);
    }
  }

  return map.size === 0;
}
