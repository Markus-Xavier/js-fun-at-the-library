function shelfBook(book, shelf){
  if(shelf.length < 3){
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf){
  for(var i = 0; i < shelf.length; i++){
    if(shelf[i].title === book){
      shelf.splice(i,1);
      i = shelf.length;
      break;
    }
  }
}

function listTitles(shelf){
  var allBooks = [];
  for(var i = 0; i < shelf.length; i++){
    allBooks.push(shelf[i].title);
  }
  return allBooks.join(', ');
}

function searchShelf(shelf, book){
  var booksInStock = [];
  for(var i = 0; i < shelf.length; i++){
    booksInStock.push(shelf[i].title)
  }
  if(booksInStock.includes(book)){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};