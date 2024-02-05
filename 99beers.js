function beerSong() {
  let bottleWord = 'bottles'
  let lyrics1
  let lyrics2

  for (let numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
    if (numberOfBottles === 1) {
      bottleWord = 'bottle'
    }

    lyrics1 = `${numberOfBottles} ${bottleWord} of beer on the wall, ${numberOfBottles} ${bottleWord} of beer.`

    let number2 = numberOfBottles - 1

    if (number2 === 1) {
      bottleWord = 'bottle'
    }
    if (number2 === 0) {
      lyrics2 =
        'Take one down and pass it around, No more bottles of beer on the wall.'
    } else {
      lyrics2 = `Take one down and pass it around, ${number2} ${bottleWord} of beer on the wall.`
    }

    if (numberOfBottles === 0) {
      lyrics1 = 'No more bottles of beer on the wall, no more bottles of beer.'
      lyrics2 =
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
    }

    console.log(lyrics1 + lyrics2)
  }
}

beerSong()
