// 1. Any 类型
let x: any;

x = 1; // ok
x = "foo"; // ok
x = true; // ok

let y: any = "hello";
x(1); // ok
x.foo = 100; // ok

// 2. 类型推断
function add(x, y) {
  return x + y;
}

add(1, [1, 2, 3]); // no error;

var a;
let b;

a = 123;
x = { foo: "hello" };

// 3. 污染问题
let m: any = "hello";
let n: number;

n = m;

y * 123;
y.toFixed();

// 4. unknown 类型
let z: unknown;

z = true;
x = 42;
z = "Hello World";

let v: unknown = 123;

// let v1:boolean = v; // Error
// let v2:number = v; // Error

let v1: unknown = { foo: 123 };
// v1.foo // Error

let v2: unknown = "Hello";
// v2.trim() // Error

let v3: unknown = (n = 0) => n + 1;
// v3() // Error

let k: unknown = 1;

// k + 1; // Error
// k === 1; // Right

// 类型缩小后才能用
let ss1: unknown = "hello";

if (typeof ss1 === "string") {
  ss1.length; // Right
}

let ss2: unknown = 123;

if (typeof ss2 === "number") {
  let r = ss2 + 10; // Right
}

// 5. never 类型

// 剩余的情况属于 never
function fn(x: string | number) {
  if (typeof x === "string") {
    // ...
  } else if (typeof x === "number") {
    // ...
  } else {
    x; // never
  }
}

// 可以赋值给任意其他类型
function ffn(): never {
  throw new Error("Error");
}

let k1: number = ffn();
let k2: string = ffn();
let k3: boolean = ffn();
