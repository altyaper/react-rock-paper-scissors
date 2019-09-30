function getOptionNameByLetter(letter) {
  const options = {
    r: 'Rock',
    p: 'Paper',
    s: 'Scissors'
  }
  return options[letter];
}

function generateRandomOption() {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));
  return ['r', 'p', 's'][randomNumber];
}

module.exports = {
  getOptionNameByLetter,
  generateRandomOption
}
