import test from "../test.mjs";

function isPangram(string) {
  return new Set(string.toLowerCase().match(/[a-z]/g) || []).size === 26;
}

test(isPangram("The quick brown fox jumps over the lazy dog."), true);
test(isPangram("This is not a pangram."), false);
