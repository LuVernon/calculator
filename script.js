let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";
let calcBody = document.querySelector("#calcBody");
let screen = document.querySelector("#output");

function add (a, b) {
    a = Number(a);
    b = Number(b);
    return a+b;
}

function subtract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*=b;
}

function divide (a, b) {
    return Math.round((a/b)*100)/100;
}

function display (x) {
    screen.textContent = x;
}

function operate (first, second, oper) {
    switch (oper) {
        case "+": 
            display(add(first, second));
            displayValue = `${screen.textContent} + `;
            break;
        case "-": 
            display(subtract(first, second));
            displayValue = `${screen.textContent} - `;
            break;
        case "*": 
            display(multiply(first, second));
            displayValue = `${screen.textContent} * `;
            break;
        case "/": 
            if (second == 0) {
                displayValue == "";
                display("Does Not Compute!");
                break;
            }
            else {
                display(divide(first, second));
                displayValue = `${screen.textContent} / `;
                break;
            }
    }
}

calcBody.addEventListener("click", (e)=>{
    let pressed = e.target.id;
    if (pressed == "clear") {
        displayValue = "";
        display(displayValue);
    }
    else if (pressed == "enter") {
        let arr = displayValue.split(" ");
        [firstNumber, operator, secondNumber] = displayValue.split(" ");
        operate(firstNumber, secondNumber, operator);   
    }
    else if (pressed == "add" || pressed == "subtract"|| pressed == "mult"|| pressed == "divide") {
        if (displayValue.split(" ").length == 3) {
            [firstNumber, operator, secondNumber] = displayValue.split(" ");
            operate(firstNumber, secondNumber, operator)
        }
        else {
            displayValue += ` ${e.target.textContent} `;
            display(displayValue);
        }
    }
    else if (e.target.id != "calcBody") {
        displayValue += e.target.textContent;
        display(displayValue);
    }
});

