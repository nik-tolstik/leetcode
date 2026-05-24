// https://leetcode.com/problems/top-k-frequent-elements/

export function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const count = counts.get(num) ?? 0;
    counts.set(num, count + 1);
  }

  const frequences: number[][] = Array.from(
    { length: nums.length + 1 },
    () => [],
  );

  for (const [num, count] of counts.entries()) {
    frequences[count].push(num);
  }

  const result: number[] = [];

  for (let i = frequences.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of frequences[i]) {
      result.push(num);

      if (result.length === k) {
        break;
      }
    }
  }

  return result;
}
