function student(fullname, grade){
    console.log(`Name = ${fullname} Grade = ${grade}`);
}

student("Psycopros", "94");
student("Tedeza rize", "100");
student("joe mama", "88");

function add(x, y){
    result = x + y;
    return result;
}

function sub(x, y){
    result = x - y;
    return result;
}

function mul(x, y){
    result = x * y;
    return result;
}

function div(x, y){
    result = x / y;
    return result;
}

console.log(add(4,5));
console.log(sub(4,5));
console.log(mul(4,5));
console.log(div(4,5));

function oddeven(number){
    return number % 2 === 0 ? "even" : "odd";
}

console.log(`5 is ${oddeven(5)} number`)
console.log(`12 is ${oddeven(12)} number`)
console.log(`49 is ${oddeven(49)} number`)