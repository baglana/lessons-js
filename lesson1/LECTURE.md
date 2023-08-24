# Lesson 1: Intro & Primitives

## Intro

![cake](cake.png)

1. **HTML** is the markup language that we use to structure and give meaning to our web content, for example defining
   paragraphs, headings, and data tables, or embedding images and videos in the page.
2. **CSS** is a language of style rules that we use to apply styling to our HTML content, for example setting background
   colors and fonts, and laying out our content in multiple columns.
3. **JavaScript** is a scripting language that enables you to create dynamically updating content, control multimedia,
   animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a
   few lines of JavaScript code.)

> JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class
> functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use
> it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
> single-threaded,
> dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

## Variables

A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a
sentence.

```js
// mutable variables
let myName;
let myAge;

myName = "I am Batman";

// immutable variables
const age;

// initialize variables
let myDog = "Scooby";
const myCat = "Garfield";

let myDog = "Hatiko"; // Error
myCat = "Puss in Boots"; // Error
```

**FORGET ABOUT `var`!**

## Data types

A value in JavaScript is always of a certain type. For example, a string or a number. There are **7 primitive** and
**1 object** data types in JavaScript.

### Primitives

1. [Boolean](#Boolean)
2. [Number](#Number)
3. [BigInt](#BigInt)
4. [String](#String)
5. [undefined](#undefined)
6. [null](#null)
7. [Symbol](#Symbol)

#### <a name="Boolean"></a>Boolean

The boolean type has only two values: `true` and `false`.

```js
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```

For example, in JavaScript, Boolean conditionals are often used to decide which sections of code to execute (such as in
`if` statements) or repeat (such as in `for` loops).

```js
/* JavaScript if statement */
if (boolean_conditional) {
	// code to execute if the conditional is true
}

/* JavaScript for loop */
for (control_variable; boolean_conditional; counter) {
	// code to execute repeatedly if the conditional is true
}
```

#### <a name="Number"></a>Number

The **Number** type is
a [double-precision 64-bit binary format IEEE 754 value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding).
It is capable of storing positive floating-point numbers between 2<sup>-1074</sup>
([Number.MIN_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE))
and 2<sup>1024</sup>
([Number.MAX_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE))
as well as negative floating-point numbers between -2<sup>-1074</sup> and -2<sup>1024</sup>, but it can only safely
store integers in the range -(2<sup>53 −1</sup>)
([Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER))
to 2<sup>53 − 1</sup>
([Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)).

**Numbers** can perform any valid Math operation:

```js
let sum = 25 + 2 // 27
```

##### `Infinity`, `-Infinity`, `NaN`

Are all special **Number** values where:

* `Inifinity` represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
* `- Inifinity` represents the _negative_ mathematical Infinity ∞. It is a special value that’s less than any number.
* `NaN` represents a computational error. It is a result of an incorrect or an undefined mathematical operation

```js
console.log("not a number" / 2); // NaN, such division is erroneous - no Error
```

#### <a name="BigInt"></a>BigInt

The **BigInt** type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With
BigInts, you can safely store and operate on large integers even beyond the safe integer limit
([Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER))
for Numbers.

A BigInt is created by appending `n` to the end of an integer or by calling
the [BigInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
function.

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

#### <a name="String"></a>String

A string in JavaScript must be surrounded by quotes.

In JavaScript, there are **3** types of quotes:

Double quotes `""` and single quotes `''` are basically same things.

```js
let str1 = "Hello double quotes";
let str2 = 'Single quotes are ok too';

// concat
let text = str1 + "!" + " " + str2 // Hello double quotes! Single quotes are ok too
```

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by
wrapping them in `${…}`:

```js
let name = "John";

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3
```

#### <a name="undefined"></a>undefined

The meaning of **undefined** is “value is not assigned”.

If a variable is declared, but not assigned, then its value is `undefined`:

```js
let age;

console.log(age); // shows "undefined"

age = 100;

// explicitly assign undefined, TRY TO AVOID!
age = undefined;

console.log(age); // "undefined"
```

#### <a name="null"></a>null

In computer science, a **null** value represents a reference that points, generally intentionally, to a nonexistent or
invalid object or address. The meaning of a **null** reference varies among language implementations.

```js
let age = null;

// typeof null is "object"
console.log(typeof null); // "object"
```

#### <a name="Symbol"></a>Symbol

**Symbol** is a built-in object whose constructor returns a symbol primitive — also called a **Symbol** value or just a
**Symbol** — that's guaranteed to be unique. **Symbols** are often used to add unique property keys to an object that
won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will
typically use to access the object. That enables a form of weak
[encapsulation](https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation), or a weak form of [information
hiding](https://en.wikipedia.org/wiki/Information_hiding).

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

sym2 === sym3; // false
```

### Objects

In computer science, an object is a value in memory which is possibly referenced by an identifier.

### Primitives vs Objects

**Primitives** are known as being immutable data types because there is no way to change a primitive value once it gets
created. **Primitives** are compared by value. Two values are strictly equal if they have the same value.

**Objects** values are mutable data types. The value of an **object** can be changed after it gets created. **Objects**
are not compared by value. This means that even if two objects have the same properties and values, they are not
strictly equal. **Objects** can also be referred to as reference types because they are being compared by reference
instead of value. Two **objects** are only strictly equal if they refer to the same underlying **object**.

## `typeof` operator

The `typeof` operator returns the type of the operand. It’s useful when we want to process values of different types
differently or just want to do a quick check.

A call to `typeof` returns a `string` with the type name:

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object" 

typeof null // "object" 

typeof alert // "function"
```

## Homework:

Create simple calculator app from terminal input. It should accept 4 operations: `+`, `-`, `/`, `*`. On any error use
your own judgement.

Technologies needs to be used: terminal(powershell in Windows), NodeJS, git, Javascript.

