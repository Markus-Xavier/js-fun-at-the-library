function createLibrary(name){
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(library, book){
  if(book.genre === 'fantasy'){
    library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction'){
    library.shelves.fiction.push(book);
  } else if (book.genre === 'nonFiction'){
    library.shelves.nonFiction.push(book);
  }
}

function checkoutBook(library, book, genre){
  var libraryShelves = library.shelves
  for(i = 0; i < libraryShelves[genre].length; i++){
    if(book === libraryShelves[genre][i].title){
      libraryShelves[genre].splice(i, 1);
      return `You have now checked out ${book} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};