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

// Display
var inputed = "";
const dispText = document.getElementById("dispText");
dispText.textContent = inputed;


// Number Buttons 
const zeroBtn = document.getElementById("zero");
zeroBtn.onclick = function(){
    inputed+=0;
    dispText.textContent = inputed;
};
const oneBtn = document.getElementById("one");
oneBtn.onclick = function(){
    inputed+=1;
    dispText.textContent = inputed;
};
const twoBtn = document.getElementById("two");
twoBtn.onclick = function(){
    inputed+=2;
    dispText.textContent = inputed;
};
const threeBtn = document.getElementById("three");
threeBtn.onclick = function(){
    inputed+=3;
    dispText.textContent = inputed;
};
const fourBtn = document.getElementById("four");
fourBtn.onclick = function(){
    inputed+=4;
    dispText.textContent = inputed;
};
const fiveBtn = document.getElementById("five");
fiveBtn.onclick = function(){
    inputed+=5;
    dispText.textContent = inputed;
};
const sixBtn = document.getElementById("six");
sixBtn.onclick = function(){
    inputed+=6;
    dispText.textContent = inputed;
};
const sevenBtn = document.getElementById("seven");
sevenBtn.onclick = function(){
    inputed+=7;
    dispText.textContent = inputed;
};
const eightBtn = document.getElementById("eight");
eightBtn.onclick = function(){
    inputed+=8;
    dispText.textContent = inputed;
};
const nineBtn = document.getElementById("nine");
nineBtn.onclick = function(){
    inputed+=9;
    dispText.textContent = inputed;
};


// Operation Set Up
var numberOne = null;
var numberTwo = null;
var func = null;


// Function Buttons
clearBtn = document.getElementById("clear");
clearBtn.onclick = function(){
    inputed = '';
    dispText.textContent = inputed;
    numberOne = null;
    numberTwo = null;
};
negateBtn = document.getElementById("negate");
negateBtn.onclick = function(){
    if (inputed[0] == "-"){
        inputed = inputed.substring(1);
    }
    else {
        inputed = "-"+inputed;
    }
    dispText.textContent = inputed;
};
decimalBtn = document.getElementById("decimal");
decimalBtn.onclick = function(){
    if (inputed.includes(".") == false) {
        inputed+=".";
    }
    dispText.textContent = inputed;
};




// WORK IN PROGRESS
equalsBtn = document.getElementById("equals");
equalsBtn.onclick = function(){
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
    //numberTwo = parseFloat(inputed);
    //result = equate(numberOne,numberTwo,func);
    //dispText.textContent = result;
    //inputed = '';
    //numberOne = result;
    //numberTwo = null;
    //func = null;
};

addBtn = document.getElementById("add");
addBtn.onclick = function(){

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


    //if (func != "+"){
      //numberTwo = parseFloat(inputed);
      //inputed = "";
      //result = equate(numberOne,numberTwo,func);
      //dispText.textContent = result;
       // numberOne = result;
        //numberTwo = null;
        //func = "+";
    //}
    //if (numberOne == null && numberTwo == null){
      //  numberOne = parseFloat(inputed);
        //inputed = "";
        //func = "+";
   // }
    //else if (numberOne != null && numberTwo == null){
        
      //  func = "+";
       // numberTwo = parseFloat(inputed);
        //inputed = "";
        //result = equate(numberOne,numberTwo,func);
        //dispText.textContent = result;
        //numberOne = result;
        //numberTwo = null;
        //func = null;
    //}
};

subtractBtn = document.getElementById("subtract");
subtractBtn.onclick = function(){
    
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
};

multiplyBtn = document.getElementById("multiply");
multiplyBtn.onclick = function(){
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

divideBtn = document.getElementById("divide");
divideBtn.onclick = function(){
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