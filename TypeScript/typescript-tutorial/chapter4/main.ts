// 1. 基础类型

// 布尔值
const x: boolean = true;
const y: boolean = false;

// string
const str1: string = "hello";
const str2: string = `${x} world`;

// number
const num1: number = 123;
const num2: number = 3.14;
const num3: number = 0xffff;

// bigint
const big1: bigint = 123n;
const big2: bigint = 0xffffn;

// symbol
const s1: symbol = Symbol();

// object
const obj1: object = { foo: 123 };
const obj2: object = [1, 2, 3];
const obj3: object = (n: number) => n + 1;

// undefined、null
let u1: undefined = undefined;
let n1: null = null;

// 关闭 noImplicitAny 和 strictNullChecks

let a1 = undefined; // any
const b1 = undefined; // any

let c1 = null; // any
const d1 = null; // any

// 打开编译设置 strictNullChecks

let a2 = undefined; // undefined
const b2 = undefined; // undefined

let c2 = null; // null
const d2 = null; // null

// 2. 包装对象类型
"hello".charAt(1); // "e"

const s2 = new String("hello");
typeof s2; // "object"
s2.charAt(1); // "e"

// 2.2 包装对象类型与字面量类型
("hello"); // 字面量
new String("hello"); // 包装对象

const ss1: String = "hello"; // 正确
const ss2: String = new String("hello"); // 正确

const ss3: string = "hello"; // 正确
// const ss4:string = new String('hello'); // 报错

// 3. Object 类型与 object 类型
// 3.1 Object 类型

let obj: Object;

obj = true;
obj = "hi";
obj = 1;
obj = { foo: 123 };
obj = [1, 2];
obj = (a: number) => a + 1;

// obj = undefined; // 报错
// obj = null; // 报错

// obj 声明的另一种写法
let obj4: {};

// 3.2 object 类型
let obj5: object;

obj5 = { foo: 123 };
obj5 = [1, 2];
obj5 = (a: number) => a + 1;
// obj5 = true // 报错
// obj5 = "hi" // 报错
// obj5 = 1 // 报错

const o1: Object = { foo: 0 };
const o2: object = { foo: 0 };

o1.toString(); // 正确
// o1.foo() // 报错

o2.toString(); // 正确
// o2.foo() // 报错

// 4. undefined 和 null 的特殊性
let age: number = 24;

// age = null; // 报错
// age = undefined; // 报错

// 5. 值类型
let p1: 5 = 5;
let p2: number = 4 + 1;

// p1 = p2; // 报错
p2 = p1; // 正确

// 6. 联合类型

let j1: string | number;

j1 = 123;
j1 = "abc";

let setting: true | false;
let gender: "male" | "female";
let rainbowColor: "赤" | "橙" | "黄" | "绿" | "青" | "蓝" | "紫";

function getPort(schema: "http" | "https") {
  switch (schema) {
    case "http":
      return 80;
    case "https":
      return 443;
  }
}

// 7. 交叉类型
// 主要用途是用来表示对象的合成
let obj10: { foo: string } & { bar: string };
obj10 = { foo: "hello", bar: "world" };

// 8. type 命令

type World = "world";
type Greeting = `hello ${World}`;

// 9. typeof 运算符
typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 1337; // "number"
typeof "foo"; // "string"
typeof {}; // "object"
typeof parseInt; // "function"
typeof Symbol(); // "symbol"
typeof 127n // "bigint"

// 10. 块级类型声明
if (true) {
  type T = number;
  let v:T = 5;
} else {
  type T = string;
  let v:T = "hello";
}

// 11. 类型兼容

type T = number | string;

let a:number = 1;
let b:T = a;
