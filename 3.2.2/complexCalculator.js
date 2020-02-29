console.log("complexCalculator.js loaded succesfully");
var numbersArray = [];
var operatorArray = [];

var calculationField = document.getElementById("calculationField");

var numButton = document.getElementsByClassName("num_btn");
var operatorButton = document.getElementsByClassName("operator")

var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");


//add clicked number in field AND add number to array
function addNumber () {
    //Loop verwijderd de eventlisteners van alle nummer buttons en zet vervolgens een eventlistener erop (addNumber)
    for (var i=0; i<numButton.length; i++){
        var toClear = numButton.item(i);
        toClear.removeEventListener("mousedown", clearField);
   }
   //Adds the clicked number to the view
    calculationField.textContent += event.target.innerHTML;
}

//Automatically add functions to numbtn's
(function (){
    for (i=0; i<numButton.length; i++){
        numButton[i].addEventListener("click", addNumber);
    }
})();

function clearField() {
    calculationField.textContent="";
}

function plus () {
//1. class aanpassen naar blijvend donkerder
//2. + wegschrijven in array
//3. Bij eerst volgende nummer geselecteerd: view clearen en overschrijven door aangeklikte nummer
    plusButton.classList = "operatorActive";
    for (i=0; i<numButton.length; i++){
        numButton[i].addEventListener("mousedown", clearField);
    }
        var valueOne = calculationField.textContent;
        var operator = "+";
        return numbersArray.push(valueOne) + operatorArray.push(operator);
}

function minus () {
}

function multiply () {
}

function divide () {
}

function calculate () {
    var valueTwo = calculationField.textContent;
    numbersArray.push(valueTwo);
    var calculation = numbersArray[0]+operatorArray[0]+numbersArray[1];

    var activeOperator = document.getElementsByClassName("operatorActive");
    activeOperator[0].classList = "operator";

    console.log(calculation);
    calculationField.textContent = eval(calculation);
}

//Opties: 
//zichtbare numbers met javascript loop laten injecteren
//