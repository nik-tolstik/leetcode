// https://leetcode.com/problems/spiral-matrix-ii/

export function generateMatrix(n: number): number[][] {
  const results: number[][] = new Array(n).fill(null).map(() => [] as number[]);

  let dir = "right";
  let x = 0;
  let y = 0;

  for (let i = 0; i < n ** 2; i++) {
    results[y][x] = i + 1;

    if (dir === "right") {
      if (x === n - 1 || results[y][x + 1]) {
        dir = "bottom";
        y++;
      } else {
        x++;
      }
    } else if (dir === "bottom") {
      if (y === n - 1 || results[y + 1][x]) {
        dir = "left";
        x--;
      } else {
        y++;
      }
    } else if (dir === "left") {
      if (x === 0 || results[y][x - 1]) {
        dir = "top";
        y--;
      } else {
        x--;
      }
    } else if (dir === "top") {
      if (y === 0 || results[y - 1][x]) {
        dir = "right";
        x++;
      } else {
        y--;
      }
    }
  }

  return results;
}
