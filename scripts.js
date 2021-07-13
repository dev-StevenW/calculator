//Selecting all buttons

const display = document.getElementById("display");
const clear = document.getElementById("clear");
const clearAll = document.getElementById("clearAll");
const posNeg = document.getElementById("posNeg");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const numberButtons = document.querySelectorAll(".numButton");

let currentNumber;
let previousNumber;
let currentOperand;
let solved = false;
let solution = "";

/*  User can see a display showing the current number entered or the result of the last operation.

 User can see an entry pad containing buttons for the digits 0-9, operations - '+', '-', '/', and '=', a 'C' button (for clear), and an 'AC' button (for clear all).
 
 User can enter numbers as sequences up to 8 digits long by clicking on digits in the entry pad. Entry of any digits more than 8 will be ignored.

 User can click on an operation button to display the result of that operation on:

the result of the preceding operation and the last number entered OR

the last two numbers entered OR

the last number entered

 User can click the 'C' button to clear the last number or the last operation. If the users last entry was an operation the display will be updated to the value that preceded it.

 User can click the 'AC' button to clear all internal work areas and to set the display to 0.

 User can see 'ERR' displayed if any operation would exceed the 8 digit maximum. */
function displayNum(num) {
  if (!solved) {
    display.innerText += num.target.innerText;
  } else {
    display.innerText = "";
    display.innerText += num.target.innerText;
    solved = false;
  }
}

function switchSign() {
  if (display.innerText < 0) {
    display.innerText =
      parseInt(display.innerText) - parseInt(display.innerText) * 2;
  } else {
    display.innerText =
      parseInt(display.innerText) - parseInt(display.innerText) * 2;
  }
}

function reset() {
  display.innerText = "";
}

function resetAll() {
  display.innerText = "";
  currentNumber = 0;
  currentOperand = undefined;
  solved = false;
}

function addition() {
  if (currentOperand !== "+" || solved === true) {
    currentOperand = "+";
    currentNumber = parseInt(display.innerText);
    display.innerText = "";
  } else {
    currentOperand = "+";
    solve();
  }
}

function subtraction() {
  if (currentOperand !== "-" || solved === true) {
    currentNumber = parseInt(display.innerText);
    display.innerText = "";
    currentOperand = "-";
  } else {
    currentOperand = "-";
    solve();
  }
}

function multiplication() {
  if (currentOperand !== "*" || solved === true) {
    currentNumber = parseInt(display.innerText);
    display.innerText = "";
    currentOperand = "*";
  } else {
    currentOperand = "*";
    solve();
  }
}

function division() {
  if (currentOperand !== "/" || solved === true) {
    currentNumber = parseInt(display.innerText);
    display.innerText = "";
    currentOperand = "/";
  } else {
    currentOperand = "/";
    solve();
  }
}

function solve() {
  if (currentOperand === "+") {
    solution = currentNumber + parseInt(display.innerText);
    display.innerText = solution;
    solved = true;
    currentNumber = solution;
  } else if (currentOperand === "-") {
    solution = currentNumber - parseInt(display.innerText);
    display.innerText = solution;
    solved = true;
    currentNumber = solution;
  } else if (currentOperand === "*") {
    solution = currentNumber * parseInt(display.innerText);
    display.innerText = solution;
    solved = true;
    currentNumber = solution;
  } else if (currentOperand === "/") {
    solution = currentNumber / parseInt(display.innerText);
    display.innerText = solution;
    solved = true;
    currentNumber = solution;
  }
}

numberButtons.forEach((button) => button.addEventListener("click", displayNum));
clear.addEventListener("click", reset);
clearAll.addEventListener("click", resetAll);
posNeg.addEventListener("click", switchSign);
add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);
equals.addEventListener("click", solve);
