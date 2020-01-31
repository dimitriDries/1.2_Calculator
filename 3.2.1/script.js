var plusButton = document.getElementById("btn-plus");
var minusButton = document.getElementById("btn-minus");
var multiplyButton = document.getElementById("btn-multiply");
var divideButton = document.getElementById("btn-divide");

var input1 = document.getElementById("field-input1").value;
var input2 = document.getElementById("field-input2").value;
var output = document.getElementById("answer");

function calcSum (a, b) {
    return a + b;
    //argumenten "a" en "b" zijn niet gekend (generiek)
}


plusButton.addEventListener("click", function(){
    debugger;
    let result = calcSum(input1, input2);
    console.log(result);
    //in deze functie geven we de argumenten "a" en "b" een waarde (input1 en input2) en steken dit in een variabele dat we als return gebruiken

});

// || = "or" 
// && = "and"

let age1 = 10, age2 = 15, age3 = 40;
let newAge = age1 || age2 || age3;
//JS gaat lijstje 1 voor 1 af en neemt de eerste match

// for loop = ZOLANG de conditie waar is
// While loop = TOT de conditie waar is
