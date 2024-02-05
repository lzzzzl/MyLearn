// 14.1 简介
type T = "a" | "b" | "c";

let foo = "a";

// 语法一
let bar1: T = <T>foo;

// 语法二
let bar2: T = foo as T;

const data: object = {
  a: 1,
  b: 2,
  c: 3,
};

(data as Array<string>).length;

// 类型断言的一大用处是，指定 unknown 类型的变量的具体类型。
const value: unknown = "Hello World";

const s2: string = value as string; // 正确

// 另外，类型断言也适合指定联合类型的值的具体类型。
const s3: number | string = 123;
const s4: number = s3 as number;

// 14.2 类型断言的条件
const n = 1;
const m: string = n as unknown as string;

// 14.3 as const 断言
let s = "JavaScript" as const;

const v1 = {
  x: 1,
  y: 2,
}; // 类型是 {x: number, y: number}

const v2 = {
  x: 1 as const,
  y: 2,
}; // 类型是 {x: 1, y: number}

const v3 = {
  x: 1,
  y: 2,
} as const; // 类型是 {readonly x: 1, readonly y: 2}

const a1 = [1, 2, 3]; // 类型是 number[]
const a2 = [1, 2, 3] as const; // 类型是 readonly [1,2,3]

enum Foo {
  X,
  Y
}
let e1 = Foo.X; // 类型是 Foo
let e2 = Foo.X as const; // 类型是 Foo.X


// 11.4 非空断言
class Point {
  x!: number;
  y!: number;

  constructor(x: number, y: number) {
    // ...
  }
}

// 11.5 断言函数
type Person = {
  name: string;
  email?: string;
};

function loadPerson(): Person | null {
  // ...
  return null;
}

let person = loadPerson();

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

assert(person, "The person must be valid");

console.log(person.name);
