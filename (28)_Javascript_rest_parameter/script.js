const food1 = "Ramen";
const food2 = "Pizza";
const food3 = "Hamburger";
const food4 = "Cheese Stick";
const food5 = "Steak";

//combine
function myfoods(...foods){
    console.log(...foods);
}

//combine with return
function foodColection(...foods){
    return foods;
}

myfoods(food1, food2, food3, food4, food5);

foods = foodColection(food1, food2, food3, food4, food5, "French Fries");
console.log(foods.join(", "));

//calculate sum
function sum(...values){
    let result = 0;
    for(let value of values){
        result += value;
    }

    return result;
}

console.log(`Your total is $${sum(3, 2, 7, 12, 50, 13)}`);

//calculate AVG
function avg(...scores){
    let result = 0;
    for (let score of scores){
        result += score;
    }

    return result / scores.length;
}

console.log(`Your Average score is ${avg(90, 85, 100, 75, 80)}`);

//combine string
function fullname(...names){
    return names.join(" ");
}

let yourname = fullname("letnan", "demonic", "miss", "Rize", "Tedeza");
console.log(yourname);