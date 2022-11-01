function firstUniqChar(s: string): number {
  let isExist: number = -1;
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i), s.indexOf(s.charAt(i)) + 1) == -1) {
      isExist = i;
      break;
    }
  }
  return isExist;
}

console.log(firstUniqChar("loveleetcode"));
