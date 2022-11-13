function merge(intervals: number[][]): number[][] {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let result: number[][] = [];
  let last: number[];

  intervals.forEach((r) => {
    console.log("Last: ", last);
    console.log("R: ", r);
    console.log("Last 1: ", last[1]);
    console.log("R 0: ", r[0]);
    if (!last || r[0] > last[1]) {
      last = r;
      result.push(last);
    } else if (r[1] > last[1]) last[1] = r[1];
  });

  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
