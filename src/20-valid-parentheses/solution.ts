// https://leetcode.com/problems/valid-parentheses/

export function isValid(s: string): boolean {
  const stack: string[] = [];

  const mirror = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const openBrackets = Object.keys(mirror);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (openBrackets.includes(char)) {
      stack.push(mirror[char as keyof typeof mirror]);
    } else {
      const last = stack.pop();

      if (last !== char) {
        return false;
      }
    }
  }

  return !stack.length;
}
