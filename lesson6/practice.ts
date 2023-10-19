// function hello(name: string) {
//   if (name === "Rone") {
//     return false;
//   }
//   return `Hello ${name}`;
// }
//
// const wizard = "Harry";
// console.log(hello(wizard));
//
// const num = 123;
// console.log(hello(num));
//
// let s = "Harry";
// s = "Hermione";

// 1. boolean
// 2. string
// 3. number
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt
// 8. void
// 9. enum
// 10. any
// 11. unknown

// type Fn = (name: string) => void;
//
// const fn: Fn = (name: string) => {
//   console.log(name);
// };

// type Rights = "Guest" | "User" | "Admin" | "SuperAdmin";

// enum Rights {
//   Guest = "Guest",
//   User = "User",
//   Admin = "Admin",
//   SuperAdmin = "SuperAdmin",
// }

// const talgat: Rights = "Admin";

// type Arr = (number | string)[];
//
// let arr: Arr = [1, 2, 3];
// arr = ["a", "b", "c"];
// arr = [true, false, true];

// type FamilyMember = {
//   name: string;
//   familyName: string;
//   grade: number;
// };
//
// type Wizard = {
//   name: string;
//   school: string;
// };
//
// type Robot = {
//   name: number;
//   type: string;
// };
//
// type Thing = FamilyMember & Wizard;
//
// const gandalf: Thing = {
//   name: "Gandalf",
//   familyName: "Gray",
//   grade: NaN,
//   school: "",
// };
//
// const son: FamilyMember = {
//   name: "Bart",
//   familyName: "Simpson",
//   grade: 4,
// };
//
// const student: Wizard = {
//   name: "Ron",
//   school: "Hogwards",
// };
//
// const drone: Robot = {
//   name: 234,
//   type: "Working robot",
// };
//
// type ObjectWithName = {
//   name: unknown;
// };
//
// function logName(person: ObjectWithName) {
//   console.log(person.name);
//
//   return person.name;
// }
//
// logName(son);
// logName(student);
// logName(drone);

// const wizard = {
//   name: "Harry",
//   familyName: "Potter",
//   getFullName() {
//     return this.name + this.familyName;
//   },
// };

// interface IWizard {
//   name: string;
//   school: string;
// }
//
// interface IFamilyMember {
//   name: string;
//   familyName: string;
//   grade: number;
// }
//
// const gandalf: IFamilyMember | IWizard = {
//   name: "Gandalf",
//   // familyName: "Gray",
//   grade: NaN,
//   // school: "",
// };
//
// const student: IWizard = {
//   name: "Ron",
//   school: "Hogwards",
// };

// function concat<T>(a: T, b: T) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   }
//   return "";
// }
//
// console.log(concat(2, 3)); // 5
// console.log(concat("a", "b")); // ab

// type Wizard = {
//   readonly name: string;
//   school?: string;
// };
//
// const gandalf = {
//   name: "Gandalf",
// };
//
// function getAndSetName(person: Wizard) {
//   console.log(person.name);
//   person.name = "Sauron";
// }
//
// getAndSetName(gandalf);

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c = 0) {
  return a + b + c;
}
