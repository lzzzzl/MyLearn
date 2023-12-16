// Type Concept
function addOne(n: number) {
  return n + 1;
}

addOne("hello");

addOne(1);

// Dynamic Typing vs. Static Typing
let x = 1;
x = "hello";

let y = {foo: 1};
delete y.foo;
y.bar = 2;

// Error Example
let obj = { message: '' };
console.log(obj.messege); // 报错

const a = 0;
const b = true;
const result = a + b; // 报错

// 没有 find() 方法
function hello() {
  return 'hello world';
}

hello().find('hello'); // 报错