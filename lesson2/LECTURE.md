# Lesson 2: Arrays

## Theory

### Definition

Array is ordered collection, where we have a 1st, a 2nd, a 3rd element and so on

### Declaration

```js
let arr = new Array();
let arr = []; // suggested way
```

### Indices and length

Array elements are numbered, starting with zero.

We can get an element by its number in square brackets:

```js
let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
```

We can replace an element:

```js
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
```

…Or add a new one to the array:

```js
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
```

Also with `[]` you can access last element with `.length - 1`. So only positive number allowed. But you can do it easily
with `.at()`.

```js
let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[fruits.length - 1]); // Plum
console.log(fruits[-1]); // undefined
console.log(fruits.at(-1)); // Plum
```

The total count of the elements in the array is its length:

```js
let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits.length); // 3
```

### Loop

#### For

```js
for (begin; condition; step) {
	// ... loop body ...
}
```

```js
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
	console.log(i);
}
```

With arrays:

```js
let fruits = ["Apple", "Orange", "Pear"];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
```

_More_: [Other loops and iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

### Immutable and mutable

Some methods do not mutate the existing array that the method was called on, but instead return a new array. They do so
by first constructing a new array and then populating it with elements. The copy always
happens [shallowly](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) — the method never copies anything
beyond the initially created array. Elements of the original array(s) are copied into the new array as follows:

```js
let fruits = ["Apple", "Orange", "Pear"];
let otherFruits = fruits;

fruits[0] = "Banana";

console.log(fruits); // ["Banana", "Orange", "Pear"]
console.log(otherFruits); // ["Banana", "Orange", "Pear"]

let copiedFruits = [];

for (let i = 0; i < fruits.length; i++) {
	copiedFruits[i] = fruits[i];
}

fruits[1] = "Peach";

console.log(fruits); // ["Banana", "Peach", "Pear"]
console.log(copiedFruits); // ["Banana", "Orange", "Pear"]
```

Some methods already make copy:

```js
let fruits = ["Apple", "Orange", "Pear"];
let copiedFruits = fruits.map((fruit) => fruit);

fruits[0] = "Banana";

console.log(fruits); // ["Banana", "Orange", "Pear"]
console.log(copiedFruits); // ["Apple", "Orange", "Pear"]
```

Remember that it is shallow copy (1 level at a time):

```js
let fruits = [["Apple"], ["Orange"], ["Pear"]];
let copiedFruits = fruits.map((fruit) => fruit);

fruits[0][0] = "Banana";

console.log(fruits); // [["Banana"], ["Orange"], ["Pear"]]
console.log(copiedFruits); // [["Banana"], ["Orange"], ["Pear"]]
```

### Properties and Methods

We will talk about some important properties and methods but please check
the [list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#constructor) for
others

#### Static methods

* [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

#### Instance properties

* [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

#### Instance methods

* [Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
* [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
    * Better way
      is [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
  and [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
* [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Example:

### 1

Create array from a string:

```js
console.log(makeArr("Apple, Banana, Orange")); // ["Apple", "Banana", "Orange"]
```

### 2

Create string from array:

```js
console.log(makeStr(["Apple", "Banana", "Orange"])); // "Apple, Banana, Orange"
```

### 3

Sum of all the numbers:

```js
console.log(getSumOfItems([2, 7, 4])); // 13

console.log(getSumOfItems([45, 3, 0])); // 48

console.log(getSumOfItems([-2, 84, 23])); // 105
```

### 4

Reverse an Array:

```js
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]

console.log(reverse([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]

console.log(reverse([])); // []
```

### 5

Increment an Array value __without__ copy.

```js
console.log(incrementItems([0, 1, 2, 3])); // [1, 2, 3, 4]

console.log(incrementItems([2, 4, 6, 8])); // [3, 5, 7, 9]

let arr = [-1, -2, -3, -4];
const incremented = incrementItems(arr);
console.log(incremented); // [0, -1, -2, -3]
console.log(arr); // [0, -1, -2, -3]
```

### 6

Increment an Array value __with__ copy.

```js
console.log(incrementItems([0, 1, 2, 3])); // [1, 2, 3, 4]

console.log(incrementItems([2, 4, 6, 8])); // [3, 5, 7, 9]

let arr = [-1, -2, -3, -4];
const incremented = incrementItems(arr);
console.log(incremented); // [0, -1, -2, -3]
console.log(arr); // [-1, -2, -3, -4]
```

### 7

Merge two arrays.

```js
console.log(concat([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]

console.log(concat([7, 8], [10, 9, 1, 1, 2])); // [7, 8, 10, 9, 1, 1, 2]

console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); // [4, 5, 1, 3, 3, 3, 3, 3]
```

### 8

Ages of family members in a household were provided. Find age difference between spouses.

```js
console.log(ageDifference([29, 1, 6, 8, 28])); // 1

console.log(ageDifference([43, 86, 49, 86])); // 0

console.log(ageDifference([2, 4, 6, 32, 27])); // 5
```

### 9

Only leave numbers.

```js
console.log(filterArray([1, 2, 3, "a", "b", 4])); // [1, 2, 3, 4]

console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); // [0, 1729]

console.log(filterArray(["Nothing", "here"])); // []
```
