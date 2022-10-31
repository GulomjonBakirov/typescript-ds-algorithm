function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == target) return true;
    }
  }
  return false;

  /*
  let isValid = new Set<number>();
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[0].length; j++) {
      isValid.add(matrix[i][j]);
      if (isValid.has(target)) {
        return true;
      }
    }
  }
  return false;
  */
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    25
  )
);

console.log(searchMatrix([[1]], 1));
console.log(searchMatrix([[1], [3]], 3));
