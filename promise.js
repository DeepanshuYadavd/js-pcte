// const myPromise = new Promise((resolve, reject) => {
//   //   resolve("yes i got the shirt data");
//   reject("somethig went wrong");
// });
// myPromise
//   .then((result) => {
//     console.log(result);
//     console.log("run");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//  async await:
// function givePromise() {
//   const myPromise = new Promise((resolve, reject) => {
//     resolve("yeah its working");
//   });

//   return myPromise;
// }
// const handlepromise = async () => {
//   try {
//     const result = await givePromise();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// handlepromise();

//  reject case of promises:

const data = [
  {
    id: 1,
    productName: "shirt",
    color: "off white",
    price: 1999,
  },
  {
    id: 2,
    productName: "watch",
    color: "black",
    price: 2999,
  },
  {
    id: 3,
    productName: "Jeans",
    color: "grey",
    price: 4999,
  },
];
function getData(data) {
  const productApi = new Promise((resolve, reject) => {
    resolve(data);
  });
  return productApi;
}

const handleData = async (data) => {
  try {
    const response = await getData(data);
    console.log(response);
    response.forEach((item) => {
      for (let key in item) {
        console.log(`${key} = ${item[key]}`);
      }
      console.log("___________________________");
    });
  } catch (err) {
    console.log(err);
  }
};

handleData(data);
