// Basic math operations
const operations = {};

operations.add = (a, b) => a + b;
operations.subtract = (a, b) => a - b;
operations.multiply = (a, b) => a * b;
operations.divide = (a, b) => a / b;


// Represent each part of a calculator operation, will be useful to update display
let firstNum;
let operatorType;
let secondNum;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

//A display variable keeps track of the numbers input in display by user
//User must be able to enter numbers with multiple digits e.g "23"
//Default is 0, but we want to replace 0 with the number we input
//User input first number which is stored in firstNum variable and displays it
//Once user is done entering digits of numbers
//User chooses an operator which adds the firstNum variable to the operation, which type is determined by the operator chosen
//User enters the second number which is stored in the secondNum variable and displays it
//By pressing equal, returns the result of the operation in the display

    
    digits.forEach((digit) => {
        digit.addEventListener(("click"), () => {
            display.textContent += `${digit.id}`
        })
    })

    operators.forEach((operator) => {
        operator.addEventListener(("click"), () => {
            firstNum = display.textContent;
            display.textContent = "";
            operatorType = operator.id;
        })
    })
    
    equal.addEventListener(("click"), () => {
        secondNum = display.textContent;
        operate(firstNum, secondNum, operatorType);
    })

    // Clears display and empty previous variables in order to avoid getting same result down the line
    clear.addEventListener(("click"), () => {
        firstNum = null;
        operatorType = null;
        secondNum = null;
        display.textContent = "";
    })




// Checks the operator and based on it's type, executes a specific operation
const operate = (firstNum, secondNum, operator) => {
    let result;
    if (operations[operatorType]) {
        result = operations[operatorType](+firstNum, +secondNum)
    }
    display.textContent = Math.round(result * 100) / 100;
    
}


