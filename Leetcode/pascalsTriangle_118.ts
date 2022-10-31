function generate(numRows: number): number[][] {
  let result: number[][] = [[1], [1, 1]];
  let left: number = 0;
  let right: number = 1;
  let num: number = 0;

  if (numRows == 1) {
    return [result[0]];
  }

  for (let i = 1; i < numRows - 1; i++) {
    result[i + 1] = [];

    while (right < i + 1) {
      num = result[i][left] + result[i][right];
      left += 1;
      right += 1;
      result[i + 1].push(num);
    }

    right = 1;
    left = 0;

    result[i + 1].push(1);
    result[i + 1].unshift(1);
  }

  return result;
}

console.log(generate(1));
console.log(generate(6));
