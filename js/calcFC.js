"use strict";
//We are going to calculate from Fahrenheit to Celsius temp


window.onload = function () {
    //Connect Calculate Celsius temp button to click event handler
    const calcCelBtn = document.getElementById("calcCelBtn");
    calcCelBtn.onclick = calcCelBtnClicked;

}

//give our calcCelBtn some function when called on
function calcCelBtnClicked() {

    //Get our input from field
    const tempFahField = document.getElementById("tempFah");
    let tempFah = Number(tempFahField.value);
    //Convert tempFah to Cdegrees using formula to change from tempFah to Cdegrees   
    let conversionFC = (tempFah - 32) * 5 / 9;
    //Generate our output 
    //tied to our conversionFC
    const CdegreesField = document.getElementById("Cdegrees");
    CdegreesField.value = conversionFC

}
