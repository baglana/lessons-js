/*
// 1.

function calcAge(years) {
  const daysInYear = 365;
  return daysInYear * years;
}

console.log(calcAge(65)) // 23725

console.log(calcAge(0)) // 0

console.log(calcAge(20)) // 7300
*/


/*
// 2.

function keyboardMistakes(str) {
  const mistakes = {
    4: 'A',
    5: 'S',
    0: 'O',
    1: 'I'
  }
  /!*
  * Problem:
  * replace chars of 4 types in a string
  * and return a new string
  *
  * Pseudocode:
  * Create new empty string
  * Go over each character of original string
  * adding them to new string one by one
  * if character is one of mistakes, instead add
  * its correction to resulting string
  * return corrected string
  * *!/
  let correctedStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char in mistakes) {
      char = mistakes[char];
    }
    correctedStr += char;
  }
  return correctedStr;
}

console.log(keyboardMistakes("MUB45H1R")) // "MUBASHIR"

console.log(keyboardMistakes("DUBL1N")) // "DUBLIN"

console.log(keyboardMistakes("51NG4P0RE")) // "SINGAPORE"
*/


/*
// 3.
/!*
* Problem:
* Apply operation to two numbers and return the result
*
* Pseudocode:
* Depending on the provided math operator string
* apply a corresponding operation and return the result
* *!/

function basicCalculator(num1, operator, num2) {

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return (num2) ? num1 / num2 : null;
    default:
      return null;
  }
}

console.log(basicCalculator(2, '+', 4)) // 6

console.log(basicCalculator(6, '-', 5)) // 1

console.log(basicCalculator(12, '/', 3)) // 4

console.log(basicCalculator(3, '*', 4)) // 12

console.log(basicCalculator(1, '/', 0)) // null
// Division by zero is not possible

console.log(basicCalculator(1, 'x', 0)) // null
// 'x' is not an operator
*/


/*
// 4.

/!*
* Problem:
* Count number of arguments passed to function
* and return it
* *!/

/!*
function numArgs(...args) {
  return args.length;
}
*!/

// const numArgs = (...args) => args.length;

console.log(numArgs()) // 0

console.log(numArgs("foo")) // 1

console.log(numArgs("foo", "bar")) // 2

console.log(numArgs(true, false)) // 2

console.log(numArgs({})) // 1
*/


/*
// 5.
/!*
* Find the smallest number passed as an argument
* and return it
* *!/

function min(...nums) {
  if (nums.length === 0) {
    return null;
  }
  return Math.min(...nums);
}

console.log(min()) // null

console.log(min(1, 2, 3)) // 1

console.log(min(3, 2, 1)) // 1

console.log(min(123, 132, 213, 231, 312, 321)) // 123
*/


/*
// 6.

/!*
* Problem:
* Write a function that takes 2 arguments, name and text,
* and return a string made from these 2 arguments
* If text is not provided, should use smile emoji instead
*
* Pseudocode:
* If second argument is not provided (undefined)
* then use default value and return resulting string
* using template literal
* *!/

function showMessage(name, txt) {
  // txt ||= '😀';
  return `${name}: ${txt || '😀'}`;
}

/!*
// Usinng default parameter
function showMessage(name, txt = '😀') {
  return `${name}: ${txt}`;
}
*!/

console.log(showMessage('Ann', 'Hello!')) // Ann: Hello!

console.log(showMessage('Ann')) // Ann: 😀

console.log(showMessage('Ann', '')) // Ann: 😀

console.log(showMessage('Ann', null)) // Ann: 😀
*/


/*
// 7.

/!*
* Problem:
* Write a function that takes two numbers and
* a callback function as arguments
* and returns the result of calling
* a callback function with two numbers
*
* Pseudocode:
* Return a callback function call with
* two first parameters used as arguments
* *!/

function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calculate(8, 2, (num1, num2) => num1 + num2)) // 10

console.log(calculate(8, 2, (num1, num2) => num1 - num2)) // 6

console.log(calculate(8, 2, (num1, num2) => num1 * num2)) // 16

console.log(calculate(8, 2, (num1, num2) => num1 / num2)) // 4
*/


/*
// 8.

/!*
* Problem:
* Write a function that takes original array
* and a function to sort out elements
* and returns a new sorted array with selected elements only
*
* Pseudocode:
* Take an array and callback function as parameters
* Create a new empty array
* Go over elements of the original array
* and if an element returns true when
* substituted to the callback function
* add it to the new array
* Finally return the resulting array sorted
* *!/

function filter(arr, predicate) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      // add arr[i] to filteredArr
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr.sort(compareFn);
}

function compareFn(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return (a.length < b.length) ? -1 :
      (a.length > b.length) ? 1 : a.localeCompare(b);
  }
  return (a < b) ? -1 :
    (a > b) ? 1 : 0;
}

console.log(filter([-3, -2, -1, 0, 1, 2, 3], (num) => num > 0)); // [1, 2, 3]

console.log(filter(["dog", "wolf", "by", "family", "eaten", "camping"], (str) => str.length <= 5)); // ["by", "dog", "wolf", "eaten"]
*/


/*
// 9.

/!*
* Problem:
* Write a function that sums all whole numbers from 1
* to n and returns the sum. Make the function call itself
*
* Pseudocode:
* if n is less than 1 return 0
* else return n + function call with n - 1
* *!/

function sum(n) {
  if (n < 1) {
    return 0;
  }
  return n + sum(n - 1);
}

console.log(sum(5)) // 15
// 1 + 2 + 3 + 4 + 5 = 15

console.log(sum(1)) // 1

console.log(sum(12)) // 78

console.log(sum(0)); // 0
*/
