const { books } = require('../data/library');

// Requisito 1
const searchGenres = ['Fantasia', 'Ficção Científica'];
const fantasyOrScienceFiction = () => books.filter((book) => searchGenres.includes(book.genre));

const oldBooksOrdered = (year) => books
  .filter((book) => (year - book.releaseYear) >= 60)
  .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);

// const expectedResult = ['Fundação', 'Duna'];
const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);
console.log(booksByAuthorBirthYear(1920));

const fantasyOrScienceFictionAuthors = () => fantasyOrScienceFiction()
  .map((book) => book.author.name)
  .sort();

const oldBooks = (year) => books
  .filter((book) => (year - book.releaseYear) >= 60)
  .map((book) => book.name);

// const expectedResult = 'O Senhor dos Aneis';
const authorWith3DotsOnName = () => books
  .filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  ))[0].name;

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
