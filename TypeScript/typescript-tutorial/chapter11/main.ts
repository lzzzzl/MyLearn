// 11. 类
// 类是面向对象编程的基本构件，封装了属性和方法。

// 11.1 属性的类型
class Point {
  x: number;
  y: number;
}

// 11.2 readonly修饰符
class A {
  readonly id = "foo";
}

class A2 {
  readonly id: string;

  constructor() {
    this.id = "bar";
  }
}

class A3 {
  readonly id: string = "baz";

  constructor() {
    this.id = "qux";
  }
}

// 11.3 方法的类型
class Point2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point2) {
    return new Point2(this.x + point.x, this.y + point.y);
  }
}

// 11.4 存取器
class C {
  _name = "";

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

// 11.5 属性索引

// 11.6 类的 interface 接口 | implements 关键字

interface Country {
  name: string;
  capital: string;
}

class MyCountry implements Country {
  name = "";
  capital = "";
}

// 11.7 类的 interface 接口 | 实现多个接口
interface Vehicle {
  name: string;
  speed: number;
  start(): void;
  stop(): void;
}

interface Engine {
  engine: string;
  accelerate(): void;
  brake(): void;
}

class Car implements Vehicle, Engine {
  name = "";
  speed = 0;
  engine = "";
  start() {}
  stop() {}
  accelerate() {}
  brake() {}
}

// 11.8 类的 interface 接口 | 类与接口的合并
class K {
  x: number = 1;
}

interface K {
  y: number;
}

let k = new K();
k.y = 10;

k.x;
k.y;

// 11.9 Class 类型 | 实例类型
class Color {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const green: Color = new Color("green");

interface MotorVehicle {}

class BigCar implements MotorVehicle {}

// 写法一
const c1:BigCar = new BigCar();

// 写法二
const c2:MotorVehicle = new BigCar();

// 11.10 Class 类型 | 类的自身类型
function createPoint1(
  PointClass: new (x:number, y:number) => Point,
  x: number,
  y: number
): Point {
  return new PointClass(x, y);
}

interface PointConstructor {
  new(x:number, y:number): Point;
}

function createPoint2(
  PointClass: PointConstructor,
  x: number,
  y: number
): Point {
  return new PointClass(x, y);
}

// 11.11 Class 类型 | 结构类型原则
class Person {
  name: string;
}

class Customer {
  name: string;
}

const cust:Customer = new Person();

// 11.12 Class 类型 | 类的继承
class M {
  greet() {
    console.log("Hello, world!");
  }
}

class N extends M {}

const n = new N();
n.greet(); // Hello, world!

// 11.14 可访问性修饰符 | public

class Greeter {
  public greet() {
    console.log("Hello, world!");
  }
}

const g = new Greeter();
g.greet(); // Hello, world! 

// 11.15 可访问性修饰符 | private
class A4 {
  private x: number = 0;
}

// 11.15 可访问性修饰符 | protected
class A5 {
  protected x: number = 0;
}

// 11.15 可访问性修饰符 | 实例属性的简写形式
class Point3 {
  constructor(public x: number, public y: number) {}
}

const p = new Point3(1, 2);
console.log(p.x); // 1
console.log(p.y); // 2

// 11.16 静态成员
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}

MyClass.printX(); // 0
MyClass.x; // 10

//11.17 泛型类
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

const b:Box<string> = new Box("hello");

// 11.18 抽象类，抽象成员
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  radius: number;

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// 11.19 this 问题
