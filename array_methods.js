//  for each loop:

// const arr = ["a", "b", "c", "d"];
// arr.forEach((item, index) => {
//   console.log(item, index);
// });

// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let table = 19;
// t.forEach((item) => {
//   console.log(`${table} x ${item}= ${table * item}`);
// });

//  for each loop return undefined
// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const square = t.forEach((item) => {
//   console.log(item * item);
//   return item * item;
// });
// console.log(square);

//  print even number:
// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// t.forEach((num) => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

//  count the length of the word:

// const data = ["Porche", "Thar", "Defender", "Fortuner", "Endavour", "Rubicon"];

// const l = data.forEach((item) => {
//   console.log(`${item} : ${item.length} `);
// });

// console.log(l);

// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const even = t.map((item) => {
//   if (item % 2 === 0) {
//     return item;
//   }
// });
// console.log(even);

// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = t.filter((item) => item % 2 === 0);
// console.log(even);

// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sqaure = t.forEach((item) => {
//   let c = item * item;
//   return c;
// });

// const square_with_map = t.map((item) => {
//   let c = item * item;
//   return c;
// });

// console.log(sqaure);
// console.log(square_with_map);

// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum_of_array = (arr) => {
//   let sum = 0;
//   arr.forEach((item) => {
//     sum += item;
//   });
//   console.log(sum);
// };

// sum_of_array(t);

//  add 10 with everynumber and return a new array:
// const arr = [5, 6, 7, 8];

// const add_ten = arr.map((item) => {
//   return item + 10;
// });

// console.log(add_ten);

//  return a new array with uppercase value of each element:
// const data = ["Porche", "Defender", "Endavour", "Rubicon"];

// const uppercase_value = data.map((item) => {
//   return item.toUpperCase();
// });

// console.log(uppercase_value);

// const with_forEach = data.forEach((item) => {
//   console.log(item.toUpperCase());
//   return item.toUpperCase();
// });

// console.log(with_forEach);

// const arr = [1, 2, 3, 4, 5];

// const r = arr.map((item) => {
//   return String(item);
// });
// console.log(r);
// const n = r.map((item) => {
//   return parseInt(item);
// });

// console.log(n);

// filter:
// const arr = [34, 5, 67, 3, 6, 88, 11];

// const result = arr.filter((item) => {
//   return item > 10;
// });

// console.log(result);

const data = ["Porche", "Defender", "Endavour", "Rubicon"];

// const result = data.filter((item) => {
//   return item.length > 7;
// });

// console.log(result);

// const result = data.find((item) => {
//   return item.length > 7;
// });

// console.log(result);

// const arr = ["45555", "356834", "876497", "38468"];
// //  q1: convert this array into collection of number (new array)
// //  q2: filter all the number of the array whose number is greater than 3l
// //  q3: find a number which is greater than 3l
// const result = arr.map((item) => {
//   return parseInt(item);
// });
// console.log(result);
// const faaaaaaa = result.filter((item) => {
//   return item > 300000;
// });
// console.log(faaaaaaa);
// const oneOnly = result.find((item) => {
//   return item > 300000;
// });
// console.log(oneOnly);

// const arr = [45, 34, 23, 78];
// const result = arr.reduce((acc, num) => {
//   return acc + num;
// }, 0);

// console.log(result);
