// interface Publication {
//   name: string;
//   year: number;
//   author: string;
//   returnDate: Date | null;
// }
//
// interface Library {
//   publications: Publication[];
//   borrow: () => this;
// }
//
// function check(this: Library, searchName: string) {}
//
// function borrow(this: Library, searchName: string) {
//   return this;
// }
//
// function newLib(publications: Publication[]) {}
//
// const publications: Publication[] = [
//   {
//     name: "Lord of the rings",
//     year: 1968,
//     author: "J. R. R. Tolkien",
//     returnDate: null,
//   },
//   {
//     name: "Harry Potter and Chamber of Secrets",
//     year: 1998,
//     author: "J. K. Rowling",
//     returnDate: null,
//   },
//   {
//     name: "Sandman",
//     year: 1989,
//     author: "Neil Gaiman",
//     returnDate: null,
//   },
//   {
//     name: "Swamp Thing",
//     year: 1971,
//     author: "Allan Moore",
//     returnDate: null,
//   },
// ];
//
// newLib(publications).borrow();
