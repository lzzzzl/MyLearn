// 22.1 简介

// 映射（mapping）指的是，将一种类型按照映射规则，转换成另一种类型，通常用于对象类型。

type A = {
  foo: number;
  bar: string;
};

type B = {
  [prop in keyof A]: string;
};

// 增加代码复用性，可以把常用的映射写成泛型
type toBoolean<T> = {
  [prop in keyof T]: boolean;
};

// 22.2 映射修饰符
// 映射会原样复制原始对象的可选属性和只读属性。
type C = {
  a?: string;
  readonly b: number;
};

type D = {
  [prop in keyof C]: C[prop];
};

// 等同于
type E = {
  a?: string;
  readonly b: number;
};

// 添加可选属性
type Optional<Type> = {
  [Prop in keyof Type]+?: Type[Prop];
};

// 移除可选属性
type Concrete<Type> = {
  [Prop in keyof Type]-?: Type[Prop];
};

// 22.3 键名重映射 | 语法

type A1 = {
  foo: number;
  bar: number;
};

type B1 = {
  [p in keyof A1 as `${p}ID`]: number;
};

// 等同于
type C1 = {
  fooID: number;
  barID: number;
}

interface Person {
  name: string;
  age: number;
  location: string;
}

type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type LazyPerson1 = Getters<Person>;

// 等同于
type LazyPerson2 = {
  getName: () => string;
  getAge: () => number;
  getLocation: () => string;
}

// 22.3 键名重映射 | 属性过滤
type User = {
  name: string,
  age: number,
}

type Filter<T> = {
  [K in keyof T as T[K] extends string ? K : never]: string
}

type FilteredUser = Filter<User> // { name: string }

// 22.3 键名重映射 | 联合类型的映射
// ...