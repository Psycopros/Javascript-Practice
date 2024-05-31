const min = 1;
const max = 1000;

let random = Math.floor(Math.random() * (max - min + 1) + min);

let att = 0;
let guess;
let gameOn = true;

while(gameOn){
    guess = window.prompt(`Guess number between ${min} - ${max}`);

    if(isNaN(guess)){
        window.alert("Please enter A number");
    } 
    else if(guess == "") {
        window.alert("Please enter something")
    }
    else if(guess == null) {
        console.log("Game ended by user");
        console.log(`correct answer = ${random}`);
        gameOn = false;
    }
    else if(guess <= min || guess > max) {
        window.alert(`Please Enter valid range between ${min} - ${max}`)
    }
    else{
        
        if(guess < random){
            window.alert("Wrong answer! your number is too Low. Try again!")
            att ++;
        }
        else if(guess > random){
            window.alert("Wrong answer! your number is too High. Try again!")
            att ++;
        }
        else{
            window.alert(`Correct! the right number is ${random}`)
            console.log("You win. Game ended");
            console.log(`correct answer = ${random}`);
            console.log(`Your answer = ${guess}`);
            console.log(`Total Attempt = ${att}`);
            gameOn = false;
        }

    }

}
