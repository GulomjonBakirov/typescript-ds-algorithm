const nums: number[] = [];

// write and update
// O(1)

nums[0] = 1;
nums[1] = 2;
nums[2] = 3;

// Writing
// O(n)
nums.unshift(2);
console.log(nums);

// Delete
// O(n)
nums.splice(2, 1);
console.log(nums);
