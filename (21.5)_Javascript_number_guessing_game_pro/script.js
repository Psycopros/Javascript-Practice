let guessInput = document.getElementById("guessInput");
const R1 = document.getElementById("R1");
const R2 = document.getElementById("R2");
const guessResult = document.getElementById("guessResult");
const errorInput = document.getElementById("errorInput");
const totalAtt = document.getElementById("totalAtt");

let min = 0;
let max = 99;
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

function submit(){

    guessInput.value = Number(guessInput);
    console.log(guessInput + typeof(guessInput));

    if(guessInput == NaN){
        console.log(guessInput + " won ");
    }
}
