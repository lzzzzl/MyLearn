"use strict";
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let brands = [];
brands.push("Van Halen");
// Tuple
let myTuple = ["Dave", 42, true];
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = brands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
