# Lesson 5: Functions

### Lexical Environment

Is a very complicated term for beginners. And would be suggested to learn this concepts after you will become more
experienced engineers.

Basically __Lexical Environment__ is an object describing surrounding state. It only exists “theoretically”.

__Lexical Environment__ consist of:

* _Environment description_: Record of all local variables, arguments(if Lexical environment was created by
  function), `this` etc
* _Reference to the outer lexical environment_: required to access to outer code.

__Lexical Environment__ are created by:

* _Global_: Any javascript script has one global __Lexical Environment__
* _Functional_: Created by functions
* _Code blocks_: It fairly new type. Created for code inside any `{}`: condition blocks, loops, `try..catch` etc.

#### Code blocks

Since ES2016 the `let` and `const` variables respects not just functional scopes, but also code block.

```js
// show message
let message = "Hello";
console.log(message);

// show another message
let message = "Goodbye"; // Error: variable already declared
console.log(message);
```

```js
{
	// show message
	let message = "Hello";
	console.log(message);
}

{
	// show another message
	let message = "Goodbye";
	console.log(message);
}
```

### Scope

If __Lexical Environment__ is an object, __scope__ is a concept of where variables and functions are declared. They are
some interchangeable.

```js
var globalVar = 'global';

function exampleFn() {
	if (true) {
		let blockVar = 'block';
	}
	console.log(blockVar);
}

exampleFn() // ReferenceError: blockVar is not defined
```

### Execution Context

JavaScript’s execution context is an abstract concept that stands for the environment in which code is run. It’s how the
interpreter tracks the program’s progress as it’s being executed. Every time a function or block is run, a new
__execution context__ is formed and added to __context stack__.

For each execution context, a related lexical environment supplies the variables and functions that can be utilized
within the context. Whenever a function is called, a new execution context and a fresh lexical environment are
generated. The environment record of the new lexical environment is populated with the variables and functions declared
within the function.

```js
function log(result) {
	debugger; // [global, multiplyByTwo, log]
	console.log(result);
}

function multiplyByTwo(n) {
	debugger; // [global, multiplyByTwo]
	const result = n * 2;
	log(result);
}

multiplyByTwo(5); // logs 10
```

### Closures

A __closure__ is a feature that allows a function to not only access variables and functions within its own lexical
scope, but also to maintain that access even if the function is called outside its original environment. A closure is
created by defining a function inside another function.

The reason why __Lexical Environment__ has a reference to outer environment.

```js
let x = 9;

function outerFn() {
	let x = 7;
	return function innerFn() {
		console.log(x);
	};
}

let closure = outerFn();
closure(); // 7
```

### Hoisting

__Hoisting__ refers to the process of moving variable and function declarations to the top of their scope, regardless of
their original position in the code. It means you can use variables and functions before they are declared in the code.

In the past all variables __hoisted__, because they were declared via `var`. But since ES2016 `let` and `const` changed
this behaviour.

But functions still works that way. And we use it in our advantage.

```js
console.log(y); // undefined

var y = 20;
```

```js
console.log(y); // Uncaught ReferenceError: can't access lexical declaration 'y' before initialization

let y = 20;
```

```js
hoistedFn(); // "This is a hoisted function"

function hoistedFn() {
	console.log('This is a hoisted function');
}
```

It could create weird outcomes:

```js
function hoistingExample() {
	console.log("Value of a in local scope: ", a);
}

console.log("Value of a in global scope: ", a);
var a = 1;
hoistingExample();
```

```shell
Value of a in global scope: undefined
Value of a in local scope: 1
```

### `this`

A function's `this` keyword behaves a little differently in JavaScript compared to other languages. It behaves
differently for _function declarations_ and _arrow functions_.

#### Function declaration

Inside a _function declaration_, the value of `this` depends on how the function is called. Think about `this` as a
hidden parameter of a function — just like the parameters declared in the function definition, `this` is a binding that
the language creates for you when the function body is evaluated.

For a typical function, the value of `this` is the object that the function is accessed on. In other words, if the
function call is in the form `obj.f()`, then `this` refers to `obj`. For example:

```js
function getThis() {
	return this;
}

const obj1 = {name: "obj1"};
const obj2 = {name: "obj2"};

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
```

The value of `this` always changes based on how a function is called, even when the function was defined on an object at
creation:

```js
const obj4 = {
	name: "obj4",
	getThis() {
		return this;
	},
};

const obj5 = {name: "obj5"};

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
```

If a function is called with this set to undefined or null, this gets substituted
with [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis).

#### Arrow functions

In arrow functions, this retains the value of the enclosing lexical context's this. In other words, when evaluating an
arrow function's body, the language does not create a new this binding.

For example, in global code, this is
always [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
regardless of strictness, because of the global context binding:

```js
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```

Arrow functions create a closure over the `this` value of its surrounding scope, which means arrow functions behave as
if they are "auto-bound" — no matter how it's invoked, this is bound to what it was when the function was created (in
the example above, the global object). The same applies to arrow functions created inside other functions: their `this`
remains that of the enclosing lexical context.

```js
const obj = {
	getThisGetter() {
		const getter = () => this;
		return getter;
	},
};

const fn = obj.getThisGetter();
console.log(fn() === obj); // true
```

## Example:

### 1

Write a function `redundant` that takes in a string `str` and returns a function that returns `str`.

```js
const f1 = redundant("apple")
console.log(f1()) // "apple"

const f2 = redundant("pear")
console.log(f2()) // "pear"

const f3 = redundant("")
console.log(f3()) // ""
```

### 2

Create function which adds 2 calls of numbers.

```js
console.log(add(10)(20)) // 30

console.log(add(0)(20)) // 20

console.log(add(-30)(80)) // 50
```

### 3

Create a function which takes an array arr of integers as an argument. This function must return another function, which
takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

```js
console.log(multiply([1, 2, 3])(2)) // [2, 4, 6]

console.log(multiply([4, 6, 5])(10)) // [40, 60, 50]

console.log(multiply([1, 2, 3])(0)) // [0, 0, 0]
```

### 4

Create a function that has some arguments and returns the type of the `5th` argument. In case the arguments were less
than `5`, return "Not enough arguments".

```js
console.log(fifth(1, 2, 3, 4, 5)) // "number"

console.log(fifth("a", 2, 3, true, "five")) // "string"

console.log(fifth()) // "Not enough arguments"
```

### 5

Create a method of an object that gets value.

```js
const wizard = {
	name: "Gandalf",
	type: "gray",
	getFullName() {
		// your code
	},
};

console.log(wizard.getFullName()); // "Gandalf the gray"
```

### 6

Create a method of an object that sets value.

```js
const wizard = {
	name: "Gandalf",
	type: "gray",
	reborn() {
		// your code
	},
	getFullName() {
		// your code
	},
};

wizard.reborn();
console.log(wizard.getFullName()); // "Gandalf the white"
```

### 7

Create function `getVotes` returns votes object with `count` method.

```js
const votes1 = getVotes(13, 0);
console.log(votes1.upvotes); // 13
console.log(votes1.downvotes); // 0
console.log(votes1.count()); // 13

const votes2 = getVotes(2, 33);
console.log(votes2.upvotes); // 13
console.log(votes2.downvotes); // 33
console.log(votes2.count()); // -31

const votes3 = getVotes(132, 132);
console.log(votes3.upvotes); // 132
console.log(votes3.downvotes); // 132
console.log(votes3.count()); // 0
```
