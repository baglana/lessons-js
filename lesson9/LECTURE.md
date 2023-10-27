# Lesson 9: Asynchronous programming

## Definition

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be
able to be responsive to other events while that task runs, rather than having to wait until that task has finished.
Once that task has finished, your program is presented with the result.

Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and
therefore, are asynchronous. For example:

- Making HTTP requests using [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- Accessing a user's camera or microphone
  using [`getUserMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- Asking a user to select files
  using [`showOpenFilePicker()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker)

So even though you may not have to _implement_ your own asynchronous functions very often, you are very likely to need
to use them correctly.

## Synchronous programming

The browser effectively steps through the program one line at a time, in the order we wrote it. At each point, the
browser waits for the line to finish its work before going on to the next line. It has to do this because each line
depends on the work done in the preceding lines.

```ts
function makeGreeting(name: string) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting); // "Hello, my name is Miriam!"
```

Here, `makeGreeting()` is a **synchronous function** because the caller has to wait for the function to finish its work
and return a value before the caller can continue.

### A long-running synchronous function

go to `sync-job` and do

```shell
cd sync-job
npm i
npm run dev
```

You'll find that while our `generatePrimes()` function is running, our program is completely unresponsive: you can't
type anything, click anything, or do anything else.

This is the basic problem with long-running synchronous functions. What we need is a way for our program to:

1. Start a long-running operation by calling a function.
2. Have that function start the operation and return immediately, so that our program can still be responsive to other
   events.
3. Notify us with the result of the operation when it eventually completes.

## Asynchronous programming

Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code
while waiting.

Note that JavaScript is single-threaded. This means that it carries out asynchronous operations via the callback queue
and event loop.

In synchronous JavaScript, each function is performed in turn, waiting for the previous one to complete before executing
the subsequent one. Synchronous code is written from top to bottom.

Some examples of asynchronous programming:

- timers (`setTimeout`, `setInterval` etc)
- events
- file read/write (**nodeJS**)
- ...

```ts
console.log("Start of script");

setTimeout(function () {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");
```

```shell
Start of script
End of script
First timeout completed
```

In this example, the `setTimeout` method executes a function after a specified time. The function passed to `setTimeout`
will be executed asynchronously, which means that the program will continue to execute the next line of code without
waiting for the timeout to complete.

### Callback

A callback function is a function that is passed as an argument to another function, and it is executed after the first
function has finished running. It's commonly used in JavaScript to handle asynchronous operations like fetching data
from a server, waiting for a user's input, or handling events.

```ts
// Declare function
function fetchData(callback: (data: unknown) => void) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 3000);
}

// Execute function with a callback
fetchData(function (data: unknown) {
  console.log(data);
});

console.log("Data is being fetched...");
```

In this example:

- We have a function called fetchData that uses the setTimeout method to simulate an asynchronous operation. The
  function takes a callback as an argument.
- The callback function is then passed the data retrieved by the function after the timeout has been completed.

```shell
Data is being fetched...
{name: "John", age: 30}
```

#### Callback Hell

_Callback Hell_ refers to a situation where you have multiple nested callbacks, making the code hard to read and
maintain.

```ts
setTimeout(() => {
  console.log("One Second");
  setTimeout(() => {
    console.log("Two Seconds");
    setTimeout(() => {
      console.log("Three Seconds");
      setTimeout(() => {
        console.log("Four Seconds");
        setTimeout(() => {
          console.log("Five Seconds");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

To avoid callback hell, you can use a more modern way of handling async operations known as promises. Promises provide a
more elegant way of handling the asynchronous flow of a program compared to callback functions.

### Promise

A promise represents a way of handling asynchronous operations in a more organized way. It serves the same purpose as a
callback but offers many additional capabilities and a more readable syntax.

To create a promise, you'll create a new instance of the `Promise` object by calling the `Promise` constructor.

```ts
let promise = new Promise(function (resolve, reject) {});
```

The function passed to `new Promise` is called the executor. When `new Promise` is created, the executor runs
automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above:
the executor is the “singer”.

Its arguments `resolve` and `reject` are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- `resolve(value)` — if the job is finished successfully, with result `value`.
- `reject(error)` — if an error has occurred, `error` is the error object.

![diagram](promise-resolve-reject.svg)

```ts
function newPromise(isRejected: boolean) {
  return new Promise((resolve, reject) => {
    if (isRejected) {
      reject(new Error("promise was rejected"));
    }
    resolve("promise was resolved");
  });
}

const promise = newPromise(true);
```

#### Consumers then, catch and finally

##### then

```ts
promise.then(
  function (result) {
    /* handle a successful result */
  },
  function (error) {
    /* handle an error */
  }
);
```

```ts
const promise = new Promise(function (resolve) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);
```

in the case of a rejection:

```ts
const promise = new Promise(function (_, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  (result) => console.log(result), // doesn't run
  (error) => console.log(error) // shows "Error: Whoops!" after 1 second
);
```

If we’re interested only in successful completions, then we can provide only one function argument to `.then`:

```ts
let promise = new Promise((resolve) => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(console.log); // shows "done!" after 1 second
```

##### catch

If we’re interested only in errors, then we can use `null` as the first argument: `.then(null, errorHandlingFunction)`.
Or we can use `.catch(errorHandlingFunction)`, which is exactly the same:

```ts
let promise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(console.log); // shows "Error: Whoops!" after 1 second
```

##### finally

Think of it as a party finisher. No matter was a party good or bad, how many friends were in it, we still need (or at
least should) do a cleanup after it.

```ts
new Promise((resolve) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => alert("Promise ready")) // triggers first
  .then((result) => alert(result)); // <-- .then shows "value"
```

## Examples:

### 1

Create a countdown timer that starts from a specified number of minutes and counts down to zero. Use `setInterval`.

```ts
startCountdown(10); // 10, 9, 8 etc
```

### 2

Create a countdown timer that starts from a specified number of minutes and counts down to zero. Use `setTimeout`.

```ts
startCountdown(10); // 10, 9, 8 etc
```

### 3

Write a utility which prints numbers starting from an initial value and increment in steps which can be started and
stopped by the user, any number of times

```ts
const timerObj = timer(100, 10); // initial value, step
timerObj.startTimer();
setTimeout(() => {
  timerObj.stopTimer(); // logs 100, 110, 120, 130, 140, 150
}, 5000);
```

### 4

What is the output of the code below:

```ts
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log("end");
```

### 5

What is the output of the code below:

```ts
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
```

### 6

What is the output of the code below:

```ts
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
```

### 7

What is the output of the code below:

```ts
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then((res) => {
  console.log(2);
});

console.log("end");
```

### 8

What is the output of the code below:

```ts
console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");
```

### 9

What is the output of the code below:

```ts
console.log("start");

setTimeout(() => {
  console.log("setTimeout");
});

Promise.resolve().then(() => {
  console.log("resolve");
});

console.log("end");
```

### 10

What is the output of the code below:

```ts
const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("fail");
  resolve("success2");
});

promise
  .then((res) => {
    console.log("then: ", res);
  })
  .catch((err) => {
    console.log("catch: ", err);
  });
```

### 11

What is the output of the code below:

```ts
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
```

### 12

What is the output of the code below:

```ts
const promise = new Promise(function (resolve) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
```

_Reference_: [link1](https://levelup.gitconnected.com/vimp-javascript-promise-implementation-challenges-5a4f120d8606), [link2](https://levelup.gitconnected.com/vimp-javascript-promise-implementation-challenges-5a4f120d8606)
