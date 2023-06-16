# Lesson 4: Functions

## Theory

### Definition

Functions are the basic building block of JavaScript. Functions allow us to encapsulate a block of code and reuse it
multiple times. Functions make JavaScript code more readable, organized, reusable, and maintainable.

### Declaration

```js
function greet(name) { // function declaration
	return `Hello ${name}!`;
}

const greet = function (name) { // function expression
	return `Hello ${name}!`;
}

const greet = (name) => { // arrow function
	return `Hello ${name}!`;
}
```

### Parameters

Values can be passed to a function using _parameters_. A function can have one or more parameters, and the values will
be passed by the calling code.

JavaScript is a dynamic type scripting language, so a function parameter can have a value of any data type.

When a value is passed as a function parameter, it’s also called an _argument_.

```js
function greet(firstName, lastName) {
	console.log("Hello " + firstName + " " + lastName);
}

greet("Steve", "Jobs", "Mr."); // display Hello Steve Jobs
greet("Bill"); // display Hello Bill undefined
greet(); // display Hello undefined undefined
```

#### Spread arguments and rest parameters

Functions can be called as spread arguments. And get values as rest parameters.

```js
function sum(...nums) {
	return nums.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(1, -1)) // 0
console.log(sum(...[1, 2, 3])) // 6
```

#### Default values

In JavaScript, parameters of functions default to `undefined`. However, in some situations it might be useful to set a
different default value. This is exactly what default parameters do.

```js
function sum(a, b = 0) {
	return a + b;
}

console.log(sum(5)); // 5
console.log(sum(5, null)); // 5, the same for undefined and null
```

### Return

By default, functions return `undefined`. But function can return any _single_ data. Function can return nothing which
is basically undefined.

```js
function driveCar(person) {
	if (!checkDrivericence(person)) {
		return;
	}

	console.log("You can drive this car");
}
```

### Self-Invoking Functions

Function can be "self-invoked".

```js
(function () {
	let x = "Hello!!";  // I will invoke myself
})();
```

### Scope

Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is
defined only in the scope of the function. However, a function can access all variables and functions defined inside the
scope in which it is defined.

```js
// program to show the change in global variable
let a = "hello";

function greet() {
	a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3
```

```js
// program showing local scope of a variable
let a = "hello";

function greet() {
	let b = "World"
	console.log(a + b);
}

greet();
console.log(a + b); // error
```

### Callback

Functions are first class objects. They can be sent to a functions, add properties and methods, etc.

```js
function multiplyByTwo(n, callback) {
	const result = n * 2;
	callback(result);
}

function logResult(result) {
	console.log(result);
}

multiplyByTwo(5, logResult); // logs 10
```

```js
function ask(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}

ask(
	"Do you want toner?",
	() => alert("Thanks for your purchase!"),
	() => alert("You will regret your decission!")
);
```

### Recursion

A function can refer to and call itself. A function that calls itself is called a recursive function. In some ways,
recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an
infinite loop, or rather, infinite recursion in this case).

```js
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
	// do stuff
	x++;
}
```

can be converted

```js
function loop(x) {
	// "x >= 10" is the exit condition (equivalent to "!(x < 10)")
	if (x >= 10) {
		return;
	}
	// do stuff
	loop(x + 1); // the recursive call
}

loop(0);
```

## Example:

### 1

Create a function that takes the age in years and returns the age in days. Use __365 days__ as the length of a year for
this challenge.

```js
console.log(calcAge(65)) // 23725

console.log(calcAge(0)) // 0

console.log(calcAge(20)) // 7300
```

### 2

Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

    A is misinterpreted as 4
    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

```js
console.log(keyboardMistakes("MUB45H1R")) // "MUBASHIR"

console.log(keyboardMistakes("DUBL1N")) // "DUBLIN"

console.log(keyboardMistakes("51NG4P0RE")) // "SINGAPORE"
```

### 3

Create a function that calculates two numbers.

```js
console.log(basicCalculator(2, '+', 4)) // 6

console.log(basicCalculator(6, '-', 5)) // 1

console.log(basicCalculator(12, '/', 3)) // 4

console.log(basicCalculator(3, '*', 4)) // 12

console.log(basicCalculator(1, '/', 0)) // null
// Division by zero is not possible

console.log(basicCalculator(1, 'x', 0)) // null
// 'x' is not an operator
```

### 4

Create a function that returns the number of arguments it was called with.

```js
console.log(numArgs()) // 0

console.log(numArgs("foo")) // 1

console.log(numArgs("foo", "bar")) // 2

console.log(numArgs(true, false)) // 2

console.log(numArgs({})) // 1
```

### 5

Find min number from arguments of a function.

```js
console.log(min()) // null

console.log(min(1, 2, 3)) // 1

console.log(min(3, 2, 1)) // 1

console.log(min(123, 132, 213, 231, 312, 321)) // 123
```

### 6

Write chat function where if user says nothing should send smile.

```js
console.log(showMessage('Ann', 'Hello!')) // Ann: Hello!

console.log(showMessage('Ann')) // Ann: 😀
```

### 7

Write calculator with operations.

```js
console.log(calculate(8, 2, (num1, num2) => num1 + num2)) // 10

console.log(calculate(8, 2, (num1, num2) => num1 - num2)) // 6

console.log(calculate(8, 2, (num1, num2) => num1 * num2)) // 16

console.log(calculate(8, 2, (num1, num2) => num1 / num2)) // 4
```

### 8

Write filter functions for an array with a predicate function

```js
console.log(filter([-3, -2, -1, 0, 1, 2, 3], (num) => num > 0)); // [1, 2, 3]

console.log(filter(["dog", "wolf", "by", "family", "eaten", "camping"], (str) => str.length <= 5)); // ["by", "dog", "wolf", "eaten"]
```

### 9

Write a function that finds the sum of the first n natural numbers. Make your function recursive.

```js
console.log(sum(5)) // 15
// 1 + 2 + 3 + 4 + 5 = 15

console.log(sum(1)) // 1

console.log(sum(12)) // 78
```
