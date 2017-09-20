// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq(values) {
	var frequency = {};
	for (var i = 0; i < values.length; i++) {

		if (frequency[values[i]] !== undefined) {
			frequency[values[i]]++;
		}
		else{
			frequency[values[i]] = 1;	
		}
	}
	return frequency;
}