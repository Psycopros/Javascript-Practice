let numbers = [1, 2, 3, 4, 5, 6, 7];
let fruits = ["Apple", "mango", "watermelon", "orange", "Food"];
let meats = ["chicken", "beef", "fish", "duck"];

let foods = [...fruits, ...meats, "egg", "pizza"];

console.log(`lowest: ${Math.min(...numbers)}`);
console.log(`highest: ${Math.max(...numbers)}`);

// console.log(foods.join(", "));
console.log(foods);