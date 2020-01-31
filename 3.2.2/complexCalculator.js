console.log("complexCalculator.js loaded succesfully");

//add clicked number in field:
function addNumber (clickedNumber) {
    var calculationField = document.getElementById("calculationField");
    var getLocalStorage = window.localStorage.getItem('valueOne');
    calculationField.textContent += clickedNumber;

    // TO DO
    if (getLocalStorage > 0 && calculationField !== "") {
        console.log(parseFloat(getLocalStorage));
    } else {
        console.log("no local storage");
    }
    
}

function plus () {
    var valueOne = document.getElementById("calculationField").textContent;
    var numValueOne = valueOne;
    var calculationField = document.getElementById("calculationField");
     //get field value and store as value one:
    localStorage.setItem('valueOne', numValueOne);
    //delete field content (value one is now stored)

    var getLocalStorage = window.localStorage.getItem('valueOne');
    //parseFloat = waarde omzetten naar number
    console.log(parseFloat(getLocalStorage))
}

function clearField() {
    var calculationField = document.getElementById("calculationField");
    calculationField.textContent = "";
}

//Opties: 
//zichtbare numbers met javascript loop laten injecteren
//