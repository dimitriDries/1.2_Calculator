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
        toClear.removeEventListener("mousedown", clearView);
   }
   //Adds the clicked number to the view
    view.textContent += event.target.innerHTML;
}

function clearView() {
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
    clearArrays()
}

function resetOperators () {
        var activeOperator = document.getElementsByClassName("operatorActive");
        //reset active operator
        for (i=0; i<activeOperator.length; i++){
        activeOperator[i].classList = "operator";
    }
}

function activateOperator () {
    for (i=0; i<numButton.length; i++){
        //clear view when the next number is pressed
        numButton[i].addEventListener("mousedown", clearView);
        //reset operator when next number is pressed
        numButton[i].addEventListener("mouseup", resetOperators)
    }

    //reset other active operators
    resetOperators()

    //activate this operator
    event.target.classList = "operatorActive";
}

function clearArrays () {
    numbersArray.length = 0;
    operatorArray.length = 0;
}

function secondaryOperator (targetElement) {
    //'if' to prevent clicking operator multiple times causing calculation to repeat
    if (targetElement.className !== "operatorActive"){
        //---------- Array changes start ------------------------------------------------------------------
        var newValue = view.textContent || undefined;
        var operator = targetElement.innerHTML;

        numbersArray.push(newValue);
        console.log(numbersArray[numbersArray.length-2]+operator+numbersArray[numbersArray.length-1]);
        //---------- Array changes end ------------------------------------------------------------------

        console.log(numbersArray, operatorArray);

        //---------- Calculation / view + array update start ------------------------------------------------------------------
        //If there is already a number in the numbers array, and there is an operator in the operators array, calculate and then delete operator
        if (numbersArray.length>1 & operatorArray.length>0){
            view.textContent = eval(numbersArray[numbersArray.length-2]+operatorArray[operatorArray.length-1]+numbersArray[numbersArray.length-1]);
            numbersArray.push(view.textContent);
        }
        operatorArray.push(operator)
        //---------- Calculation + array update end ------------------------------------------------------------------
    }
    activateOperator();
}

function multiply (targetElement) {
    //'if' to prevent clicking operator multiple times causing calculation to repeat
    if (targetElement.className !== "operatorActive"){
        //---------- Array changes start ------------------------------------------------------------------
        var newValue = view.textContent || undefined;
        var operator = targetElement.innerHTML;

        numbersArray.push(newValue);
        console.log(numbersArray[numbersArray.length-2]+operator+numbersArray[numbersArray.length-1]);
        //---------- Array changes end ------------------------------------------------------------------

        console.log(numbersArray, operatorArray);

        //---------- Calculation / view + array update start ------------------------------------------------------------------
        //If there is already a number in the numbers array, and there is an operator in the operators array, AND it's not a secondary operator calculate and then delete operator
        if (numbersArray.length>1 & operatorArray.length>0 & operatorArray[operatorArray.length-1] !== '+'||'-'){
            view.textContent = eval(numbersArray[numbersArray.length-2]+operatorArray[operatorArray.length-1]+numbersArray[numbersArray.length-1]);
            numbersArray.push(view.textContent);
        }
        operatorArray.push(operator)
        //---------- Calculation + array update end ------------------------------------------------------------------
    }
    activateOperator();

}

function calculate () {
    var valueTwo = view.textContent;
    numbersArray.push(valueTwo);
    var calculation = numbersArray[numbersArray.length-2]+operatorArray[operatorArray.length-1]+numbersArray[numbersArray.length-1];

    console.log(calculation);
    view.textContent = eval(calculation);
    clearArrays();
}
