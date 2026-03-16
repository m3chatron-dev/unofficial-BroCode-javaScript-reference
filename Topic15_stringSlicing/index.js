// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const email = "penguin@fake.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);