# Lesson 6: Typescript

## Theory

### Definition

TypeScript is an open-source language that was developed by Microsoft. It's a superset of JavaScript, which means that
you can use the JavaScript skills you've already developed along with certain features that were previously unavailable
to you.

#### Type hints

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

#### Relation to JS

Browsers understand JavaScript only. For your application to work, when you write it in TypeScript, you need to compile
your code and convert it to JavaScript. You transform the TypeScript code into JavaScript code by using the TypeScript
compiler or a TypeScript-compatible transpiler. The resulting JavaScript is clean, simple code that runs anywhere
JavaScript runs: In a browser, on Node.js, or in your apps.

![ts-js](ts-js.png)