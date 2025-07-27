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
  if (num2 === "0") {
    return "ERROR";
  } else {
    return num1 / num2;
  }
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
  console.log(`result: ${result}`);
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
    if (display.textContent === "ERROR") {
          display.style.color = "white";
      console.log("hello");
      allClear();
    }
    if (btn.value === "=") {
      return;
    } else if (["+", "-", "*", "/"].includes(btn.value) && operator === "") {
      if (number1 === "") {
        allClear();
      } else {
        operator = btn.value;
        display.textContent += ` ${btn.value} `;
      }
    } else if (
      btn.classList.contains("numbers") &&
      operator !== "" &&
      number1 !== ""
    ) {
      number2 += btn.value;
      display.textContent += btn.value;
    } else if (btn.classList.contains("numbers") && number2 === "") {
        number1 += btn.value;
        display.textContent += btn.value;
    }

    if (
      btn.classList.contains("symbol") &&
      operator !== "" &&
      number1 !== "" &&
      number2 !== ""
    ) {
      value = operate(number1, operator, number2);
      if (value === "ERROR") {
        display.textContent = "ERROR";
      } else {
        operator = btn.value;
        display.textContent = "";
        display.textContent += value;
        display.textContent += ` ${btn.value} `;
        number1 = value;
        number2 = "";
      }
    }

    console.log(number1);
    console.log(operator);
    console.log(number2);
  });
});

equalTo.addEventListener("click", () => {
  operatedNumber = operate(number1, operator, number2);
  if (operatedNumber === "ERROR") {
    display.textContent = "ERROR";
    display.style.color = "red";
  } else {
    display.textContent = operatedNumber;
    number1 = operatedNumber;
    number2 = "";
    operator = "";
  }
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
