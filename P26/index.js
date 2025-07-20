let arr = [1,2,3,4,5];
//  Index  0,1,2,3,4

// arr[0] = 453;

// console.log(arr);
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr[0]);
// console.log(arr[1] , typeof arr);

console.log(arr);

console.log(arr.toString());
console.log(arr.join("-"));

arr.pop();
arr.push("Kumar");
console.log(arr)
arr.shift();
arr.unshift("Mohit");
console.log(arr);

delete arr[3];
console.log(arr);

let a1 = [5,4,7,3,5,3];
let a2 = [35,54,571,263,625,743];
let a3 = [21,55,71,63,62,43];
console.log(a1.concat(a2,a3));
