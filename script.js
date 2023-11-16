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
    return a-b;
}

function multiply (a, b) {
    return a*=b;
}

function divide (a, b) {
    return a/b;
}

function display (x) {
    screen.textContent = x;
}

function operate (first, second, oper) {
    switch (oper) {
        case "+": 
            display(add(first, second));
            break;
        case "-": 
            display(subtract(first, second));
            break;
        case "*": 
            display(multiply(first, second));
            break;
        case "/": 
            display(divide(first, second));
            break;
    }
}

calcBody.addEventListener("click", (e)=>{
    let pressed = e.target.id;
    if (pressed == "clear") {
        displayValue = "";
        display(displayValue);
    }
    else if (pressed == "enter") {
        [firstNumber, operator, secondNumber] = displayValue.split(" ");
        operate(firstNumber, secondNumber, operator);  
    }
    else if (pressed == "add" || pressed == "subtract"|| pressed == "mult"|| pressed == "divide") {
        displayValue += ` ${e.target.textContent} `;
        display(displayValue);
    }
    else {
        displayValue += e.target.textContent;
        display(displayValue);
    }
});

