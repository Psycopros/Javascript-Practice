let userName = "Psycopros";
let userName2 = "  Psyco pros  ";
let money = "14.395.500";

console.log("method charAt = " + userName.charAt(0));
console.log("method indexOf = " + userName.indexOf("y"));
console.log("method LastIndexOf = " + userName.lastIndexOf("o"));
console.log("method lenght = " + userName.length);
console.log("method trim = " + userName2.trim());
console.log("method upercase = " + userName.toLocaleUpperCase());
console.log("method lowercase = " + userName.toLocaleLowerCase());
console.log("method Repeat = " + userName.repeat(3));
console.log("method starWith = " + userName.startsWith(" "));
console.log("method endWith = " + userName2.charAt(" "));
console.log("method include = " + userName2.includes(" "));

console.log("method Replace = " + money.replaceAll("." , ""));
console.log("method padStart = " + money.padStart(15, "0"));
console.log("method padEnd = " + money.padEnd(15, "0"));
