interface Institute {
  borrow(name: string, user: string): string;

  returnBook(name: string): string;
}

interface Readable {
  getName(): string;

  getBorrowedBy(): string | null;

  setBorrowedBy(user: string | null): void;
}

interface ApprovedBySchool {
  getName(): string;

  getBorrowedBy(): string | null;

  setBorrowedBy(user: string | null): void;

  getSchoolApprove(): void;
}

interface User {
  getName(): string;
}

class School implements Institute {
  #books: ApprovedBySchool[];

  constructor(books: ApprovedBySchool[]) {
    this.#books = books;
  }

  borrow(bookName: string, userName: string) {
    const ind = this.#books.findIndex((book) => book.getName() === bookName);

    if (ind < 0) {
      return `The book: "${bookName}" does exist in library`;
    }

    if (this.#books[ind].getBorrowedBy() !== null) {
      return `The book: ${this.#books[
        ind
      ].getName()} was already borrowed by ${this.#books[ind].getBorrowedBy()}`;
    }

    this.#books[ind].setBorrowedBy(userName);

    return `Successfully borrowed book: ${this.#books[ind].getBorrowedBy()}`;
  }

  returnBook(bookName: string) {
    const ind = this.#books.findIndex((book) => book.getName() === bookName);

    if (ind < 0) {
      return `The book: "${bookName}" does exist in library`;
    }

    if (this.#books[ind].getBorrowedBy() === null) {
      return `The book: ${this.#books[ind].getName()} was already returned`;
    }

    this.#books[ind].setBorrowedBy(null);

    return `Successfully returned book: ${this.#books[ind].getName()}`;
  }
}

class Library implements Institute {
  #books: Readable[];

  constructor(books: Readable[]) {
    this.#books = books;
  }

  borrow(bookName: string, userName: string) {
    const ind = this.#books.findIndex((book) => book.getName() === bookName);

    if (ind < 0) {
      return `The book: "${bookName}" does exist in library`;
    }

    if (this.#books[ind].getBorrowedBy() !== null) {
      return `The book: ${this.#books[
        ind
      ].getName()} was already borrowed by ${this.#books[ind].getBorrowedBy()}`;
    }

    this.#books[ind].setBorrowedBy(userName);

    return `Successfully borrowed book: ${this.#books[ind].getBorrowedBy()}`;
  }

  returnBook(bookName: string) {
    const ind = this.#books.findIndex((book) => book.getName() === bookName);

    if (ind < 0) {
      return `The book: "${bookName}" does exist in library`;
    }

    if (this.#books[ind].getBorrowedBy() === null) {
      return `The book: ${this.#books[ind].getName()} was already returned`;
    }

    this.#books[ind].setBorrowedBy(null);

    return `Successfully returned book: ${this.#books[ind].getName()}`;
  }
}

class Comics implements Readable {
  borrowedBy: string | null;
  readonly #name: string;

  constructor(name: string) {
    this.#name = name;
    this.borrowedBy = null;
  }

  getName() {
    return this.#name;
  }

  getBorrowedBy() {
    return this.borrowedBy;
  }

  setBorrowedBy(user: string | null) {
    this.borrowedBy = user;
  }
}

class Book implements Readable {
  borrowedBy: string | null;
  readonly #author: string;
  readonly #name: string;

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

  setBorrowedBy(user: string | null) {
    this.borrowedBy = user;
  }

  getSchoolApprove() {}
}

class Person implements User {
  readonly #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const lordOfTheRings = new Book("Lord of the Rings", "Tolkien");
const harryPotter = new Book("Harry Potter", "Rowling");
const atomicHabits = new Book("Atomic Habits", "James Clear");

const vendeta = new Comics("V for Vendeta");
const swampThing = new Comics("Swamp Thing");

const rick = new Person("Rick");
const morty = new Person("Morty");

const libAbay = new Library([
  lordOfTheRings,
  harryPotter,
  atomicHabits,
  vendeta,
  swampThing,
]);

const school = new School([lordOfTheRings, harryPotter, atomicHabits]);

console.log(libAbay.borrow(lordOfTheRings.getName(), rick.getName()));
console.log(libAbay.borrow("Black swan", rick.getName()));
console.log(libAbay.borrow(lordOfTheRings.getName(), morty.getName()));

console.log(libAbay.returnBook(lordOfTheRings.getName()));

export default User;
