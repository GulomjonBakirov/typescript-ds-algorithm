function threeSum(nums: number[]): number[][] {
  let results: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i: number = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let target: number = 0 - nums[i];
    let left: number = i + 1;
    let right: number = nums.length - 1;

    while (right > left) {
      let sum: number = nums[left] + nums[right];

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return results;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
