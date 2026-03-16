// variable = A container that stores a value.
//            Behaves ad if it were teh value it contains.

// 1. declaration    let x;
// 2. assignment     x = 100;

/* NUMBERS
let age = 25;
let price = 10.99;
let gpa = 2.1; */

/* STRINGS
let firstName = "Tux";
let favoriteFood = "fish";
let email = "penguin123@fake.com"; */

/* BOOLEANS 
let online = false;
let forSale = true;
let isStudent = true; */

let fullname = "Tux the Penguin";
let age = 30;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;