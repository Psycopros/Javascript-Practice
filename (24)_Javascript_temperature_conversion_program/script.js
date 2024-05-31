const tempInput = document.getElementById("tempInput");
const toFar = document.getElementById("toFar");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFar.checked){
        temp = Number(tempInput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)} F`
    }
    else if(toCel.checked){
        temp = Number(tempInput.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(1)} C`
    }

    else{
        result.textContent = `ERROR! Please select Unit`
    }
}