let firstNumber = "";
let operator = "";
let secondNumber = "";

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