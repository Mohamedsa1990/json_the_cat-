// Write a program that prints all the numbers from 1 to 100. However, for multiples of 3, instead of the number, print "Fizz", and for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const MAX = 100;

const printFizzBuzz = function() {
	let aggregatedFizzBuzzString = '';
  for (let number = 1; number <= MAX; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      aggregatedFizzBuzzString += 'FizzBuzz';
    } else if (number % 3 === 0) {
      aggregatedFizzBuzzString += 'Fizz';
    } else if (number % 5 === 0) {
      aggregatedFizzBuzzString += 'Buzz';
    } else {
		aggregatedFizzBuzzString += number;
	}
	aggregatedFizzBuzzString += '\n';
  }
  return aggregatedFizzBuzzString;
};

console.log(printFizzBuzz());