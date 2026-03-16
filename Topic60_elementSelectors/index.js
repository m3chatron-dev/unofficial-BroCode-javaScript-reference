// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Mode)

// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()        // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()     // NODELIST



// 1. [ document.getElementById() ]
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow"; // JS uses camelCase naming convention, while CSS uses a hyphenated naming convention
myHeading.style.textAlign = "center";

console.log(myHeading); // if element doesn't exist; return null



// 2. [ document.getElementsClassName() ]
const fruits = document.getElementsByClassName("fruits");

// fruits.forEach(); | HTML Collections do not have a built-in forEach() method

// ALTERNATIVE: Typecast it into an array
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});



// 3. [ document.getElementsByTagName ]
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// This is also an HTML collection, so same alternative as '2.'
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "orange";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});



// 4. [ document.querySelector() ]
const element = document.querySelector(".fruits"); // first matching element to any html collection (you must include the preceding character that corresponds to its type)

element.style.fontSize = "1.5em" // vid uses different property but i want to show all examples

console.log(element); // if element doesn't exist; return null



// 5. [ document.querySelectorAll() ]
const foods = document.querySelectorAll("li");

// NodeLists have a built-in forEach() method
foods.forEach(food => {
    food.style.fontFamily = "Courier New"; // again i used a different property than the vid to keep all examples
});

console.log(foods); // returns nodelist