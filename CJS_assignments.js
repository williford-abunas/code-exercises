const country = 'Philippines'
const continent = 'Asia'
let population = 1000000
const isIsland = true
let language
console.log(typeof country, typeof population, typeof isIsland, typeof language)

language = 'Filipino'

let half = population / 2
console.log(half)

console.log(++population)

let avgPop = 33000000

console.log(population > 6000000)
console.log(population < avgPop)

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description)

if (population > avgPop) {
  console.log(`${country}'s population is above average`)
} else {
  console.log(`${country}'s population is ${avgPop - population} below average`)
}

let numNeighbors = prompt('How many neighbour countries does your contry have?')

if (Number(numNeighbors) === 1) {
  console.log('Only 1 border!')
} else if (Number(numNeighbors) > 1) {
  console.log('More than 1 borders!')
} else {
  console.log('No borders')
}

if (language === 'English' && population < 50000000 && isIsland === false) {
  console.log(`You should live in ${country}`)
} else {
  console.log(`${country} does not meet criteria.`)
}

switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers')
    break
  case 'Spanish':
    console.log('2nd place in number of native speakers')
    break
  case 'English':
    console.log('3rd place')
    break
  case 'Hindi':
    console.log('Number 4')
    break
  case 'Arabic':
    console.log('5th')
    break
  default:
    console.log('Good language too')
}

console.log(
  `${country}'s population is ${
    population > avgPop ? 'above' : 'below'
  } average`
)
