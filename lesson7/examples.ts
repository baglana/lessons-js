// 1.
/*
class Calculator {
    add (a: number, b: number): number {
        return a + b;
    }
    subtract(a: number, b: number): number {
        return a - b;
    }
    multiply(a: number, b: number): number {
        return a * b;
    }
    divide(a: number, b: number): number {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
}

const calculator = new Calculator()

console.log(calculator.add(10, 5)) // 15

console.log(calculator.subtract(10, 5)) // 5

console.log(calculator.multiply(10, 5)) // 50

console.log(calculator.divide(10, 5)) // 2
*/

// 2.
/*
class Employee {
    firstname: string;
    lastname: string;

    constructor(first: string, last: string) {
        this.firstname = first;
        this.lastname = last;
    }

    get fullname(): string {
        return `${this.firstname} ${this.lastname}`;
    }

    get email(): string {
        return `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
    }
}

let emp1 = new Employee("John", "Smith")
console.log(emp1.fullname) // "John Smith"

let emp2 = new Employee("Mary", "Sue")
console.log(emp2.email) // "mary.sue@company.com"

let emp3 = new Employee("Antony", "Walker")
console.log(emp3.firstname) // "Antony"
console.log(emp3.lastname) // "Walker"
*/

// 3.
/*
class Circle {
    #radius: number;

    constructor(radius: number) {
        this.#radius = radius;
    }

    getArea() {
        return Math.PI * this.#radius * this.#radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.#radius;
    }
}

let circy = new Circle(11)
console.log(circy.getArea()) // 380.132711084365
console.log(circy.getPerimeter()) // 69.115038378975451
*/

// 4.
/*
class User {
    static userCount = 0;
    username: string;

    constructor(name: string) {
        this.username = name;
        User.userCount++;
    }
}

const u1 = new User("johnsmith10")
console.log(User.userCount) // 1
console.log(u1.username) // "johnsmith10"

const u2 = new User("marysue1989")
console.log(User.userCount) // 2
console.log(u2.username) // "marysue1989"

const u3 = new User("milan_rodrick")
console.log(User.userCount) // 3
console.log(u3.username) // "milan_rodrick"
*/
