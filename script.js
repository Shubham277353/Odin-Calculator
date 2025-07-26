const display = document.querySelector(".display");

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
number1 = "";
number2 = "";
operator = "";

const buttons = document.querySelectorAll(".numButtons");
const equalTo = document.querySelector(".equalTo");
const symbol = document.querySelectorAll(".symbol");

buttons.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        
        if (["+", "-", "*", "/"].includes(btn.value) && operator === ""){
            operator = btn.value;
            display.textContent += ` ${btn.value} `;
        }
        else if (operator !== "" && number2 === "" ){
            number2 += btn.value;
            display.textContent += btn.value;
        }
        else if(btn.value !== "+" &&  btn.value !== "-" && btn.value !== "*" && btn.value !== "/" && number1 === ""){
            number1 += btn.value;
            display.textContent += btn.value;
        }
        else if(["+", "-", "*", "/"].includes(btn.value) && operator !== ""){
            operator = btn.value;
            let solution = operate(number1, operator, number2);
            number1 = solution  ;
            display.textContent = solution;
        }
        // else if (number2!==""){
        //     number2 = btn.value;
        // }
        console.log(number1);
        console.log(operator);
        console.log(number2);
        
    })
});
equalTo.addEventListener("click", () => {
    operatedNumber = operate(number1, operator, number2);
});

function allClear(){
    number1 = "";
    number2 = "";
    operator = "";

}

const ac = document.querySelector(".ac");
const del = document.querySelector(".del");

ac.addEventListener("click", ()=> allClear());
