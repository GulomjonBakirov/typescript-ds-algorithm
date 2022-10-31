function twoSum(nums: number[], target: number): number[] {
  let i: number = 0;
  let j: number = 1;
  let length: number = nums.length;
  let arr: number[] = [];

  while (i < nums.length) {
    while (j < length) {
      // console.log(i);
      // console.log("First: ", nums[i]);
      // console.log("Second: ", nums[i + j]);
      if (nums[i] + nums[i + j] == target) {
        arr.push(i, i + j);
      }

      j += 1;
    }
    length -= 1;
    j = 1;
    i += 1;
  }

  return arr;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
