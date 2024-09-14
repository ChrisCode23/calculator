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
const comma = document.querySelector(".comma");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const backspace = document.querySelector("#backspace");


// Default display value
display.textContent = 0;
    
    digits.forEach((digit) => {
        digit.addEventListener(("click"), () => {
            
            // Allows to enter a 0 if display is empty (e.g. when entering second number)
            if (display.textContent == "" && digit.id == "0") {
                display.textContent += `${digit.id}`;
            }

            // Makes it so if default display value is 0, user can't add more
            if (display.textContent == 0 && digit.id == "0") {
                return;
            }

            /* Allows to enter decimals after point, if display number is 0 
             (without this, the next if statement would interfere by replacing the decimal point with the digit instead of 0) */
            if (display.textContent == 0 && display.textContent.includes(".")) {
                display.textContent += `${digit.id}`;
                return;
            }

            // If it's 0 but user presses another digit, it will replace the 0 with the digit
            if (display.textContent == 0 && digit.id != "0") {
                display.textContent = display.textContent.slice(0, -1);
            }
            display.textContent += `${digit.id}`
        })
    })

    // Deletes last digit (slice is -10 to avoid "backspace" output)
    backspace.addEventListener(("click"), () => {
        display.textContent = display.textContent.slice(0, -10);
    })

    // Disables comma if it's already been used
    comma.addEventListener(("click"), () => {
        if (display.textContent.includes(".")) comma = disabled;
        display.textContent += `${comma.id}`;
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
        display.textContent = 0;
    })




// Checks the operator and based on it's type, executes a specific operation
const operate = (firstNum, secondNum, operator) => {
    let result;

    // Triggers when user enters only one number, avoids NaN error
    if (!firstNum && secondNum) result = secondNum;

    // If user presses equal without inserting a number
    if (!firstNum && !secondNum) result = 0;

    // Throws an error instead of prompting "Infinity"
    if (secondNum == 0 && operatorType == "divide") {
        alert("You can't divide a number by 0!");
        display.textContent = "ERROR";
        return;
    };
    
    // Calls one of "operations" methods based on the operator pressed by user
    if (operations[operatorType]) {
        result = operations[operatorType](+firstNum, +secondNum)
    }

    // Rounds to 3 decimals
    display.textContent = Math.round(result * 1000) / 1000;
    
}


