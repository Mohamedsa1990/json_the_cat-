// The following code prints a battleship grid to the console. Identify improvements that could be made to this code.

const gridData = [
	[null, 0, 0, 1],
	[0, null, null, null],
	[0, null, null, null],
	[1, null, null, null]
];
const SEPARATOR = "|";

const battleship = function (array) {
	// loop each row
	for (let cellIndex = 0; cellIndex < gridData.length; cellIndex++) {
		let cellStringOutput = SEPARATOR;
		// loop each column
		for (let k = 0; k < gridData[cellIndex].length; k++) {
			if (gridData[cellIndex][k] === 0) {
				cellStringOutput += "O";
			} else if (gridData[cellIndex][k] === 1) {
				cellStringOutput += "X";
			} else {
				cellStringOutput += " ";
			}
			cellStringOutput += SEPARATOR;
		}
		return cellStringOutput;
	}
};


console.log(battleship(gridData));


// | |O|O|X|
// |O| | | |
// |O| | | |
// |X| | | |