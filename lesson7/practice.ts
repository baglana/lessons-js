// class Student {
//   #year: number;
//
//   constructor(year: number) {
//     this.#year = year;
//   }
//
//   canAttendQuidich() {
//     return this.#year > 1;
//   }
// }
//
// const harry = new Student(1);
//
// console.log(harry);
//
// harry.#year = 2;
//
// console.log(harry);

// class Sims {
//   #years: number;
//
//   constructor(years: number) {
//     this.#years = years;
//   }
//
//   isApproachingDeath() {
//     return this.#years >= 100;
//   }
// }

// function multiplyAndBy2(a: number, b: number) {
//     return a * b * 2;
// }

// const splitName = (name: string) => name.split("_").join(" ");
//
// const capitalize = (name: string) => name.toUpperCase();
//
// console.log(capitalize(splitName("leonardo_maldonado"))); // LEONARDO MALDONADO

// function pow(x: number, n: number): number {
//   if (n <= 1) {
//     return x;
//   }
//
//   return x * pow(x, n - 1);
// }
//
// console.log(pow(2, 3)); // 8

// const car = {
//   model: "Tesla",
//   year: 2020,
//   interiors: ["wheel", "engine", "doors"],
// };
//
// const newCar = { ...car };
// newCar.model = "Honda";
// newCar.interiors.push("window");
//
// console.log(car);
// console.log(newCar);

// const arr = [1, 2, 3, 4, 5];
//
// function sumImperative(arr: number[]) {
//   let sum = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//
//   return sum;
// }
//
// sumImperative(arr);
//
// function sumDeclarative(arr: number[]) {
//   return arr.reduce((a, b) => a + b);
// }

// class LivingCreature {
//   name: string;
//
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   getLocation() {
//     return "Middle Earth";
//   }
// }
//
// class Dwarfs extends LivingCreature {
//   constructor(name: string) {
//     super(name);
//   }
// }
//
// class Humans extends LivingCreature {
//   height: number;
//
//   constructor(name: string, height: number) {
//     super(name);
//
//     this.height = height;
//   }
//
//   getLocation() {
//     return "Definately not Mordor";
//   }
// }
//
// class Hobbit extends Humans {
//   constructor(name: string) {
//     super(name, 120);
//   }
//
//   getLocation() {
//     return "Shire rules!";
//   }
// }
//
// const sam = new Hobbit("Sam");
//
// console.log(sam.getLocation());

// const livingCreature = {};
//
// Object.assign(livingCreature, {
//   __proto__: {
//     name: "",
//     getLocation() {
//       return "Middle Earth";
//     },
//   },
// });
//
// const human = Object.create(livingCreature);
//
// Object.assign(human, {
//   __proto__: {
//     height: 0,
//     getLocation() {
//       return "Definately not Mordor";
//     },
//   },
// });
//
// const hobbit = Object.create(human);
//
// Object.assign(hobbit, {
//   __proto__: {
//     height: 120,
//     getLocation() {
//       return "Shire rules!";
//     },
//   },
// });
//
// const sam = Object.create(hobbit);
//
// sam.name = "Sam";
//
// console.log(sam);
// console.log(sam.getLocation());

