import { books } from './booksData.js'

//Data structures
const [firstBook, secondBook] = books
console.log(firstBook, secondBook)
const [, , thirdBook] = books
console.log(thirdBook)

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
]

// const [[, rating], [, ratingsCount]] = ratings
// console.log(rating, ratingsCount)

const ratingStars = [63405, 1808]

const [fiveStarRatings, oneStar, threeStar = 0] = ratingStars
console.log(fiveStarRatings, oneStar, threeStar)

const { title, author, ISBN } = books[0]
console.log(title, author, ISBN)

const { keywords: tags } = books[0]

console.log(tags)
const { language, programmingLanguage = 'unknown' } = books[6]
console.log(language, programmingLanguage)
let bookTitle = 'unknown'
let bookAuthor = 'unknown'

;({ title: bookTitle, author: bookAuthor } = books[0])

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0]
console.log(bookRating)

const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`)
}
printBookInfo(books[0])

const bookAuthors = [...books[0].author, ...books[1].author]
console.log(bookAuthors)

const spellWord = function (word) {
  console.log(...word)
}

spellWord('Javascript')

const [mainKeyWord, ...rest] = books[0].keywords
console.log(mainKeyWord, rest)

const { publisher: bookPublisher, ...restOftheBook } = books[1]
console.log(bookPublisher, restOftheBook)

const printBookAuthorsCOunt = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors.`)
}
printBookAuthorsCOunt('Algorithms', 'Robert Sedgewick', 'Kevin Wayne')

const hasExamplesInJava = function (book) {
  return book.programmingLanguage === 'Java' || 'no data available'
}

console.log(hasExamplesInJava(books[0]))

books.forEach(
  (book) =>
    book.onlineContent && console.log(`${book.title} provides online content`)
)

books.forEach(
  (book) => book.onlineContent ?? console.log(`${book.title} provides no data`)
)

books.forEach((book) => (book.edition ||= 1))

books.forEach(
  (book) => (book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2))
)

let pageSum = 0

for (const book of books) {
  pageSum += book.pages
}

console.log(pageSum)

const allAuthors = []

// for (const book of books) {
//   typeof book.author === 'string'
//     ? allAuthors.push(book.author)
//     : allAuthors.push(...book.author)
// }

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author)
  } else {
    for (const author of book.author) {
      allAuthors.push(author)
    }
  }
}

console.log(allAuthors)

for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}: ${author}`)
}

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
]

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
}
console.log(newBook)

const pages = 880

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
}

console.log(newBook2)

const getFirstKeyWord = function (book) {
  return book.keywords?.[0]
}

console.log(getFirstKeyWord(newBook2))

const entries = []
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key])
}
console.log(entries)

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value)
}

console.log(entries)

const entries2 = Object.entries(books[0].thirdParty.goodreads)
console.log(entries2)
