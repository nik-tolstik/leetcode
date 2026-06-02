// https://leetcode.com/problems/generate-fibonacci-sequence/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* fibGenerator(): Generator<number, any, number> {
  let left = null;
  let right = 0;

  if (right === 0) {
    yield 0;
    left = 0;
    right = 1;
  }

  while (true) {
    yield right;
    const buffer = right;
    right = right + left;
    left = buffer;
  }
}
