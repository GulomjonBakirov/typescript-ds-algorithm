function singleNumber(nums: number[]): number {
  let result: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

console.log(singleNumber([1, 3, 1, -1, 3]));
