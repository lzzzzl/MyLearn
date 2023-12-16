var foo;
function toString(num) {
    return String(num);
}
// error
var foo = 123;
// error
var x;
console.log(x);
// Type inference
var foo = 123;
foo = "456";
function toString(num) {
    return String(num);
}
