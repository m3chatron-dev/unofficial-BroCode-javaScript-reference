// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("coconut");
// fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}