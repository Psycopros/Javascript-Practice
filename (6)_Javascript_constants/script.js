const PI = Math.PI;
let radius;
let circumstance;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumstance = 2 * PI * radius;
    document.getElementById("result").textContent = `Result = ${circumstance} cm`
}