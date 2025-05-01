import test from "../test.mjs";

function zero(operation = null) {
  if (!operation) return 0;
  return Math.floor(eval(`0 ${operation.operator} ${operation.number}`));
}
function one(operation = null) {
  if (!operation) return 1;
  return Math.floor(eval(`1 ${operation.operator} ${operation.number}`));
}
function two(operation = null) {
  if (!operation) return 2;
  return Math.floor(eval(`2 ${operation.operator} ${operation.number}`));
}
function three(operation = null) {
  if (!operation) return 3;
  return Math.floor(eval(`3 ${operation.operator} ${operation.number}`));
}
function four(operation = null) {
  if (!operation) return 4;
  return Math.floor(eval(`4 ${operation.operator} ${operation.number}`));
}
function five(operation = null) {
  if (!operation) return 5;
  return Math.floor(eval(`5 ${operation.operator} ${operation.number}`));
}
function six(operation = null) {
  if (!operation) return 6;
  return Math.floor(eval(`6 ${operation.operator} ${operation.number}`));
}
function seven(operation = null) {
  if (!operation) return 7;
  return Math.floor(eval(`7 ${operation.operator} ${operation.number}`));
}
function eight(operation = null) {
  if (!operation) return 8;
  return Math.floor(eval(`8 ${operation.operator} ${operation.number}`));
}
function nine(operation = null) {
  if (!operation) return 9;
  return Math.floor(eval(`9 ${operation.operator} ${operation.number}`));
}

function plus(number) {
  return {
    operator: "+",
    number: number,
  };
}
function minus(number) {
  return {
    operator: "-",
    number: number,
  };
}
function times(number) {
  return {
    operator: "*",
    number: number,
  };
}
function dividedBy(number) {
  return {
    operator: "/",
    number: number,
  };
}

test(seven(times(five())), 35);
test(four(plus(nine())), 13);
test(eight(minus(three())), 5);
test(six(dividedBy(zero())), 3);
test(five(dividedBy(three())), 2);
console.log(10 / 0);
