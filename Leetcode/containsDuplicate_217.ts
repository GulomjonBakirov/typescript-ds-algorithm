function containsDuplicate(nums: number[]): boolean {
  let i = 0; // O(1)
  let j = 1; // O(1)
  let length = nums.length; // O(1)

  while (i < nums.length) {
    // O(n)
    while (j < length) {
      // O((n-1)/2)
      if (nums[i] == nums[i + j]) {
        return true;
      }
      j += 1;
    }
    j = 1;
    length -= 1;
    i += 1;
  }

  return false;
}

// O(n^2)
console.log(containsDuplicate([1, 2, 3, 5, 1]));
console.log(containsDuplicate([1, 2, 3]));
console.log(containsDuplicate([-1, 2, 3, 5, -1]));
