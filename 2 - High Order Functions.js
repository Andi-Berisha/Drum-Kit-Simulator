// HIGHER ORDER FUNCTIONS - functions that can take other functions as inputs

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2); // notice how this takes the multiply and add function inside it
}

console.log(calculator(10, 5, subtract));
