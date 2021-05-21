"use strict";
//We are going to calculate from Celsius to Fahrenheit temp
window.onload = function () {
    //Connect Calculate Fahrenheit temp button to click event handler
    const calcFahBtn = document.getElementById("calcFahBtn");
    calcFahBtn.onclick = calcFahBtnClicked;
}

function calcFahBtnClicked() {
    //Get our input from field
    const tempCelField = document.getElementById("tempCel");
    let tempCel = Number(tempCelField.value);
    //Convert tempCel to Fdegrees using formula to change from tempFah to Cdegrees   
    let conversionCF = (tempCel * (9 / 5)) + 32;
    //Generate our output 
    //tied to our conversionCF
    const FdegreesField = document.getElementById("Fdegrees");
    FdegreesField.value = conversionCF

}