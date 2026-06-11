// const obj = {
//   name: "deepanshu",
//   age: 50,
//   city: "chd",
// };

//  read property:

// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

// //  update object:

// obj.name = "deep";
// console.log(obj);

// //  add property :

// obj.email = "deep@gmail.com";

// console.log(obj);

//  delete the key value:

// const obj = {
//   name: "deepanshu",
//   age: 50,
//   city: "chd",
// };
// delete obj.city;
// console.log(obj);

//  methods in obj:
// const obj = {
//   name: "deepanshu",
//   age: 50,
//   city: "chd",
//   greet: function () {
//     console.log(`hello ${obj.name}`);
//   },
// };
// console.log(obj);
// obj.greet();

// for (let key in obj) {
//   console.log(key);
// }

// q1 :
// const car = {
//   brand: "BMW",
//   color: "blue",
//   brand: "porche",
// };

// console.log(car.brand);

// q2

// const data = {
//   name: "deepanshu",
//   age: 50,
// };

// data.age = 23;

// console.log(data.age);

// q3:

//  output:
// name = deepanshu
// age = 50
// city = chd

// const data = {
//   name: "deepanshu",
//   age: 50,
//   city: "chd",
// };
// for (let key in data) {
//   console.log(`${key} = ${data[key]}`);
// }

// q4
// const marks = {
//   maths: 99,
//   english: 98,
//   physics: 88,
//   chemistry: 75,
//   It: 100,
// };

// console.log(marks);

// let sum = 0;
// for (let key in marks) {
//   sum += marks[key];
// }
// console.log(sum);

// let p = (sum / 500) * 100;

// console.log(p);

// const students = [
//   {
//     name: "deep",
//     age: 23,
//   },
//   {
//     name: "nitin",
//     age: 24,
//   },
//   {
//     name: "sagar",
//     age: 27,
//   },
//   {
//     name: "amit",
//     age: 24,
//   },
// ];

// students.forEach((item) => {
//   console.log(item.name.toUpperCase());
// });

// const students = [
//   {
//     name: "deep",
//     age: 23,
//   },
//   {
//     name: "nitin",
//     age: 2,
//   },
//   {
//     name: "sagar",
//     age: 7,
//   },
//   {
//     name: "amit",
//     age: 19,
//   },
// ];

const students = [
  {
    id: 1,
    name: "deep",
    age: 23,
    rollNumber: 321,
    branch: "btech cse",
  },
  {
    id: 2,
    name: "deepanshu",
    age: 22,
    rollNumber: 322,
    branch: "btech cse",
  },
  {
    id: 3,
    name: "deep",
    age: 23,
    rollNumber: 323,
    branch: "btech cse",
  },
  {
    id: 4,
    name: "deepanshi",
    age: 24,
    rollNumber: 324,
    branch: "bca",
  },
  {
    id: 5,
    name: "deepak",
    age: 22,
    rollNumber: 325,
    branch: "btech cse",
  },
  {
    id: 6,
    name: "deevanshu",
    age: 25,
    rollNumber: 326,
  },
  {
    id: 7,
    name: "ansh",
    age: 23,
    rollNumber: 327,
    branch: "bca",
  },
  {
    id: 8,
    name: "anshu",
    age: 24,
    rollNumber: 328,
    branch: "bca",
  },
  {
    id: 9,
    name: "anshul",
    age: 23,
    rollNumber: 329,
    branch: "btech cse",
  },
  {
    id: 10,
    name: "deevyanshi",
    age: 24,
    rollNumber: 330,
    branch: "bca",
  },
];

const r = students.find((item) => {
  return item.id === 3;
});

console.log(r);
r.branch = "bca";
console.log(r);
