let age = 12;
yourage = age >= 18 ? "Youre Adult" : "Youre Minor";

let student = true;
yourstatus = student ? "youre student" : "Youre not student";

let purchase = 283;
discount = purchase >=100 ? 10 : 0;


//Output
console.log(yourage);
console.log(yourstatus);
console.log(`Your total is: $${purchase - purchase * (discount / 100)}`)