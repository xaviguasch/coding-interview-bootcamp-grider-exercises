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
// console.log(reverse('apple'))

module.exports = reverse

const reverse2 = (str) => {
  return str.split('').reverse().join('')
}

// console.log(reverse2('hello'))

const reverse3 = (str) => {
  const reversedArr = []
  const strToArr = str.split('')

  for (let i = strToArr.length - 1; i >= 0; i--) {
    reversedArr.push(strToArr[i])
  }

  return reversedArr.join('')
}

// console.log(reverse3('hello'))

const reverse4 = (str) => {
  let reversedStr = ''

  for (const char of str) {
    reversedStr = char + reversedStr
  }

  return reversedStr
}

// console.log(reverse4('hello'))

const reverse5 = (str) => {
  return str.split('').reduce((acc, currV) => {
    return currV + acc
  }, '')
}

console.log(reverse5('hello'))
