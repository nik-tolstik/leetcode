// https://leetcode.com/problems/map-sum-pairs/

export class MapSum {
  map = new Map<string, number>();

  insert(key: string, val: number): void {
    this.map.set(key, val);
  }

  sum(prefix: string): number {
    let sum = 0;

    this.map.forEach((value, key) => {
      if (key.startsWith(prefix)) {
        sum += value;
      }
    });

    return sum;
  }
}
