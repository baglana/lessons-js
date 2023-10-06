// {
//   function log(name) {
//     console.log(`Hello ${name}!`);
//   }
// }
//
// log("Han");

// let x = 2;

// function increment() {
//   x++;
// }
//
// increment();
// increment();
// console.log(x); // 4

/*
### 1

Write a function `redundant` that takes in a string `str` and returns a function that returns `str`.
*/

function redundant(str) {
  return function() {
    return str;
  }
}

/*
const f1 = redundant("apple")
console.log(f1()) // "apple"

const f2 = redundant("pear")
console.log(f2()) // "pear"

const f3 = redundant("")
console.log(f3()) // ""
*/

/*
### 2

Create function which adds 2 calls of numbers.
*/

function add(x) {
  return function(y) {
    return x + y;
  }
}

/*
console.log(add(10)(20)) // 30

console.log(add(0)(20)) // 20

console.log(add(-30)(80)) // 50
*/

/*
### 3

Create a function which takes an array arr of integers as an argument. This function must return another function, which
takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.
*/

function multiply(arr) {
  return function(x) {
    return arr.map(num => num * x);
  }
}

/*
console.log(multiply([1, 2, 3])(2)) // [2, 4, 6]

console.log(multiply([4, 6, 5])(10)) // [40, 60, 50]

console.log(multiply([1, 2, 3])(0)) // [0, 0, 0]
*/

/*
### 4

Create a function that has some arguments and returns the type of the `5th` argument. In case the arguments were less
than `5`, return "Not enough arguments".
*/

function fifth(...args) {
  return args.length > 4 ? typeof args[4] : "Not enough arguments";
}

/*
console.log(fifth(1, 2, 3, 4, 5)) // "number"

console.log(fifth("a", 2, 3, true, "five")) // "string"

console.log(fifth()) // "Not enough arguments"
*/

/*
### 5

Create a method of an object that gets value.
*/

/*
const wizard = {
	name: "Gandalf",
	type: "gray",
	getFullName() {
		return `${this.name} the ${this.type}`;
	},
};

console.log(wizard.getFullName()); // "Gandalf the gray"
*/

/*
### 6

Create a method of an object that sets value.
*/

/*
const wizard = {
	name: "Gandalf",
	type: "gray",
	reborn() {
		this.type = "white";
	},
	getFullName() {
    return `${this.name} the ${this.type}`;
	},
};

wizard.reborn();
console.log(wizard.getFullName()); // "Gandalf the white"
*/

/*
### 7

Create function `getVotes` returns votes object with `count` method.
*/

function getVotes(upvotes, downvotes) {
  return {
    upvotes,
    downvotes,
    count() {
      return this.upvotes - this.downvotes;
    }
  }
}

/*
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
*/
