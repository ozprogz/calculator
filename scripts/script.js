const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operators");
const equalButton = document.querySelector(".equal");

let displayContent ="0";
let operator="";
let currentNumber="0";
let previousNumber;
let secondNumber;
let countNumbers=1;

digits.forEach( button => button.addEventListener("click", ()=> {
    dividedByZero();
    if(isOperator(displayContent[displayContent.length-1])) currentNumber="";
    currentNumber += button.textContent;
    console.log(currentNumber);

    /*if(operator!=="") {
        previousNumber = currentNumber;
        currentNumber="";   
    }*/
    fillDisplay(button);
    countNumbers++;
    
}));
operators.forEach( button => button.addEventListener("click", ()=> {
    if(countNumbers===2) equal();
    dividedByZero();
    if(!isOperator(displayContent[0])){
    previousNumber = parseInt(currentNumber);
    console.log(currentNumber);
    console.log(previousNumber);
  
    operator = button.textContent; 
    console.log(operator);
    fillDisplay(button);
}}));


equalButton.addEventListener("click", () => {
    secondNumber = parseInt(currentNumber);
    let result = operate(previousNumber, secondNumber,operator);
    displayContent = `${result}`;
    console.log(displayContent);
    display.textContent= displayContent;
    currentNumber = result;
}) 

clearButton.addEventListener("click", ()=> clearDisplay());

function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}
function divide(x,y){
    if(y===0) {
        return "KEKW"
    }
    return x/y;
}

function operate(x,y,operator){
    switch(operator){
        case "+":
            return add(x,y);
       case "−":
            return subtract(x,y);
            
        case "×":
            return multiply(x,y);
        case "÷":
            return divide(x,y);    
    }
}

function clearDisplay(){
    displayContent ="0";
    display.textContent= displayContent;
    currentNumber = displayContent;
}
function fillDisplay(button){
    //console.log(button.textContent);
    //console.log(displayContent[displayContent.length-1]);
    if(isOperator(button.textContent) && isOperator(displayContent[displayContent.length-1])){
        console.log(displayContent);
        displayContent = displayContent.slice(0,-1);
        displayContent +=button.textContent;
        display.textContent = displayContent;
        console.log(displayContent);
    }
    else {
    if(displayContent==="0" && !isOperator(button.textContent)){
        displayContent= displayContent.slice(0,0);
    }
    displayContent += button.textContent;
    display.textContent = displayContent;}
}

function isOperator(char){
    if(char ==="+" || char==="−" || char==="×" || char==="÷") return true;
    else return false;
}
function dividedByZero(){
    if(displayContent==="KEKW"){
    clearDisplay();
    }
}
function equal(){
    secondNumber = parseInt(currentNumber);
    let result = operate(previousNumber, secondNumber,operator);
    displayContent = `${result}`;
    console.log(displayContent);
    display.textContent= displayContent;
    currentNumber = result;
    countNumbers--;
}