function isValid(s: string): boolean {
  const characters = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack: string[] = [];
  let char: string;

  for (char of s) {
    if (characters[char as keyof typeof characters]) {
      stack.push(characters[char as keyof typeof characters]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }

  return !stack.length;
}

console.log(isValid("((()))"));
