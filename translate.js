// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(message) {
	var output = "";
	for (var i = 0; i < message.length; i++) {
		if("aeiou ".indexOf(message[i]) === -1){
			output += message[i] + "o";
		}
		output += message[i];
	}
	return output;
}