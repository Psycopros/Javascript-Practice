const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

let count = 0;

plus.onclick = function(){
    count++;
    counter.textContent = count;
}

minus.onclick = function(){
    count--;
    counter.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}