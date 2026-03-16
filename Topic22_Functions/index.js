// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){

    return number % 2 == 0; // vid uses ternary operator but this is good enough
}
function isValidEmail(email){

    return email.includes("@"); // same thing for this line as the comment in isEven()
}

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(12));
console.log(isValidEmail("penguin@fake.com")); // true
console.log(isValidEmail("ElonMusk.com")); // false (do NOT get in this website it will prob give a virus)
console.log(isValidEmail("Zuckerborg@Meta.com")); // true

/* yo if you see this please 
follow me on github (https://github.com/m3chatron-dev)
and also subscribe to my youtube (https://www.youtube.com/@m3chatr0n)
would appreciate it and i need the clout*/