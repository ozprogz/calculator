const display = document.querySelector(".display");
const displayableButtons = document.querySelectorAll(".displayable");
let displayContent ="";
displayableButtons.forEach( button => button.addEventListener("click", ()=>{
    displayContent += button.textContent;
    display.textContent = displayContent;
}));
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", ()=> clearDisplay())
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
    return x/y;
}

function operate(x,y,operator){
    switch(operator){
        case "+":
            return add(x,y);
       case "-":
            return subtract(x,y);
            
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);    
    }
}

function clearDisplay(){
    display.textContent="0";
    displayContent ="";
}
