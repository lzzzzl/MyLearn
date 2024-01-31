// 1. 简介
let x:symbol = Symbol();
let y:symbol = Symbol();

x === y; // false

// 2. unique symbol
const k:unique symbol = Symbol();

// 3. 类型推断

let m = Symbol();
let n = Symbol();