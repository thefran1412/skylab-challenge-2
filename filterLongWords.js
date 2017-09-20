// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords (words, min) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length <= min) {
      words.splice(i, 1)
    }
  }
  return words
}

filterLongWords(['hola', 'joasdasd', 's', 'asd', 'sd', 'sadadasd'], 3)
