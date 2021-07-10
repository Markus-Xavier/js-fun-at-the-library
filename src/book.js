function createTitle(currentTitle) {
  return `The ${currentTitle}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name: name, age: age, pronouns: pronouns};
};

function saveReview(review, saveLocation){
  if (saveLocation.indexOf(review)){
    saveLocation.push(review);
  }
}

function calculatePageCount(book){
  return book.length * 20;
}

function writeBook(title, mainCharacter, genre){
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
}

function editBook(book){
  book.pageCount = book.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}