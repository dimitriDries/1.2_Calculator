console.log("complexCalculator.js loaded succesfully");

//add clicked number in field:
function addNumber (clickedNumber) {
    var calculationField = document.getElementById("calculationField");
    calculationField.textContent += clickedNumber;    
}

function plus () {
    //get field value and store as value one:
    var calculationField = document.getElementById("calculationField");
    var valueOne = calculationField.textContent;
    localStorage.setItem('valueOne', valueOne);
    localStorage.setItem('operator', "+");

    //delete field content (value one is now stored)
    calculationField.textContent = "";

    //Log localstorage value (omgezet naar nummer: parseFloat)
    var getValueOne = window.localStorage.getItem('valueOne');
    var getOperator = window.localStorage.getItem('operator');

    console.log(parseFloat(getValueOne));
    console.log(getOperator);

}

function minus () {
    //get field value and store as value one:
    var calculationField = document.getElementById("calculationField");
    var valueOne = calculationField.textContent;
    localStorage.setItem('valueOne', valueOne);
    localStorage.setItem('operator', "-");

    //delete field content (value one is now stored)
    calculationField.textContent = "";

    //Log localstorage value (omgezet naar nummer: parseFloat)
    var getValueOne = window.localStorage.getItem('valueOne');
    var getOperator = window.localStorage.getItem('operator');

    console.log(parseFloat(getValueOne));
    console.log(getOperator);

}

function multiply () {
    //get field value and store as value one:
    var calculationField = document.getElementById("calculationField");
    var valueOne = calculationField.textContent;
    localStorage.setItem('valueOne', valueOne);
    localStorage.setItem('operator', "*");

    //delete field content (value one is now stored)
    calculationField.textContent = "";

    //Log localstorage value (omgezet naar nummer: parseFloat)
    var getValueOne = window.localStorage.getItem('valueOne');
    var getOperator = window.localStorage.getItem('operator');

    console.log(parseFloat(getValueOne));
    console.log(getOperator);

}

function divide () {
    //get field value and store as value one:
    var calculationField = document.getElementById("calculationField");
    var valueOne = calculationField.textContent;
    localStorage.setItem('valueOne', valueOne);
    localStorage.setItem('operator', "/");

    //delete field content (value one is now stored)
    calculationField.textContent = "";

    //Log localstorage value (omgezet naar nummer: parseFloat)
    var getValueOne = window.localStorage.getItem('valueOne');
    var getOperator = window.localStorage.getItem('operator');

    console.log(parseFloat(getValueOne));
    console.log(getOperator);

}

function calculate () {
    var calculationField = document.getElementById("calculationField");
    var getValueOne = window.localStorage.getItem('valueOne');
    var getOperator = window.localStorage.getItem('operator');
    var valueTwo = document.getElementById("calculationField").textContent;
    console.log(valueTwo);
    var calculation = getValueOne + getOperator + valueTwo;
    console.log(eval(calculation));
    calculationField.textContent = eval(calculation);
}

function clearField() {
    var calculationField = document.getElementById("calculationField");
    calculationField.textContent = "";
}

//Opties: 
//zichtbare numbers met javascript loop laten injecteren
//