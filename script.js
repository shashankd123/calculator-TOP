let mainDisplay = document.querySelector("#main-display");
let secondaryDisplay = document.querySelector("#secondary-display");
const keyConatiner = document.querySelector("#key-container");

let val1 = "";
let val2 = "";
let symbol = "";

let display = `${val1}${symbol}${val2}`;

let temp1 = "";
let temp2 = "";
let tempSymbol = "";

let secondary = `${temp1}${tempSymbol}${temp2}`;

keyConatiner.addEventListener("click", (e) => {
	const value = e.target.value;
	
	if (value != undefined) {
		handleValue(value);
	}
});

function handleValue(value) {
	let numbers = "0123456789";
	let symbols = "/%x-+";

	if (symbols.includes(value) && val1 == "" && val2 == "") {
		return;
	}

	if (numbers.includes(value)) {
		if (symbol == "") {
			if (!(val1 == "" && value == "0")) {
				val1 += value;
			}
		} else {
			if (!(val2 == "" && value == "0")) {
				val2 += value;
			}
		}
	} else if (symbols.includes(value)) {
		if (val1 != "" && val2 != "") {
			calculate();
			val2 = "";
		}
		symbol = value;
	} else if (value == "=") {
		calculate();
		symbol = "";
		val2 = "";
	} else if (value == "AC") {
		defaultView();
	} else if (value == "<") {
		if (val2 != "") {
			val2 = val2.slice(0, -1);
		} else if (symbol != "") {
			symbol = "";
		} else if (val1 != "") {
			val1 = val1.slice(0, -1);
		}
	}
	if (value == ".") {
		if (symbol == "") {
			if (val1 == "") {
				val1 = "0.";
			} else if (!val1.includes(".")) {
				val1 += value;
			}
		} else {
			if (val2 == "") {
				val2 = "0.";
			} else if (!val2.includes(".")) {
				val2 += value;
			}
		}
	}
	
	mainDisplay.textContent = `${val1}${symbol}${val2}`;
	secondaryDisplay.textContent = `${temp1}${tempSymbol}${temp2}`;

	mainDisplay.style.fontSize = "40px";
	if(mainDisplay.textContent.length > 9){
		mainDisplay.style.fontSize = "20px";
	}


}

function calculate() {

	updateSecondary();
	
	switch (symbol) {
		case "/":
			val1 = parseFloat(val1) / parseFloat(val2);
			break;
		case "x":
			val1 = parseFloat(val1) * parseFloat(val2);
			break;
		case "-":
			val1 = parseFloat(val1) - parseFloat(val2);
			break;
		case "+":
			val1 = parseFloat(val1) + parseFloat(val2);
			break;
		case "%":
			val1 = (parseFloat(val1) / 100) * parseFloat(val2);
			break;
	}
}

function updateSecondary(){
	temp1 = val1;
	tempSymbol = symbol;
	temp2 = val2;
}

window.addEventListener("load", () => {
	defaultView();
});

function defaultView() {
	mainDisplay.textContent = "";
	secondaryDisplay.textContent = "";
	val1 = "";
	val2 = "";
	symbol = "";
	display = `${val1}${symbol}${val2}`;
	secondary = `${temp1}${tempSymbol}${temp2}`;
	updateSecondary()
}
