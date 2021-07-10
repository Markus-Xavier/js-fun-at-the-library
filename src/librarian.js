class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName, isMorning){
    if(isMorning){
      return`Good morning, ${patronName}!`;
    }
    return `Hello, ${patronName}!`;
  }

  findBook(book){
    var libraryShelves = this.library.shelves;
    if(book === libraryShelves.fantasy[0].title){
      libraryShelves.fantasy.splice(0, 1);
      return `Yes, we have ${book}`;
    }
    return `Sorry, we do not have ${book}`;
  }

  calculateLateFee(daysLate){
    return Math.ceil(daysLate * 0.25);
  }
}

module.exports = Librarian;