// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");


// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "hsl(205, 100%, 60%)";
    button.textContent += "😁";
});


// CLICK event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    })
})


// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    })
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    })
})


// ADD AN ELEMENT

const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myButtons";
document.body.appendChild(newButton); //STEP 3

buttons = document.querySelectorAll(".myButtons"); // NodeList does not update automatically, so you must manually update it

console.log(buttons);


// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons"); // again, you must manually update the NodeList
        console.log(buttons);
    })
});