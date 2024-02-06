// 20.1 keyof 运算符 | 简介
type MyObj = {
  foo: number;
  bar: string;
};

type Keys = keyof MyObj; // "foo" | "bar"

type KeyT = keyof any; // string | number | symbol

type KeyT2 = keyof object; // never

// 20.1 keyof 运算符 | keyof 运算符的用途

// 精确表达返回值类型
function prop<Obj, K extends keyof Obj>(obj: Obj, key: K) {
  return obj[key];
}

type NewObj<Obj> = {
  [Prop in keyof Obj]: boolean;
};

// 20.2 in 运算符
const obj = { a: 123 };
if ("a" in obj) {
  console.log("found a");
}

type U = "a" | "b" | "c";

type Foo = {
  [Prop in U]: number;
};
// 等同于
type Foo2 = {
  a: number;
  b: number;
  c: number;
};

// 20.3 方括号运算符

type Person = {
  age: number;
  name: string;
  alive: boolean;
};

// Age 的类型是 number
type Age = Person["age"];

// number|string
type T = Person["age" | "name"];

// number|string|boolean
type A = Person[keyof Person];

// 20.4 extends...?: 条件运算符

type TT = 1 extends number ? true : false; // true

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

// number
type T1 = Dog extends Animal ? number : string;

// string
type T2 = RegExp extends Animal ? number : string;

// 20.5 infer 关键字

// 试用infer 推断函数的参数类型和返回值类型
type ParamType<T> = T extends (param: infer P) => any ? P : T;

// 使用 infer 提取对象属性
type MyType<T> = 
  T extends {
    a: infer M;
    b: infer N;
  } ? [M, N] : never;


// 用法示例
type Tk = MyType<{ a: string; b: number }>; // [string, number]

// 20.6 is 运算符

class Fish {
  swim() {}
}

class Bird {
}

class Cat {

}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function isCat(a:any): a is Cat {
  return a.name === 'kitty';
}

class Teacher {
  isStudent():this is Student {
    return false;
  }
}

class Student {
  isStudent():this is Student {
    return true;
  }
}

// 20.7 模版字符串
type World = "world";

// "hello world"
type Greeting = `hello ${World}`;

type T0 = 'A'|'B';

type U0 = '1'|'2';

// 'A1'|'A2'|'B1'|'B2'
type V = `${T0}${U0}`;

// 20.8 satisfies 运算符
