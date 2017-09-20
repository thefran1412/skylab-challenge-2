// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(words) {
	var longest = 0;
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > longest) {
			longest = words[i].length;
		}
	}
	return longest;
}