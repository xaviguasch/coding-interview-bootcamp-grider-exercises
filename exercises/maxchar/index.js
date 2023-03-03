// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}

  let mostRepeated = ''
  let biggestFreq = 0

  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }

    // ALTERNATIVE WAY
    // charMap[char] = charMap[char] + 1 || 1
  }

  for (const char in charMap) {
    if (charMap[char] > biggestFreq) {
      biggestFreq = charMap[char]
      mostRepeated = char
    }
  }

  return mostRepeated
}

console.log(maxChar('abcccccccd'))

module.exports = maxChar
