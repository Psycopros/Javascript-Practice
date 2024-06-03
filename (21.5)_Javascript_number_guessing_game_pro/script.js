let guessInput = document.getElementById("guessInput");
const R1 = document.getElementById("R1").value;
const R2 = document.getElementById("R2").value;
const guessResult = document.getElementById("guessResult").value;
const errorInput = document.getElementById("errorInput").value;
const totalAtt = document.getElementById("totalAtt").value;

let min = 0;
let max = 99;
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

document.getElementById("submit").onclick = function(){

    guessInput = guessInput.value;

    console.log(guessInput + " l ");
    if(guessInput === NaN){
        console.log(guessInput + " won ");
    }  
}

