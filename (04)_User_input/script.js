//using windows promt
// let username;

// username = window.prompt("what is your username");

// console.log(username);



// using user html input 
let username;

document.getElementById("Bsubmit").onclick = function(){
    username = document.getElementById("names").value;

    document.getElementById("title").textContent = `Welcome ${username}`;
}