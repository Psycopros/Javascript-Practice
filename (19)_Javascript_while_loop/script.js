let login = false;

let username;
let password;

while(!login){
    username = window.prompt("Enter Your Username!");
    password = window.prompt("Enter Your Password");

    if (username === "admin" || password == "123") {
        console.log("Welcome Admin");
        login = true;
    } else{
        console.log("Username or password is wrong! please try again");
    }
}