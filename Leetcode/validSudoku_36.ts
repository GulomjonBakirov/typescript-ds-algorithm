function isValidSudoku(board: string[][]): boolean {
  let isDuplicate = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let currVal: string = board[i][j];

      if (currVal !== ".") {
        if (
          isDuplicate.has(`${currVal} found in ${i} i`) ||
          isDuplicate.has(`${currVal} found in ${j} j`) ||
          isDuplicate.has(`${currVal} found in ${i / 3} - ${j / 3} box`)
        ) {
          return false;
        } else {
          isDuplicate.set(`${currVal} found in ${i} i`, currVal);
          isDuplicate.set(`${currVal} found in ${j} j`, currVal);
          isDuplicate.set(
            `${currVal} found in ${i / 3} - ${j / 3} box`,
            currVal
          );
        }
      }
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])
);
