/*
const prompt = require('prompt-sync')();

const num1 = +prompt("Please type first number ");
console.log(`First number ${num1}!`);

const operator = prompt("Please type operator ");
console.log(`Operator ${operator}!`);

const num2 = +prompt("Please type second number ");
console.log(`Second number ${num1}!`);

const result = calculate(operator, num1, num2);
if (result) {
  console.log(`Result is ${result}`);
}

function calculate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      if (num2 === 0) {
        throw new Error("Can't divide by zero");
      } else {
        return num1 / num2;
      }
    case '*':
      return num1 * num2;
    default:
      console.log("Operator isn't in {+, -, / , *}")
      break;
  }
}
*/

// // mutable variables
// let myName;
// let myAge;
//
// myName = "I am Batman";
//
// // // immutable variables
// // const age;
// //
// // // initialize variables
// const myCat = "Garfield";
//
// myCat = "Puss in Boots"; // Error

// let num = 2e3;

// let a = 5;
// let b = a;
// b = 10;
//
// console.log(a === b); // true
//
// b = 10;
//
// console.log(a === b); // false
//
// [5][5][10][][][][]
//  |     |
//  a     b

// let wizard1 = {
//   name: "Harry Potter",
// };
//
// let wizard2 = {
//   name: "Ron Weasley",
// };
//
// console.log(wizard1 === wizard2);
//
// [{...}][{...}][][][][][]
// 		|     |
//  	wiz1   wiz2

// let wizard1 = {
//   name: "Harry Potter",
// };
//
// let wizard2 = wizard1;
//
// wizard2.name = "Ron Weasley";
//
// console.log(wizard1 === wizard2);
// console.log(wizard1);
// console.log(wizard2);

// [{name: "Ron Weasley"}][][][][][][]
//    |  \
// wiz1   wiz2
//
// let a = 3;
// a = 5;
//
// console.log(a);

//
// console.log(1 === "1");

console.log("Hello!");