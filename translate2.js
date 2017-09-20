// Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

function translate (text) {
  var dictionary = {merry: 'god', christmas: 'jul', and: 'och', happy: 'gott', new: 'nytt', year: 'år'}
  var words = text.split(' ')
  var output = ''
  for (var i = 0; i < words.length; i++) {
    if (dictionary[words[i]] !== undefined) {
      output += dictionary[words[i]] + ' '
    } else {
      output += words[i] + ' '
    }
  }
  return output.trim()
}

translate('merry christmas and a happy new year')
