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

function operate(no1, opt, no2) {
  let result;
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

let number1, number2, operator, value, operatedNumber;
number1 = null;
number2 = null;
operator = null;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".numButtons");
const equalTo = document.querySelector(".equalTo");
const symbol = document.querySelectorAll(".symbol");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (["+", "-", "*", "/"].includes(btn.value)) {
      display.textContent += ` ${btn.value} `;
      value = btn.value;
    } else {
      display.textContent += btn.value;
    }

    if(["+", "-", "*", "/"].includes(btn.value)){
        operator = btn.value ;
    }
    else if(number1 === null){
        number1 = btn.value;
    } else if(number2 === null){
        number2 = btn.value ;
    } 
    console.log(number1);
    console.log(operator);
    console.log(number2);
    

  });
});

equalTo.addEventListener("click", () => {
  operatedNumber = operate(number1, operator, number2);
  display.textContent = operatedNumber;
});

function allClear(){
    display.textContent = "";
    number1 = null;
    number2 = null;
    operator = null;
}

const ac = document.querySelector(".ac");
const del = document.querySelector(".del");

ac.addEventListener("click", ()=> allClear());
