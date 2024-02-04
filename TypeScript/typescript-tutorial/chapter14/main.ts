// 14.1 简介
type T = 'a'|'b'|'c';

let foo = 'a';

// 语法一
let bar1:T = <T>foo;

// 语法二
let bar2:T = foo as T;

const data:object = {
  a: 1,
  b: 2,
  c: 3
};

(data as Array<string>).length;

// 类型断言的一大用处是，指定 unknown 类型的变量的具体类型。
const value:unknown = 'Hello World';

const s2:string = value as string; // 正确

// 另外，类型断言也适合指定联合类型的值的具体类型。
const s3:number|string = 123;
const s4:number = s3 as number;