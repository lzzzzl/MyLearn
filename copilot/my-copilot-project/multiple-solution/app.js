/// create a function that takes a s string and returns it backwards
function reverseString(str) {
  return str.split("").reverse().join("");
}

// test the reverseString function
var assert = require("assert");
assert.equal(
  reverseString("hello"),
  "olleh",
  "reverseString can reverse hello"
);

console.log(reverseString("hello"));
