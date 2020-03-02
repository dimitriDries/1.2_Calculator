console.log("complexCalculator.js loaded succesfully");

// optional: Object instead of 2 arrays
//var calculatorObject = {
//    numbers: [],
//    operator: []
//}

var numbersArray = [];
var operatorArray = [];

var view = document.getElementById("view");

var numButton = document.getElementsByClassName("num_btn");
var operatorButton = document.getElementsByClassName("operator")

//declare secondary operators
var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
//declare primary operators
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");

//add clicked number in field
function addNumber () {
    //Loop verwijderd de eventlisteners van alle nummer buttons en zet vervolgens een eventlistener erop (addNumber)
    for (var i=0; i<numButton.length; i++){
        var toClear = numButton.item(i);
        toClear.removeEventListener("mousedown", clearField);
   }
   //Adds the clicked number to the view
    view.textContent += event.target.innerHTML;
}

function clearField() {
    //Clear view
    view.textContent="";
    //Clear active operator class
    var activeOperator = document.getElementsByClassName("operatorActive");[0];
    if (activeOperator !== undefined) {activeOperator.classList = "operator";}
}

function clearAll() {
    //Clear view
    view.textContent="";
    //Clear active operator class
    var activeOperator = document.getElementsByClassName("operatorActive");[0];
    if (activeOperator !== undefined) {activeOperator.classList = "operator";}
    //Clear arrays
    numbersArray.length = 0;
    operatorArray.length = 0;
}

function plus () {
    //--------- CSS changes start -------------------------------------------------------
    var activeOperator = document.getElementsByClassName("operatorActive");
    //If there is no active operator yet, clear field when next number is pressed
    if (activeOperator.length === 0){
        for (i=0; i<numButton.length; i++){
            numButton[i].addEventListener("mousedown", clearField);
        }
    }

    //if there is at least one active operator, reset class of that operator
    if (activeOperator[0] !== undefined) {activeOperator.classList = "operator";}

    //activate this operator
    plusButton.classList = "operatorActive";
    //---------- CSS changes end ------------------------------------------------------------------

    //---------- Array changes start ------------------------------------------------------------------
    var newValue = view.textContent;
    var operator = "+";
    numbersArray.push(newValue) + operatorArray.push(operator);
    console.log(numbersArray[numbersArray.length-2]+operator+numbersArray[numbersArray.length-1]);
    //---------- Array changes end ------------------------------------------------------------------

    //---------- Calculation/ view + array update start ------------------------------------------------------------------
    if (numbersArray.length>1){
        view.textContent = eval(numbersArray[numbersArray.length-2]+operatorArray[this.length]+numbersArray[numbersArray.length-1]);
        numbersArray.push(view.textContent);
    }
    console.log(numbersArray, operatorArray);
    //---------- Calculation + array update end ------------------------------------------------------------------

}

function minus () {
    //--------- CSS changes start -------------------------------------------------------
    var activeOperator = document.getElementsByClassName("operatorActive");
    //If there is no active operator yet, clear field when next number is pressed
    if (activeOperator.length === 0){
        for (i=0; i<numButton.length; i++){
            numButton[i].addEventListener("mousedown", clearField);
        }
    }

    //if there is at least one active operator, reset class of that operator
    if (activeOperator[0] !== undefined) {activeOperator.classList = "operator";}

    //activate this operator
    minusButton.classList = "operatorActive";
    //---------- CSS changes end ------------------------------------------------------------------

    //---------- Array changes start ------------------------------------------------------------------
    var newValue = view.textContent;
    var operator = "-";
    numbersArray.push(newValue) + operatorArray.push(operator);
    console.log(numbersArray[numbersArray.length-2]+operator+numbersArray[numbersArray.length-1]);
    //---------- Array changes end ------------------------------------------------------------------

    //---------- Calculation/ view + array update start ------------------------------------------------------------------
    if (numbersArray.length>1){
        view.textContent = eval(numbersArray[numbersArray.length-2]+operatorArray[this.length]+numbersArray[numbersArray.length-1]);
        numbersArray.push(view.textContent);
    }
    console.log(numbersArray, operatorArray);
    //---------- Calculation + array update end ------------------------------------------------------------------
}

function multiply () {
        //--------- CSS changes start -------------------------------------------------------
        var activeOperator = document.getElementsByClassName("operatorActive");
        //If there is no active operator yet, clear field when next number is pressed
        if (activeOperator.length === 0){
            for (i=0; i<numButton.length; i++){
                numButton[i].addEventListener("mousedown", clearField);
            }
        }
    
        //if there is at least one active operator, reset class of that operator
        if (activeOperator[0] !== undefined) {activeOperator.classList = "operator";}
    
        //activate this operator
        multiplyButton.classList = "operatorActive";
        //---------- CSS changes end ------------------------------------------------------------------
    
        //---------- Array changes start ------------------------------------------------------------------
        var newValue = view.textContent;
        var operator = "-";
        numbersArray.push(newValue) + operatorArray.push(operator);
        console.log(numbersArray[numbersArray.length-2]+operator+numbersArray[numbersArray.length-1]);
        //---------- Array changes end ------------------------------------------------------------------
    
}

function divide () {
}

function calculate () {
    var valueTwo = view.textContent;
    numbersArray.push(valueTwo);
    var calculation = numbersArray[numbersArray.length-2]+operatorArray[operatorArray.length-1]+numbersArray[numbersArray.length-1];

    console.log(calculation);
    view.textContent = eval(calculation);
}

//Opties: 
//zichtbare numbers met javascript loop laten injecteren
//