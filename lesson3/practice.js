/*
let student = {
  name: "Harry",
  books: ["Successors stone", "Chamber of secrets", "Half-blood prince"],
  23: 15,
};

console.log(student?.books?.[1]);
console.log(student?.[23]);
console.log(student?.["23"]);

console.log("Hello");
*/

/*
// 1.
const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name;
console.log(user);
*/

/*
// 2.
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

function isEmpty(obj) {
    return !Object.entries(obj).length; // doesn't check for symbols
}
*/

/*
// 3.
console.log(volumeOfBox({width: 2, length: 5, height: 1})) // 10

console.log(volumeOfBox({width: 4, length: 2, height: 2})) // 16

console.log(volumeOfBox({width: 2, length: 3, height: 5})) // 30

function volumeOfBox(box) {
    const {width, length, height} = box;
    return width * length * height;
}
*/

/*
// 4.
const lukeRelations = {
    "Darth Vader": "father",
    "Leia": "sister",
    "Han": "brother in law",
    "R2D2": "droid"
}

function relationToLuke(person) {
    return `Luke, I am your ${lukeRelations[person]}.`;
}

console.log(relationToLuke("Darth Vader")) // "Luke, I am your father."

console.log(relationToLuke("Leia")) // "Luke, I am your sister."

console.log(relationToLuke("Han")) // "Luke, I am your brother in law."
*/

/*
// 5.
console.log(sumValues({})) // 0

console.log(sumValues({John: 100, Ann: 160, Pete: 130})) // 390

console.log(sumValues({manager: 300, salesman: 80, ["it helpdesk"]: 100})) // 480

function sumValues(obj) {
    return Object.values(obj).reduce((sum, val) => sum + val);
}
*/

/*
// 6.
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

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] *= 2;
        }
    }
}
*/

/*
// 7.
console.log(isInRange(4, {min: 0, max: 5})) // true

console.log(isInRange(4, {min: 4, max: 5})) // true

console.log(isInRange(4, {min: 6, max: 10})) // false

console.log(isInRange(5, {min: 5, max: 5})) // true

function isInRange(num, obj) {
    return obj.min <= num && num <= obj.max;
}
*/

/*
// 8.
const list1 = {tv: 200, piano: 1000};
const list2 = {vase: 10, tv: 150};
const list3 = {coach: 50, piano: 800};
const mergedList = mergeInPlace(list1, list2, list3);
console.log(mergedList); // { tv: 200, piano: 1000, vase: 10, coach: 50 }
console.log(list1 === mergedList) // true

function mergeInPlace(list1, ...rest) {
    const list1Copy = {...list1};
    return Object.assign(list1, ...rest, list1Copy);
}
*/

/*
// 9.
const list1 = {tv: 200, piano: 1000};
const list2 = {vase: 10, tv: 150};
const list3 = {coach: 50, piano: 800};
const mergedList = mergeCopy(list1, list2, list3);
console.log(mergedList); // { tv: 200, piano: 1000, vase: 10, coach: 50 }
console.log(list1 === mergedList) // false

function mergeCopy(list1, ...rest) {
    return Object.assign({}, ...rest, list1);
}
*/