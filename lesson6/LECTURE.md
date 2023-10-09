# Lesson 6: Typescript

## Definition

TypeScript is an open-source language that was developed by Microsoft. It's a superset of JavaScript, which means that
you can use the JavaScript skills you've already developed along with certain features that were previously unavailable
to you.

### Type hints

The core feature of TypeScript is its type system. In TypeScript, you can identify the data type of a variable or
parameter by using a _type hint_. With type hints, you describe the shape of an object, which provides better
documentation and allows TypeScript to validate that your code is working correctly.

Through static type checking, TypeScript catches code issues early in development that JavaScript can't normally catch
until the code is run in the browser. Types also let you describe what your code is intended to do. If you're working on
a team, a teammate who comes in after you can easily understand it too.

Types also power the intelligence and productivity benefits of development tools, such as IntelliSense, symbol-based
navigation, go to definition, find all references, statement completion, and code refactoring.

Writing types can be optional in TypeScript, because _type inference_ allows you to get much of this power without
writing extra code. If TypeScript can determine the data type implicitly (for example, when you assign a value to a
variable by using `let age = 42`), it automatically infers the data type.

```js
function addNumbers(x, y) {
	return x + y;
}

console.log(addNumbers(3, 6));
```

```ts
function addNumbers(x: number, y: number) {
    return x + y;
}

console.log(addNumbers(3, 6));
```

### Relation to JS

Browsers understand JavaScript only. For your application to work, when you write it in TypeScript, you need to compile
your code and convert it to JavaScript. You transform the TypeScript code into JavaScript code by using the TypeScript
compiler or a TypeScript-compatible transpiler. The resulting JavaScript is clean, simple code that runs anywhere
JavaScript runs: In a browser, on Node.js, or in your apps.

![ts-js](ts-js.png)

## Simple Types

* `string`
* `number`
* `bigint`
* `boolean`
* `undefined`
* `null`
* `symbol`

Most types as we mentioned are implicit. But some time we need to explicitly define type:

```ts
let firstName = "Bob"; // inferred to type string
firstName = 33; // Type number is not assignable to type string

let lastName: string | number = "Dylan"; // inferred to type string
lastName = 42; // works ok
```

## Special Types

* `any`
* `unknown`
* `never`

### `any`

TypeScript has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking
errors.

When a value is of type `any`, you can access any properties of it (which will in turn be of type any), call it like a
function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

```ts
let obj: any = {x: 0};
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

`any` can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide
type safety, and tools which rely on type data, such as auto completion, will not work. **Remember, it should be avoided
at `any` cost...**

### `unknown`

The `unknown` type represents any value. This is similar to the `any` type, but is safer because it’s not legal to do
anything with an `unknown` value:

```ts
function f1(a: any) {
    a.b(); // OK
}

function f2(a: unknown) {
    a.b(); // 'a' is of type 'unknown'.
}
```

### `never`

The `never` type represents values which are never observed. In a return type, this means that the function throws an
exception or terminates execution of the program.

`never` also appears when TypeScript determines there’s nothing left in a union.

```ts
function fn(x: string | number) {
    if (typeof x === "string") {
        // do something
    } else if (typeof x === "number") {
        // do something else
    } else {
        x; // has type 'never'!
    }
}
```

## Array

TypeScript has a specific syntax for typing arrays.

```ts
const fruits: Array<string> = [] // not suggested
const names: string[] = [];
names.push("Dylan"); // no error
names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'. 
```

## Tuple

A tuple is a typed array with a pre-defined length and types for each index.

```ts
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// define our tuple
let innerTuple: [number, boolean, string];

// initialized incorrectly which throws an error
innerTuple = [false, 'Coding God was mistaken', 5];
```

## Object

```ts
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
```

### Optional properties

```ts
const car1: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
};

const car2: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
car2.mileage = 2000;
```

### Index Signatures

Index signatures can be used for objects without a defined list of properties.

```ts
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'. 
```

## Enum

An `enum` is a special "class" that represents a group of constants (unchangeable variables).

```ts
enum CardinalDirections {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'. 

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
```

## `readonly` property

The `readonly` keyword can prevent types from being changed.

```ts
const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works? 
```

## Type Aliases and Interfaces

### Type Aliases

Type Aliases allow defining types with a custom name (an Alias).

```ts
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};
```

### Interfaces

Interfaces are similar to type aliases, except they **only** apply to object types.

```ts
interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};
```

#### Extending

```ts
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
```

use Aliases over Interfaces.

## Union types

Union types are used when a value can be more than a single type.

```ts
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}

printStatusCode(404);
printStatusCode('404');
```

But please very cautious

```ts
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'. Property 'toUpperCase' does not exist on type 'number'
}
```

## Functions

TypeScript has a specific syntax for typing function parameters and return values.

```ts
// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}
```

The type `void` can be used to indicate a function doesn't return any value.

```ts
function printHello(): void {
    console.log('Hello!');
}
```

### Optional parameters

```ts
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
```

## Casting

There are times when working with types where it's necessary to override the type of a variable, such as when incorrect
types are provided by a library.

A straightforward way to cast a variable is using the `as` keyword, which will directly change the type of the given
variable.

```ts
let x: unknown = 'hello';
console.log((x as string).length);
```

**Please use it when only required. Which almost never.**


