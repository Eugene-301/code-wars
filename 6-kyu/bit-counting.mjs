import test from "../test.mjs";

var countBits = function (n) {
  let bits = 0;

  while (n > 0) {
    if (n % 2 === 1) bits++;
    n = Math.floor((n /= 2));
  }

  return bits;
};

test(countBits(0), 0);
test(countBits(4), 1);
test(countBits(7), 3);
test(countBits(9), 2);
test(countBits(10), 2);
