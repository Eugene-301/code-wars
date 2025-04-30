function spinWords(string) {
  string = string.split(" ");

  string.forEach((word, index) => {
    if (word.length >= 5)
      string[index] = string[index].split("").reverse().join("");
  });

  return string.join(" ");
}

console.log(spinWords("12345 123 123456 111"));
