// Basic math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Represent each part of a calculator operation, will be useful to update display
let firstNum;
let operator;
let secondNum;

const operate = (firstNum, operator, secondNum) => {
    add(firstNum, secondNum);
}