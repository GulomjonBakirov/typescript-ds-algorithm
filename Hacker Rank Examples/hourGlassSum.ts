function hourglassSum(arr: number[][]): number {
  // Write your code here

  /**
   * i = j
   * col = i - 2
   * row = j - 2
   * combination = (i-2)^2
   */

  let greatestSum: number = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let currSum: number = 0;
      currSum += arr[i][j];
      currSum += arr[i][j + 1];
      currSum += arr[i][j + 2];
      currSum += arr[i + 1][j + 1];
      currSum += arr[i + 2][j];
      currSum += arr[i + 2][j + 1];
      currSum += arr[i + 2][j + 2];

      if (i == 0 && j == 0) {
        greatestSum = currSum;
      }

      if (currSum > greatestSum) {
        greatestSum = currSum;
      }
    }
  }

  return greatestSum;
}

console.log(
  hourglassSum([
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
  ])
);
