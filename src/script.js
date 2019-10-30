let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let isSecond = false;
const input = document.getElementById('input');

const calculate = () => {
    switch(operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default :
            return 0;            
    }
}

const showValue = (value) => {
    input.value = parseInt(value);
}

const clearAll = () => {
    showValue(0);
    let firstNumber = 0;
    let secondNumber = 0;
    let operator = '';
}

const clickDigit = value => {
    if (isSecond) {
        showValue(0);
        isSecond = false;
    }
    let result = input.value + value;
    let number = parseInt(result);

    showValue(number);

    if (!operator) {
    firstNumber = number;
    } else {
    secondNumber = number;
    }
}

const clickOperator = op => {
    if (op === '=') {
        const result = calculate();

        operator = '';
        showValue(result);
    } else {
        operator = op;
        isSecond = true;
    }
}
