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

//Sets
const allKeywords = []

// for (const book of books) {
//   book.keywords.forEach((key) => allKeywords.push(key))
// }

for (const book of books) {
  allKeywords.push(...book.keywords)
}

console.log(allKeywords)

const uniqueKeyWords = new Set(allKeywords)

console.log(uniqueKeyWords)

uniqueKeyWords.add('coding').add('science')

console.log(uniqueKeyWords)

uniqueKeyWords.delete('business')
console.log(uniqueKeyWords)

const uniqueKeyWordsArr = [...uniqueKeyWords]

console.log(uniqueKeyWordsArr)

uniqueKeyWords.clear()

const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
])

console.log(bookMap)

bookMap.set('pages', 464)
console.log(bookMap)

const title1 = bookMap.get('title')
const author1 = bookMap.get('author')
console.log(`${title1} by ${author1}`)

const bookMapSize = bookMap.size
console.log(bookMapSize)

if (bookMap.has('author')) console.log('The author of the book is known.')

console.log(books)
const firstBookMap = new Map(Object.entries(books[0]))
console.log(firstBookMap)

for (const [key, value] of firstBookMap) {
  typeof value === 'number'
    ? console.log(`This ${key} has number value.`)
    : console.log(`This ${key}'s value is not a number.`)
}

//Working with Strings
console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[8]
)

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing'
console.log(quote.indexOf('chess'))

console.log(quote.slice([quote.indexOf('boxing')], 'boxing'.length))
console.log(quote.slice(quote.lastIndexOf(' ') + 1))

const isContributor = function (author) {
  console.log(author.includes('(Contributor)'))
}

isContributor('Julie Sussman (Contributor)')
isContributor('Robert Sedgewick')

const normalizeAuthorName = function (author) {
  author = author.trim().toLowerCase()
  let firstName = author.slice(0, author.indexOf(' '))

  let lastName
  if (author.indexOf(' ') === author.lastIndexOf(' ')) {
    lastName = author.slice(author.indexOf(' ') + 1, author.length)
  } else {
    lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '))
  }

  let first = firstName[0].toUpperCase() + firstName.slice(1)
  let last = lastName[0].toUpperCase() + lastName.slice(1)
  const fullName = first + ' ' + last
  console.log(fullName)
}
normalizeAuthorName('  JuliE sussMan (Contributor)')

const secondTitle = books[1].title
const newBookTitle = secondTitle.replace('Programs', 'Software')
console.log(newBookTitle)

const logBookTheme = function (title) {
  title = title.trim().toLowerCase()
  if (title.split(' ')[0] === 'computer') {
    console.log('This book is about computers.')
  } else if (title.includes('algorithms') && title.includes('structures')) {
    console.log('This book is about algorithms and data structures')
  } else if (
    title.endsWith('system') ||
    (title.endsWith('systems') && !title.includes('operating'))
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    )
  }
}
console.log(books[4].title)
logBookTheme(books[4].title)

const logBookCategories = function (categories) {
  categories.split(';').forEach((c) => console.log(c))
}

const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics'
logBookCategories(bookCategories)

const getKeywordsAsString = function (books) {
  let keywordArray = []
  for (const book of books) {
    book.keywords.forEach((k) => keywordArray.push(k))
  }

  const unique = [...new Set(keywordArray)].join(';')
  console.log(unique)
}

getKeywordsAsString(books)

const logBookChapters = function (chapters) {
  for (const entry of chapters) {
    let [title, page] = entry
    console.log(title.padEnd(20, '_') + ' ' + page)
  }
}

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
]
logBookChapters(bookChapters)
