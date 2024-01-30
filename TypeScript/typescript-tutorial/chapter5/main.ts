// 1. 数组

let arr1: number[] = [1, 2, 3];

let arr2: (number | string)[];

let arr3: number[];

arr3 = [];
arr3 = [1];
arr3 = [1, 2];
arr3 = [1, 2, 3];

// 2. 数组的类型推断
const arr = [123]; // 推断为 any[]

arr.push(456); // 正确

arr.push('abc'); // 报错

// 3. 只读数组，const 断言

// const 命令声明的数组变量可以改变成员
const arr4 = [0, 1];
arr4[0] = 2;


const arr5:readonly number[] = [0, 1];
arr5[1] = 2; // 报错
arr5.push(3); // 报错
delete arr5[0]; // 报错

const arr6 = [0, 1] as const;

arr6[0] = [2]; // 报错

// 4. 多维数组
var multi:number[][] = [[1,2,3],[23,24,25]];