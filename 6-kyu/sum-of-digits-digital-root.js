function digitalRoot(n) {
  let numberArray = [...String(n)];

  if (numberArray.length === 1) return n;

  const sum = numberArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue)
  );

  numberArray = [...String(sum)];

  return digitalRoot(sum);
}

console.log(digitalRoot(123));
