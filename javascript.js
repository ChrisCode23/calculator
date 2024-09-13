// Basic math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Represent each part of a calculator operation, will be useful to update display
let firstNum;
let operator;
let secondNum;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

// Stores digits and operators which get progressively added to the display
let displayNums = [];

    digits.forEach((digit) => {
        digit.addEventListener(("click"), () => {
            displayNums.push(+digit.id);
            display.textContent += `${displayNums[displayNums.length - 1]} `
        })
    })

    operators.forEach((operator) => {
        operator.addEventListener(("click"), () => {
            displayNums.push(operator.id);
            display.textContent += `${displayNums[displayNums.length - 1]} `
        })
    })
    
    equal.addEventListener(("click"), () => {
        firstNum = displayNums[0];
        secondNum = displayNums[2];
        operate(displayNums);
    })

    // Clearing empties display array, so that the result matches new operations
    clear.addEventListener(("click"), () => {
        displayNums.splice(0, displayNums.length);
        display.textContent = "";
    })




// Checks the operator and based on it's type, executes a specific operation
const operate = (displayNums) => {
    let result;
    switch (displayNums[1]) {
        case "+":
            result = add(firstNum, secondNum);
            display.textContent = `${result}`;
            break;
        case "-":
            result = subtract(firstNum, secondNum);
            display.textContent = `${result}`;
            break;
        case "*":
            result = multiply(firstNum, secondNum);
            display.textContent = `${result}`;
            break;
        case ":":
            result = divide(firstNum, secondNum);
            display.textContent = `${result}`;
            break;
    }
}


//Store the digited content, both numbers and operators in an array
//Push the digit in the array when clicking digit
//Same goes for operators
//When pressing equal button, run the operate function
//Function adds first element and third element of the array
//Every second element is considered an operator 7
//That is going to decide exactly which of the operations from operate() will trigger
//Operate() decides which operation to execute based on the value of the operator in the display
/*e.g When pressing = button => displayNums[0] = 3, displayNums[2] = 5, both of these are stored in firstNum and secondNum variables
and  displayNums[1] = +, so we'll execute the add() function */