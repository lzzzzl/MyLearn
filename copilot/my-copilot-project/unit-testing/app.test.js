function calculator(str) {
  // regex to match the numbers and the operators
  var regex = /(\d+)([+\-*\/])(\d+)/;
  // use match method to get the numbers and the operator
  var match = str.match(regex);
  // use parseInt to convert the numbers to integers
  var num1 = parseInt(match[1]);
  var num2 = parseInt(match[3]);
  // use switch to evaluate the operator
  switch (match[2]) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// test calculator function with console.log
console.log(calculator("2+3")); // 5
console.log(calculator("5-3")); // 2
console.log(calculator("5*3")); // 15
console.log(calculator("6/3")); // 2

// create unit tests for the calculator function
var assert = require("assert");
assert.equal(calculator("2+3"), 5, "calculator can add");
assert.equal(calculator("5-3"), 2, "calculator can subtract");
assert.equal(calculator("5*3"), 15, "calculator can multiply");
assert.equal(calculator("6/3"), 2, "calculator can divide");