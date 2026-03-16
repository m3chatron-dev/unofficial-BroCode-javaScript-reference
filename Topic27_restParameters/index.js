// rest parameters = (...rest) allow a function work with a variable 
//                   number of arguments by bundling them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);

/* JUST a reminder to follow me on GitHub 
and sub to my channel ✌️ */