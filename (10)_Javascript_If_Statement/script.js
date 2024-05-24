const userAge = document.getElementById("userAge");
const submitBTN = document.getElementById("submitBTN");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");

let age;
let vip = false;

submitBTN.onclick = function(){
    age = userAge.value;
    age = Number(age);

    if(age >= 100){
        result.textContent = `You Too old acces this website!`;
    }
    else if(age >18){
        result.textContent = `Welcome to the club. enjoy your self!`;
        if (vip){
            result2.textContent = `Great! You are premium member.`;
        }
        else{
            result2.textContent = `You dont have premium. Subscribe now!`;
        }
    }
    else if(age == 0){
        result.textContent = `I dont think baby allowed use internet!`;
    }
    else if(age <= 0){
        result.textContent = `ERROR! you age cannot go below 0!`;
    }
    else if(age <= 18){
        result.textContent = `You must be atleast 18+ to acces this website!`;
    }
    else{
        result.textContent = `ERROR! Please input a number!`;
    }
}
