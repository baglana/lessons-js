// // 1. borrow() check if exists, if yes land for 2 weeks
//
// class Library {
//   publications: Publication[];
//
//   constructor(publications: Publication[]) {
//     this.publications = publications;
//   }
//
//   borrow(searchName: string) {
//     const ind = this.publications.findIndex(
//       (publication) => publication.name === searchName
//     );
//
//     if (ind === -1) {
//       console.log("We don't have this book!");
//       return;
//     }
//
//     if (this.publications[ind].returnDate) {
//       console.log(
//         `Somebody already borrowed ${this.publications[ind].name}, will return before ${this.publications[ind].returnDate}`
//       );
//       return;
//     }
//
//     const today = new Date();
//     today.setDate(today.getDate() + 14);
//     this.publications[ind].returnDate = today;
//     console.log(
//       `Successfully borrowed, please return ${this.publications[ind].name} before ${this.publications[ind].returnDate}`
//     );
//   }
// }
//
// class Publication {
//   name: string;
//   year: number;
//   author: string;
//   returnDate: Date | null;
//
//   constructor(name: string, year: number, author: string) {
//     this.name = name;
//     this.year = year;
//     this.author = author;
//     this.returnDate = null;
//   }
// }
//
// class Book extends Publication {
//   constructor(name: string, year: number, author: string) {
//     super(name, year, author);
//   }
// }
//
// class Comics extends Publication {
//   constructor(name: string, year: number, author: string) {
//     super(name, year, author);
//   }
// }
//
// const book1 = new Book("Lord of the rings", 1968, "J. R. R. Tolkien");
// const book2 = new Book(
//   "Harry Potter and Chamber of Secrets",
//   1998,
//   "J. K. Rowling"
// );
//
// const comics1 = new Comics("Sandman", 1989, "Neil Gaiman");
// const comics2 = new Comics("Swamp Thing", 1971, "Allan Moore");
//
// const lib = new Library([book1, book2, comics1, comics2]);
//
// lib.borrow(book2.name);
// lib.borrow(book2.name);
