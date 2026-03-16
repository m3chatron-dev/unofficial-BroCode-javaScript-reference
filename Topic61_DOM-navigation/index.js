// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children



const ulElements = document.querySelectorAll("ul");

// ---------- .firstElementChild ----------
// ulElements was already declared so no need to make it again

ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});


// ---------- .lastElementChild ----------
// ulElements was already declared so no need to make it again

ulElements.forEach(ulElements => {
    const lastChild = ulElements.lastElementChild;
    lastChild.style.backgroundColor = "orange";
})


// ---------- .nextElementChild ----------

const element1 = document.getElementById("vegetables");
const nextSibling = element1.nextElementSibling;
nextSibling.style.fontSize = "2em";  // vid uses different property but i want to show all examples


// ---------- .previousElementChild ----------

const element2 = document.getElementById("desserts");
const prevSibling = element2.previousElementSibling;
prevSibling.style.fontSize = "0.5em"; // again i used a different property than the vid to keep all examples


// ---------- .parentElement ----------

const element3 = document.getElementById("ice cream");
const parent = element3.parentElement;
parent.style.backgroundColor = "hsl(0, 0%, 80%)";


// ---------- .children ----------

const element4 = document.getElementById("desserts");
const children = element4.children;

// In the last topic, it was seen that HTML collections don't have a built-in forEach() method, so we typecast them into an array

children[1].style.fontFamily = "Courier New"; // again i used a different property than the vid to keep all examples