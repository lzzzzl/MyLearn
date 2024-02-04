// 13.1 简介
enum Operator {
  ADD,
  DIV,
  MUL,
  SUB,
}

function compute(op: Operator, a: number, b: number) {
  switch (op) {
    case Operator.ADD:
      return a + b;
    case Operator.DIV:
      return a / b;
    case Operator.MUL:
      return a * b;
    case Operator.SUB:
      return a - b;
    default:
      throw new Error("Unknown operator");
  }
}

compute(Operator.ADD, 1, 2); // 3

// 13.2 Enum 成员的值
enum Color {
  Red,
  Green,
  Blue,
}

// 等同于
enum Color1 {
  Red = 0,
  Green = 1,
  Blue = 2,
}

// 可以使用计算式
enum Permission {
  UserRead     = 1 << 8,
  UserWrite    = 1 << 7,
  UserExecute  = 1 << 6,
  GroupRead    = 1 << 5,
  GroupWrite   = 1 << 4,
  GroupExecute = 1 << 3,
  AllRead      = 1 << 2,
  AllWrite     = 1 << 1,
  AllExecute   = 1 << 0,
}

enum Bool {
  No = 123,
  Yes = Math.random(),
}

// 13.3 同名 Enum 的合并
enum Foo {
  A,
}

enum Foo {
  B = 1,
}

enum Foo {
  C = 2,
}

// 等同于
enum Foo1 {
  A,
  B = 1,
  C = 2,
}

// 13.4 字符串 Enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  RIGHT = "RIGHT",
}

enum Enum {
  One = 'One',
  Two = 'Two',
  Three = 3,
  Four = 4,
}

// 13.5 keyof 运算符
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel; // "ERROR" | "WARN" | "INFO" | "DEBUG"

type LogLevelStrings1 = {[k in LogLevel]: string}; // {ERROR: string, WARN: string, INFO: string, DEBUG: string}

// 13.6 反向映射

enum Weekdays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

console.log(Weekdays[3]) // Wednesday

