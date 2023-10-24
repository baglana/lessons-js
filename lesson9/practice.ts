// function newPromise(isResolved: boolean) {
//   return new Promise((resolve, reject) => {
//     if (!isResolved) {
//       reject(new Error("promise was rejected"));
//     }
//     resolve("promise was resolved");
//   });
// }
//
// const promise = newPromise(false);
//
// async function someAsyncFunction(promise: Promise<unknown>) {
//   try {
//     const response = await promise
//
//     console.log("response", response)
//   } catch (err) {
//     console.log("err", err)
//   } finally {
//
//   }
// }
//
// someAsyncFunction(promise)

// console.log("start timeout");
//
// const id = setTimeout(() => {
//   console.log("called after 2 sec");
// }, 2000)
//
// clearTimeout(id)
//
// setTimeout(() => {
//   console.log("call after 1 sec");
// }, 1000)
//
// console.log("end timeout");

// let i = 0
// const intervalId = setInterval(() => {
//   i++;
//   console.log(i);
// }, 1000)
//
// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000)