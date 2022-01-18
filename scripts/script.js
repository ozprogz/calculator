const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operators");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const backSpaceButton = document.querySelector(".backspace");
const signButton = document.querySelector(".sign");

let displayContent ="0";
let operator="";
let currentNumber="0";
let previousNumber;
let secondNumber;
let countNumbers=0;

digits.forEach( button => button.addEventListener("click", ()=> {
    if(isOperator(displayContent[displayContent.length-1])) currentNumber="";
    if(!maxDisplayLength())
    {
    dividedByZero();
    console.log(currentNumber);
    if(currentNumber==="0") currentNumber = currentNumber.slice(0,0);
    console.log(currentNumber);
    currentNumber += button.textContent;
    console.log(currentNumber);

    /*if(operator!=="") {
        previousNumber = currentNumber;
        currentNumber="";   
    }*/
    fillDisplay(button);   
}
    
}));
decimalButton.addEventListener("click", ()=>{
    if(!currentNumber.includes(".")){
    dividedByZero();
    if(isOperator(displayContent[displayContent.length-1])) currentNumber="";
    currentNumber += decimalButton.textContent;
    fillDisplay(decimalButton);
    }
})
operators.forEach( button => button.addEventListener("click", ()=> {
    if(displayContent==="-") return false;
    countNumbers++;
    if(isOperator(button.textContent) && isOperator(displayContent[displayContent.length-1])){
        countNumbers--;
    }
    
    if(countNumbers===2) equal();
    dividedByZero();
    if(!isOperator(displayContent[0])){
        console.log(currentNumber);
        console.log(previousNumber);
    previousNumber = parseFloat(currentNumber);
    console.log(currentNumber);
    console.log(previousNumber);
    operator = button.textContent; 
    console.log(operator);
    fillDisplay(button);    
    //operator="";
}}));


equalButton.addEventListener("click", () => {
    if(!isOperator(displayContent[displayContent.length-1])&& countNumbers===1)
    {countNumbers++;
    equal();
    countNumbers=0;
}
}) 

clearButton.addEventListener("click", ()=> clearDisplay());

backSpaceButton.addEventListener("click", ()=>{
    backSpace();
    updateDisplay();}
);
signButton.addEventListener("click", ()=> {
    toggleSign();
});
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
    countNumbers=0;
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
        countNumbers=0;
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
    console.log(previousNumber);
    console.log(currentNumber); 
    secondNumber = parseFloat(currentNumber);
    console.log(secondNumber)
    let result = operate(previousNumber, secondNumber,operator);
    if(typeof result ==="number") result = Math.round((result + Number.EPSILON) * 100) / 100;
    displayContent = `${result}`;
    console.log(displayContent);
    display.textContent= displayContent;
    currentNumber = `${result}`;
    secondNumber="";   
    previousNumber="";  
    countNumbers=1;
}
function maxDisplayLength(){
    if(displayContent.length >=18 || currentNumber.length>=12) return true;
}

function backSpace(){
    if(isOperator(displayContent[displayContent.length-1]) && currentNumber===''){
        countNumbers--;
        displayContent = displayContent.slice(0,-1);
        currentNumber = previousNumber.toString();
    }
    else if(isOperator(displayContent[displayContent.length-1])){
        countNumbers--;
        displayContent = displayContent.slice(0,-1);
    }
    else {displayContent = displayContent.slice(0,-1);
    currentNumber = currentNumber.slice(0,-1);
    }
}
function updateDisplay(){
    if(displayContent===""){
        displayContent="0";
        currentNumber="0";
    }
    display.textContent = displayContent;
}
function toggleSign(){
    if(countNumbers===0){
        if(parseFloat(currentNumber)>0)
        {currentNumber="-"+ currentNumber;
        displayContent = currentNumber;
        display.textContent = displayContent;
        }
        else if(currentNumber==="0") return false;
        else{
            currentNumber= currentNumber.slice(1);
            displayContent = currentNumber;
            display.textContent = displayContent;
        } }
        if(countNumbers===1){
            if(parseFloat(currentNumber)>0)
            {currentNumber="-"+ currentNumber;
            displayContent = displayContent.slice(0,-(currentNumber.length-1));
            displayContent += currentNumber;
            display.textContent = displayContent;
            }
            else if(currentNumber==="0") return false;
            else{
                currentNumber= currentNumber.slice(1);
                displayContent = displayContent.slice(0,-(currentNumber.length-1));
                displayContent += currentNumber;
                display.textContent = displayContent;
            } }
}
    //else if(currentNumber==="0") return false;
    //else currentNumber= currentNumber.slice(1);
    
