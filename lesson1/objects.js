// Object
// 1. Array
// let arr = [1, 2, 3];
// let arr1 = [true, "hello", null, [1, 2, 3]]
//
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length);
// console.log(arr1);

// 2. Object: Hash-Map
// let sym = Symbol("hello");
// let student = {
// 	name: "Harry",
// 	age: 12,
// 	[sym]: true,
// 	"has dead parents": true,
// 	sym: "Joker",
// 	friends: ["Ron", "Hermione"],
// 	relatives: {
// 		father: "James",
// 		mother: "Lily"
// 	}
// }
//
// console.log(student);
// console.log(student["name"]);
// console.log(student.name)
// console.log(student["has dead parents"]);
// console.log(student[sym])
// console.log(student.sym) // student["sym"]

// let son = {
// 	name: "Bart",
// 	age: 10,
// 	family: {
// 		father: "Homer",
// 		mother: "Marge"
// 	},
// };
//
// son.bestfriend = "Millhouse";
// son.family.sister = "Liza";
//
// console.log(son);
// console.log(son.bestfriend);
// console.log(son.family.father);

// let arr = [10, 20, 30];
// arr.unshift(5);
// arr.shift();
// arr.push(40);
// arr.pop();
//
// console.log(arr);

// Set
// let s = new Set([1, 2, 3, 2, 1]);
// let arr = [...s]
//
// s.add(10)
// s.size
//
// console.log(s);
// console.log(arr);

// Map
// let map = new Map();
// let obj = {
// 	hello: "World"
// };
//
// map.set("name", "Harry");
// map.set(true, false);
// map.set(obj, 123);
//
// console.log(map);
// console.log(map.get("name"));
// console.log(map.get(obj));