let celcius = 26;
let cookMinutes = 45; 
let online = true;

// and logical operator &&
if(celcius >0 && celcius <=30){
    console.log("Today weather is good");
} else{
    console.log("Today weather is bad");
}

// and logical operatr ||
if(cookMinutes <=50 || cookMinutes >=75){
    console.log("Failed! Your food is may undercook or overcook!");
} else{
    console.log("Sucess! your food well cooked");
}

if(!online){
    console.log("User is NOT online now");
} else{
    console.log("User is online now");
}