// function getFullName(person) {
// 	let fullName = `${person.name} ${person.nickName}`;
// 	return fullName;
// }
//
// let user = {
// 	name: "Gandalf",
// 	nickName: "The Gray",
// 	age: 1000
// }
//
// console.log(getFullName(user));

// function isDivisible(a, b) {
// 	if (b === 0) {
// 		return false;
// 	}
// 	return a % b === 0;
// }
//
// isDivisible(4, 2); // true
// isDivisible(5, 2); // false

// function sum(num, func) {
// 	return num + func();
// }

// function getTwo() {
// 	return 2;
// }
//
// function getThree() {
// 	return 3;
// }

// sum(5, getTwo);
// sum(7, getThree);

// function sum(num, a) {
// 	return num + a(num);
// }
//
// function getNumber(firstNum) {
// 	if (firstNum === 0) {
// 		return 10
// 	} else {
// 		return 1
// 	}
// }
//
// console.log(sum(0, getNumber)); // 10
// console.log(sum(3, getNumber)); // 4
// console.log(sum(7, getNumber)); // 8

function getSumToNumber(a) {
	return function (b) {
		return a + b;
	}
}

let sumTwo = getSumToNumber(2)

console.log(sumTwo(5)) // 7
console.log(sumTwo(9)) // 11

let sumFive = getSumToNumber(5)

console.log(sumFive(5)) // 10
console.log(sumFive(9)) // 14