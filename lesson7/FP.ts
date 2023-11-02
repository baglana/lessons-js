interface Publishing {
  getName(): string;

  getBorrowedBy(): Human | null;

  setBorrowedBy(borrower: Human | null): void;
}

interface Magazine extends Publishing {
  getIssue(): number;
}

class Book implements Publishing {
  borrowedBy: Human | null;
  #name: string;
  #author: string;

  constructor(name: string, author: string) {
    this.#name = name;
    this.#author = author;
    this.borrowedBy = null;
  }

  getName() {
    return this.#name;
  }

  getBorrowedBy() {
    return this.borrowedBy;
  }

  setBorrowedBy(borrower: Human | null) {
    this.borrowedBy = borrower;
  }
}

class Comics implements Magazine {
  borrowedBy: Human | null;
  #name: string;
  #author: string;
  #issue: number;

  constructor(name: string, author: string, issue: number) {
    this.#name = name;
    this.#author = author;
    this.borrowedBy = null;
    this.#issue = issue;
  }

  getName() {
    return this.#name;
  }

  getBorrowedBy() {
    return this.borrowedBy;
  }

  setBorrowedBy(borrower: Human | null) {
    this.borrowedBy = borrower;
  }

  getIssue() {
    return this.#issue;
  }
}

interface Institute {
  borrowBook(bookName: string, borrower: Human): void;

  returnBook(bookName: string): void;
}

class Library implements Institute {
  #books: Publishing[];

  constructor(books: Publishing[]) {
    this.#books = books;
  }

  borrowBook(bookName: string, borrower: Human) {
    for (const book of this.#books) {
      if (book.getName() === bookName) {
        if (book.getBorrowedBy()) {
          console.log(
            `error: book: ${book.getName()} was already borrowed by ${book
              .getBorrowedBy()
              ?.getName()}`
          );
          return;
        }
        book.setBorrowedBy(borrower);
        console.log(
          `success: book: ${book.getName()} is borrowed by ${book
            .getBorrowedBy()
            ?.getName()}`
        );
      }
    }
  }

  returnBook(bookName: string) {
    for (const book of this.#books) {
      if (book.getName() === bookName) {
        if (!book.getBorrowedBy()) {
          console.log(`error: book: ${book.getName()} can be borrowed`);
          return;
        }
        book.setBorrowedBy(null);
        console.log(`success: book: ${book.getName()} was returned`);
      }
    }
  }
}

class Schoolibrary implements Institute {
  #books: Magazine[];

  constructor(books: Magazine[]) {
    this.#books = books;
  }

  borrowBook(bookName: string, borrower: Human) {
    for (const book of this.#books) {
      if (book.getName() === bookName) {
        if (book.getBorrowedBy()) {
          console.log(
            `error: book: ${book.getName()} was already borrowed by ${book
              .getBorrowedBy()
              ?.getName()}`
          );
          return;
        }
        book.setBorrowedBy(borrower);
        console.log(
          `success: book: ${book.getName()} is borrowed by ${book
            .getBorrowedBy()
            ?.getName()}`
        );
      }
    }
  }

  returnBook(bookName: string) {
    for (const book of this.#books) {
      if (book.getName() === bookName) {
        if (!book.getBorrowedBy()) {
          console.log(`error: book: ${book.getName()} can be borrowed`);
          return;
        }
        book.setBorrowedBy(null);
        console.log(`success: book: ${book.getName()} was returned`);
      }
    }
  }
}

interface Human {
  getName(): string;
}

class Person implements Human {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const harryPotter = new Book(
  "Harry Potter and Chamber of Secrtes",
  "J. K. Rowling"
);
const lordOfTheRings = new Book("Lord of the Rings", "Tolkien");
const abaiJoly = new Book("Abai Joly", "M. Auezov");
const vendeta = new Comics("V for Vendeta", "Alan Moore", 2);
const spiderMan = new Comics("Spider Man", "Stan Lee", 20);

const lib = new Library([
  harryPotter,
  lordOfTheRings,
  abaiJoly,
  vendeta,
  spiderMan,
]);

const joldas = new Person("Joldas");
const tomiris = new Person("Tomiris");

lib.borrowBook(harryPotter.getName(), joldas);
lib.borrowBook(harryPotter.getName(), tomiris);
lib.returnBook(harryPotter.getName());
lib.returnBook(harryPotter.getName());

export default {};
