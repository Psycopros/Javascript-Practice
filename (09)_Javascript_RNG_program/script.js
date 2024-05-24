const submit = document.getElementById("submit");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const total = document.getElementById("total");

const min = 1;
const max = 6;

let result1;
let result2;
let result3;
let totals;

submit.onclick = function(){
    result1 = Math.floor(Math.random() * max) + min;
    result2 = Math.floor(Math.random() * max) + min;
    result3 = Math.floor(Math.random() * max) + min;
    totals = result1 + result2 + result3;
    number1.textContent = result1;
    number2.textContent = result2;
    number3.textContent = result3;
    total.textContent = totals;
}