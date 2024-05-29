let username = window.prompt("Please Enter your username :");

// {{- Uniptimize Way -}}
// username = username.trim(); 

// let nameCapital = username.charAt(0);
// nameCapital = nameCapital.toLocaleUpperCase();

// let nameNorm = username.slice(1);
// nameNorm = nameNorm.toLocaleLowerCase();

// username = nameCapital + nameNorm;

// {{- optimize Way -}}

username = username.trim().charAt(0).toLocaleUpperCase() 
         + username.trim().slice(1).toLocaleLowerCase()

console.log(username);


