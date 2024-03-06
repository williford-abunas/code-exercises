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

//Part 2

const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital is ${capitalCity}`
}

const thailand = describeCountry('Thailand', 5, 'Bangkok')
const malaysia = describeCountry('Malaysia', 6, 'Kuala Lumpur')
const korea = describeCountry('Korea', 8, 'Seoul')

console.log(thailand, malaysia, korea)

// Fn declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100
}

let popThai = percentageOfWorld1(1441)
let popMal = percentageOfWorld1(6)
let popKor = percentageOfWorld1(7)
console.log(popThai, popMal, popKor)

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100
}

popThai = percentageOfWorld2(5)
popMal = percentageOfWorld2(6)
popKor = percentageOfWorld2(7)
console.log(popThai, popMal, popKor)

const percentageOfWorld3 = (population) => (population / 7900) * 100
console.log(percentageOfWorld3(1441))

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  ).toFixed(1)}% of the world`
}

console.log(describePopulation('Laos', 1441))

const populations = [12, 13, 14, 15]
console.log(populations.length === 4)
const percentages = populations.map((p) => percentageOfWorld1(p))
console.log(percentages)

const neighbors = ['Indonesia', 'Taiwan', 'Singapore']
neighbors.push('Utopia')
console.log(neighbors)
neighbors.pop()
console.log(neighbors)

neighbors.includes('Germany')
  ? console.log('Yes')
  : console.log('Probably not a Central European Country')

neighbors[neighbors.indexOf('Indonesia')] = 'Cambodia'
console.log(neighbors)

const myCountry = {
  country: 'Philippines',
  capital: 'Manila',
  language: 'Filipino',
  population: 10,
  neighbors: ['Indonesia', 'Taiwan', 'Singapore'],
}

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}`
)

myCountry.population += 2
console.log(myCountry)

console.log((myCountry['population'] -= 2))
