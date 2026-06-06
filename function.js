//  normal function
//  anonymous function
//  arrow function

//  normal function:
function operations(a, b, opr) {
  if (opr === "sum") {
    return `${opr}=${a + b}`;
  }
  if (opr === "mul") {
    return `${opr}=${a * b}`;
  }
}
console.log(operations(63, 99, "sum"));
console.log(operations(45, 67, "mul"));
