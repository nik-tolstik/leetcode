// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

export function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;

  const n = s1.length;
  const diffs: number[] = [];

  for (let i = 0; i < n; i++) {
    const c1 = s1[i];
    const c2 = s2[i];

    if (c1 !== c2) {
      diffs.push(i);
    }
  }

  return (
    diffs.length === 2 &&
    s1[diffs[0]] === s2[diffs[1]] &&
    s2[diffs[0]] === s1[diffs[1]]
  );
}
