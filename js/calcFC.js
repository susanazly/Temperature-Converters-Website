"use strict";
//We are going to calculate from Fahrenheit to Celsisu temp

//setup window.onload 
window.onload = function () {
    const calcCelBtn = document.getElementById("calcCelBtn");
    calcCelBtn.onclick = calcCelBtnClicked;

    const calcFahBtn = document.getElementById("calcFahBtn");
    calcFahBtn.onclick = calcFahBtnClicked;
}

//give our calcCelBtn some function when called on
function calcCelBtnClicked() {

    //this is our input identification process
    const tempFahField = document.getElementById("tempFah");
    let tempFah = Number(tempFahField.value);
    //our conversion formula to change from tempFah to Cdegrees   
    let conversionFC = (tempFah - 32) * 5 / 9;
    //this is our output identification process
    //tied to our conversionFC
    const CdegreesField = document.getElementById("Cdegrees");
    CdegreesField.value = conversionFC

}
