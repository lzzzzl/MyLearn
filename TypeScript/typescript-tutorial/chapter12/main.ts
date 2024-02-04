// 12.1 简介
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// 12.2 泛型的写法 | 函数的泛型写法
function id<T>(arg: T): T {
  return arg;
}

// 12.2 泛型的写法 | 接口的泛型写法
interface Box<T> {
  contents: T;
}

let box: Box<string>;

// 12.2 泛型的写法 | 类的泛型写法
class Pair<K, V> {
  key: K;
  value: V;
}

// 12.2 泛型的写法 | 类型别名的泛型写法
type Nullable<T> = T | undefined | null;

// 12.3 类型参数的默认值
function getFirst2<T = string>(arr: T[]): T {
  return arr[0];
}

// 12.4 数组的泛型表示
let arr: Array<number> = [1, 2, 3];

interface Array<T> {
  length: number;

  pop(): T | undefined;

  push(...items: T[]): number;
}

// 12.5 类型参数的约束条件
function comp<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}
