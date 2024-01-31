// 1. 简介
const obj1: {
  x: number;
  y: number;
} = { x: 1, y: 1 };

type obj2 = {
  x: number;
  y: number;
  add(x: number, y: number): number;
};

// 2. 可选属性
const obj3: {
  x: number;
  y?: number;
} = { x: 1 };

type User1 = {
  firstname: string;
  lastname?: string;
};

// 等同于
type User2 = {
  firstname: string;
  lastname?: string | undefined;
};
const user2: User2 = { firstname: "hello" };
user2.lastname?.toLowerCase();

// 写法一
let firstname = user2.firstname === undefined ? "Foo" : user2.firstname;
let lastname = user2.lastname === undefined ? "Bar" : user2.lastname;

// 写法二
let firstname2 = user2.firstname ?? "Foo";
let lastname2 = user2.lastname ?? "Bar";

// 3. 只读属性
type Point = {
  readonly x: number;
  readonly y: number;
};

// 4. 属性名的索引类型
type MyObj = {
  [property: string]: string;
};

const obj: MyObj = {
  foo: "a",
  bar: "b",
  baz: "c",
};

// 5. 解构赋值

// 6. 结构类型原则
type A = {
  x: number;
};

type B = {
  x: number;
  y: number;
};

const B = {
  x: 1,
  y: 1,
};

const A: { x: number } = B; // 正确

// 7. 严格字面量检查
const point: {
  x: number;
  y: number;
} = {
  x: 1,
  y: 1,
  // z: 1 // 报错
};

// 8. 最小可选属性规则
type Options = {
  a?: number;
  b?: number;
  c?: number;
};

// 9. 空对象
const obj7: {} = {};

const pt0 = {};
const pt1 = { x: 3 };
const pt2 = { y: 4 };

const pt = {
  ...pt0, ...pt1, ...pt2
}