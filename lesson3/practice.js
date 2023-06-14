let student = {
  name: "Harry",
  books: ["Successors stone", "Chamber of secrets", "Half-blood prince"],
  23: 15,
};

console.log(student?.books?.[1]);
console.log(student?.[23]);
console.log(student?.["23"]);
