// Local scope 
function funct1(){
    let x = 2;
    console.log(x);
}

function funct2(){
    let x = 3;
    console.log(x);
}

funct1();
funct2();

// global scope
let y = 1;

function funct3(){
    console.log(y);
}

function funct4(){
    y = 5;
    console.log(y);
}

funct3();
funct5();