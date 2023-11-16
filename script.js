let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";
let calcBody = document.querySelector("#calcBody");
let screen = document.querySelector("#output");

function add (a, b) {
    return a+b;
}

function subtract (a, b) {
    return a-b
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b) {
    return a/b;
}

function operate (first, second, oper) {
    switch (oper) {
        case "+": add(first, second);
        case "-": subtract(first, second);
        case "*": multiply(first, second);
        case "/": divide(first, second);
    }
}

function display (x) {
    screen.textContent = x;
}

calcBody.addEventListener("click", (e)=>{
    displayValue += e.target.textContent;
    display(displayValue);
});

