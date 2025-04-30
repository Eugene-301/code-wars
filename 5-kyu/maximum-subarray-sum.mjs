import test from "../test.mjs";

var maxSequence = function (arr) {
  if (arr.length === 0) return 0;
  let sequences = [];

  arr.forEach((element) => {
    console.log(element);
  });
};

test(maxSequence([]), 0);
test(maxSequence([[-2, 1, -3, 4, -1, 2, 1, -5, 4]]), 6);
