// https://leetcode.com/problems/valid-palindrome/

const isAlphanumeric = (char: string) => {
  const code = char.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57)
  );
};

export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (!isAlphanumeric(leftChar)) {
      left++;
    } else if (!isAlphanumeric(rightChar)) {
      right--;
    } else if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}
