console.log("simpleCalculator.js loaded succesfully");

function calculateSum () {
    let inputFieldOne = document.getElementById("field-one");
    let inputFieldTwo = document.getElementById("field-two");
    let output = document.getElementById("answer");
    let sum = Number(inputFieldOne.value) + Number(inputFieldTwo.value);
    output.textContent = sum;
}

function calculateMinus () {
    let inputFieldOne = document.getElementById("field-one");
    let inputFieldTwo = document.getElementById("field-two");
    let output = document.getElementById("answer");
    let minus = Number(inputFieldOne.value) - Number(inputFieldTwo.value);
    output.textContent = minus;
}

function calculateDivision () {
    let inputFieldOne = document.getElementById("field-one");
    let inputFieldTwo = document.getElementById("field-two");
    let output = document.getElementById("answer");
    let divide = Number(inputFieldOne.value) / Number(inputFieldTwo.value);
    output.textContent = divide;
}

function calculateMultiplication () {
    let inputFieldOne = document.getElementById("field-one");
    let inputFieldTwo = document.getElementById("field-two");
    let output = document.getElementById("answer");
    let multiply = Number(inputFieldOne.value) * Number(inputFieldTwo.value);
    output.textContent = multiply;
}