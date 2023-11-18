let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";
let que = "";
let calcBody = document.querySelector("#calcBody");
let output = document.querySelector("#output");

function add (a, b) {
    a = Number(a);
    b = Number(b);
    return Math.round((a+b)*100)/100;
}

function subtract (a, b) {
    return Math.round((a-b)*100)/100;
}

function multiply (a, b) {
    return Math.round((a*=b)*100)/100;
}

function divide (a, b) {
    return Math.round((a/b)*100)/100;
}

function display (x) {
    output.textContent = x;
}

function operate (first, second, oper) {
    switch (oper) {
        case "+": 
            display(add(first, second));
            que == "" ? displayValue = `${output.textContent}` : displayValue = `${output.textContent} ${que} `;
            que = "";
            break;
        case "-": 
            display(subtract(first, second));
            que == "" ? displayValue = `${output.textContent}` : displayValue = `${output.textContent} ${que} `;
            que = "";
            break;
        case "*": 
            display(multiply(first, second));
            que == "" ? displayValue = `${output.textContent}` : displayValue = `${output.textContent} ${que} `;
            que = "";
            break;
        case "/": 
            if (Number(second) == 0) {
                displayValue = "";
                operator = "";
                secondNumber = "";
                que = "";
                display("Does Not Compute!");
                break;
            }
            else {
                display(divide(first, second));
                que == "" ? displayValue = `${output.textContent}` : displayValue = `${output.textContent} ${que} `;
                que = "";
                break;
            }
    }
}

calcBody.addEventListener("click", (e)=>{
    let pressed = e.target.id;
    if (pressed == "clear") {
        displayValue = "";
        que = "";
        display(displayValue);
    }
    else if (pressed == "enter") {
        let arr = displayValue.split(" ");
        [firstNumber, operator, secondNumber] = displayValue.split(" ");
        if (secondNumber == "") {
            return; 
        }
        else {
            operate(firstNumber, secondNumber, operator);   
        }
    }
    else if (pressed == "add" || pressed == "subtract" || pressed == "mult" || pressed == "divide") {
        if (displayValue.split(" ").length == 3) {
            que = e.target.textContent;
            [firstNumber, operator, secondNumber] = displayValue.split(" ");
            operate(firstNumber, secondNumber, operator);
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

