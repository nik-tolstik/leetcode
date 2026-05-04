export function minWindow(s: string, t: string): string {
  if (!s || !t) return "";

  const need = new Map<string, number>();

  for (const char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  const window = new Map<string, number>();

  const required = need.size;
  let formed = 0;

  let left = 0;
  let bestLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    window.set(char, (window.get(char) || 0) + 1);

    if (need.has(char) && window.get(char) === need.get(char)) {
      formed++;
    }

    while (formed === required) {
      // обновляем лучший ответ
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }

      const leftChar = s[left];
      window.set(leftChar, (window.get(leftChar) || 0) - 1);

      if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
        formed--;
      }

      left++;
    }
  }

  return bestLen === Infinity
    ? ""
    : s.substring(bestStart, bestStart + bestLen);
}
