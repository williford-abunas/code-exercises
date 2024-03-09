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
