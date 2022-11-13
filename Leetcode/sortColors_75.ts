/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let sorted: boolean = false;

  while (!sorted) {
    sorted = true;
    for (let i: number = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp: number = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        sorted = false;
      }
    }
  }
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
