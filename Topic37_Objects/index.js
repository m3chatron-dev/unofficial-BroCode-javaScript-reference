// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value, 
//                    function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hi! I am Spongebob!"), // vid doesn't use arrow function but it's good practice to do
    eat: () => console.log("I am eating a Krabby Patty")
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken, and pizza")
}

person1.sayHello();
person1.eat();
console.log("");
person2.sayHello();
person2.eat();