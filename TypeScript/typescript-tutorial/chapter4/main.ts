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

let a1 = undefined;   // any
const b1 = undefined; // any

let c1 = null;        // any
const d1 = null;      // any

// 打开编译设置 strictNullChecks

let a2 = undefined;   // undefined
const b2 = undefined; // undefined

let c2 = null;        // null
const d2 = null;      // null