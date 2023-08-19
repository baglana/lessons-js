// Lib, books, user
// users can borrow books
// user can return book

class School {}

class Library {
  #books: PaperBased[];

  constructor(books: PaperBased[]) {
    this.#books = books;
  }

  borrow(bookName: string, userName: string) {
    const ind = this.#books.findIndex((book) => book.name === bookName);

    if (ind < 0) {
      return `The book: "${bookName}" does exist in library`;
    }

    if (this.#books[ind].borrowedBy !== null) {
      return `The book: ${this.#books[ind].name} was already borrowed by ${
        this.#books[ind].borrowedBy
      }`;
    }

    this.#books[ind].borrowedBy = userName;

    return `Successfully borrowed book: ${this.#books[ind].name}`;
  }

  returnBook(bookName: string) {
    const ind = this.#books.findIndex((book) => book.name === bookName);

    if (ind < 0) {
      return `The book: "${bookName}" does exist in library`;
    }

    if (this.#books[ind].borrowedBy === null) {
      return `The book: ${this.#books[ind].name} was already returned`;
    }

    this.#books[ind].borrowedBy = null;

    return `Successfully returned book: ${this.#books[ind].name}`;
  }
}

class PaperBased {
  borrowedBy: string | null;
  readonly #name: string;

  constructor(name: string) {
    this.#name = name;
    this.borrowedBy = null;
  }

  get name() {
    return this.#name;
  }
}

class Comics extends PaperBased {
  constructor(name: string) {
    super(name);
  }
}

class Book extends PaperBased {
  readonly #author: string;

  constructor(name: string, author: string) {
    super(name);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class User {
  readonly #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

const lordOfTheRings = new Book("Lord of the Rings", "Tolkien");
const harryPotter = new Book("Harry Potter", "Rowling");
const atomicHabits = new Book("Atomic Habits", "James Clear");

const vendeta = new Comics("V for Vendeta");
const swampThing = new Comics("Swamp Thing");

const rick = new User("Rick");
const morty = new User("Morty");

const libAbay = new Library([
  lordOfTheRings,
  harryPotter,
  atomicHabits,
  vendeta,
  swampThing,
]);

console.log(libAbay.borrow(lordOfTheRings.name, rick.name));
console.log(libAbay.borrow("Black swan", rick.name));
console.log(libAbay.borrow(lordOfTheRings.name, morty.name));

console.log(libAbay.returnBook(lordOfTheRings.name));

export default Library;
