let fullname = "Psyco pros";
let email = "Psycode@gmail.com";

// (Static use)
// let firstname = fullname.slice(0 ,6);
// let lastname = fullname.slice(6, );

let firstname = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1, );
let firstletter = fullname.slice(0, 1);
let lastletter = fullname.slice(-1);

let emailname = email.slice(0, email.indexOf("@"));
let service = email.slice(email.indexOf("@") + 1, );

console.log(firstname);
console.log(lastname);
console.log(firstletter);
console.log(lastletter);

console.log(emailname);
console.log(service);