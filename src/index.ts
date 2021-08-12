export function addAll (nums: Array<number>): number {
  console.log('Hi!');
  
  return nums.reduce((prev, curr) => prev + curr, 0);
}
