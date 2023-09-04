const display = document.getElementById("display-panel");
const number1 = document.getElementById("number-1");
const number2 = document.getElementById("number-2");
const number3 = document.getElementById("number-3");
const number4 = document.getElementById("number-4");
const number5 = document.getElementById("number-5");
const number6 = document.getElementById("number-6");
const number7 = document.getElementById("number-7");
const number8 = document.getElementById("number-8");
const number9 = document.getElementById("number-9");
const number0 = document.getElementById("number-0");
const add = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");

let result = "";
let erase = false;

number1.addEventListener("click", () => {
    if (erase) {
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "1";
        result += "1";
    }
});
number2.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "2";
        result += "2";
    }
});
number3.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "3";
        result += "3";
    }
});
number4.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "4";
        result += "4";
    }
});
number5.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "5";
        result += "5";
    }
});
number6.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "6";
        result += "6";
    }
});
number7.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "7";
        result += "7";
    }
});
number8.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "8";
        result += "8";
    }
});
number9.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "9";
        result += "9";
    }
});
number0.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "0";
        result += "0";
    }
});
dot.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += ".";
        result += ".";
    }
});
add.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "+";
        result += "+";
    }

});
subtraction.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "-";
        result += "-";
    }
});
multiplication.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "*";
        result += "*";
    }

});
division.addEventListener("click", () => {
    if(erase){
        display.innerHTML = "";
        result = "";
        erase = false;
    }else{
        display.innerHTML += "/";
        result += "/";
    }

});
equal.addEventListener("click", () => {
  result = calculateExpression(result);
  function calculateExpression(expression) {
    // Split the expression into individual terms using regular expressions
    var terms = expression.match(/[+\-*/]|\d+/g);

    if (!terms) {
      // Handle invalid input
      return "Invalid expression";
    }

    var result = parseInt(terms[0], 10); // Initialize result with the first number

    // Iterate through the terms and perform the corresponding operations
    for (var i = 1; i < terms.length; i += 2) {
      var operator = terms[i];
      var number = parseInt(terms[i + 1], 10);

      switch (operator) {
        case "+":
          result += number;
          break;
        case "-":
          result -= number;
          break;
        case "*":
          result *= number;
          break;
        case "/":
          if (number === 0) {
            console.log("Division by zero");
          }
          result /= number;
          break;
        default:
          // Handle invalid operator
          console.log("invalid operator")
      }
    }

    display.innerHTML = result;
    erase = true;
  }
});
