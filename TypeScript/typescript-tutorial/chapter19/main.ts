// 19.1 简介

// 在TypeScript中，declare关键字用于告诉编译器某个变量、类、函数等已经存在，
// 但是其实现可能在当前文件或项目的其他地方，或者在一个全局的上下文中

// 19.2 声明变量

declare let x: number;
x = 1;

// 19.3 声明函数
declare function sayHello(name: string): void;

sayHello("typescript");

// 19.4 声明类
declare class Animal {
  constructor(name: string);
  eat(): void;
  sleep(): void;
}

declare class C {
  // 静态成员
  public static s0(): string;
  private static s1: string;

  // 属性
  public a: number;
  private b: number;

  // 构造函数
  constructor(arg: number);

  // 方法
  m(x: number, y: number): number;

  // 存取器
  get c(): number;
  set c(value: number);

  // 索引签名
  [index: string]: any;
}

// 19.5 decalre module, namespace
declare namespace AnimalLib {
  class Animal {
    constructor(name: string);
    eat(): void;
    sleep(): void;
  }

  type Animals = "Fish" | "Dog";
}

declare module AnimalLib2 {
  class Animal {
    constructor(name: string);
    eat(): void;
    sleep(): void;
  }

  type Animals = "Fish" | "Dog";
}

// 19.6 declare global
export {};

declare global {
  interface Window {
    hello(): string;
  }
}

Window.prototype.hello = (): string => {
  return "hello";
};

// 19.7 decalre enum
declare enum E1 {
  A,
  B,
}

declare const enum E2 {
  A = 0,
  B = 1,
}

declare const enum E3 {
  A,
  B,
}

declare const enum E4 {
  A = 0,
  B = 1,
}

