/* Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers. Reminder: you can't use built-in Math.max() or sort() to complete this assignment. */

function max(numbers) {
  let maxNumber = numbers[0];
  numbers.forEach((i) => {
    if (i > maxNumber) maxNumber = i;
  });
  return maxNumber;
}
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

// result to 5 max([5, 2, 7, 1, 6]); // result to 7

/* ------------------------------------------------------------------------------ */

/* Assignment 2: Object
Complete the function below to calculate the result of the passing object. */

function calculate(args) {
  const { n1, n2, op } = args;
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    default:
      return "Not supported";
  }
}
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // result to 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // result to 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // result to 'Not supported'

/* ------------------------------------------------------------------------------ */

/* Assignment 3: Function, Array, and Object
Complete the function below to calculate the total price of all products after applying a discount. */

function calculate(data) {
  const { discount, products } = data;
  let total = 0;
  products.forEach((item) => (total += item.price * discount));
  return total;
}
console.log(
  calculate({
    discount: 0.1,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
);

// show the total price of all products after applying a discount

/* ------------------------------------------------------------------------------ */

/* Assignment 5: Algorithm Practice (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. */

function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (!result.length) {
        if (nums[i] + nums[j] === target) {
          result.push(i, j);
        }
      }
    }
  }
  return result;
}
console.log(twoSum([2, 7, 11, 15], 9));

/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because: nums[0] + nums[1] is 9
*/

