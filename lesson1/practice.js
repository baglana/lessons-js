const prompt = require('prompt-sync')();

const operand1 = +prompt("Please type first number ");
console.log(`First number ${operand1}!`);

const operator = prompt("Please type operator ");
console.log(`Operator ${operator}!`);

const operand2 = +prompt("Please type second number ");
console.log(`Second number ${operand1}!`);

console.log(`Result is ${compute(operator, operand1, operand2)}`);

function compute(operator, operand1, operand2) {
  switch(operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '/':
      if (operand2 === 0) {
        console.log("You can't divide by zero");
        return;
      } else {
        return operand1 / operand2;
      }
    case '*':
      return operand1 * operand2;
    default:
      console.log("Operator isn't in {+, -, / , *}")
      break;
  }
}