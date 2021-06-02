export function addAll (nums: Array<number>): number {
  return nums.reduce((prev, curr) => prev + curr, 0);
}
