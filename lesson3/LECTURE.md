# Lesson 3: Object

## Theory

### Definition

JavaScript object is a non-primitive data-type that allows you to store multiple collections of data. It is very
important and complicated type.

### Declaration

```js
let obj = new Object();
let obj = {}; // suggested way
```

### Keys, properties and methods

A property or method has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of
it.

We can get an element by its key via dot notation or in square brackets:

```js
let user = {     // an object
	name: "John",  // by key "name" store value "John"
	age: 30        // by key "age" store value 30
};

console.log(user.name); // John
console.log(user.age); // 30
console.log(user["name"]); // John
console.log(user["age"]); // 30
```

Keys can be either `String` or `Symbol`. Whereas value could be any data type.

```js
let key = "any key";
let obj = {
	[key]: false,
	someObject: {
		hello: "World",
	}
};
console.log(obj[key]); // false
```

For `Symbol` it is "hidden". More later.

```js
let id = Symbol("id");

let user = {
	name: "John",
	[id]: 123 // not "id": 123
};
```

Keys can be used as a getter and as a setter too.

```js
let user = {
	name: "John",
	age: 30,
};

user.age = 31;

console.log(user);
// {
// 	"name": "John",
//  "age": 31
// }
```

Default value is `undefined`.

```js
let obj = {}

console.log(obj.name); // undefined
```

Deleting the property from the object can be accomplished with `delete` operator. Setting to `undefined` does not work.

```js
let user = {
	name: "John",
	age: 30,
}

delete user.name;
user.age = undefined;

console.log(user); // { age: undefined }
```

#### Methods

Properties which are functions called methods.

```js
const person = {
	name: 'Sam',
	age: 30,
	// using function as a value
	greet() {
		console.log('hello');
	}
}

person.greet(); // hello
```

#### Checking keys

We can check if key exist with `in` operator.

```js
let id = Symbol("id");
let nonId = Symbol("id");

let user = {
	name: "John",
	age: 30,
	[id]: 123
};

console.log("name" in user); // true
console.log(id in user); // true
console.log("occupation" in user); // false
console.log(nonId in user); // false
```

Especially it is very useful for nested objects:

```js
let user = {
	name: "John",
	age: 30,
	contactInfo: {
		email: "john@example.com",
		tel: "+1(325)123123123",
	},
};

// console.log(user.contactInfo.address.city) // Uncaught TypeError: user.contactInfo.address is undefined
if ("address" in user.contactInfo) {
	if ("city" in user.contactInfo.address) {
		console.log(user.contactInfo.address.city)
	}
}
```

#### Optional chaining

Accessing nested object might problematic. Expecting most time just a value or indication that it does not exist:

```js
let user = {
	name: "John",
	age: 30,
	contactInfo: {
		email: "john@example.com",
		tel: "+1(325)123123123",
	},
	greet() {
		console.log("Hello")
	}
};

console.log(user?.contactInfo?.address?.city) // undefined
console.log(user?.["age"]) // 30
console.log(user?.greet()) // "Hello"
```

### Loop

#### For

Object can be iterated via `for..in`

```js
let user = {
	name: "John",
	age: 30,
	isAdmin: true
};

for (let key in user) {
	// keys
	console.log(key);  // name, age, isAdmin
	// values for the keys
	console.log(user[key]); // John, 30, true
}
```

or use any of static methods in `Object` to create iterable arrays.

```js
console.log(Object.keys(user)); // [ "name", "age", "isAdmin" ]
console.log(Object.values(user)); // [ "John", 30, true ]
console.log(Object.entries(user)); // [ [ "name", "John" ], [ "age", 30 ], [ "isAdmin", true ] ]
```

### Immutable and mutable

One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”,
whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a
reference” to it.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.

```js
let message = "Hello!";
let phrase = message; // copy the value

let user = {name: "John"};
let admin = user; // copy the reference
```

When objects are compared they are compared their reference, not value or content.

```js
let a = {};
let b = a; // copy the reference
let c = {};

console.log(a === b); // true, both variables reference the same object
console.log(a === c); // false, both variables reference the different objects
```

Object can be merged with `Object.assign`

```js
let manager = {
	name: "Michael",
	company: "Dunder Mifflin",
};
let salesman = {
	name: "Dwight",
};

Object.assign(manager, salesman);
console.log(manager); // { "name": "Dwight", "company": "Dunder Mifflin" }
```

Objects can also be shallow copied.

```js
let newManager = Object.assign({}, manager, salesman);
console.log(newManager); // { "name": "Dwight", "company": "Dunder Mifflin" }
```

#### Spreading and destructuring

Objects can be spread, it wil create copy of the object.

```js
let manager = {
	name: "Michael",
	company: "Dunder Mifflin",
};
let salesman = {
	name: "Dwight",
};

let newManager = {...manager, ...salesman};
console.log(newManager); // { "name": "Dwight", "company": "Dunder Mifflin" }
```

Objects also can be destructed.

```js
let {name, ...rest} = manager;

console.log(name); // "Michael"
console.log(rest); // { "company": "Dunder Mifflin" }

let {company: companyName} = manager; // rename variable
```

#### let vs const

`let` and `const` both used to declare variable. Both cannot redeclare variable. With `let` variable can be reassigned
but with `const` cannot. Think more like `let` allows to change pointer whereas `const` does not.

```js
let a = "Hello";
a = "Hola!";

const b = "Bye";
// b = "Ciao" // Uncaught TypeError: invalid assignment to const 'b'

let manager = {
	name: "Michael",
	company: "Dunder Mifflin",
};
manager.age = 40;
console.log(manager); // { "name": "Michael", "company": "Dunder Mifflin", "age": 40 }
```

### Properties and Methods

We will talk about some important properties and methods but please check
the [list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#constructor) for
others

#### Static methods

* [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
* [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
* [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

#### Instance methods

* [Object.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

## Example:

### 1

Create an empty object `user`.
Add the property `name` with the value `John`.
Add the property `surname` with the value `Smith`.
Change the value of the `name` to `Pete`.
Remove the property `name` from the `object`.

```js
console.log(user); // { surname: "Smith" }
```

### 2

Check for emptiness.

```js
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
```

### 3

Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of
the box.

```js
console.log(volumeOfBox({width: 2, length: 5, height: 1})) // 10

console.log(volumeOfBox({width: 4, length: 2, height: 2})) // 16

console.log(volumeOfBox({width: 2, length: 3, height: 5})) // 30
```

### 4

Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation
of that person to Luke.

| Person      | Relation       |
|-------------|----------------|
| Darth Vader | father         |
| Leia        | sister         |
| Han         | brother in law |
| R2D2        | droid          |

```js
console.log(relationToLuke("Darth Vader")) // "Luke, I am your father."

console.log(relationToLuke("Leia")) // "Luke, I am your sister."

console.log(relationToLuke("Han")) // "Luke, I am your brother in law."
```

### 5

Sum object properties.

```js
console.log(sumValues({})) // 0

console.log(sumValues({John: 100, Ann: 160, Pete: 130})) // 390

console.log(sumValues({manager: 300, salesman: 80, ["it helpdesk"]: 100})) // 480
```

### 6

Create a function `multiplyNumeric(obj)` that multiplies all numeric property values of obj by `2`.

```js
// before the call
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

multiplyNumeric(menu);

// after the call
console.log(menu);
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
```

### 7

Given a number and an object with `min` and `max` properties, return `true` if the number lies within the given range (
inclusive).

```js
console.log(isInRange(4, {min: 0, max: 5})) // true

console.log(isInRange(4, {min: 4, max: 5})) // true

console.log(isInRange(4, {min: 6, max: 10})) // false

console.log(isInRange(5, {min: 5, max: 5})) // true
```

### 8

Merge the price lists and return with higher priority for first one. Return first object __not shallow copy__.

```js
const list1 = {tv: 200, piano: 1000};
const list2 = {vase: 10, tv: 150};
const list3 = {coach: 50, piano: 800};
const mergedList = mergeInPlace(list1, list2, list3);
console.log(mergedList); // { tv: 200, piano: 1000, vase: 10, coach: 50 }
console.log(list1 === mergedList) // true
```

### 9

Merge the price lists and return with higher priority for first one. Return first object __shallow copy__.

```js
const list1 = {tv: 200, piano: 1000};
const list2 = {vase: 10, tv: 150};
const list3 = {coach: 50, piano: 800};
const mergedList = mergeCopy(list1, list2, list3);
console.log(mergedList); // { tv: 200, piano: 1000, vase: 10, coach: 50 }
console.log(list1 === mergedList) // false
```
