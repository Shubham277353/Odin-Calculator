const add = (num1, num2) => {
  return num1 + num2;
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

function operate (no1,opt,no2){
    let result;
    if(opt==="+"){
    result = add(no1,no2);
    }

    else if(opt==="-"){
    result = subtract(no1,no2);
    }

    else if(opt==="*"){
    result = multiply(no1,no2);
    }

    else if(opt==="/"){
    result = divide(no1,no2);
    }

    return result;
}

let number1 , number2 , operator;
console.log(operate(5,"/",5));