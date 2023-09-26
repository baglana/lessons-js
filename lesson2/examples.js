/*
// 1.
/!*
* Create an array of words from a string in which
* words are separated with ", " substrings
* *!/

console.log(makeArr("Apple, Banana, Orange")); // ["Apple", "Banana", "Orange"]

function makeArr(string) {
  return string.split(', ');
}
*/

/*
// 2.
/!*
* Concatenate array strings into one string
* *!/

console.log(makeStr(["Apple", "Banana", "Orange"])); // "Apple, Banana, Orange"

function makeStr(arr) {
  return arr.join(', ');
}
*/

/*
// 3.
/!*
* Return sum of all array items
* *!/

console.log(getSumOfItems([2, 7, 4])); // 13

console.log(getSumOfItems([45, 3, 0])); // 48

console.log(getSumOfItems([-2, 84, 23])); // 105

function getSumOfItems(items) {
  return items.reduce((sum, item) => sum + item);
}
*/

/*
// 4.
/!*
* Return an array with elements in reverse order
* *!/

console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]

console.log(reverse([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]

console.log(reverse([])); // []

// in place
function reverse(arr) {
  const n = arr.length - 1;
  for (let i = 0; i < n / 2; i++) {
    [arr[i], arr[n - i]] = [arr[n - i], arr[i]];
  }
  return arr;
}

function reverse(arr) {
  return arr.reverse();
}

// // shallow copy
// function reverse(arr) {
//   const reversedArr = [];
//   while (arr.length) {
//     reversedArr.push(arr.pop());
//   }
//   return reversedArr;
// }
*/

/*
// 5.
/!*
* Increment each array element in place
* *!/

console.log(incrementItems([0, 1, 2, 3])); // [1, 2, 3, 4]

console.log(incrementItems([2, 4, 6, 8])); // [3, 5, 7, 9]

let arr = [-1, -2, -3, -4];
const incremented = incrementItems(arr);
console.log(incremented); // [0, -1, -2, -3]
console.log(arr); // [0, -1, -2, -3]

function incrementItems(items) {
  for (let i = 0; i < items.length; i++) {
    items[i]++;
  }
  return items;
}
*/

/*
// 6.
/!*
* Return a shallow copy of a given array with each item incremented
* *!/

console.log(incrementItems([0, 1, 2, 3])); // [1, 2, 3, 4]

console.log(incrementItems([2, 4, 6, 8])); // [3, 5, 7, 9]

let arr = [-1, -2, -3, -4];
const incremented = incrementItems(arr);
console.log(incremented); // [0, -1, -2, -3]
console.log(arr); // [-1, -2, -3, -4]

function incrementItems(items) {
  return items.map(item => item + 1);
  // return Array.from(items, item => item + 1);
}
*/

/*
// 7.
/!*
* Concatenate two arrays
* *!/

console.log(concat([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]

console.log(concat([7, 8], [10, 9, 1, 1, 2])); // [7, 8, 10, 9, 1, 1, 2]

console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); // [4, 5, 1, 3, 3, 3, 3, 3]

function concat(arr1, arr2) {
  return [...arr1, ...arr2];
  // return arr1.concat(arr2);
}
*/

/*
// 8.
/!*
* Return the difference between two biggest numbers in array
* *!/

console.log(ageDifference([29, 1, 6, 8, 28])); // 1

console.log(ageDifference([43, 86, 49, 86])); // 0

console.log(ageDifference([2, 4, 6, 32, 27])); // 5

function ageDifference(ages) {
  ages.sort((a, b) => b - a);
  return ages[0] - ages[1];
}

// function ageDifference(arr) {
//   let maxNum = 0;
//   let maxNum2 = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     if (maxNum < arr[i]) {
//       maxNum2 = maxNum;
//       maxNum = arr[i];
//     } else if (maxNum2 < arr[i]) {
//       maxNum2 = arr[i];
//     }
//   }
//   return maxNum - maxNum2;
// }

// function ageDifference(ages) {
//   let maxAge1Ind = -1;
//   const maxAge1 = ages.reduce((maxAge, age, ageInd) => {
//     if (age > maxAge) {
//       maxAge1Ind = ageInd;
//       return age;
//     } else {
//       return maxAge;
//     }
//   }, 0);
//   const maxAge2 = ages.reduce((maxAge, age, ageInd) => {
//     if (age > maxAge && ageInd !== maxAge1Ind) {
//       return age;
//     } else {
//       return maxAge;
//     }
//   }, 0);
//   return maxAge1 - maxAge2;
// }
*/

/*
// 9.
/!*
* Return new array containing only items with type 'number'
* *!/

console.log(filterArray([1, 2, 3, "a", "b", 4])); // [1, 2, 3, 4]

console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); // [0, 1729]

console.log(filterArray(["Nothing", "here"])); // []

function filterArray(items) {
  return items.filter(item => typeof item === 'number');
}
*/
