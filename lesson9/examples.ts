// 1.
/*
Create a countdown timer that starts from a specified number of minutes
and counts down to zero.
Use setInterval.
*/

/*
function startCountdown(seconds: number) {
    const intervalID = setInterval(() => {
        if (seconds === 0) {
            clearInterval(intervalID);
        }
        console.log(seconds);
        seconds--;
    }, 1000);
}

startCountdown(10); // 10, 9, 8 etc
*/

// 2.
/*
Create a countdown timer that starts from a specified number of minutes
and counts down to zero.
Use setTimeout.
*/

/*
function startCountdown(seconds: number) {
    console.log(seconds);
    const timeoutID = setTimeout(() => {
        if (seconds) {
            startCountdown(seconds - 1);
        }
        clearTimeout(timeoutID);
    }, 1000)
}

startCountdown(10); // 10, 9, 8 etc
*/

// 3.
/*
Write a utility which prints numbers starting from an initial value
and increment in steps which can be started and stopped by the user,
any number of times
*/

function timer(initValue: number, step: number) {
    return {
        value: initValue,
        step: step,
        intervalID: 0,
        startTimer() {
            this.intervalID = window.setInterval(() => {
                console.log(this.value);
                this.value += step;
            }, 1000);
        },
        stopTimer() {
            clearInterval(this.intervalID);
        }
    };
}

const timerObj = timer(100, 10); // initial value, step
timerObj.startTimer();
setTimeout(() => {
    timerObj.stopTimer(); // logs 100, 110, 120, 130, 140
}, 5000);

// 4. What is the output of the code below:

/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
});

console.log("end");
*/
