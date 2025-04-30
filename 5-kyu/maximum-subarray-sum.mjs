import test from "../test.mjs";

var maxSequence = function (arr) {
  if (arr.lenght === 0) return 0;

  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) continue;
    if (arr[i] > max) max = arr[i];

    let nextSum = arr[i] + arr[i + 1];
    let offset = 2;

    while (nextSum >= 0 || nextSum) {
      if (nextSum > max) {
        max = nextSum;
      }
      nextSum += arr[i + offset];
      offset++;
    }
  }

  return max;
};

test(maxSequence([]), 0);
test(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
