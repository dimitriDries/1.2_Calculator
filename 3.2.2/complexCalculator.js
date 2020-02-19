console.log("complexCalculator.js loaded succesfully");
var calculationArray = [];

//add clicked number in field AND add number to array
function addNumber (clickedNumber) {
    //Loop verwijderd de eventlisteners van alle nummer buttons en zet vervolgens een eventlistener erop (addNumber)
    var numButton = document.getElementsByClassName("num_btn");
    for (var i=0; i<numButton.length; i++){
        var toClear = numButton.item(i);
        toClear.removeEventListener("click", clearField);
   }

    var calculationField = document.getElementById("calculationField");
    calculationField.textContent += clickedNumber;
}

function calculate () {
    console.log(calculationArray.join(''));
}


function plus () {
//1. class aanpassen naar blijvend donkerder
//2. + wegschrijven in array
//3. Bij eerst volgende nummer geselecteerd: view clearen en overschrijven door aangeklikte nummer

        var valueOne = calculationField.textContent;
        var operator = "+";
        return calculationArray.push(valueOne) + calculationArray.push(operator);
}

function minus () {

}

function multiply () {

}

function divide () {

}

function clearField() {
    var calculationField = document.getElementById("calculationField");
    calculationField.textContent="";

}

//Opties: 
//zichtbare numbers met javascript loop laten injecteren
//