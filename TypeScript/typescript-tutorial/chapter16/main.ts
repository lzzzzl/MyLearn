// 16.1 简介
function simpleDecorator(value: any, context: any) {
  console.log(`hi, this is ${context.kind} ${context.name}`);
  return value;
}

@simpleDecorator
class A {}

// 16.2 类装饰器
function Greeter(value, context) {
  if (context.kind === 'class') {
    value.prototype.greet = function () {
      console.log('你好');
    };
  }
}

@Greeter
class User {}

let u = new User();
u.greet(); // "你好"

// 16.3 方法装饰器
function trace(decoratedMethod) {
  // ...
}

class C {
  @trace
  toString() {
    return 'C';
  }
}
