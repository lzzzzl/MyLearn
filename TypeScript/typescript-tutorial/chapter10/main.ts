// 1. 简介

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const p: Person = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
};

interface Foo {
  a: string;
}

type A = Foo["a"];

interface B {
  readonly b: string;
}

interface C {
  [prop: string]: number;
}

// 2. interface 继承

// 2.1 interface 继承 interface
interface Shape {
  name: string;
}

interface Circle extends Shape {
  radius: number;
}

interface xxx extends Shape, Circle {
  color: string;
}

// 2.2 interface 继承 type
type Country = {
  name: string;
  capital: string;
};

interface CountryWithPop extends Country {
  population: number;
}

// 2.3 interface 继承 class
class M {
  x: string = "";

  y(): boolean {
    return true;
  }
}

interface N extends M {
  z: number;
}

// 3. 接口合并
interface Box {
  height: number;
  width: number;
}

interface Box {
  length: number
}

// 4. interface vs type
// 1）type能够表示非对象类型，而interface只能表示对象类型（包括数组、函数等）。
// 2）interface可以继承其他类型，type不支持继承。