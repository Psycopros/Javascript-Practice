//Data type number
let N = 100;
let age = 19;
let rank = 2;

console.log(typeof N);
console.log(`the number of N is ${N}`);
console.log(`your age was ${19} years old`);
console.log(`your rank is ${2} on leaderboard`);

//Data type string
let names = "Psycopros";
let hobby = "programming";
let email = "psy@email.com";

console.log(typeof names);
console.log(`Your name is ${names}`);
console.log(`you like doing ${hobby} as hobby`);
console.log(`your email: ${email}`)

//Data type Bolean
let statuses = true;
let discount = false;
let isStudent = false;

console.log(typeof statuses);
console.log(`is psycopros online? ${statuses}`);
console.log(`did this item have discount? ${discount}`);
console.log(`did you still on school? ${isStudent}`);

// HTML manipulation
let nickname =  "Psycopros";
let experience = 4;
let job = false;

document.getElementById("text1").textContent = `Name: ${nickname}`;
document.getElementById("text2").textContent = `experience: ${experience} years`;
document.getElementById("text3").textContent = `job status: ${job}`;