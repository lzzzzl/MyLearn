// Chapter6 元组
const s1: [string, string, boolean] = ["a", "b", true];

// 数组
let a: number[] = [1];

// 元组
let t: [number] = [1];

type Color = [red: number, green: number, blue: number];

const c: Color = [255, 255, 255];

// 2. 只读元组

// 写法一
type t1 = readonly [number, string];

// 写法二
type t2 = Readonly<[number, string]>;

// 3. 成员数量的推断
function f(point: [number, number]) {
  if (point.length === 3) {
    // 报错
  }
}

function f2(point: [number, number?, number?]) {
  if (point.length === 4) {
    // 报错
  }
}

// 4. 扩展运算符与成员数量
const arr5 = [1, 2, 3];
console.log(...arr5); // 1 2 3

function add1(x: number, y: number) {
  // ...
}

add1(...arr5); // 报错

const arr6:[number, number] = [1, 2];

add1(...arr6); // 正确