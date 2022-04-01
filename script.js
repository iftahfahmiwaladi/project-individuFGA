const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const decimal = document.querySelector('.decimal');
const calculatorScreen = document.querySelector('.calculator-screen');
const clearBtn = document.querySelector('.all-clear');
const percentage = document.querySelector('.percentage');
let prevNumber='';
let calculationOperator='';
let currentNumber ='0';
const clearAll = ()=>{
    prevNumber ='';
    calculationOperator='';
    currentNumber='0';
}
const inputNumber=(number)=>{
    if(currentNumber==='0'){
        currentNumber=number;
    }
    else{
    currentNumber += number;
    }
}
const inputOperator=(operator)=>{
    if(calculationOperator===''){
        prevNumber=currentNumber};
    calculationOperator=operator;
    currentNumber='0';
}
const inputDecimal = (dot)=>{
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber+=dot;
}
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})
const updateScreen = (number)=>{
    calculatorScreen.value = number;
};
numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});
operators.forEach((operator)=>{
    operator.addEventListener('click',(event)=>{
            inputOperator(event.target.value);
    })
})
const calculate = ()=>{
    let result='';
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber)+parseFloat(currentNumber);
            break
        case '-':
            result = parseFloat(prevNumber)-parseFloat(currentNumber);
            break
        case '*':
            result = parseFloat(prevNumber)*parseFloat(currentNumber);
            break
        case '/':
            result = parseFloat(prevNumber)/parseFloat(currentNumber);
            break
        case '^':
            result = Math.pow(parseFloat(prevNumber),parseFloat(currentNumber));
            break
        case 'sin':
            result = Math.sin(parseFloat(currentNumber) * Math.PI / 180);
            break
        case 'cos':
                result = Math.cos(parseFloat(currentNumber) * Math.PI / 180);
        break
        case 'tan':
            result = Math.sin(parseFloat(currentNumber) * Math.PI / 180)/Math.cos(parseFloat(currentNumber) * Math.PI / 180);;
        break                
        default:
            return        
    }
    currentNumber = result
    calculationOperator='';
}
equalSign.addEventListener('click',()=>{
    calculate();
    updateScreen(currentNumber);
})
clearBtn.addEventListener('click',()=>{
    clearAll();
    updateScreen(currentNumber);
})
const calculatePercentage = ()=>{
    let resultPercentage = '';
    resultPercentage = parseFloat(currentNumber)/100;
    currentNumber = resultPercentage;
    calculationOperator='';
};
percentage.addEventListener('click',()=>{
    calculatePercentage();
    updateScreen(currentNumber);
})
