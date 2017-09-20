// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse (text) {
  var array = text.split('')
  array = array.reverse()
  var output = array.join('')

  return output
}

reverse('hola')
