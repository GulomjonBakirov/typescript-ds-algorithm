/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i1: number = m - 1;
  let i2: number = n - 1;
  let j: number = m + n - 1;

  while (i1 >= 0 && i2 >= 0) {
    if (nums1[i1] > nums2[i2]) {
      nums1[j--] = nums1[i1--];
    } else {
      nums1[j--] = nums2[i2--];
    }
  }
  while (i2 >= 0) {
    nums1[j--] = nums2[i2--];
  }
}
