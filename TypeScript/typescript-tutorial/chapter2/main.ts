let foo: string;

function toString(num: number): string {
  return String(num);
}

// error
let foo: string = 123;

// error
let x: number;
console.log(x);

// Type inference
let foo = 123;

foo = "456";

function toString(num: number) {
  return String(num);
}



