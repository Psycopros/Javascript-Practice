let fruits = ["apple", "banana", "coconut", "durian"];
let animals = ["alpaca", "bird", "cheetah", "dragon"];

animals.unshift("zebra"); //add new element at start
fruits.push("mango"); //add new item at the end

// remove item from start or end
// animals.shift();
// fruits.pop();

let totalFruits = fruits.length; //count total item

fruits.sort();//Sort Alphabet
animals.sort().reverse();//Reverse Sort Alphabet

console.log(fruits); //call entire stuff
console.log(fruits[2]); //call spesific stuff
console.log(totalFruits);

//normal way to output all item
for(let i = 0; i < totalFruits; i++ ){
    console.log(fruits[i])
}

//fast way to output all item
for(let animal of animals){
    console.log(animal);
}