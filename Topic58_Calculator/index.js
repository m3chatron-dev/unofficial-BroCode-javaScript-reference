// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    /* DISCLAIMER: eval() is super risky to use, in 
    most scenarios you wouldn't use it, but this is 
    a simple calculator program that doesn't store 
    any data or send information to another server. 
    It would be better to not use this when dealing 
    with something unless you for sure know it's safe. 
    
    The display is read-only anyways, and gives a limited 
    amount of characters to type. */
}