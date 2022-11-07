function canConstruct(ransomNote: string, magazine: string): boolean {
  let included: number = 0;
  for (let i: number = 0; i < ransomNote.length; i++) {
    for (let j: number = 0; j < magazine.length; j++) {
      if (ransomNote[i] == magazine[j]) {
        magazine = magazine.slice(0, j) + magazine.slice(j + 1);
        included += 1;
        break;
      }
    }
  }
  return included == ransomNote.length;
}

console.log(canConstruct("aa", "ab"));
