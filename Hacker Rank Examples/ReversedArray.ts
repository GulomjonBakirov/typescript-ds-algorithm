function reverseArray(a: number[]): number[] {
  let front = 0;
  let back = a.length - 1;

  while (back > front) {
    let n: number = a[front];

    a[front] = a[back];
    a[back] = n;

    front += 1;
    back -= 1;
  }
  return a;
}

console.log(reverseArray([1, 2, 3, 5, 5]));
