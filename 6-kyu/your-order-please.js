function order(words) {
  if (words === "") return "";

  let wordsArray = words.split(" ");

  wordsArray.map((value, index, array) => {
    [...value].forEach((symbol) => {
      const correctIndex = Number(symbol);

      if (correctIndex) {
        array[index] = array[correctIndex - 1];
        array[correctIndex - 1] = value;
      }
    });
  });

  return wordsArray;
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
