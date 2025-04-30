import test from "../test.mjs";

function solution(str) {
  if (str === "") return [];

  return [...str]
    .map((value, index, array) => {
      if (array[index + 1]) {
        const union = value + array[index + 1];
        array.splice(array.indexOf(array[index + 1]), 1);

        return union;
      }
      return value + "_";
    })
    .filter((value) => value);
}

test(solution("abc"), ["ab", "c_"]);
test(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
test(solution(""), []);
