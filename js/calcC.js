"use strict";

window.onload = function () {
    const calcFahBtnBtn = document.getElementById("calcFahBtn");
    calcFahBtn.onclick = calcFahBtnClicked;
}

function calcFahBtnClicked() {
    const tempCelField = document.getElementById("tempCel");
    let tempCel = Number(tempCelField.value);
    
    let conversionCF= (tempCel * (9/5)) + 32;

    const FdegreesField= document.getElementById("Fdegrees");
        FdegreesField.value= conversionCF
  
}