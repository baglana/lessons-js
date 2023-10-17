// let student = {
//   name: "Harry",
//   books: ["Successors stone", "Chamber of secrets", "Half-blood prince"],
//   23: 15,
// };
//
// console.log(student?.books?.[1]);
// console.log(student?.[23]);
// console.log(student?.["23"]);

// console.log("Hello");

/*
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

function isEmpty(obj) {
  return Object.entries(obj).length === 0; // doesn't check for symbols
}
*/

/*
console.log(volumeOfBox({width: 2, length: 5, height: 1})) // 10

console.log(volumeOfBox({width: 4, length: 2, height: 2})) // 16

console.log(volumeOfBox({width: 2, length: 3, height: 5})) // 30

function volumeOfBox(box) {
  return box.width * box.length * box.height;
}*/

/*
const lukeRelations = {
  "Darth Vader": "father",
  "Leia": "sister",
  "Han": "brother in law",
  "R2D2": "droid"
}

console.log(relationToLuke("Darth Vader")) // "Luke, I am your father."

console.log(relationToLuke("Leia")) // "Luke, I am your sister."

console.log(relationToLuke("Han")) // "Luke, I am your brother in law."


function relationToLuke(person) {
  console.log(`Luke, I am your ${lukeRelations[person]}.`);
}*/

/*
console.log(sumValues({})) // 0

console.log(sumValues({John: 100, Ann: 160, Pete: 130})) // 390

console.log(sumValues({manager: 300, salesman: 80, ["it helpdesk"]: 100})) // 480

function sumValues(obj) {
  for (let key in obj) {

  }
}
*/

/*
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
// };*/

const list1 = {tv: 200, piano: 1000};
const list2 = {vase: 10, tv: 150};
const list3 = {coach: 50, piano: 800};
const mergedList = mergeInPlace(list1, list2, list3);
console.log(mergedList); // { tv: 200, piano: 1000, vase: 10, coach: 50 }
console.log(list1 === mergedList) // true

function mergeInPlace(obj) {

}