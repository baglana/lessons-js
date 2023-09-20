// function calcAge(num) {
//   return num * 365;
// }
//
// console.log(calcAge(65)); // 23725
//
// console.log(calcAge(0)); // 0
//
// console.log(calcAge(20)); // 7300

// function numArgs(...args) {
//   return args.length;
// }
//
// console.log(numArgs()); // 0
//
// console.log(numArgs("foo")); // 1
//
// console.log(numArgs("foo", "bar")); // 2
//
// console.log(numArgs(true, false)); // 2
//
// console.log(numArgs({})); // 1

// function min(...nums) {
//   if (nums.length === 0) {
//     return null;
//   }
//
//   return Math.min(...nums);
// }
//
// console.log(min()); // null
//
// console.log(min(1, 2, 3)); // 1
//
// console.log(min(3, 2, 1)); // 1
//
// console.log(min(123, 132, 213, 231, 312, 321)); // 123

// function showMessage(name, message = "😀") {
//   return `${name}: ${message}`;
// }
//
// console.log(showMessage("Ann", "Hello!")); // Ann: Hello!
//
// console.log(showMessage("Ann")); // Ann: 😀
//
// console.log(showMessage("Ann", "Goodbye")); // Ann: Goodbye

// function filter(arr, callback) {
//   const res = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
//
// console.log(filter([-3, -2, -1, 0, 1, 2, 3], (num) => num > 0)); // [1, 2, 3]
//
// console.log(
//   filter(
//     ["dog", "wolf", "by", "family", "eaten", "camping"],
//     (str) => str.length <= 5
//   )
// ); // ["by", "dog", "wolf", "eaten"]

// function keyboardMistakes(a) {
//   let result = "";
//   for (let i = 0; i < a.length; i++) {
//     switch (a[i]) {
//       case "4":
//         result += "A";
//         break;
//       case "5":
//         result += "S";
//         break;
//       case "0":
//         result += "O";
//         break;
//       case "1":
//         result += "I";
//         break;
//       default:
//         result += a[i];
//     }
//   }
//   return result;
// }
//
// console.log(keyboardMistakes("MUB45H1R")); // "MUBASHIR"
//
// console.log(keyboardMistakes("DUBL1N")); // "DUBLIN"
//
// console.log(keyboardMistakes("51NG4P0RE")); // "SINGAPORE"

// function sum(x) {
//   if (x === 0) {
//     return 0;
//   }
//   return x + sum(x - 1);
// }
//
// console.log(sum(5)); // 15
// // 1 + 2 + 3 + 4 + 5 = 15
//
// console.log(sum(1)); // 1
//
// console.log(sum(12)); // 78


/*
function min(...args) {
  if (args.length === 0) return null;
  return args.reduce((a, b) => a < b ? a : b);
}

console.log(min()) // null

console.log(min(1, 2, 3)) // 1

console.log(min(3, 2, 1)) // 1

console.log(min(123, 132, 213, 231, 312, 321)) // 123
*/


/*
function showMessage(person, msg = '😀') {
  console.log(`${person}: ${msg}`);
}

console.log(showMessage('Ann', 'Hello!')) // Ann: Hello!

console.log(showMessage('Ann')) // Ann: 😀
*/


/*
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(8, 2, (num1, num2) => num1 + num2)) // 10

console.log(calculate(8, 2, (num1, num2) => num1 - num2)) // 6

console.log(calculate(8, 2, (num1, num2) => num1 * num2)) // 16

console.log(calculate(8, 2, (num1, num2) => num1 / num2)) // 4
*/


/*
function filter(arr, predicate) {
    const result = [];
    for (const item of arr) {
      if (predicate(item)) {
        result.push(item);
      }
    }
    return result;
  }

console.log(filter([-3, -2, -1, 0, 1, 2, 3], (num) => num > 0)); // [1, 2, 3]

console.log(filter(["dog", "wolf", "by", "family", "eaten", "camping"], (str) => str.length <= 5)); // ["by", "dog", "wolf", "eaten"]
*/


/*
function sum(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sum(n - 1);
}

console.log(sum(5)) // 15
// 1 + 2 + 3 + 4 + 5 = 15

console.log(sum(1)) // 1

console.log(sum(12)) // 78*/
