// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(array) {
	var suma = 0;
	for (var i = 0; i < array.length; i++) {
		suma += array[i];
	}
	return suma;
	
}
function multiply(array) {
	var multi = 1;
	for (var i = 0; i < array.length; i++) {
		multi *= array[i];
	}
	return multi;
}