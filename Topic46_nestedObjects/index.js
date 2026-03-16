// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Adress{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Water");

const person2 = new Person("Patrick", 37, "128 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Water");

const person3 = new Person("Squidward", 45, "126 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Water");

console.log(person3.address.country);