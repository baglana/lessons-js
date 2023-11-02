class PaperBased {
  borrowedBy: Person | null;
  #name: string;
  #author: string;

  constructor(name: string, author: string) {
    this.#name = name;
    this.#author = author;
    this.borrowedBy = null;
  }

  get name() {
    return this.#name;
  }
}

class Book extends PaperBased {
  constructor(name: string, author: string) {
    super(name, author);
  }
}

class Comics extends PaperBased {
  #issue: number;

  constructor(name: string, author: string, issue: number) {
    super(name, author);
    this.#issue = issue;
  }
}

class Library {
  #books: PaperBased[];

  constructor(books: PaperBased[]) {
    this.#books = books;
  }

  borrowBook(bookName: string, borrower: Person) {
    for (const book of this.#books) {
      if (book.name === bookName) {
        if (book.borrowedBy) {
          console.log(
            `error: book: ${book.name} was already borrowed by ${book.borrowedBy.name}`
          );
          return;
        }
        book.borrowedBy = borrower;
        console.log(
          `success: book: ${book.name} is borrowed by ${book.borrowedBy.name}`
        );
      }
    }
  }

  returnBook(bookName: string) {
    for (const book of this.#books) {
      if (book.name === bookName) {
        if (!book.borrowedBy) {
          console.log(`error: book: ${book.name} can be borrowed`);
          return;
        }
        book.borrowedBy = null;
        console.log(`success: book: ${book.name} was returned`);
      }
    }
  }
}

class SchoolLibrary {}

class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
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

lib.borrowBook(harryPotter.name, joldas);
lib.borrowBook(harryPotter.name, tomiris);
lib.returnBook(harryPotter.name);
lib.returnBook(harryPotter.name);
