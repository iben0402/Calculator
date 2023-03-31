function add(a, b) {
    return a+b;
}

function substract(a, b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function evaluate(str) {
    str = str.split(" ");
    var a = parseInt(str[0]);
    var operator = str[1];
    var b = parseInt(str[2]);
    return operate(operator, a, b);
}

function operate(operator, a, b) {
    if(operator=="+") return add(a, b);
    else if(operator=="-") return substract(a, b);
    else if(operator=="x") return multiply(a, b);
    else if(operator=="÷") return divide(a, b);
}

function numberClicked() {
    var numb = this.id;
    var numb = parseInt(numb);
    const textField = document.getElementById("text");
    var str = textField.value;

    str = str + numb;
    textField.value = str;
}

function signClicked() {
    var sign = this.id;
    const textField = document.getElementById("text");
    var str = textField.value;
    str = str + " " + sign + " ";
    textField.value = str;
}

function clearField() {
    const textField = document.getElementById("text");
    textField.value = "";
}

function equalClicked() {
    const textField = document.getElementById("text");
    var str = textField.value;
    var result = evaluate(str);
    textField.value = result;
}

// Adding event listeners to buttons
numbers = document.getElementsByClassName("number");
for (let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener("click", numberClicked);
}

document.getElementById("clear").addEventListener("click", clearField);

signs = document.getElementsByClassName("sign");
for (let index = 0; index < signs.length; index++) {
    signs[index].addEventListener("click", signClicked);
}

document.getElementById("=").addEventListener("click", equalClicked)

