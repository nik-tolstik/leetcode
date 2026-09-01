// https://leetcode.com/problems/daily-temperatures/

export function dailyTemperatures(temperatures: number[]): number[] {
  const result = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const previousIndex = stack.pop()!;
      result[previousIndex] = i - previousIndex;
    }

    stack.push(i);
  }

  return result;
}
