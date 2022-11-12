function singleNumber(nums: number[]): number {
  return nums.reduce((pv: number, cv: number) => {
    console.log("pv: ", pv);
    console.log("cv: ", cv);
    pv ^= cv;
    return pv;
  }, 0);
}

console.log(singleNumber([1, 3, 1, -1, 3]));
