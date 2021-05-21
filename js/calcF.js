"use strict";

window.onload = function () {
    const calcCelBtn = document.getElementById("calcCelBtn");
    calcCelBtn.onclick = calcCelBtnClicked;
}

function calcCelBtnClicked() {
    const tempFahField = document.getElementById("tempFah");
    let tempFah = Number(tempFahField.value);
    
    let conversionFC= (tempFah - 32) * 5 / 9;

    const CdegreesField= document.getElementById("Cdegrees");
        CdegreesField.value= conversionFC
  
}
