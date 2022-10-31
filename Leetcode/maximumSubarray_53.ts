/**
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

*/
function maxSubArray(nums: number[]): number {
  let max_ending_here: number = 0;
  let max_so_far: number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    max_ending_here = max_ending_here + nums[i];

    if (max_ending_here > max_so_far) {
      max_so_far = max_ending_here; //
    }

    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }

  return max_so_far;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
