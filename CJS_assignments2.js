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
