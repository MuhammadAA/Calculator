// Calculator Functions 
function add (numOne, numTwo) {
    return parseFloat(numOne) + parseFloat(numTwo);
}

function sub (numOne, numTwo) {
    return numOne - numTwo;
}

function multiply (numOne, numTwo){
    return numOne * numTwo;
}

function divide (numOne, numTwo){
    return numOne / numTwo;
}

function negate (num){
    return num * -1;
}

function equate (num1,num2,operator){
    if(operator == "+"){
        return add(num1, num2);
    }
    else if (operator == "-"){
        return sub(num1, num2);
    }
    else if (operator == "*"){
        return multiply(num1, num2);
    }
    else if (operator == "/"){
        return divide(num1, num2);
    }
}



// Inputs 
function zeroInp (){
    inputed+=0;
    dispText.textContent = inputed;
}
function oneInp (){
    inputed+=1;
    dispText.textContent = inputed;
}
function twoInp (){
    inputed+=2;
    dispText.textContent = inputed;
}
function threeInp (){
    inputed+=3;
    dispText.textContent = inputed;
}
function fourInp (){
    inputed+=4;
    dispText.textContent = inputed;
}
function fiveInp (){
    inputed+=5;
    dispText.textContent = inputed;
}
function sixInp (){
    inputed+=6;
    dispText.textContent = inputed;
}
function sevenInp (){
    inputed+=7;
    dispText.textContent = inputed;
}
function eightInp (){
    inputed+=8;
    dispText.textContent = inputed;
}
function nineInp (){
    inputed+=9;
    dispText.textContent = inputed;
}
function negateInp (){
    if (inputed[0] == "-"){
        inputed = inputed.substring(1);
    }
    else {
        inputed = "-"+inputed;
    }
    dispText.textContent = inputed;
}
function decimalInp (){
    if (inputed.includes(".") == false) {
        inputed+=".";
    }
    dispText.textContent = inputed;
}
function equalsInp (){
    if(numberTwo == null){
        numberTwo = parseFloat(inputed);
        result = equate(numberOne,numberTwo,func);
        numberOne = result;

        inputed = '';
        dispText.textContent = result;
    }
    else {
        result = equate(numberOne,numberTwo,func);
        numberOne = result;

        inputed = '';
        dispText.textContent = result;
    }
}
function addInp (){
    if (func != null && func != "+"){
        numberTwo = parseFloat(inputed);
        result = equate(numberOne,numberTwo,func);
        numberOne = result;
        numberTwo = null;
        func = "+"

        inputed = '';
        dispText.textContent = result;
    }
    else if (numberOne != null && func == "+"){
        numTwo = parseFloat(inputed);
        func = "+"
        result = equate(numberOne,numberTwo,func);
        numberTwo = null;
        
        inputed = '';
        dispText.textContent = result;
    }
    else if(numberOne == null){
        numberOne = parseFloat(inputed);
        func = "+";
        inputed = '';
    }
}
function subtractInp() {
    if (func != null && func != "-"){
        numberTwo = parseFloat(inputed);
        result = equate(numberOne,numberTwo,func);
        numberOne = result;
        numberTwo = null;
        func = "-"

        inputed = '';
        dispText.textContent = result;
    }
    else if (numberOne != null && func == "-"){
        numTwo = parseFloat(inputed);
        func = "-"
        result = equate(numberOne,numberTwo,func);
        numberTwo = null;
        
        inputed = '';
        dispText.textContent = result;
    }
    else if(numberOne == null){
        numberOne = parseFloat(inputed);
        func = "-";
        inputed = '';
    }
}
function multiplyInp() {
    if (func != null && func != "*"){
        numberTwo = parseFloat(inputed);
        result = equate(numberOne,numberTwo,func);
        numberOne = result;
        numberTwo = null;
        func = "*"

        inputed = '';
        dispText.textContent = result;
    }
    else if (numberOne != null && func == "*"){
        numTwo = parseFloat(inputed);
        func = "*"
        result = equate(numberOne,numberTwo,func);
        numberTwo = null;
        
        inputed = '';
        dispText.textContent = result;
    }
    else if(numberOne == null){
        numberOne = parseFloat(inputed);
        func = "*";
        inputed = '';
    }
}
function divideInp() {
    if (func != null && func != "/"){
        numberTwo = parseFloat(inputed);
        result = equate(numberOne,numberTwo,func);
        numberOne = result;
        numberTwo = null;
        func = "/"

        inputed = '';
        dispText.textContent = result;
    }
    else if (numberOne != null && func == "/"){
        numTwo = parseFloat(inputed);
        func = "/"
        result = equate(numberOne,numberTwo,func);
        numberTwo = null;
        
        inputed = '';
        dispText.textContent = result;
    }
    else if(numberOne == null){
        numberOne = parseFloat(inputed);
        func = "/";
        inputed = '';
    }
}
function clearInp(){
    inputed = '';
    dispText.textContent = inputed;
    numberOne = null;
    numberTwo = null;
}


// Display
var inputed = "";
const dispText = document.getElementById("dispText");
dispText.textContent = inputed;







// Number Buttons 
const zeroBtn = document.getElementById("zero");
zeroBtn.onclick = function(){
    zeroInp();
};
const oneBtn = document.getElementById("one");
oneBtn.onclick = function(){
    oneInp();
};
const twoBtn = document.getElementById("two");
twoBtn.onclick = function(){
    twoInp();
};
const threeBtn = document.getElementById("three");
threeBtn.onclick = function(){
    threeInp();
};
const fourBtn = document.getElementById("four");
fourBtn.onclick = function(){
    fourInp();
};
const fiveBtn = document.getElementById("five");
fiveBtn.onclick = function(){
    fiveInp();
};
const sixBtn = document.getElementById("six");
sixBtn.onclick = function(){
    sixInp();
};
const sevenBtn = document.getElementById("seven");
sevenBtn.onclick = function(){
    sevenInp();
};
const eightBtn = document.getElementById("eight");
eightBtn.onclick = function(){
    eightInp();
};
const nineBtn = document.getElementById("nine");
nineBtn.onclick = function(){
    nineInp();
};


// Operation Set Up
var numberOne = null;
var numberTwo = null;
var func = null;


// Function Buttons
clearBtn = document.getElementById("clear");
clearBtn.onclick = function(){
    clearInp();
};
negateBtn = document.getElementById("negate");
negateBtn.onclick = function(){
    negateInp();
};
decimalBtn = document.getElementById("decimal");
decimalBtn.onclick = function(){
    decimalInp();
};
equalsBtn = document.getElementById("equals");
equalsBtn.onclick = function(){
    equalsInp();
};
addBtn = document.getElementById("add");
addBtn.onclick = function(){
    addInp();
};
subtractBtn = document.getElementById("subtract");
subtractBtn.onclick = function(){
    subtractInp();
};
multiplyBtn = document.getElementById("multiply");
multiplyBtn.onclick = function(){
    multiplyInp();
}
divideBtn = document.getElementById("divide");
divideBtn.onclick = function(){
    divideInp();
}


// Keyboard Support
document.addEventListener("keydown", function(event){
    console.log(event.key);
    if (event.key == 0){
        zeroInp();
    }
    if (event.key == 1){
        oneInp();
    }
    if (event.key == 2){
        twoInp();
    }
    if (event.key == 3){
        threeInp();
    }
    if (event.key == 4){
        fourInp();
    }
    if (event.key == 5){
        fiveInp();
    }
    if (event.key == 6){
        sixInp();
    }
    if (event.key == 7){
        sevenInp();
    }
    if (event.key == 8){
        eightInp();
    }
    if (event.key == 9){
        nineInp();
    }
    if (event.key === "Backspace"){
        inputed = inputed.slice(0,-1);
        dispText.textContent = inputed;
    }
    if (event.key == "-"){
        negateInp();
    }
    if (event.key == "."){
        decimalInp();
    }
    if (event.key === "Enter" || event.key == "="){
        equalsInp();
    }
    if (event.key == "+") {
        addInp();
    }
    if (event.key == "s") {
        subtractInp();
    }
    if (event.key == "*" || event.key == "x"){
        multiplyInp();
    }
    if (event.key == "/") {
        divideInp();
    }
    if (event.key == "c"){
        clearInp();
    }
});

