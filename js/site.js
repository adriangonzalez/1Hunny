// get the values from the page
//starts or controller function
function getValues() {
	//get values
	let startValue = document.getElementById("startValue").value;
	let endValue = document.getElementById("endValue").value;
	let numbers = [];

	//parse into integers
	startValue = parseInt(startValue);
	endValue = parseInt(endValue);

	if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
		//call generateNumbers
		numbers = generateNumbers(startValue, endValue);
	} else {
		alert("You must enter integers");
	}

	//call displayNumbers
	displayNumbers(numbers);
}

// generate numbers from startvalue to endvalue
//logic functions
function generateNumbers(sValue, eValue) {
	let numbers = [];

	for (let index = sValue; index <= eValue; index++) {
		numbers.push(index);
	}

	return numbers;
}

// display the numbers and mark even numbers bold
//display or view function
function displayNumbers(numbers) {
	let templateRows = "";

	for (let index = 0; index < numbers.length; index++) {
		let number = numbers[index];

		let className = (number % 2 == 0) ? "even" : "odd";

		templateRows += `<tr><td class="${className}">${number}</td></tr>`;
	}

	document.getElementById("results").innerHTML = templateRows;
}