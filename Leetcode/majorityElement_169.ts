function majorityElement(nums: number[]): number {
  let cand: number = nums[0];
  let counter: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (counter == 0) {
      cand = nums[i];
    }

    if (nums[i] == cand) {
      counter++;
    } else {
      counter--;
    }
  }

  return cand;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 1, 1, 1]));
