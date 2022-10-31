function intersect(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];

  for (let i: number = 0; i < nums1.length; i++) {
    for (let j: number = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        nums1.splice(i, 1);
        nums2.splice(j, 1);
        i -= 1;
        j -= 1;
      }
    }
  }

  return result;
}

console.log(intersect([1, 2, 2, 1], [2]));
console.log(intersect([2, 1], [1, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [2,2]
/*
[4,9,5],
[9,4,9,8,4]
*/
