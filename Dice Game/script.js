let btn = document.querySelector('button')
let player1Name = prompt('Enter First Player Name:')
let player2Name = prompt('Enter Second Player Name:')

let nameholder1 = document.querySelectorAll('.dice p')[0]
let nameholder2 = document.querySelectorAll('.dice p')[1]

nameholder1.textContent = `${player1Name}`
nameholder2.textContent = `${player2Name}`

btn.addEventListener('click', play)

function play() {
  let randomNUmber1 = Math.floor(Math.random() * 6) + 1

  document
    .querySelector('.img1')
    .setAttribute('src', `./images/dice${randomNUmber1}.png`)

  let randomNUmber2 = Math.floor(Math.random() * 6) + 1

  document
    .querySelector('.img2')
    .setAttribute('src', `./images/dice${randomNUmber2}.png`)

  if (randomNUmber1 > randomNUmber2) {
    document.querySelector('h1').textContent = `🚩 ${player1Name} wins!`
  } else if (randomNUmber1 < randomNUmber2) {
    document.querySelector('h1').textContent = `${player2Name} wins! 🚩`
  } else {
    document.querySelector('h1').textContent = 'Draw!'
  }

  btn.textContent = 'Play Again!'
}
