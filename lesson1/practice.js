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