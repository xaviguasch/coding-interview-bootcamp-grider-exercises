// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedArr = []

  str.split('').forEach((letter) => {
    reversedArr.unshift(letter)
  })

  return reversedArr.join('')
}

module.exports = reverse

console.log(reverse('apple'))
