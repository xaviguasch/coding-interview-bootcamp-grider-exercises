// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversedStr = n.toString().split('').reverse().join('')
  const reversedNum = parseInt(reversedStr, 10)

  return reversedNum * Math.sign(n)
}

// console.log(reverseInt(-54))
// console.log(reverseInt(80))

module.exports = reverseInt
