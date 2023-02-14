const buttons = document.querySelectorAll("button");
const display = document.querySelector("#result");

let firstOperand = 0;
let secondOperand = 0;
let operator = null;
let shouldResetDisplay = false;

function calculate() {
  let result = 0;
}
  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
{
  display.textContent =calculator.html
}