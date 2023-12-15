let stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let brands: string[] = [];
brands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = brands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "John";

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

evh = jp;
