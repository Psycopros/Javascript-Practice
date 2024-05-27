let day = 3;
let today;

switch(day){
    case 1 : today = "Monday";
        break;
    case 2 : today = "Tuesday";
        break;
    case 3 : today = "Wednesday";
        break;
    case 4 : today = "Thursday";
        break;
    case 5 : today = "Friday";
        break;
    case 6 : today = "Saturday";
        break;
    case 7 : today = "Sunday";
        break;
    default : today = "Not a day"
}

let score = 98;
let grade;

switch(true){
    case score >= 90 : grade = "A";
        break;
    case score >= 80 : grade = "B";
        break;
    case score >= 70 : grade = "C";
        break;
    case score >= 60 : grade = "D";
        break;
    default: grade = "F";

}

console.log(`Today is ${today}`);
console.log(`Your Grade is ${grade}`);