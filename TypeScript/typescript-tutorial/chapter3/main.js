// 1. Any 类型
var x;
x = 1; // ok
x = "foo"; // ok
x = true; // ok
var y = "hello";
x(1); // ok
x.foo = 100; // ok
// 2. 类型推断
function add(x, y) {
    return x + y;
}
add(1, [1, 2, 3]); // no error;
var a;
var b;
a = 123;
x = { foo: "hello" };
// 3. 污染问题
var m = "hello";
var n;
n = m;
y * 123;
y.toFixed();
// 4. unknown 类型
var z;
z = true;
x = 42;
z = "Hello World";
var v = 123;
// let v1:boolean = v; // Error
// let v2:number = v; // Error
var v1 = { foo: 123 };
// v1.foo // Error
var v2 = "Hello";
// v2.trim() // Error
var v3 = function (n) {
    if (n === void 0) { n = 0; }
    return n + 1;
};
// v3() // Error
var k = 1;
// k + 1; // Error
// k === 1; // Right
// 类型缩小后才能用
var ss1 = "hello";
if (typeof ss1 === "string") {
    ss1.length; // Right
}
var ss2 = 123;
if (typeof ss2 === "number") {
    var r = ss2 + 10; // Right
}
// 5. never 类型
// 剩余的情况属于 never
function fn(x) {
    if (typeof x === "string") {
        // ...
    }
    else if (typeof x === "number") {
        // ...
    }
    else {
        x; // never
    }
}
// 可以赋值给任意其他类型
function ffn() {
    throw new Error("Error");
}
var k1 = ffn();
var k2 = ffn();
var k3 = ffn();
