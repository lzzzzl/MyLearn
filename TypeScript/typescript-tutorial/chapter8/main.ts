// 1. 简介

// 写法一
const hello1 = function (txt: string) {
  console.log("hello " + txt);
};

// 写法二
const hello2: (txt: string) => void = function (txt: string) {
  console.log("hello " + txt);
};

// 2. Function 类型
function doSomething(f: Function) {
  return f(1, 2, 3);
}

// 3. 箭头函数
const repeat = (str: string, times: number): string => str.repeat(times);

// 4. 可选参数
let myFunc: (a: number, b?: number) => number;

myFunc = function (x, y) {
  if (y === undefined) {
    return x;
  }
  return x + y;
};

myFunc(1);

// 5. 参数默认值
function createPoint(x: number = 0, y: number = 0): [number, number] {
  return [x, y];
}

createPoint();

// 6. 参数解构
type ABC = { a: number; b: number; c: number };

function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}

// 7. rest 参数
// rest 参数为数组
function f1(...nums: number[]) {
  // ...
}

function f2(...args: [boolean, number]) {
  // ...
}

// 8. readonly 只读参数
function arraySum(arr: readonly number[]) {
  // ...
  // arr[0] = 0; // Error
}

// 9. void 类型
function f3(): void {
  console.log("hello");
}

function f4(): void {
  return undefined;
}

// 10. never 类型
// 1. 抛出错误的函数
function fail(msg: string): never {
  throw new Error(msg);
}

// 2. 死循环函数
function infiniteLoop(): never {
  while (true) {}
}