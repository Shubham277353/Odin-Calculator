const add = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

let result = "";

function operate(no1, opt, no2) {
  if (opt === "+") {
    result = add(no1, no2);
  } else if (opt === "-") {
    result = subtract(no1, no2);
  } else if (opt === "*") {
    result = multiply(no1, no2);
  } else if (opt === "/") {
    result = divide(no1, no2);
  }
  console.log(result);
  return result;
}

let number1, number2, operator, value, operatedNumber, solution;
number1 = "";
number2 = "";
operator = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".numButtons");
const equalTo = document.querySelector(".equalTo");
const symbol = document.querySelectorAll(".symbol");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "=") {
      return;
    } else if (["+", "-", "*", "/"].includes(btn.value) && operator === "") {
      operator = btn.value;
      display.textContent += ` ${btn.value} `;
    } else if (btn.classList.contains("numbers") && operator !== "") {
      number2 += btn.value;
      display.textContent += btn.value;
    } else if (btn.classList.contains("numbers") && number2 === "") {
      number1 += btn.value;
      display.textContent += btn.value;
    } else if (btn.classList.contains("numbers") && number2 !== "") {
      console.log("number2 running");
      number2 = btn.value;
      display.textContent += number2;
    } else if (["+", "-", "*", "/"].includes(btn.value) && operator !== "") {
      console.log("helloworld");
      operator = btn.value;
      display.textContent += ` ${operator} `;
    }

    console.log(number1);
    console.log(operator);
    console.log(number2);
  });
});

equalTo.addEventListener("click", () => {
  operatedNumber = operate(number1, operator, number2);
  display.textContent = operatedNumber;
  number1 = operatedNumber;
});

function allClear() {
  display.textContent = "";
  number1 = "";
  number2 = "";
  operator = "";
  result = "";
}

const ac = document.querySelector(".ac");
const del = document.querySelector(".del");

ac.addEventListener("click", () => allClear());
