// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} or [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

fetch("people.json")
    .then(response => response.json()) // response.json() also returns a Promise
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));